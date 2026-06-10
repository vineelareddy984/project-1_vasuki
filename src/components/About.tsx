import React from 'react';
import { ASSETS } from '../data';
import { Sparkles, Compass, Target, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutProps {
  darkMode: boolean;
}

export default function About({ darkMode }: AboutProps) {
  return (
    <section
      id="about"
      className={`py-24 transition-colors duration-300 relative overflow-hidden ${
        darkMode ? 'bg-[#181818] text-white' : 'bg-white text-[#111111]'
      }`}
    >
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Editorial Double Portraits with image-zoom */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6 relative">
            <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-gold pointer-events-none" />
            <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-gold pointer-events-none" />

            {/* Men's Portrait */}
            <div className="space-y-4 sm:space-y-6 pt-12">
              <div className="zoom-container overflow-hidden shadow-2xl relative group">
                <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-500 pointer-events-none" />
                <img
                  src={ASSETS.menShowcase}
                  alt="Vasuki Menswear Craftsmanship"
                  className="w-full h-[250px] sm:h-[350px] object-cover zoom-image"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="text-[10px] sm:text-xs font-sans font-semibold tracking-widest text-[#111111] bg-gold px-3 py-1 uppercase shadow-md">
                    Bespoke Men
                  </span>
                </div>
              </div>
              <p className="font-sans text-xs italic opacity-60 text-right">Crafted in pure wool yarn</p>
            </div>

            {/* Women's Portrait */}
            <div className="space-y-4 sm:space-y-6">
              <div className="zoom-container overflow-hidden shadow-2xl relative group">
                <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-500 pointer-events-none" />
                <img
                  src={ASSETS.womenShowcase}
                  alt="Vasuki Womenswear Elegance"
                  className="w-full h-[250px] sm:h-[350px] object-cover zoom-image"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="text-[10px] sm:text-xs font-sans font-semibold tracking-widest text-white bg-[#111111] border border-white/10 px-3 py-1 uppercase shadow-md">
                    Luxury Women
                  </span>
                </div>
              </div>
              <p className="font-sans text-xs italic opacity-60">Fine silk flowing seams</p>
            </div>
          </div>

          {/* Right Side: Philosophy Content */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-gold font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] block">
                ABOUT VASUKI
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
                Our Story &amp; Philosophy
              </h2>
              <div className="h-[2px] w-16 bg-gold mt-2"></div>
            </div>

            <p className="font-sans text-sm sm:text-base leading-relaxed opacity-80 font-light">
              Founded on the pillars of exceptional luxury and visual harmony, **Vasuki** is a premium modern clothing house specializing in fashionable, high-quality apparel for men, women, and young adults.
            </p>
            
            <p className="font-sans text-sm sm:text-base leading-relaxed opacity-80 font-light">
              Our studio bridges the gap between historical craftsmanship and contemporary geometry. Every garment is carefully constructed, fusing selected raw fibers with tailored patterns designed to celebrate confidence, comfort, and state-of-the-art grace.
            </p>

            {/* Values Block */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              
              {/* Mission Card */}
              <div className={`p-6 border transition-all duration-300 ${
                darkMode ? 'border-white/5 bg-white/[0.02] hover:bg-white/[0.04]' : 'border-black/5 bg-black/[0.01] hover:bg-black/[0.03]'
              }`}>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-gold/10 text-gold rounded-none">
                    <Target size={18} />
                  </div>
                  <h3 className="font-serif text-lg font-bold tracking-tight">Our Mission</h3>
                </div>
                <p className="font-sans text-xs sm:text-sm opacity-70 leading-relaxed font-light">
                  To create stylish, high-quality clothing that empowers individuals to express themselves confidently while offering custom-fit precision.
                </p>
              </div>

              {/* Vision Card */}
              <div className={`p-6 border transition-all duration-300 ${
                darkMode ? 'border-white/5 bg-white/[0.02] hover:bg-white/[0.04]' : 'border-black/5 bg-black/[0.01] hover:bg-black/[0.03]'
              }`}>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-gold/10 text-gold rounded-none">
                    <Compass size={18} />
                  </div>
                  <h3 className="font-serif text-lg font-bold tracking-tight">Our Vision</h3>
                </div>
                <p className="font-sans text-xs sm:text-sm opacity-70 leading-relaxed font-light">
                  To become a leading global fashion brand recognized for design innovation, uncompromising quality standards, and absolute client satisfaction.
                </p>
              </div>

            </div>

            {/* Custom citation quotes */}
            <div className={`p-5 border-l-2 border-gold font-serif italic text-sm ${
              darkMode ? 'bg-white/[0.01] text-white/90' : 'bg-black/[0.01] text-black/95'
            }`}>
              &ldquo;Elegance is not standing out, but being remembered. We curate threads that whisper luxury, guaranteeing comfort in every thread.&rdquo;
              <span className="block font-sans text-xs not-italic uppercase tracking-widest font-semibold text-gold mt-2">
                &mdash; VASUKI COUTURE HOUSE
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
