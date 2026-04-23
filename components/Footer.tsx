import Image from "next/image";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#ruimtes", label: "Ruimtes" },
  { href: "#galerij", label: "Galerij" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          {/* Logo + nav */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-6">
            <a href="#home" className="flex items-center gap-3">
              <Image src="/flexlogo.png" alt="Flex Offices logo" width={48} height={48} />
              <span className="flex flex-col" style={{ gap: "1px" }}>
                <span className="text-base font-bold text-white tracking-wide leading-none">Flex</span>
                <span className="text-base font-bold text-blue-400 tracking-wide leading-none">Offices</span>
              </span>
            </a>
            {/* <nav className="flex flex-col gap-3">
              {NAV_LINKS.map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="text-sm text-slate-400 hover:text-white transition-colors duration-200 w-fit"
                >
                  {label}
                </a>
              ))}
            </nav> */}
          </div>

          {/* E-mail */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-slate-500">E-mail</span>
            <a
              href="mailto:info@hoffstad.nl"
              className="text-sm text-slate-300 hover:text-white transition-colors duration-200"
            >
              info@hoffstad.nl
            </a>
          </div>

          {/* Telefoon */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-slate-500">Telefoon</span>
            <a
              href="tel:+31229213541"
              className="text-sm text-slate-300 hover:text-white transition-colors duration-200"
            >
              0229 — 21 35 41
            </a>
          </div>

          {/* Kantoor */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-slate-500">Kantoor</span>
            <address className="not-italic text-sm text-slate-300 leading-relaxed">
              Anodeweg 9A<br />
              1627 LE Hoorn
            </address>
          </div>

        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-[90rem] mx-auto px-6 lg:px-8 py-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Flex Offices. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}
