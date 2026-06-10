import React, { useState } from 'react';
import { TESTIMONIALS } from '../data';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface TestimonialsProps {
  darkMode: boolean;
}

export default function Testimonials({ darkMode }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="testimonials"
      className={`py-24 transition-colors duration-300 relative overflow-hidden ${
        darkMode ? 'bg-[#111111] text-white' : 'bg-[#F9F9F9] text-[#111111]'
      }`}
    >
      {/* Decorative Gold Elements */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-gold font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] block">
            CLIENT SATISFACTION VERIFIED
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            Customer Testimonials
          </h2>
          <div className="h-[2px] w-16 bg-gold mx-auto"></div>
        </div>

        {/* Testimonial Box */}
        <div className="relative">
          {/* Big Quote Symbol */}
          <div className="absolute -top-10 -left-6 sm:-left-12 text-gold/10 pointer-events-none z-0">
            <Quote size={100} className="stroke-[1.5]" />
          </div>

          <div className={`relative z-10 px-6 sm:px-16 py-12 border ${
            darkMode ? 'bg-[#181818]/60 border-white/5 shadow-2xl' : 'bg-white border-black/5 shadow-xl'
          }`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center text-center space-y-6"
                id={`testimonial-slide-${currentIndex}`}
              >
                {/* Photo */}
                <div className="relative">
                  <div className="absolute inset-0 border border-gold rounded-full transform translate-x-1.5 translate-y-1.5 pointer-events-none" />
                  <img
                    src={TESTIMONIALS[currentIndex].photo}
                    alt={TESTIMONIALS[currentIndex].name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-white/15 relative z-10 shadow-lg"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Stars */}
                <div className="flex gap-1.5">
                  {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={15} className="fill-gold text-gold" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-serif text-base sm:text-lg md:text-xl leading-relaxed italic max-w-3xl font-light">
                  &ldquo;{TESTIMONIALS[currentIndex].review}&rdquo;
                </p>

                {/* Customer name / role */}
                <div className="space-y-1">
                  <h4 className="font-serif text-lg font-bold tracking-tight text-gold">
                    {TESTIMONIALS[currentIndex].name}
                  </h4>
                  <p className="font-sans text-[11px] uppercase tracking-widest opacity-60 font-medium">
                    {TESTIMONIALS[currentIndex].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Dots indicators */}
            <div className="flex justify-center gap-2.5 mt-8">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 transition-all duration-350 rounded-full ${
                    currentIndex === idx ? 'w-8 bg-gold' : 'w-2 bg-neutral-400/40 hover:bg-gold/40'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Nav arrows */}
          <div className="flex items-center justify-between mt-8 sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:w-[calc(100%+3.5rem)] sm:-left-7 sm:mt-0 z-20">
            <button
              onClick={prevSlide}
              className={`p-3 border rounded-none transition-colors ${
                darkMode
                  ? 'border-white/10 hover:border-gold hover:bg-white/5 text-white/70 hover:text-gold'
                  : 'border-black/10 hover:border-gold hover:bg-black/5 text-[#111111]/70 hover:text-gold'
              } bg-transparent`}
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={nextSlide}
              className={`p-3 border rounded-none transition-colors ${
                darkMode
                  ? 'border-white/10 hover:border-gold hover:bg-white/5 text-white/70 hover:text-gold'
                  : 'border-black/10 hover:border-gold hover:bg-black/5 text-[#111111]/70 hover:text-gold'
              } bg-transparent`}
              aria-label="Next Testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
