import React, { useState } from 'react';
import { COLLECTIONS } from '../data';
import { CollectionItem, CategoryType } from '../types';
import { ArrowUpRight, Check, Sparkles, Filter, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CollectionsProps {
  darkMode: boolean;
}

export default function Collections({ darkMode }: CollectionsProps) {
  const [activeTab, setActiveTab] = useState<CategoryType>('All');
  const [selectedProduct, setSelectedProduct] = useState<CollectionItem | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('M');
  const [inquirySuccess, setInquirySuccess] = useState<boolean>(false);

  const filteredItems = COLLECTIONS.filter((item) => {
    if (activeTab === 'All') return true;
    return item.category === activeTab;
  });

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySuccess(true);
    setTimeout(() => {
      setInquirySuccess(false);
      setSelectedProduct(null);
    }, 2500);
  };

  const tabs: { label: string; value: CategoryType }[] = [
    { label: 'All Collections', value: 'All' },
    { label: "Men's Wear", value: 'Mens' },
    { label: "Women's Wear", value: 'Womens' },
    { label: 'Seasonal Collection', value: 'Seasonal' },
  ];

  return (
    <section
      id="collections"
      className={`py-24 transition-colors duration-300 relative overflow-hidden ${
        darkMode ? 'bg-[#181818] text-white' : 'bg-white text-[#111111]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-lg">
            <span className="text-gold font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] block">
              CURATED PREMIUM SELECTS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
              Featured Collections
            </h2>
            <div className="h-[2px] w-16 bg-gold"></div>
          </div>
          
          <p className="font-sans text-xs sm:text-sm opacity-70 max-w-md font-light leading-relaxed">
            Modern cuts fused with heritage craftsmanship. Scroll to inspect our signature garments and click on individual cards to schedule premium fittings or sizing reserves.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center gap-2 border-b border-gold/10 pb-4 mb-12" id="filter-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-5 py-3 font-sans text-xs uppercase tracking-widest font-semibold transition-all relative ${
                activeTab === tab.value
                  ? 'text-gold'
                  : 'text-neutral-500 hover:text-gold'
              }`}
            >
              {tab.label}
              {activeTab === tab.value && (
                <motion.div
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Collections Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                key={item.id}
                className={`group flex flex-col justify-between border h-full relative transition-all duration-300 overflow-hidden ${
                  darkMode ? 'border-white/5 bg-[#1C1C1C]/40 hover:bg-[#1C1C1C]' : 'border-black/5 bg-[#F9F9F9]/40 hover:bg-[#F9F9F9]'
                }`}
              >
                {/* Image Showcase Container with Hover Zoom and Overlays */}
                <div className="zoom-container relative aspect-[3/4] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover zoom-image"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  {/* Category bubble */}
                  <span className="absolute top-4 left-4 z-20 text-[10px] uppercase tracking-widest font-sans font-semibold bg-[#111111]/80 text-white px-3 py-1 scale-95 border border-white/10">
                    {item.subCategory}
                  </span>

                  {/* Dark high-gloss overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/45 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
                    <button
                      onClick={() => setSelectedProduct(item)}
                      className="px-4 py-2.5 bg-gold text-[#111111] border border-gold font-sans font-bold text-xs uppercase tracking-widest flex items-center justify-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-transparent hover:text-gold"
                    >
                      <span>Inquire Sizing</span>
                      <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>

                {/* Info block */}
                <div className="p-6 space-y-2">
                  <div className="flex items-start justify-between">
                    <h3 className="font-serif text-lg font-bold tracking-tight group-hover:text-gold transition-colors">
                      {item.title}
                    </h3>
                    <span className="font-serif font-semibold text-lg text-gold whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-xs opacity-60">
                    <Sparkles size={11} className="text-gold/80" />
                    <span className="font-sans uppercase tracking-widest text-[10px] font-semibold">{item.subCategory}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Sizing Concierge Inquiry Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                if (!inquirySuccess) setSelectedProduct(null);
              }}
              className="absolute inset-0 bg-black/85 backdrop-blur-sm"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className={`relative max-w-2xl w-full grid grid-cols-1 md:grid-cols-12 overflow-hidden shadow-2xl border ${
                darkMode ? 'bg-[#1C1C1C] border-white/15 text-white' : 'bg-white border-black/10 text-[#111111]'
              }`}
            >
              {/* Left Column: Visual display */}
              <div className="md:col-span-5 h-48 md:h-full relative">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 to-transparent flex flex-col justify-end p-6 md:p-8">
                  <span className="text-gold font-sans text-[10px] tracking-widest font-bold uppercase mb-1">
                    {selectedProduct.category} COLLECTION
                  </span>
                  <h4 className="font-serif text-white text-xl font-bold tracking-tight leading-tight">
                    {selectedProduct.title}
                  </h4>
                  <p className="text-gold font-serif font-bold text-lg mt-1">{selectedProduct.price}</p>
                </div>
              </div>

              {/* Right Column: Custom form */}
              <div className="md:col-span-7 p-6 md:p-8 relative">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className={`absolute top-4 right-4 p-1.5 rounded-full hover:bg-gold/10 hover:text-gold transition-all ${
                    darkMode ? 'text-white/60' : 'text-[#111111]/60'
                  }`}
                  aria-label="Close"
                  disabled={inquirySuccess}
                >
                  <X size={18} />
                </button>

                <AnimatePresence mode="wait">
                  {inquirySuccess ? (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4"
                    >
                      <div className="w-16 h-16 bg-gold/10 border border-gold/40 text-gold flex items-center justify-center rounded-full">
                        <Check size={32} />
                      </div>
                      <h3 className="font-serif text-2xl font-bold">Inquiry Received</h3>
                      <p className="font-sans text-xs sm:text-sm opacity-70 leading-relaxed max-w-sm">
                        Thank you. Your request for the **{selectedProduct.title}** has been sent to our white-glove styling team. We will call you shortly.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleInquirySubmit} className="space-y-4">
                      <div>
                        <span className="text-gold font-sans text-xs tracking-widest uppercase font-semibold">
                          CONCIERGE FITTING SERVICE
                        </span>
                        <h4 className="font-serif text-xl sm:text-2xl font-bold tracking-tight">
                          Reserve Sizing
                        </h4>
                      </div>

                      <div className="h-[1px] bg-gold/20" />

                      {/* Sizes selection */}
                      <div className="space-y-2">
                        <label className="block font-sans text-xs uppercase tracking-widest opacity-70 font-semibold">
                          Select Sizing Target
                        </label>
                        <div className="flex gap-2.5">
                          {['S', 'M', 'L', 'XL', 'Tailored Bespoke'].map((size) => (
                            <button
                              type="button"
                              key={size}
                              onClick={() => setSelectedSize(size)}
                              className={`px-3 py-2 font-sans text-xs uppercase font-medium tracking-tight border transition-all ${
                                selectedSize === size
                                  ? 'bg-gold border-gold text-[#111111] font-bold'
                                  : darkMode
                                  ? 'border-white/10 hover:border-gold text-white bg-white/[0.02]'
                                  : 'border-black/10 hover:border-gold text-[#111111] bg-black/[0.01]'
                              }`}
                            >
                              {size}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Name input */}
                      <div className="space-y-1">
                        <label className="block font-sans text-xs uppercase tracking-widest opacity-70 font-semibold">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Aishwarya Devi"
                          className={`w-full px-4 py-2 border text-xs focus:ring-1 focus:ring-gold outline-none transition-all rounded-none ${
                            darkMode ? 'border-white/10 bg-white/[0.02]' : 'border-black/10 bg-black/[0.01]'
                          }`}
                        />
                      </div>

                      {/* Phone input */}
                      <div className="space-y-1">
                        <label className="block font-sans text-xs uppercase tracking-widest opacity-70 font-semibold">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          className={`w-full px-4 py-2 border text-xs focus:ring-1 focus:ring-gold outline-none transition-all rounded-none ${
                            darkMode ? 'border-white/10 bg-white/[0.02]' : 'border-black/10 bg-black/[0.01]'
                          }`}
                        />
                      </div>

                      {/* Materials choice statement */}
                      <p className="font-sans text-[10px] opacity-60 leading-relaxed italic">
                        By submitting this form, you request a reservation for **{selectedProduct.title}** ({selectedSize}). No immediate charge is made; we call you to finalize fabric choices and customize measurements.
                      </p>

                      <button
                        type="submit"
                        className="w-full py-3 bg-gold hover:bg-gold-dark text-[#111111] hover:text-white font-sans text-xs uppercase font-bold tracking-widest border border-gold transition-all duration-300"
                      >
                        Submit Custom Reserve Sizing Request
                      </button>
                    </form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
