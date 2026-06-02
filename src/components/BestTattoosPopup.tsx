/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Sparkles, ChevronLeft, ChevronRight, Bookmark, Award, Heart } from "lucide-react";

// Import actual high-fidelity tattoo images for display
import angelDnaImg from "../assets/images/regenerated_image_1780406758726.jpg";
import samuraiImg from "../assets/images/japanese_samurai_tattoo_1780403108019.png";
import portraitImg from "../assets/images/portrait_shading_tattoo_1780403621718.png";

interface TattooOfTheMonth {
  id: string;
  title: string;
  style: string;
  placement: string;
  story: string;
  image: string;
  artist: string;
  rating: string;
}

export default function BestTattoosPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [likes, setLikes] = useState<Record<string, number>>({
    ang: 284,
    sam: 312,
    prt: 359,
  });
  const [hasLiked, setHasLiked] = useState<Record<string, boolean>>({});

  const items: TattooOfTheMonth[] = [
    {
      id: "ang",
      title: "The Hermetic Tree & Angel",
      style: "Sacred Geometry & Dotwork Realism",
      placement: "Ventral Forearm Dynamic Axis",
      story: "A masterful composition aligning an ascending angelic figure with a sacred tree of life whose roots merge into a DNA double-helix, grounded by a fine-line dial-compass.",
      image: angelDnaImg,
      artist: "Shridhar",
      rating: "Editor's Choice • May Curation",
    },
    {
      id: "sam",
      title: "Ronin of the Rising Sun",
      style: "Vibrant Neo-Japanese Realism",
      placement: "Lateral Forearm Sleeve Alignment",
      story: "Stunning execution of deep contrast blackwork armor paired with vibrant warm sunset gradients. Features traditional calligraphic kanji and a precise pagoda outline.",
      image: samuraiImg,
      artist: "Shridhar",
      rating: "Most Shared Curation",
    },
    {
      id: "prt",
      title: "The Heritage Portrait",
      style: "Hyper-Fidelity Smooth Realism",
      placement: "Inner Forearm Extension",
      story: "An emotionally resonant tribute portrait capturing lifetime expressions with single-needle micro-shading, rich depths, and seamless skin transitions.",
      image: portraitImg,
      artist: "Shridhar",
      rating: "Highest Client Voted",
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const toggleLike = (id: string) => {
    if (hasLiked[id]) {
      setLikes((prev) => ({ ...prev, [id]: prev[id] - 1 }));
      setHasLiked((prev) => ({ ...prev, [id]: false }));
    } else {
      setLikes((prev) => ({ ...prev, [id]: prev[id] + 1 }));
      setHasLiked((prev) => ({ ...prev, [id]: true }));
    }
  };

  return (
    <>
      {/* 1. Floating Circular Pulsing Badge in Bottom Left Corner */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: -25 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-6 left-6 z-40 hidden sm:block"
            id="best-tattoos-pulsing-badge"
          >
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center space-x-3 bg-matte-black/95 text-warm-ivory border border-[#C4A482]/40 hover:border-[#C4A482] p-2.5 pr-4 shadow-xl hover:shadow-[#C4A482]/10 rounded-full transition-all duration-300 group cursor-pointer"
            >
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#C4A482]/20 shrink-0 group-hover:scale-110 transition-transform duration-500">
                <img
                  src={items[0].image}
                  alt="Feature Preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-matte-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#C4A482] animate-bounce" />
                </div>
              </div>
              <div className="text-left">
                <span className="block font-mono text-[8px] tracking-[0.25em] text-[#C4A482] font-semibold uppercase leading-none mb-0.5">
                  May Curation
                </span>
                <span className="block font-sans text-[10px] font-bold uppercase tracking-wider text-warm-ivory group-hover:text-[#C4A482] transition-colors leading-none">
                  Best Tattoos of Month
                </span>
              </div>
            </button>
            {/* Ambient Pulse Ring */}
            <span className="absolute -inset-0.5 rounded-full border border-[#C4A482]/30 animate-ping -z-10 pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile-only static triggers when at the top */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="sm:hidden fixed bottom-6 left-6 z-40 bg-matte-black text-warm-ivory border border-[#C4A482]/40 rounded-full p-3.5 shadow-xl flex items-center justify-center cursor-pointer"
          id="best-tattoos-pulsing-badge-mobile"
        >
          <Award className="w-5 h-5 text-[#C4A482] animate-pulse" />
        </button>
      )}

      {/* 2. Compact Editorial Popup / Showcase Drawer */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:justify-start p-4 sm:p-6 lg:p-10 pointer-events-none">
            {/* Clickable Backdrop (closes popup) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-[#111111]/40 backdrop-blur-xs pointer-events-auto"
            />

            {/* Main Interactive Popup Frame */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="bg-warm-ivory text-matte-black border-2 border-matte-black shadow-2xl relative z-10 w-full max-w-sm sm:max-w-md pointer-events-auto p-5 sm:p-6 overflow-hidden flex flex-col"
              id="best-tattoos-modal-container"
            >
              {/* Gold luxury geometric accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-matte-black/30" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-matte-black/30" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-matte-black/30" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-matte-black/30" />

              {/* Header Info */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-matte-black/10">
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-[#C4A482]" />
                  <h4 className="font-display font-bold text-xs uppercase tracking-[0.2em] text-matte-black">
                    Best Tattoos of the Month
                  </h4>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-matte-black/40 hover:text-matte-black transition-colors p-1 rounded-full hover:bg-matte-black/5"
                  id="close-best-tattoos-modal"
                >
                  <X className="w-4.5 h-4.5" />
                </button>
              </div>

              {/* Selected Masterpiece Slideshow */}
              <div className="relative group overflow-hidden bg-matte-black aspect-square w-full mb-4.5 border border-matte-black/5">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={items[activeIndex].id}
                    src={items[activeIndex].image}
                    alt={items[activeIndex].title}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.35 }}
                    className="w-full h-full object-cover select-none"
                  />
                </AnimatePresence>

                {/* Rating Label Overlaid */}
                <div className="absolute top-3 left-3 bg-matte-black/95 text-[#C4A482] border border-[#C4A482]/25 font-mono text-[8px] uppercase tracking-widest px-2.5 py-1">
                  {items[activeIndex].rating}
                </div>

                {/* Like Overlay Counter */}
                <button
                  onClick={() => toggleLike(items[activeIndex].id)}
                  className="absolute bottom-3 right-3 bg-warm-ivory text-matte-black hover:bg-[#C4A482] hover:text-white border border-matte-black/15 shadow-md px-3 py-1.5 flex items-center space-x-1.5 rounded-full transition-all active:scale-90"
                  id={`like-btn-${items[activeIndex].id}`}
                >
                  <Heart
                    className={`w-3.5 h-3.5 transition-colors ${
                      hasLiked[items[activeIndex].id]
                        ? "fill-red-500 text-red-500"
                        : "text-matte-black"
                    }`}
                  />
                  <span className="font-mono text-[10px] font-bold">
                    {likes[items[activeIndex].id]}
                  </span>
                </button>

                {/* Absolute Navigation Overlay Controls */}
                <button
                  onClick={handlePrev}
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-warm-ivory/90 hover:bg-warm-ivory border border-matte-black/10 text-matte-black flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-sm"
                  id="best-tattoos-prev-arrow"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-warm-ivory/90 hover:bg-warm-ivory border border-matte-black/10 text-matte-black flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-sm"
                  id="best-tattoos-next-arrow"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Text / Story Metadata Block */}
              <div className="text-left flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <h5 className="font-display font-medium text-lg tracking-wide text-matte-black">
                      {items[activeIndex].title}
                    </h5>
                    <span className="font-mono text-[9px] text-[#C4A482] uppercase tracking-wider font-semibold">
                      By {items[activeIndex].artist}
                    </span>
                  </div>

                  <span className="inline-block font-mono text-[8.5px] uppercase tracking-wider text-matte-black/60 bg-matte-black/[0.04] px-2 py-0.5 border border-matte-black/5 mb-3">
                    {items[activeIndex].style}
                  </span>

                  <p className="font-sans text-[11px] text-matte-black/75 leading-relaxed font-light mb-4">
                    {items[activeIndex].story}
                  </p>
                </div>

                {/* Footer Coordinates / Interaction */}
                <div className="pt-3 border-t border-matte-black/10 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-mono text-[8px] text-matte-black/40 uppercase tracking-widest font-semibold">
                      Anatomy Alignment
                    </span>
                    <span className="font-sans text-[10px] text-matte-black/70 font-semibold tracking-wide">
                      {items[activeIndex].placement}
                    </span>
                  </div>

                  <a
                    href="#contact"
                    className="bg-matte-black text-warm-ivory hover:bg-[#C4A482] hover:text-white px-3.5 py-1.5 text-[9px] uppercase tracking-widest font-bold border border-transparent transition-all duration-300 transform active:scale-95"
                    id="book-this-style-link"
                    onClick={() => setIsOpen(false)}
                  >
                    Discuss This Style &rarr;
                  </a>
                </div>
              </div>

              {/* Custom Dots Progress indicator */}
              <div className="flex justify-center space-x-1.5 mt-5">
                {items.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === activeIndex
                        ? "w-4 bg-[#C4A482]"
                        : "w-1.5 bg-matte-black/15"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
