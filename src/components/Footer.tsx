import { Phone, Mail, MapPin, Facebook, Instagram,  Linkedin } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  'Website Development',
  'Google Ads & Meta Ads',
  'SEO Optimization',
  'Social Media Management',
  'AI Video Marketing',
  'Logo Designing',
];

const socials = [
  { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61582264920677', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/synvexa.media', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#0d1730' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="/DP-01.jpg.jpeg"
              alt="Synvexa Media"
              className="h-12 w-auto object-contain bg-white rounded-xl p-2 mb-5"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Synvexa Media is a full-service digital marketing agency helping brands grow their online presence and generate consistent revenue.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:border-[#e01c6b]/50 hover:text-[#e01c6b] transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[#e01c6b] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-gray-400 text-sm hover:text-[#e01c6b] transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-[#e01c6b] mt-0.5 flex-shrink-0" />
                <a href="tel:9567280652" className="text-gray-400 text-sm hover:text-[#e01c6b] transition-colors">
                  +91 9567280652
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-[#e01c6b] mt-0.5 flex-shrink-0" />
                <a href="mailto:synvexamedia@gmail.com" className="text-gray-400 text-sm hover:text-[#e01c6b] transition-colors">
                  synvexamedia@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[#e01c6b] mt-0.5 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  <div>Kollam, Kerala</div>
                  <div>Bangalore, KA</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Synvexa Media. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Designed & developed with Synvexa Media
          </p>
        </div>
      </div>
    </footer>
  );
}
