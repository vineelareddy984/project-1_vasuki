import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Check, AlertCircle, Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactProps {
  darkMode: boolean;
}

export default function Contact({ darkMode }: ContactProps) {
  // Form fields state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // Sizing controls
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [termAccept, setTermAccept] = useState(true);

  // Simple validation checks on submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !phone.trim() || !subject.trim() || !message.trim()) {
      setStatus('error');
      return;
    }

    // Typical regex checks
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isEmailValid || phone.length < 9) {
      setStatus('error');
      return;
    }

    // Success action
    setStatus('success');
    
    // Reset Form Fields after duration
    setTimeout(() => {
      setName('');
      setEmail('');
      setPhone('');
      setSubject('');
      setMessage('');
      setStatus('idle');
    }, 4500);
  };

  const selectedStoreLocations = [
    { city: 'New Delhi Studio', address: 'Connaught Place, New Delhi, India', coords: '28°37\'N, 77°13\'E' },
    { city: 'Mumbai Flagship', address: 'Colaba Causeway, Mumbai, India', coords: '18°55\'N, 72°49\'E' },
    { city: 'Bengaluru Lounge', address: 'Indiranagar, Bengaluru, India', coords: '12°58\'N, 77°37\'E' }
  ];

  return (
    <section
      id="contact"
      className={`py-24 transition-colors duration-300 relative ${
        darkMode ? 'bg-[#181818] text-white' : 'bg-white text-[#111111]'
      }`}
    >
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-gold/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-20">
          <span className="text-gold font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] block">
            GET IN TOUCH
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            Contact Vasuki Atelier
          </h2>
          <div className="h-[2px] w-16 bg-gold mx-auto"></div>
          <p className="font-sans text-sm sm:text-base max-w-2xl mx-auto opacity-70 font-light">
            Have custom requirements or need bulk counseling support? Fill out the lead generation form below or drop by our showroom lounges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Coordinates Info & SVG Interactive Map placeholder */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-bold tracking-tight border-b border-gold/10 pb-4">
                Bespoke Showroom Lounge
              </h3>

              {/* Specific Contacts Block */}
              <div className="space-y-5" id="brand-location-address">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gold/10 text-gold rounded-none mt-1">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold uppercase tracking-wide opacity-50">Headquarters</h4>
                    <p className="font-sans text-base font-semibold text-gold leading-tight">Vasuki Apparel House</p>
                    <p className="font-sans text-xs opacity-75">New Delhi, Maharashtra, Karnataka showrooms, India</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gold/10 text-gold rounded-none mt-1">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold uppercase tracking-wide opacity-50">Direct Inquiries</h4>
                    <p className="font-sans text-sm font-semibold hover:text-gold transition-colors">
                      <a href="mailto:info@vasuki.com">info@vasuki.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gold/10 text-gold rounded-none mt-1">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold uppercase tracking-wide opacity-50">Concierge Desk</h4>
                    <p className="font-sans text-sm font-semibold">+91 91234 56789</p>
                    <p className="font-sans text-[11px] opacity-60">Mon &ndash; Sat, 10:00 AM &ndash; 8:00 PM IST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Interactive SVG "Map" Representing India Coordinates */}
            <div className={`p-6 border ${
              darkMode ? 'bg-[#131313] border-white/5' : 'bg-[#F9F9F9] border-black/5'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Clock size={14} className="text-gold" />
                  <span className="font-sans text-xs font-bold uppercase tracking-widest text-[#111111]/70 dark:text-white/70">
                    SOCIALLY GEOLOCATED
                  </span>
                </div>
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
              </div>

              {/* Vector Representation of Map with Gold Store Pins */}
              <div className="relative h-44 bg-neutral-900 flex items-center justify-center border border-white/5 overflow-hidden">
                <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
                  {/* Grid lines to look techy/editorial */}
                  <div className="w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px]" />
                </div>

                {/* Styled static India map indicator */}
                <div className="text-center z-10 space-y-1">
                  <MapPin size={24} className="text-gold mx-auto animate-bounce duration-1000" />
                  <p className="font-serif text-white font-bold text-sm tracking-wide">Vasuki Lounge Presence</p>
                  <p className="font-sans text-[10px] text-zinc-400 capitalize">Delhi &bull; Mumbai &bull; Bangalore lounges</p>
                </div>

                <div className="absolute bottom-3 left-4 text-left font-mono text-[9px] text-neutral-500">
                  <p>COORD: LAT 21.7° N / LON 78.9° E</p>
                  <p>VISUAL STATUS: ONLINE SATELLITE</p>
                </div>
              </div>

              {/* Store Lounges locations bullet display */}
              <div className="grid grid-cols-3 gap-2.5 mt-4 text-center">
                {selectedStoreLocations.map((loc) => (
                  <div key={loc.city} className="space-y-0.5 border border-gold/10 p-2 bg-neutral-500/5 hover:bg-gold/5 transition-all">
                    <p className="font-serif text-[11px] font-bold text-gold">{loc.city.split(' ')[0]}</p>
                    <p className="font-sans text-[9px] opacity-60 leading-tight block">{loc.coords}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Social handles */}
            <div className="space-y-3">
              <p className="font-sans text-xs uppercase tracking-widest font-semibold opacity-60">
                Connect on digital channels
              </p>
              <div className="flex gap-3">
                {[
                  { icon: <Instagram size={15} />, href: 'https://instagram.com' },
                  { icon: <Facebook size={15} />, href: 'https://facebook.com' },
                  { icon: <Youtube size={15} />, href: 'https://youtube.com' },
                  { icon: <Linkedin size={15} />, href: 'https://linkedin.com' },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`p-3 border transition-colors hover:text-gold hover:border-gold ${
                      darkMode ? 'border-white/10 text-white/70' : 'border-black/10 text-black/70'
                    }`}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Lead Contact Form */}
          <div className="lg:col-span-7">
            <div className={`p-8 sm:p-10 border shadow-md relative ${
              darkMode ? 'bg-[#1C1C1C] border-white/5' : 'bg-[#FDFDFD] border-black/5'
            }`}>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight mb-2">
                Send a Correspondence
              </h3>
              <p className="font-sans text-xs sm:text-sm opacity-70 leading-relaxed font-light mb-8">
                Reserve custom fittings, order premium fabric swatches, or configure corporate bulk uniforms. Our design desks respond in under 12 hours.
              </p>

              {/* Interactive Status Alerts */}
              <AnimatePresence mode="wait">
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-4 bg-green-500/10 border border-green-500/30 text-green-400 mb-6 flex items-start space-x-3 text-xs sm:text-sm"
                  >
                    <Check size={18} className="mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-bold">Transmission Successful!</p>
                      <p className="opacity-80">Thank you for contacting Vasuki. A custom couturier will call you at **{phone}** or send an estimate swatches review to **{email}** shortly.</p>
                    </div>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-4 bg-red-500/10 border border-red-500/30 text-red-400 mb-6 flex items-start space-x-3 text-xs sm:text-sm"
                  >
                    <AlertCircle size={18} className="mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-bold">Validation Issue Found</p>
                      <p className="opacity-80">Please check that all fields are filled, your email string is structured correctly, and your phone exceeds 9 digits.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form elements */}
              <form onSubmit={handleSubmit} className="space-y-5" id="contact-atelier-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="block font-sans text-xs uppercase tracking-widest font-semibold opacity-75">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="e.g. Vineela Reddy"
                      className={`w-full px-4 py-3 border text-xs focus:ring-1 focus:ring-gold outline-none transition-all rounded-none ${
                        darkMode ? 'border-white/10 bg-white/[0.02]' : 'border-black/10 bg-black/[0.01]'
                      }`}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block font-sans text-xs uppercase tracking-widest font-semibold opacity-75">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="e.g. vineela@example.com"
                      className={`w-full px-4 py-3 border text-xs focus:ring-1 focus:ring-gold outline-none transition-all rounded-none ${
                        darkMode ? 'border-white/10 bg-white/[0.02]' : 'border-black/10 bg-black/[0.01]'
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="block font-sans text-xs uppercase tracking-widest font-semibold opacity-75">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      placeholder="e.g. +91 90123 45678"
                      className={`w-full px-4 py-3 border text-xs focus:ring-1 focus:ring-gold outline-none transition-all rounded-none ${
                        darkMode ? 'border-white/10 bg-white/[0.02]' : 'border-black/10 bg-black/[0.01]'
                      }`}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block font-sans text-xs uppercase tracking-widest font-semibold opacity-75">
                      Inquiry Subject
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                      className={`w-full px-4 py-4 border text-xs focus:ring-1 focus:ring-gold outline-none transition-all rounded-none ${
                        darkMode ? 'border-white/10 bg-[#1C1C1C]' : 'border-black/10 bg-white'
                      }`}
                    >
                      <option value="">Select Category Subject</option>
                      <option value="Bespoke Suit Designing">Bespoke Custom Designing</option>
                      <option value="Bulk Corporate Uniforms">Bulk Boutique Orders (Showroom)</option>
                      <option value="Premium Fabric Request">Premium Sourcing consultation</option>
                      <option value="General Brand Inquiry">General Partnership</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block font-sans text-xs uppercase tracking-widest font-semibold opacity-75">
                    Your Message / Custom Sizing details
                  </label>
                  <textarea
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    placeholder="Provide measurements, styling cues or order timeline notes here..."
                    className={`w-full px-4 py-3 border text-xs focus:ring-1 focus:ring-gold outline-none transition-all rounded-none resize-none ${
                      darkMode ? 'border-white/10 bg-white/[0.02]' : 'border-black/10 bg-black/[0.01]'
                    }`}
                  />
                </div>

                {/* Custom Sizing terms checkbox */}
                <div className="flex items-start space-x-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="terms-check"
                    checked={termAccept}
                    onChange={() => setTermAccept(!termAccept)}
                    className="mt-1 h-3.5 w-3.5 accent-gold cursor-pointer"
                  />
                  <label htmlFor="terms-check" className="font-sans text-[10px] sm:text-xs opacity-60 leading-tight cursor-pointer">
                    I agree to share my sizing dimensions and contact info with Vasuki couturiers for premium service follow-up.
                  </label>
                </div>

                {/* Submit trigger button */}
                <button
                  type="submit"
                  disabled={!termAccept || status === 'success'}
                  className={`w-full py-4 font-sans text-xs uppercase font-bold tracking-widest transition-all duration-300 border flex items-center justify-center space-x-2 rounded-none ${
                    !termAccept || status === 'success'
                      ? 'opacity-40 cursor-not-allowed bg-neutral-600 border-neutral-600'
                      : 'bg-[#111111] dark:bg-gold dark:text-[#111111] text-white border-[#111111] dark:border-gold hover:bg-gold hover:text-[#111111] dark:hover:bg-transparent dark:hover:text-gold'
                  }`}
                >
                  <span>Submit Sizing &amp; Service Request</span>
                  <Send size={12} />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
