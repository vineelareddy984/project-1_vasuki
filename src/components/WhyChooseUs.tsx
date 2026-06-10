import React from 'react';
import { WHY_CHOOSE_US } from '../data';
import { Check, Sparkles, Award, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface WhyChooseUsProps {
  darkMode: boolean;
}

export default function WhyChooseUs({ darkMode }: WhyChooseUsProps) {
  return (
    <section
      id="why-choose-us"
      className={`py-24 transition-colors duration-300 relative overflow-hidden ${
        darkMode ? 'bg-[#111111] text-white' : 'bg-[#F9F9F9] text-[#111111]'
      }`}
    >
      {/* Absolute decorative items */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Big typography message box */}
          <div className="lg:col-span-4 space-y-6">
            <span className="text-gold font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] block">
              OUR UNCOMPROMISING ASSURANCES
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
              Why Discerning Clients Choose Vasuki
            </h2>
            <div className="h-[2px] w-16 bg-gold"></div>
            
            <p className="font-sans text-sm opacity-70 leading-relaxed font-light">
              We look beyond fast fashion cycles. Our dedication is focused entirely on providing durable, customized masterpieces crafted from sustainable origins, ensuring you express your absolute self with ease.
            </p>

            <div className={`p-6 border border-gold/20 relative overflow-hidden ${
              darkMode ? 'bg-[#181818]/50' : 'bg-white'
            }`}>
              {/* background watermark */}
              <Award className="absolute right-2 bottom-2 text-gold/5 w-24 h-24 pointer-events-none" />
              
              <h4 className="font-serif text-gold font-bold text-lg mb-2">Our Quality Seal</h4>
              <p className="font-sans text-xs opacity-80 leading-relaxed font-light mb-4">
                Each shipment goes through triple-point inspections to confirm fiber tension, seam alignment, and correct custom fittings.
              </p>
              <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-gold text-[10px]">
                <Sparkles size={12} />
                <span>100% Quality Insured</span>
              </div>
            </div>
          </div>

          {/* Right Column: 8 items grid format */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {WHY_CHOOSE_US.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`p-6 border transition-all duration-300 group hover:border-gold/30 ${
                  darkMode
                    ? 'border-white/5 bg-[#181818] hover:bg-[#1C1C1C]'
                    : 'border-black/5 bg-white hover:bg-white hover:shadow-lg'
                }`}
              >
                <div className="flex items-start space-x-4">
                  {/* Styled Check Icon with matching border */}
                  <div className="mt-1 flex-shrink-0 p-1.5 border border-gold/30 bg-gold/10 text-gold rounded-full group-hover:bg-gold group-hover:text-[#111111] transition-all">
                    <Check size={12} className="stroke-[3]" />
                  </div>
                  
                  <div className="space-y-1.5">
                    <h3 className="font-serif text-base sm:text-lg font-bold tracking-tight group-hover:text-gold transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm opacity-70 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
