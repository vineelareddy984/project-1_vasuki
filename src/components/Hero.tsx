import React from 'react';
import { ASSETS } from '../data';
import { ChevronRight, ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  darkMode: boolean;
}

export default function Hero({ darkMode }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.hero}
          alt="Vasuki High-Fashion Editorial Cover"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.4]"
          referrerPolicy="no-referrer"
        />
        {/* Subtle Gradient Overlays for Luxury Feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-[#111111]/70 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/80 via-transparent to-[#111111]/80 z-10" />
      </div>

      {/* Decorative Gold particles or flares */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[120px] pointer-events-none animate-pulse duration-[8000ms] z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[140px] pointer-events-none animate-pulse duration-[12000ms] z-0" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-12">
        {/* Tiny Premium Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center space-x-2 bg-gold/10 backdrop-blur-md border border-gold/30 px-4 py-1.5 mb-6 text-xs uppercase tracking-[0.3em] font-medium text-gold"
        >
          <span className="w-1.5 h-1.5 bg-gold rounded-full animate-ping"></span>
          <span>HAUTE COUTURE 2026</span>
        </motion.div>

        {/* Brand Tagline in Playfair */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: 0.2 }}
          className="font-serif italic text-gold text-base sm:text-lg mb-3 tracking-widest"
        >
          &ldquo;Where Style Meets Elegance&rdquo;
        </motion.p>

        {/* Large Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.3, ease: 'easeOut' }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight mb-6 leading-[1.1] max-w-5xl mx-auto"
        >
          Redefining Fashion with <span className="text-gold">Timeless</span> Elegance
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.5 }}
          className="font-sans text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed font-light tracking-wide"
        >
          Discover premium clothing collections crafted for confidence, comfort, and style. Designed with luxury craftsmanship for modern individuals.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <a
            href="#collections"
            className="w-full sm:w-auto px-8 py-4 bg-gold hover:bg-gold-dark text-[#111111] hover:text-white font-sans text-xs uppercase font-bold tracking-widest border border-gold transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>Explore Collection</span>
            <ChevronRight size={14} />
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/5 text-white font-sans text-xs uppercase font-bold tracking-widest border border-white/40 hover:border-gold transition-all duration-300 flex items-center justify-center"
          >
            Contact Us
          </a>
        </motion.div>
      </div>

      {/* Decorative vertical list of collections on left/right for desk top */}
      <div className="absolute left-8 bottom-12 hidden xl:flex flex-col space-y-4 z-25 text-white/50 text-[10px] tracking-[0.25em] uppercase font-sans font-semibold">
        <span className="hover:text-gold cursor-pointer transition-colors">01. MEN'S WEAR</span>
        <span className="hover:text-gold cursor-pointer transition-colors">02. WOMEN'S COSMOS</span>
        <span className="hover:text-gold cursor-pointer transition-colors">03. FESTIVAL LINE</span>
      </div>

      <div className="absolute right-8 bottom-12 hidden xl:flex items-center space-x-4 z-25 text-white/50 text-[10px] tracking-[0.25em] uppercase font-sans font-semibold origin-right rotate-90 translate-x-[40%]">
        <span>ESTABLISHED IN INDIA</span>
        <span className="w-8 h-[1px] bg-white/40"></span>
      </div>

      {/* Scroll Down Hint Icon */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer">
        <a href="#about" aria-label="Scroll to About Section">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className={`p-2.5 rounded-full border border-white/20 hover:border-gold text-white/60 hover:text-gold bg-[#111111]/30 backdrop-blur-md`}
          >
            <ArrowDown size={14} />
          </motion.div>
        </a>
      </div>
    </section>
  );
}
