import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, Linkedin, ArrowUp } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`pt-16 pb-8 transition-colors duration-300 border-t ${
        darkMode ? 'bg-[#111111] border-white/5 text-white' : 'bg-white border-black/5 text-[#111111]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#home" className="flex items-center space-x-1 group">
              <span className="font-serif text-2xl font-bold tracking-[0.2em] text-white text-gold">
                VASUKI
              </span>
              <span className="w-1.5 h-1.5 bg-white bg-gold rounded-full transform translate-y-1.5"></span>
            </a>
            <p className="font-sans text-xs sm:text-sm opacity-70 leading-relaxed font-light">
              Vasuki is a premier modern clothing brand specializing in fashionable, premium-quality apparel for men, women, and young adults. We emphasize quality craftsmanship, contemporary designs, and direct accessibility.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Instagram size={13} />, href: 'https://instagram.com' },
                { icon: <Facebook size={13} />, href: 'https://facebook.com' },
                { icon: <Youtube size={13} />, href: 'https://youtube.com' },
                { icon: <Linkedin size={13} />, href: 'https://linkedin.com' },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-2.5 border transition-all hover:text-gold hover:border-gold ${
                    darkMode ? 'border-white/10 text-white/50' : 'border-black/5 text-black/50'
                  }`}
                  aria-label="Social Link"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-sm font-bold uppercase tracking-widest text-gold text-[11px]">
              Quick Explorer
            </h4>
            <ul className="space-y-2.5 text-xs font-light">
              {[
                { label: 'Showroom Home', href: '#home' },
                { label: 'Vasuki Story', href: '#about' },
                { label: 'Our Services', href: '#services' },
                { label: 'Visual Portfolio', href: '#portfolio' },
                { label: 'Support FAQ', href: '#faq' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="opacity-75 hover:opacity-100 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Collections */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-sm font-bold uppercase tracking-widest text-gold text-[11px]">
              Signature Collections
            </h4>
            <ul className="space-y-2.5 text-xs font-light">
              {[
                { label: "Bespoke Men's Suits", href: '#collections' },
                { label: "Women's Solstice Dresses", href: '#collections' },
                { label: 'Summer wraps & office wear', href: '#collections' },
                { label: 'Limited festival catalog', href: '#collections' },
                { label: 'Custom embroidered designs', href: '#collections' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="opacity-75 hover:opacity-100 hover:text-gold transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Customer Support Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-sm font-bold uppercase tracking-widest text-gold text-[11px]">
              Atelier Support
            </h4>
            <ul className="space-y-3 text-xs font-light">
              <li className="flex items-start space-x-2">
                <MapPin size={14} className="text-gold mt-0.5" />
                <span className="opacity-75">Connaught Place, New Delhi, India</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={14} className="text-gold" />
                <span className="opacity-75 font-semibold">+91 91234 56789</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={14} className="text-gold" />
                <span className="opacity-75 hover:text-gold transition-colors block leading-tight">
                  <a href="mailto:info@vasuki.com">info@vasuki.com</a>
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="h-[1px] bg-gold/10 w-full mb-8" />

        {/* Bottom copyright row */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4 text-[11px] opacity-65 font-light">
          <div>
            <p>&copy; {new Date().getFullYear()} Vasuki Atelier Pvt Ltd. All rights reserved.</p>
            <p className="mt-1 opacity-50">Designed in absolute compliance with luxury fashion standards.</p>
          </div>
          
          <button
            onClick={handleScrollToTop}
            className="p-2.5 border border-gold/20 hover:border-gold hover:bg-gold/10 text-gold hover:scale-105 transition-all flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold"
            aria-label="Scroll to top"
          >
            <span>Back to Summit</span>
            <ArrowUp size={12} />
          </button>
        </div>

      </div>
    </footer>
  );
}
