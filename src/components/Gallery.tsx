import React from 'react';
import { GALLERY_PHOTOS } from '../data';
import { Instagram, ZoomIn } from 'lucide-react';
import { motion } from 'motion/react';

interface GalleryProps {
  darkMode: boolean;
}

export default function Gallery({ darkMode }: GalleryProps) {
  return (
    <section
      id="gallery"
      className={`py-24 transition-colors duration-300 relative ${
        darkMode ? 'bg-[#181818] text-white' : 'bg-white text-[#111111]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-gold font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] block text-center">
            #VASUKIDREAMS ON INSTAGRAM
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-center">
            Follow the Living Gallery
          </h2>
          <div className="h-[2px] w-16 bg-gold mx-auto"></div>
          <p className="font-sans text-sm sm:text-base max-w-2xl mx-auto opacity-70 font-light text-center">
            Check into the daily visual journal of our style community. Share your Vasuki pieces using our global tag for seasonal catalog consideration.
          </p>
        </div>

        {/* 12 Image responsive Grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
          id="lifestyle-instagram-gallery"
        >
          {GALLERY_PHOTOS.map((photo, idx) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 4) * 0.08 }}
              className="group aspect-square zoom-container border border-gold/10 relative overflow-hidden bg-zinc-900 cursor-crosshair shadow-md"
            >
              {/* Photo */}
              <img
                src={photo.image}
                alt={`Vasuki lifestyle lookup ${photo.tag}`}
                className="w-full h-full object-cover zoom-image filter contrast-[1.05]"
                referrerPolicy="no-referrer"
                loading="lazy"
              />

              {/* High-Contrast elegant dark filter layer */}
              <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 z-10 text-center">
                <Instagram size={20} className="text-gold mb-2 transform scale-75 group-hover:scale-100 transition-transform duration-300" />
                
                <span className="font-sans text-xs font-bold text-white tracking-widest uppercase mb-1">
                  Vasuki Atelier
                </span>
                
                <span className="font-serif text-sm tracking-tight text-gold font-semibold mb-3">
                  {photo.tag}
                </span>

                <div className="flex items-center space-x-1.5 text-[10px] text-white/50 tracking-widest uppercase font-semibold">
                  <ZoomIn size={12} className="text-gold" />
                  <span>View Look</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Instagram Action call */}
        <div className="mt-14 text-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-8 py-3.5 border border-gold hover:bg-gold hover:text-[#111111] text-gold font-sans font-bold text-xs uppercase tracking-widest transition-all duration-300 transform hover:scale-[1.01]"
          >
            <Instagram size={14} />
            <span>Join @VasukiOfficial</span>
          </a>
        </div>

      </div>
    </section>
  );
}
