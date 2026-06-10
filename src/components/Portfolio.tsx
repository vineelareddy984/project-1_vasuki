import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../data';
import { PortfolioItem } from '../types';
import { Maximize2, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PortfolioProps {
  darkMode: boolean;
}

type PortfolioFilterType = 'All' | 'Men\'s Fashion' | 'Women\'s Fashion' | 'Casual Wear' | 'Formal Wear' | 'Seasonal Collection';

export default function Portfolio({ darkMode }: PortfolioProps) {
  const [activeFilter, setActiveFilter] = useState<PortfolioFilterType>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = PORTFOLIO_ITEMS.filter((item) => {
    if (activeFilter === 'All') return true;
    return item.category === activeFilter;
  });

  const categories: PortfolioFilterType[] = [
    'All',
    'Men\'s Fashion',
    'Women\'s Fashion',
    'Casual Wear',
    'Formal Wear',
    'Seasonal Collection',
  ];

  const openLightbox = (item: PortfolioItem) => {
    const originalIndex = PORTFOLIO_ITEMS.findIndex((p) => p.id === item.id);
    if (originalIndex !== -1) {
      setLightboxIndex(originalIndex);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % PORTFOLIO_ITEMS.length);
    }
  };

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + PORTFOLIO_ITEMS.length) % PORTFOLIO_ITEMS.length);
    }
  };

  return (
    <section
      id="portfolio"
      className={`py-24 transition-colors duration-300 relative ${
        darkMode ? 'bg-[#181818] text-white' : 'bg-white text-[#111111]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-gold font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] block">
            VISUAL DISCOVERIES &amp; PHOTOSHOOTS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            Vasuki Designer Portfolio
          </h2>
          <div className="h-[2px] w-16 bg-gold mx-auto"></div>
          <p className="font-sans text-sm sm:text-base max-w-2xl mx-auto opacity-70 font-light">
            An editing archive of our global model photography sessions, curated lookbooks, and high-fashion editorial presentations.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12" id="portfolio-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 sm:px-5 py-2.5 font-sans text-xs uppercase tracking-wider font-semibold transition-all border rounded-none ${
                activeFilter === cat
                  ? 'bg-gold border-gold text-[#111111] font-bold shadow-md'
                  : darkMode
                  ? 'border-white/5 bg-white/[0.02] text-white/70 hover:text-white hover:border-gold'
                  : 'border-black/5 bg-black/[0.01] text-black/70 hover:text-black hover:border-gold'
              }`}
            >
              {cat === 'All' ? 'View All looks' : cat}
            </button>
          ))}
        </div>

        {/* Masonry Columns Grid Layout */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
          id="portfolio-masonry"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => openLightbox(item)}
                className={`break-inside-avoid relative group overflow-hidden cursor-pointer border ${
                  darkMode ? 'border-white/5 bg-[#181818]' : 'border-black/5 bg-white'
                } hover:shadow-2xl transition-all duration-300`}
              >
                {/* Image */}
                <div className="zoom-container relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover zoom-image"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  
                  {/* Subtle dark layout grid mask on hover */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 z-10">
                    <div className="flex justify-end">
                      <div className="p-2 border border-white/20 bg-white/5 text-gold rounded-full">
                        <Eye size={16} />
                      </div>
                    </div>
                    
                    <div className="space-y-1.5 text-left transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-gold font-sans text-[10px] tracking-widest font-bold uppercase">
                        {item.category}
                      </span>
                      <h4 className="font-serif text-white text-lg font-bold leading-tight tracking-tight">
                        {item.title}
                      </h4>
                      <p className="font-sans text-xs text-white/70 leading-relaxed font-light line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Image Viewer */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark Mask backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
            />

            {/* Navigation controls */}
            <button
              onClick={prevPhoto}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-55 p-3 rounded-full border border-white/15 bg-[#111111]/80 text-white hover:text-gold hover:border-gold transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextPhoto}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-55 p-3 rounded-full border border-white/15 bg-[#111111]/80 text-white hover:text-gold hover:border-gold transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>

            {/* Lightbox Content Wrap */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[85vh] z-55 flex flex-col items-center justify-center mb-10"
            >
              {/* Close Button top-right */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 p-2 text-white hover:text-gold transition-colors flex items-center space-x-1 uppercase text-xs tracking-widest font-bold"
              >
                <span>Close</span>
                <X size={18} />
              </button>

              {/* Styled Main Image */}
              <img
                src={PORTFOLIO_ITEMS[lightboxIndex].image}
                alt={PORTFOLIO_ITEMS[lightboxIndex].title}
                className="max-w-full max-h-[65vh] object-contain border border-white/5 shadow-2xl"
                referrerPolicy="no-referrer"
              />

              {/* Floating Bottom info bar */}
              <div className="w-full max-w-2xl mt-4 text-center text-white p-4 bg-[#111111]/90 border border-white/5 rounded-none backdrop-blur-md">
                <span className="text-gold font-sans text-xs tracking-[0.25em] font-semibold uppercase block mb-1">
                  {PORTFOLIO_ITEMS[lightboxIndex].category}
                </span>
                <h4 className="font-serif text-xl sm:text-2xl font-bold tracking-tight mb-2">
                  {PORTFOLIO_ITEMS[lightboxIndex].title}
                </h4>
                <p className="font-sans text-xs sm:text-sm text-white/70 max-w-md mx-auto font-light leading-relaxed">
                  {PORTFOLIO_ITEMS[lightboxIndex].description}
                </p>
                <div className="mt-3 flex justify-center text-white/40 text-[10px] tracking-widest font-sans uppercase">
                  <span>LOOK {lightboxIndex + 1} OF {PORTFOLIO_ITEMS.length}</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
