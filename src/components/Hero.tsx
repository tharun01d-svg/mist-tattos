/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import heroImg from "../assets/images/hero_studio_1780323029807.png";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
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
            className="font-display font-light text-5xl sm:text-7xl lg:text-[6rem] tracking-tight leading-[0.95] text-matte-black uppercase mb-8"
          >
            Compositional <br />
            <span className="italic font-normal tracking-wide lowercase text-matte-black/65 block my-1">
              intelligence
            </span>
            on skin.
          </motion.h1>

          {/* Supporting Bio/Philosophy Statement */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-sans text-sm sm:text-base tracking-wide text-matte-black/75 leading-relaxed font-light mb-10 max-w-2xl mx-auto"
          >
            A private, clinical-standard art studio specializing in fine-line geometry, 
            delicate blackwork illustrative structures, and high-fidelity custom portraits. 
            We study your posture and muscular alignment to ensure perfect composition.
          </motion.p>

          {/* Actions Block */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-6 justify-center w-full"
          >
            <button
              onClick={onOpenBooking}
              className="bg-matte-black border border-transparent text-warm-ivory px-10 py-5 text-xs uppercase tracking-[0.25em] font-medium hover:bg-transparent hover:border-matte-black hover:text-matte-black transition-all duration-300 transform active:scale-95 cursor-pointer text-center w-full sm:w-auto"
            >
              Book An Appointment &rarr;
            </button>
            
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
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
            <div className="flex flex-col items-center">
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
    </section>
  );
}

