"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
// @ts-ignore - no types available for Flip
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);

interface GalleryLightboxProps {
  images: string[];
  altPrefix?: string;
}

export default function GalleryLightbox({
  images,
  altPrefix = "Kantoor foto",
}: GalleryLightboxProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = {
      wrapper: container.querySelector<HTMLElement>('[data-lightbox="wrapper"]')!,
      triggers: container.querySelectorAll<HTMLButtonElement>('[data-lightbox="trigger"]'),
      triggerParents: container.querySelectorAll<HTMLElement>('[data-lightbox="trigger-parent"]'),
      items: container.querySelectorAll<HTMLElement>('[data-lightbox="item"]'),
      nav: container.querySelectorAll<HTMLElement>('[data-lightbox="nav"]'),
      counter: {
        current: container.querySelector<HTMLElement>('[data-lightbox="counter-current"]'),
        total: container.querySelector<HTMLElement>('[data-lightbox="counter-total"]'),
      },
      buttons: {
        prev: container.querySelector<HTMLButtonElement>('[data-lightbox="prev"]'),
        next: container.querySelector<HTMLButtonElement>('[data-lightbox="next"]'),
        close: container.querySelector<HTMLButtonElement>('[data-lightbox="close"]'),
      },
    };

    const mainTimeline = gsap.timeline();

    // Track which item is open via closure (avoids data-attribute mutation issues)
    let openIndex = -1;
    let openImg: HTMLImageElement | null = null;
    let openButton: HTMLButtonElement | null = null;

    if (elements.counter.total) {
      elements.counter.total.textContent = String(elements.triggers.length);
    }

    function updateActiveItem(index: number) {
      elements.items.forEach((item) => item.classList.remove("is-active"));
      elements.items[index].classList.add("is-active");
      if (elements.counter.current) {
        elements.counter.current.textContent = String(index + 1);
      }
    }

    function closeLightbox() {
      mainTimeline.clear();
      gsap.killTweensOf([
        elements.wrapper,
        elements.nav,
        elements.triggerParents,
        elements.items,
        openImg,
      ]);

      // Move img back to its original button before animating
      if (openImg && openButton) {
        gsap.set(openImg, { clearProps: "all" });
        openButton.appendChild(openImg);
      }

      // Restore the fixed height on the grid item
      if (openIndex >= 0 && elements.triggerParents[openIndex]) {
        elements.triggerParents[openIndex].style.removeProperty("height");
      }

      // Fade out whichever slide is currently visible
      const activeLightboxSlide = container.querySelector<HTMLElement>(
        '[data-lightbox="item"].is-active'
      );

      const tl = gsap.timeline({
        defaults: { ease: "power2.inOut" },
        onComplete: () => {
          elements.wrapper.classList.remove("is-active");

          elements.items.forEach((item) => {
            item.classList.remove("is-active");
            const lightboxImage = item.querySelector("img");
            if (lightboxImage) lightboxImage.style.display = "";
          });

          gsap.set([elements.items, elements.triggerParents], { clearProps: "all" });

          openIndex = -1;
          openImg = null;
          openButton = null;
        },
      });

      tl.to(elements.triggerParents, {
        autoAlpha: 1,
        duration: 0.5,
        stagger: 0.03,
        overwrite: true,
      })
        .to(elements.nav, { autoAlpha: 0, y: "1rem", duration: 0.4, stagger: 0 }, "<")
        .to(elements.wrapper, { backgroundColor: "rgba(0,0,0,0)", duration: 0.4 }, "<")
        .to(activeLightboxSlide, { autoAlpha: 0, duration: 0.4 }, "<");

      mainTimeline.add(tl);
    }

    function handleOutsideClick(event: Event) {
      if (!elements.wrapper.classList.contains("is-active")) return;
      if ((event as MouseEvent).detail === 0) return;
      const clickedElement = event.target as HTMLElement;
      const isOutside = !clickedElement.closest(
        '[data-lightbox="item"].is-active img, [data-lightbox="nav"], [data-lightbox="close"], [data-lightbox="trigger"]'
      );
      if (isOutside) closeLightbox();
    }

    // AbortController lets us remove ALL listeners in cleanup with one call,
    // preventing React Strict Mode's double-invocation from attaching duplicates.
    const controller = new AbortController();
    const { signal } = controller;

    container.addEventListener("click", handleOutsideClick, { signal });

    elements.triggers.forEach((trigger, index) => {
      trigger.addEventListener(
        "click",
        () => {
          // Guard: img must still be in the button (it moves to the lightbox on open)
          const img = trigger.querySelector("img") as HTMLImageElement | null;
          if (!img) return;

          mainTimeline.clear();
          gsap.killTweensOf([elements.wrapper, elements.nav, elements.triggerParents]);

          const state = Flip.getState(img);

          // Store open state in closure vars
          openIndex = index;
          openImg = img;
          openButton = trigger;

          // Fix the grid item height so it doesn't collapse when img is moved
          const triggerRect = trigger.getBoundingClientRect();
          trigger.parentElement!.style.height = `${triggerRect.height}px`;

          updateActiveItem(index);

          const tl = gsap.timeline();
          elements.wrapper.classList.add("is-active");

          const targetItem = elements.items[index];

          // Hide the static duplicate img in the lightbox item
          const lightboxImage = targetItem.querySelector("img");
          if (lightboxImage) lightboxImage.style.display = "none";

          // Fade out all grid items (clicked img will be moved out of its parent)
          elements.triggerParents.forEach((triggerParent) => {
            gsap.to(triggerParent, {
              autoAlpha: 0,
              duration: 0.4,
              stagger: 0.02,
              overwrite: true,
            });
          });

          // Move img into lightbox item and FLIP from original position
          if (!targetItem.contains(img)) {
            targetItem.appendChild(img);
            tl.add(
              Flip.from(state, {
                targets: img,
                absolute: true,
                duration: 0.6,
                ease: "power2.inOut",
              }),
              0
            );
          }

          // Animate in background and nav
          tl.to(
            elements.wrapper,
            { backgroundColor: "rgba(0,0,0,0.75)", duration: 0.6 },
            0
          ).fromTo(
            elements.nav,
            { autoAlpha: 0, y: "1rem" },
            {
              autoAlpha: 1,
              y: "0rem",
              duration: 0.6,
              stagger: { each: 0.05, from: "center" },
            },
            0.2
          );

          mainTimeline.add(tl);
        },
        { signal }
      );
    });

    elements.buttons.next?.addEventListener(
      "click",
      () => {
        const currentIndex = Array.from(elements.items).findIndex((item) =>
          item.classList.contains("is-active")
        );
        updateActiveItem((currentIndex + 1) % elements.items.length);
      },
      { signal }
    );

    elements.buttons.prev?.addEventListener(
      "click",
      () => {
        const currentIndex = Array.from(elements.items).findIndex((item) =>
          item.classList.contains("is-active")
        );
        updateActiveItem((currentIndex - 1 + elements.items.length) % elements.items.length);
      },
      { signal }
    );

    elements.buttons.close?.addEventListener("click", closeLightbox, { signal });

    function handleKeydown(event: KeyboardEvent) {
      if (!elements.wrapper.classList.contains("is-active")) return;
      switch (event.key) {
        case "Escape":
          closeLightbox();
          break;
        case "ArrowRight":
          elements.buttons.next?.click();
          break;
        case "ArrowLeft":
          elements.buttons.prev?.click();
          break;
      }
    }

    document.addEventListener("keydown", handleKeydown, { signal });

    return () => {
      controller.abort(); // removes every listener attached with { signal }
      mainTimeline.kill();
    };
  }, []);

  return (
    <div data-gallery="" className="gallery-group" ref={containerRef}>
      {/* Grid */}
      <div role="list" className="gallery-grid">
        {images.map((src, i) => (
          <div
            key={i}
            data-lightbox="trigger-parent"
            role="listitem"
            className="gallery-grid__item"
          >
            <button data-lightbox="trigger" className="gallery-item__button">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                loading="lazy"
                alt={`${altPrefix} ${i + 1}`}
                className="gallery-item__img"
              />
            </button>
          </div>
        ))}
      </div>

      {/* Lightbox overlay */}
      <div
        aria-modal="true"
        data-lightbox="wrapper"
        role="dialog"
        className="lightbox-wrap"
      >
        <div className="lightbox-img__wrap">
          <div className="lightbox-img__list">
            {images.map((src, i) => (
              <div key={i} data-lightbox="item" className="lightbox-img__item">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  loading="lazy"
                  alt={`${altPrefix} ${i + 1}`}
                  className="lightbox-img"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="lightbox-nav">
          <div data-lightbox="nav" className="lightbox-nav__col start">
            <p className="lightbox-nav__text">
              <span data-lightbox="counter-current">1</span>
              {" / "}
              <span data-lightbox="counter-total">{images.length}</span>
            </p>
          </div>
          <div data-lightbox="nav" className="lightbox-nav__col center">
            <button data-lightbox="prev" className="lightbox-nav__button">
              <div className="lightbox-nav__dot" />
              <span className="lightbox-nav__text">Vorige</span>
            </button>
            <button data-lightbox="next" className="lightbox-nav__button">
              <span className="lightbox-nav__text">Volgende</span>
              <div className="lightbox-nav__dot" />
            </button>
          </div>
          <div data-lightbox="nav" className="lightbox-nav__col end">
            <button data-lightbox="close" className="lightbox-nav__button">
              <span className="lightbox-nav__text">Sluiten</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
