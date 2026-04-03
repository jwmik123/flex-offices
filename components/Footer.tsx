const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#ruimtes", label: "Ruimtes" },
  { href: "#galerij", label: "Galerij" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">

          {/* Logo */}
          <a href="#home" className="text-xl font-bold tracking-tight shrink-0">
            Flex<span className="text-blue-400"> Offices</span>
          </a>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-6">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </nav>

        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Flex Offices. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}
