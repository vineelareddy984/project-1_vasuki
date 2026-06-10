import React, { useState, useEffect } from 'react';

// Import our specialized luxury subcomponents
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Collections from './components/Collections';
import WhyChooseUs from './components/WhyChooseUs';
import Portfolio from './components/Portfolio';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

/**
 * Vasuki - Where Style Meets Elegance
 * Premium luxury fashion and clothing business brand website.
 */
export default function App() {
  // Start in an elegant premium Dark view by default to represent a high-fashion aesthetic
  const [darkMode, setDarkMode] = useState<boolean>(true);

  // Sync document root classes if needed downstream
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen font-sans antialiased transition-colors duration-500 overflow-x-hidden ${
        darkMode ? 'bg-[#111111] text-white' : 'bg-[#FAFAFA] text-[#111111]'
      }`}
      id="vasuki-brand-showcase"
    >
      {/* 1. Header Navigation Bar (Sticky with dynamic theme toggling switcher) */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* 2. Hero Section (Premium fashion landscape layout with animated title tags) */}
      <Hero darkMode={darkMode} />

      {/* 3. About Section (The Story, Mission, Vision, and side-by-side models) */}
      <About darkMode={darkMode} />

      {/* 4. Services Section (Specialized bespoke solutions with Learn More drawer cards) */}
      <Services darkMode={darkMode} />

      {/* 5. Collections (Curated catalog filter list with interactive reserve fits) */}
      <Collections darkMode={darkMode} />

      {/* 6. Why Choose Us (8 assurances checklist with structured visual details) */}
      <WhyChooseUs darkMode={darkMode} />

      {/* 7. Portfolio Section (Masonry photshoot galleries with Lightbox viewer) */}
      <Portfolio darkMode={darkMode} />

      {/* 8. Business Statistics Section (Animated ticking up counter loops) */}
      <Stats darkMode={darkMode} />

      {/* 9. Customer Testimonials (Elegant ratings carousels) */}
      <Testimonials darkMode={darkMode} />

      {/* 10. Living Fashion Gallery (12 Instagram lookbook lifestyle captures) */}
      <Gallery darkMode={darkMode} />

      {/* 11. FAQ Section (Adaptive Accordions with Chevron rotating hooks) */}
      <FAQ darkMode={darkMode} />

      {/* 12. Contact Section (Form validation and geolocated India showrooms mapping) */}
      <Contact darkMode={darkMode} />

      {/* 13. Newsletter Block (Luxury private invitations signups) */}
      <Newsletter darkMode={darkMode} />

      {/* 14. Premium Footing Guides (Multi-category links footer) */}
      <Footer darkMode={darkMode} />
    </div>
  );
}
