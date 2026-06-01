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
      className="relative min-h-screen bg-matte-black text-warm-ivory flex items-center justify-center overflow-hidden pt-24"
    >
      {/* Background Image Container with dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="mist Tattoos studio layout"
          className="w-full h-full object-cover opacity-35 filter brightness-75 scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Subtle Matte Black overlay matching our exact constraints */}
        <div className="absolute inset-0 bg-[#111111]/65" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        {/* Decorative thin accent lines - luxury editorial fashion style */}
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-[1px] h-12 bg-warm-ivory/30 mb-8"
        />

        {/* Studio Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans text-xs md:text-sm tracking-[0.4em] uppercase text-warm-ivory/70 mb-4 font-semibold"
        >
          MIST TATTOOS &bull; STUDIO OF FINE ART
        </motion.p>

        {/* Main Bold Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.4 }}
          className="font-display font-light text-5xl md:text-8xl tracking-tight leading-[1.05] uppercase max-w-4xl text-warm-ivory mb-6"
        >
          Ink With <br />
          <span className="font-italic tracking-normal lowercase block mt-1 font-semibold">Purpose.</span>
        </motion.h1>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-sans text-sm md:text-lg tracking-wide text-warm-ivory/80 max-w-xl leading-relaxed mb-10 text-center font-light"
        >
          Custom tattoos crafted with precision, creativity, and lasting meaning.
        </motion.p>

        {/* Single CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-center space-y-4"
        >
          <button
            onClick={onOpenBooking}
            className="border border-warm-ivory px-10 py-5 text-xs uppercase tracking-[0.25em] bg-transparent text-warm-ivory hover:bg-warm-ivory hover:text-matte-black transition-colors duration-500 font-sans cursor-pointer select-none font-medium outline-none min-w-[220px]"
          >
            Book Consultation
          </button>
          
          <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-warm-ivory/50">
            Appointment required &bull; Private Atelier
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-45 hover:opacity-100 transition-opacity">
        <a href="#about" className="flex flex-col items-center gap-2">
          <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-warm-ivory leading-none">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-[1px] h-6 bg-warm-ivory"
          />
        </a>
      </div>
    </section>
  );
}
