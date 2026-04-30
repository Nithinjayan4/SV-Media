import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  scrolled: boolean;
}

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Header({ scrolled }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-white/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <img
              src="/DP-01.jpg.jpeg"
              alt="Synvexa Media"
              className="h-10 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-sm font-medium text-gray-700 hover:text-[#1e2d6b] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="btn-brand px-5 py-2.5 rounded-full text-sm font-semibold"
            >
              Get Free Consultation
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 shadow-lg">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-[#1e2d6b] transition-colors py-1"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-brand px-5 py-2.5 rounded-full text-sm font-semibold text-center mt-2"
              onClick={() => setMobileOpen(false)}
            >
              Get Free Consultation
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
