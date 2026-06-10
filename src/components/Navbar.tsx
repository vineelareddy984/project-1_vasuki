import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Story', href: '#about' },
    { name: 'Collections', href: '#collections' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? 'bg-[#111111]/85 backdrop-blur-md border-b border-white/5 py-4 shadow-lg'
            : 'bg-[#FFFFFF]/85 backdrop-blur-md border-b border-black/5 py-4 shadow-md'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center space-x-1 group"
            id="nav-logo-link"
          >
            <span
              className={`font-serif text-2xl sm:text-3xl font-bold tracking-[0.18em] transition-colors ${
                darkMode ? 'text-white' : 'text-[#111111]'
              } group-hover:text-gold`}
            >
              VASUKI
            </span>
            <span className="w-1.5 h-1.5 bg-gold rounded-full transform translate-y-2 group-hover:scale-125 transition-transform"></span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" id="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-sans text-[13px] uppercase font-medium tracking-widest transition-all duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gold after:transform after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300 ${
                  darkMode ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center space-x-5" id="nav-actions">
            {/* Dark Mode Switch */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full border transition-all duration-200 ${
                darkMode
                  ? 'border-white/10 hover:bg-white/5 text-gold'
                  : 'border-black/10 hover:bg-black/5 text-[#111111]'
              }`}
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle Dark Mode"
              id="theme-toggle-desktop"
            >
              {darkMode ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            {/* Shop Now Action */}
            <a
              href="#collections"
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-none font-sans text-xs uppercase font-semibold tracking-widest border transition-all duration-300 hover:scale-[1.02] ${
                darkMode
                  ? 'border-gold bg-gold text-[#111111] hover:bg-transparent hover:text-gold'
                  : 'border-[#111111] bg-[#111111] text-white hover:bg-transparent hover:text-[#111111]'
              }`}
            >
              <ShoppingBag size={14} />
              <span>Shop Now</span>
            </a>
          </div>

          {/* Mobile Right Icons (Hamburger & Toggle) */}
          <div className="flex lg:hidden items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full border ${
                darkMode ? 'border-white/10 text-gold' : 'border-black/5 text-black'
              }`}
              aria-label="Toggle Dark Mode"
              id="theme-toggle-mobile"
            >
              {darkMode ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors focus:outline-none ${
                darkMode ? 'text-white hover:text-gold' : 'text-black hover:text-gold'
              }`}
              aria-label="Open Menu"
              id="hamburger-menu-btn"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`lg:hidden border-t w-full overflow-hidden ${
              darkMode
                ? 'bg-[#111111] border-white/5 text-white'
                : 'bg-white border-black/5 text-black'
            }`}
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2.5 font-sans text-xs uppercase tracking-widest font-medium border-b border-transparent transition-all ${
                    darkMode
                      ? 'hover:text-gold hover:border-white/5'
                      : 'hover:text-gold hover:border-black/5'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col space-y-3 px-3">
                <a
                  href="#collections"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center space-x-2 py-3 bg-gold text-[#111111] uppercase font-semibold text-xs tracking-widest transition-transform hover:scale-95 text-center"
                >
                  <ShoppingBag size={14} />
                  <span>Explore Collections</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
