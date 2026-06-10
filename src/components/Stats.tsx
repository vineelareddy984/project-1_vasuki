import React, { useState, useEffect, useRef } from 'react';
import { BUSINESS_STATS } from '../data';
import { Sparkles, Trophy, Award, HeartHandshake } from 'lucide-react';
import { motion, useInView } from 'motion/react';

interface StatsProps {
  darkMode: boolean;
}

export default function Stats({ darkMode }: StatsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  // Store counting states
  const [custCount, setCustCount] = useState(0);
  const [designCount, setDesignCount] = useState(0);
  const [colCount, setColCount] = useState(0);
  const [satPercent, setSatPercent] = useState(0);

  useEffect(() => {
    if (isInView) {
      // Fast counter animations using standard requestAnimationFrame
      let startTimestamp: number | null = null;
      const duration = 2000; // 2 seconds

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);

        setCustCount(Math.floor(progress * 10000));
        setDesignCount(Math.floor(progress * 500));
        setColCount(Math.floor(progress * 50));
        setSatPercent(Math.floor(progress * 98));

        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          // ensure exact end values
          setCustCount(10000);
          setDesignCount(500);
          setColCount(50);
          setSatPercent(98);
        }
      };

      window.requestAnimationFrame(step);
    }
  }, [isInView]);

  const icons = [
    <HeartHandshake className="text-gold" size={24} />,
    <Sparkles className="text-gold" size={24} />,
    <Award className="text-gold" size={24} />,
    <Trophy className="text-gold" size={24} />,
  ];

  return (
    <section
      ref={containerRef}
      className={`py-20 transition-all duration-300 relative border-t border-b ${
        darkMode
          ? 'bg-[#181818] border-white/5 text-white'
          : 'bg-white border-black/5 text-[#111111]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12" id="stats-counter-grid">
          {BUSINESS_STATS.map((stat, idx) => {
            // Get current count from state
            let displayVal = '0';
            if (stat.id === 'st1') displayVal = `${custCount.toLocaleString()}+`;
            if (stat.id === 'st2') displayVal = `${designCount}+`;
            if (stat.id === 'st3') displayVal = `${colCount}+`;
            if (stat.id === 'st4') displayVal = `${satPercent}%`;

            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center space-y-3 flex flex-col items-center"
              >
                {/* Accent icon container */}
                <div className={`p-4 bg-gold/10 flex items-center justify-center mb-1`}>
                  {icons[idx]}
                </div>

                {/* Animated counter value */}
                <span className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight text-white/95 text-gold">
                  {displayVal}
                </span>

                {/* Label */}
                <span className="font-sans text-xs uppercase tracking-widest font-semibold opacity-70">
                  {stat.label}
                </span>
                
                {/* Visual accent spark line */}
                <span className="w-6 h-[1.5px] bg-gold/30"></span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
