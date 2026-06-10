import React, { useState } from 'react';
import { Mail, Check, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NewsletterProps {
  darkMode: boolean;
}

export default function Newsletter({ darkMode }: NewsletterProps) {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setEmail('');
      }, 4000);
    }
  };

  return (
    <section
      className={`py-20 transition-colors duration-300 relative overflow-hidden ${
        darkMode ? 'bg-[#111111]' : 'bg-[#F9F9F9]'
      }`}
    >
      {/* Decorative lines / gold circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-gold/5 max-w-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        <div className="space-y-3">
          <span className="text-gold font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] flex items-center justify-center space-x-1.5">
            <Sparkles size={12} />
            <span>VIP COMMUNIQUE ACCESS</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            Stay Ahead in Fashion
          </h2>
          <div className="h-[2px] w-12 bg-gold mx-auto"></div>
          <p className="font-sans text-xs sm:text-sm max-w-lg mx-auto opacity-70 font-light leading-relaxed">
            Subscribe to receive exclusive lookbook private invites, VIP pre-order access to seasonal releases, and luxury lifestyle guides.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {success ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="p-5 max-w-md mx-auto border border-gold/30 bg-gold/5 text-center space-y-2"
            >
              <Check className="text-gold mx-auto" size={24} />
              <p className="font-serif text-lg font-bold text-gold">Successfully Registered!</p>
              <p className="font-sans text-xs opacity-85 leading-relaxed">
                Welcome to Vasuki Atelier. A VIP confirmation code has been transmitted to your email.
              </p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubscribe}
              className="max-w-md mx-auto flex flex-col sm:flex-row gap-3"
            >
              <div className="relative flex-grow">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={15} />
                <input
                  type="email"
                  required
                  placeholder="Insert your premium email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full pl-12 pr-4 py-3.5 text-xs outline-none focus:ring-1 focus:ring-gold border rounded-none transition-all ${
                    darkMode
                      ? 'border-white/10 bg-white/[0.03] text-white focus:bg-[#181818]'
                      : 'border-black/10 bg-white text-zinc-900 focus:bg-white'
                  }`}
                />
              </div>
              <button
                type="submit"
                className="px-8 py-3.5 bg-gold hover:bg-gold-dark text-[#111111] hover:text-white font-sans text-xs uppercase font-bold tracking-widest border border-gold transition-all duration-300"
              >
                Subscribe
              </button>
            </motion.form>
          )}
        </AnimatePresence>

        <p className="font-sans text-[10px] sm:text-xs opacity-40 italic">
          *We respect your space. Unsubscribe anytime with single-click email links.
        </p>
      </div>
    </section>
  );
}
