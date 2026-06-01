/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Menu, X, CalendarDays } from "lucide-react";
import { useState, useEffect } from "react";
import Logo from "./Logo";

interface HeaderProps {
  onOpenBooking: () => void;
  bookingCount: number;
}

export default function Header({ onOpenBooking, bookingCount }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Portfolio", href: "#gallery" },
    { label: "The Artist", href: "#artist" },
    { label: "Studio Standard", href: "#experience" },
    { label: "Words", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-warm-ivory/95 backdrop-blur-md border-b border-matte/10 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-3 select-none group">
          <Logo className="w-10 h-10 transition-transform duration-500 group-hover:rotate-[15deg]" />
          <div className="flex flex-col items-start">
            <span className="font-display font-light text-xl tracking-[0.2em] leading-none text-matte-black uppercase">
              mist
            </span>
            <span className="font-sans text-[8px] tracking-[0.3em] text-matte-black/60 uppercase mt-0.5 font-semibold transition-colors group-hover:text-matte-black">
              TATTOOS
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-12">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-sans text-xs tracking-wider uppercase text-matte-black/60 hover:text-matte-black transition-colors py-1 relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-matte-black transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action Button & Menu Icon */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onOpenBooking}
            className="hidden sm:flex items-center space-x-2 border border-matte-black px-5 py-2.5 text-xs uppercase tracking-widest hover:bg-matte-black hover:text-warm-ivory transition-colors duration-300 font-sans"
          >
            <CalendarDays className="w-3.5 h-3.5" />
            <span>Book Consultation</span>
            {bookingCount > 0 && (
              <span className="bg-matte-black text-warm-ivory text-[10px] w-4 h-4 rounded-full flex items-center justify-center border border-warm-ivory ml-1">
                {bookingCount}
              </span>
            )}
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-1 text-matte-black focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden absolute top-full left-0 w-full bg-warm-ivory border-b border-matte border-opacity-10 py-8 px-8 flex flex-col space-y-6 z-40 shadow-xl"
        >
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="font-sans text-sm tracking-widest uppercase text-matte-black/80 hover:text-matte-black border-b border-matte border-opacity-5 pb-2 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => {
              setIsOpen(false);
              onOpenBooking();
            }}
            className="w-full flex items-center justify-center space-x-2 border border-matte-black py-4 text-xs uppercase tracking-widest bg-matte-black text-warm-ivory hover:opacity-90 transition-opacity font-sans"
          >
            <CalendarDays className="w-4 h-4" />
            <span>Book Consultation</span>
            {bookingCount > 0 && (
              <span className="ml-2 bg-warm-ivory text-matte-black text-xs font-bold px-2 py-0.5 rounded-full">
                {bookingCount}
              </span>
            )}
          </button>
        </motion.div>
      )}
    </header>
  );
}
