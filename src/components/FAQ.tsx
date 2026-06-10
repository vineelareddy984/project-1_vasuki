import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data';
import { ChevronDown, HelpCircle, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQProps {
  darkMode: boolean;
}

export default function FAQ({ darkMode }: FAQProps) {
  const [openId, setOpenId] = useState<string | null>('f1'); // Default first item open

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className={`py-24 transition-colors duration-300 relative ${
        darkMode ? 'bg-[#111111] text-white' : 'bg-[#F9F9F9] text-[#111111]'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-gold font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] block text-center">
            HAVE QUESTIONS?
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-center">
            Frequently Asked Questions
          </h2>
          <div className="h-[2px] w-16 bg-gold mx-auto"></div>
          <p className="font-sans text-sm sm:text-base max-w-xl mx-auto opacity-70 font-light text-center">
            Our premium boutique services summarized. Contact our support line if you need secondary custom ordering specifications.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4" id="faq-accordions">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`border transition-all duration-300 ${
                  isOpen
                    ? 'border-gold/30 shadow-md'
                    : darkMode
                    ? 'border-white/5 hover:border-gold/15'
                    : 'border-black/5 hover:border-gold/15'
                } ${
                  darkMode ? 'bg-[#181818]' : 'bg-white'
                }`}
              >
                {/* Accordion Toggle Header */}
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group"
                  aria-expanded={isOpen}
                  id={`faq-btn-${item.id}`}
                >
                  <div className="flex items-center space-x-4">
                    {/* Index or icon marker */}
                    <span className="font-serif text-xs font-bold text-gold opacity-60">
                      {`0${idx + 1}`}
                    </span>
                    <h3 className={`font-serif text-base sm:text-lg font-bold tracking-tight transition-colors ${
                      isOpen ? 'text-gold' : groupHoverColor(darkMode)
                    }`}>
                      {item.question}
                    </h3>
                  </div>

                  {/* Open indicators with rotate animation */}
                  <span className={`p-2 border transition-all duration-300 ${
                    isOpen
                      ? 'border-gold text-gold bg-gold/5'
                      : darkMode
                      ? 'border-white/10 text-white/50 hover:text-gold'
                      : 'border-black/10 text-black/50 hover:text-gold'
                  }`}>
                    <ChevronDown
                      size={15}
                      className={`transform transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  </span>
                </button>

                {/* Body Content with slide animation */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-dashed border-gold/10">
                        <p className="font-sans text-sm leading-relaxed opacity-70 font-light pr-4 text-justify">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

// Hover state helper
function groupHoverColor(isDark: boolean) {
  return isDark
    ? 'text-white/80 group-hover:text-gold'
    : 'text-[#111111]/80 group-hover:text-gold';
}
