import React, { useState } from 'react';
import { SERVICES } from '../data';
import { ServiceItem } from '../types';
import * as Icons from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ServicesProps {
  darkMode: boolean;
}

export default function Services({ darkMode }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Dynamic Lucide Icon picker
  const renderIcon = (name: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const IconComponent = (Icons as any)[name];
    if (IconComponent) {
      return <IconComponent size={24} className="text-gold" />;
    }
    return <Icons.Shirt size={24} className="text-gold" />;
  };

  return (
    <section
      id="services"
      className={`py-24 transition-colors duration-300 relative ${
        darkMode ? 'bg-[#111111] text-white' : 'bg-[#F9F9F9] text-[#111111]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-20">
          <span className="text-gold font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] block">
            OUR SPECIALIZED SOLUTIONS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight leading-normal">
            Bespoke Services we Provide
          </h2>
          <div className="h-[2px] w-16 bg-gold mx-auto"></div>
          <p className="font-sans text-sm sm:text-base max-w-2xl mx-auto opacity-70 font-light">
            Indulge in tailored fashion, luxury material consulting, and dedicated corporate apparel lines backed by deep industry mastery.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative p-8 border transition-all duration-300 group hover:translate-y-[-4px] hover:shadow-xl ${
                darkMode
                  ? 'border-white/5 bg-[#181818] hover:border-gold/30 hover:bg-[#1C1C1C]'
                  : 'border-black/5 bg-white hover:border-gold/20 hover:bg-white'
              }`}
              id={`service-card-${service.id}`}
            >
              {/* Gold Top-Edge Accent Highlight on Hover */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

              <div className="flex items-start justify-between mb-6">
                <div className={`p-4 rounded-none transition-colors ${
                  darkMode ? 'bg-white/[0.03] group-hover:bg-gold/10' : 'bg-black/[0.02] group-hover:bg-gold/10'
                }`}>
                  {renderIcon(service.iconName)}
                </div>
                {/* Index number */}
                <span className="font-serif text-3xl font-extrabold text-gold/10 group-hover:text-gold/20 transition-colors">
                  {`0${idx + 1}`}
                </span>
              </div>

              <h3 className="font-serif text-xl font-bold mb-3 tracking-tight group-hover:text-gold transition-colors">
                {service.title}
              </h3>

              <p className={`font-sans text-xs sm:text-sm leading-relaxed mb-6 font-light opacity-70`}>
                {service.description}
              </p>

              <button
                onClick={() => setSelectedService(service)}
                className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-gold hover:text-gold-dark font-sans group-hover:translate-x-1 transition-transform"
              >
                <span>Learn More</span>
                <Icons.ArrowRight size={12} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal Popup */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              transition={{ type: 'spring', damping: 25 }}
              className={`relative max-w-lg w-full p-8 md:p-10 shadow-2xl border ${
                darkMode ? 'bg-[#181818] border-white/10 text-white' : 'bg-white border-black/10 text-[#111111]'
              }`}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className={`absolute top-4 right-4 p-2 rounded-full hover:bg-gold/10 transition-colors hover:text-gold ${
                  darkMode ? 'text-white' : 'text-[#111111]'
                }`}
                aria-label="Close modal"
              >
                <Icons.X size={20} />
              </button>

              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3.5 bg-gold/10 rounded-none">
                  {renderIcon(selectedService.iconName)}
                </div>
                <div>
                  <span className="text-gold font-sans text-xs tracking-widest font-semibold uppercase">
                    VASUKI COUTURE SERVICES
                  </span>
                  <h3 className="font-serif text-2xl font-bold tracking-tight">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              <div className="h-[1px] bg-gold/20 w-full mb-6" />

              <div className="space-y-4 text-sm font-light leading-relaxed opacity-80">
                <p>
                  Our {selectedService.title} program connects search-critical tailoring procedures with state-of-the-art styling standards. We focus on premium, long-lasting products, using the finest sourcing to bring your precise clothing vision to life.
                </p>
                <p>
                  With Vasuki, you will enjoy a curated material profile, tailored adjustment tracking files, and a dedicated style technician who assists you with fittings, styling balances, and modifications.
                </p>
              </div>

              <div className="mt-8 flex justify-end space-x-3">
                <button
                  onClick={() => setSelectedService(null)}
                  className={`px-5 py-2.5 text-xs font-sans uppercase font-bold tracking-widest border border-current hover:bg-gold/10 hover:text-gold transition-colors`}
                >
                  Close
                </button>
                <a
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  className="px-6 py-2.5 bg-gold hover:bg-gold-dark text-[#111111] hover:text-white text-xs font-sans uppercase font-bold tracking-widest border border-gold transition-all duration-300"
                >
                  Inquire Now
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
