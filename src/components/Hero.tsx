/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, MessageSquare, X, ArrowUpRight, CheckCircle2, Clock, Calendar, MapPin } from "lucide-react";
import heroImg from "../assets/images/hero_studio_1780323029807.png";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const [isCallPopupOpen, setIsCallPopupOpen] = useState(false);

  const handlePhoneCall = () => {
    window.location.href = "tel:+918431136665";
  };

  const handleWhatsAppChat = () => {
    const message = encodeURIComponent("Hello mist Tattoos, I would like to schedule a custom luxury consultation.");
    window.open(`https://wa.me/918431136665?text=${message}`, "_blank");
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-warm-ivory text-matte-black overflow-hidden flex flex-col justify-stretch"
    >
      {/* Absolute visual structural grid lines on the background for a high-end architectural blueprint feel */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.03] flex justify-between px-6 md:px-12">
        <div className="w-[1px] h-full bg-matte-black" />
        <div className="w-[1px] h-full bg-matte-black hidden md:block" />
        <div className="w-[1px] h-full bg-matte-black hidden lg:block" />
        <div className="w-[1px] h-full bg-[#111111]" />
      </div>

      <div className="flex-1 flex flex-col justify-center items-center px-6 sm:px-12 lg:px-20 pt-32 pb-16 lg:py-24 bg-warm-ivory text-matte-black relative z-10 text-center">
        
        {/* Top subtle anchor line */}
        <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 w-[1px] h-32 bg-matte-black/10" />

        <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center">
          {/* Atelier Latitude / Longitude Metadata Label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-3 mb-6"
          >
            <span className="w-2 h-[1px] bg-matte-black/40" />
            <span className="font-mono text-[9px] tracking-[0.3em] text-matte-black/60 uppercase">
              IST. 2021 &bull; 13.3174° N, 75.7766° E &bull; CHIKMAGALUR
            </span>
            <span className="w-2 h-[1px] bg-matte-black/40" />
          </motion.div>

          {/* Chikmagalur's No. 1 Best Rated Custom Tattoo Studio Endorsement */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="inline-flex items-center space-x-3.5 bg-matte-black/[0.04] border border-matte-black/5 px-4.5 py-2 mb-8"
          >
            <div className="flex items-center space-x-1 text-[#C4A482]">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <span className="w-[1px] h-3.5 bg-matte-black/15" />
            <span className="font-sans text-[10px] tracking-[0.18em] uppercase font-bold text-matte-black">
              Chikmagalur's #1 Best Rated Tattoo Studio
            </span>
          </motion.div>

          {/* High-end Editorial Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-[40px] tracking-tight leading-[42.5px] text-matte-black text-center uppercase -ml-[150px] -mr-[149px] -mt-[4px] mb-[31px] border border-solid border-matte-black"
          >
            Compositional <br />
            <span className="italic font-normal tracking-wide lowercase text-matte-black/65 block my-1">
              intelligence
            </span>
            on skin.
          </motion.h1>

          {/* Supporting Bio/Philosophy Statement - Replaced with Beautiful Interactive Maps Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-10 max-w-2xl mx-auto w-full"
          >
            <a
              href="https://maps.app.goo.gl/5o5VGzuRU2aBkFht9"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-gradient-to-r from-warm-ivory via-red-50/10 to-warm-ivory shadow-[0_0_25px_rgba(220,38,38,0.25)] hover:shadow-[0_0_35px_rgba(220,38,38,0.45)] hover:bg-red-50/20 p-5 transition-all duration-300 text-left relative animate-pulse [animation-duration:2.5s]"
            >
              {/* Vibrant Crimson Red beacon light in the top-right corner to draw immediate attention */}
              <div className="absolute top-3 right-3 flex items-center space-x-1.5 bg-red-600 text-white px-2 py-0.5 rounded text-[8px] font-mono tracking-wider font-bold uppercase shadow-sm">
                <span className="flex h-1.5 w-1.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
                </span>
                <span>TAP FOR DIRECTIONS</span>
              </div>

              {/* Corner accent decorations for luxury feel in crimson red */}
              <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-red-600" />
              <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-red-600" />
              <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-red-600" />
              <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-red-600" />

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-600/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 relative">
                    {/* Ring animation */}
                    <span className="absolute inset-0 rounded-full border border-red-600/40 animate-ping opacity-60 pointer-events-none" />
                    <MapPin className="w-5.5 h-5.5 text-red-600" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] tracking-[0.25em] text-red-600 font-bold uppercase block mb-1 animate-bounce [animation-duration:2s]">
                      Live Studio Location &bull; MAP CODE: 8QFF+8M Chikkamagaluru
                    </span>
                    <p className="font-sans text-[11px] sm:text-xs text-matte-black leading-relaxed tracking-wide font-semibold">
                      2nd Floor, Near Sangitha Mobiles, MG Rd, opp. Namma Angadi, Chikkamagaluru, Karnataka - 577101
                    </p>
                  </div>
                </div>
                <div className="shrink-0 ml-auto sm:ml-0 flex items-center text-red-600 font-sans text-[10px] tracking-widest font-extrabold uppercase gap-1 group-hover:translate-x-1.5 transition-transform bg-red-600/10 px-2.5 py-1.5 rounded border border-red-600/20">
                  <span>View Map</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </a>
          </motion.div>

          {/* Actions Block */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full max-w-2xl"
          >
            <button
              onClick={onOpenBooking}
              className="bg-matte-black border border-transparent text-warm-ivory px-8 py-4.5 text-xs uppercase tracking-[0.25em] font-medium hover:bg-transparent hover:border-matte-black hover:text-matte-black transition-all duration-300 transform active:scale-95 cursor-pointer text-center w-full sm:w-auto inline-flex items-center justify-center gap-3"
            >
              <Calendar className="w-4 h-4 text-[#C4A482]" />
              Book An Appointment &rarr;
            </button>

            <button
              onClick={() => setIsCallPopupOpen(true)}
              className="bg-[#C4A482]/10 border border-[#C4A482]/30 text-matte-black px-8 py-4.5 text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#C4A482] hover:text-white hover:border-[#C4A482] transition-all duration-300 transform active:scale-95 cursor-pointer text-center w-full sm:w-auto inline-flex items-center justify-center gap-3 relative overflow-hidden group"
            >
              {/* Pulse effect indicator */}
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Call Artist Desk</span>
              <Phone className="w-3.5 h-3.5 pl-[1px] text-matte-black/65 group-hover:text-white transition-colors" />
            </button>
            
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left sm:pl-2">
              <span className="font-sans text-[10px] tracking-[0.2em] font-bold text-matte-black uppercase">
                strictly appointment only
              </span>
              <span className="font-sans text-[9px] tracking-[0.15em] text-matte-black/50 mt-0.5 uppercase">
                Private Boutique Atelier
              </span>
            </div>
          </motion.div>

          {/* Technical Metrology Stats (e.g. hygiene status, active slots) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 mt-16 border-t border-matte-black/10 w-full max-w-3xl"
          >
            <div className="flex flex-col items-center">
              <span className="font-mono text-[9px] text-matte-black/40 uppercase tracking-widest">Hygiene Standard</span>
              <span className="font-sans text-[11px] font-semibold text-matte-black mt-1 uppercase tracking-wide">100% Sterile</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-mono text-[9px] text-matte-black/40 uppercase tracking-widest">Artist Portfolio</span>
              <span className="font-sans text-[11px] font-semibold text-matte-black mt-1 uppercase tracking-wide">Exclusives Only</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-mono text-[9px] text-matte-black/40 uppercase tracking-widest">Atelier Rank</span>
              <span className="font-sans text-[11px] font-bold text-[#9C8567] mt-1 uppercase tracking-wide">★ #1 Rated Shop</span>
            </div>
            <div className="flex flex-col items-center flex-1">
              <span className="font-mono text-[9px] text-matte-black/40 uppercase tracking-widest">Booking Status</span>
              <span className="font-sans text-[11px] font-semibold text-emerald-700 mt-1 uppercase tracking-wider flex items-center gap-1.5 justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                Accepting Q3
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating minimalist scroll coordinator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center opacity-65 hover:opacity-100 transition-opacity duration-300 hidden lg:flex">
        <a href="#gallery" className="flex flex-col items-center gap-1.5 group">
          <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-matte-black/45 group-hover:text-matte-black transition-colors">
            Scroll Portfolio
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="w-[1px] h-8 bg-matte-black/30 group-hover:bg-matte-black transition-colors"
          />
        </a>
      </div>

      {/* LUXURY INTERACTIVE CONTACT DESK POPUP */}
      <AnimatePresence>
        {isCallPopupOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop with elegant blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCallPopupOpen(false)}
              className="absolute inset-0 bg-matte-black/70 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
              className="bg-warm-ivory text-matte-black border border-matte-black/10 w-full max-w-md relative z-10 p-8 shadow-2xl overflow-hidden"
            >
              {/* Minimal geometric background detail */}
              <div className="absolute -right-16 -top-16 w-32 h-32 border border-[#C4A482]/20 rounded-full pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={() => setIsCallPopupOpen(false)}
                className="absolute top-5 right-5 text-matte-black/40 hover:text-matte-black transition-colors p-1"
                aria-label="Close call desk"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="mb-6 relative">
                <div className="flex items-center space-x-2.5 mb-2.5">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="font-mono text-[9px] tracking-[0.25em] text-[#C4A482] font-semibold uppercase">
                    Artist Hot Line Live
                  </span>
                </div>
                <h3 className="font-display font-light text-2xl uppercase tracking-tight text-matte-black">
                  Direct Atelier Line
                </h3>
                <p className="font-sans text-xs text-matte-black/60 leading-relaxed mt-1 font-light">
                  Speak directly with Shridhar or queue your custom geometric consultation instantly.
                </p>
              </div>

              {/* Verified Badge Details */}
              <div className="space-y-3.5 mb-8">
                <div className="flex items-start space-x-3 bg-matte-black/[0.03] p-3 text-left">
                  <Clock className="w-4 h-4 text-[#C4A482] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-sans text-[11px] font-bold uppercase tracking-wider text-matte-black">
                      Office Response Hours
                    </p>
                    <p className="font-sans text-[10px] text-matte-black/55 uppercase tracking-wide mt-0.5">
                      Mon &mdash; Sat, 10:00 &mdash; 19:00 IST
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-matte-black/[0.03] p-3 text-left">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-sans text-[11px] font-bold uppercase tracking-wider text-matte-black">
                      Direct Atelier Contact
                    </p>
                    <p className="font-mono text-xs text-matte-black/75 mt-0.5 tracking-wider">
                      +91 84311 36665
                    </p>
                  </div>
                </div>
              </div>

              {/* Elegant Visual Button Panel */}
              <div className="flex flex-col gap-3">
                <button
                  onClick={handlePhoneCall}
                  className="w-full bg-matte-black text-warm-ivory py-4 px-6 text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#C4A482] transition-all duration-300 flex items-center justify-center gap-3.5 cursor-pointer shadow-sm active:scale-[0.98]"
                >
                  <Phone className="w-4 h-4 text-[#C4A482]" />
                  Secure Voice Call
                  <ArrowUpRight className="w-3.5 h-3.5 text-warm-ivory/50" />
                </button>

                <button
                  onClick={handleWhatsAppChat}
                  className="w-full bg-emerald-950/5 border border-emerald-500/20 text-emerald-900 py-4 px-6 text-xs uppercase tracking-[0.2em] font-medium hover:bg-emerald-900 hover:text-white transition-all duration-300 flex items-center justify-center gap-3.5 cursor-pointer active:scale-[0.98]"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  Instant WhatsApp
                  <ArrowUpRight className="w-3.5 h-3.5 text-emerald-600/50" />
                </button>
              </div>

              {/* Disclaimer / Secure Connection Badge */}
              <div className="mt-6 text-center">
                <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-matte-black/35">
                  - CLINICAL STANDARD &bull; APP-BASED CALL DESK -
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

