/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ZoomIn } from "lucide-react";
import { GalleryItem } from "../types";

// Import custom generated images
import gallery1 from "../assets/images/tattoo_gallery_1_1780323083679.png";
import gallery2 from "../assets/images/tattoo_gallery_2_1780323103510.png";
import gallery3 from "../assets/images/regenerated_image_1780406652733.png";
import gallery6 from "../assets/images/neck_geometric_tattoo_1780327220263.png";

const SAMPLE_GALLERY: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Orchard Botanica",
    category: "fine-line",
    imageUrl: gallery1,
    dimensions: "9cm &times; 4cm",
    placement: "Forearm Anatomy Study",
  },
  {
    id: "gal-2",
    title: "Absolute Alignment",
    category: "minimalist",
    imageUrl: gallery2,
    dimensions: "12cm &times; 6cm",
    placement: "Shoulder Lateral Pivot",
  },
  {
    id: "gal-4",
    title: "Constellation Path",
    category: "fine-line",
    imageUrl: gallery3,
    dimensions: "8cm &times; 8cm",
    placement: "Cervical Spine Column",
  },
  {
    id: "gal-6",
    title: "Void & Silhouette",
    category: "blackwork",
    imageUrl: gallery6,
    dimensions: "5cm &times; 5cm",
    placement: "Cervical Lateral Alignment",
  },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<GalleryItem["category"]>("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = SAMPLE_GALLERY.filter(
    (item) => activeFilter === "all" || item.category === activeFilter
  );

  const categories: { label: string; value: GalleryItem["category"] }[] = [
    { label: "ALL WORKS", value: "all" },
    { label: "FINE-LINE", value: "fine-line" },
    { label: "MINIMALIST", value: "minimalist" },
    { label: "BLACKWORK", value: "blackwork" },
  ];

  return (
    <section
      id="gallery"
      className="bg-matte-black text-warm-ivory py-28 md:py-36 border-b border-warm-ivory/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-warm-ivory/60 mb-4 font-medium">
              [ 03 &bull; SELECTED WORKS ]
            </p>
            <h2 className="font-display font-light text-4xl md:text-6xl tracking-tight uppercase text-warm-ivory">
              FEATURED PORTFOLIO
            </h2>
          </div>

          {/* Filter Navigation */}
          <div className="flex flex-wrap gap-2 md:gap-x-8 border-b border-warm-ivory/10 pb-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveFilter(cat.value)}
                className={`font-sans text-xs tracking-widest uppercase transition-all duration-300 pb-2 relative outline-none cursor-pointer ${
                  activeFilter === cat.value
                    ? "text-warm-ivory font-semibold"
                    : "text-warm-ivory/50 hover:text-warm-ivory"
                }`}
              >
                {cat.label}
                {activeFilter === cat.value && (
                  <motion.div
                    layoutId="gallery-tab-indicator"
                    className="absolute bottom-0 left-0 w-full h-[1px] bg-warm-ivory"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Grid Gallery */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5 }}
                key={item.id}
                className="group relative cursor-pointer flex flex-col justify-between border border-warm-ivory/5 p-4 bg-matte-black hover:border-warm-ivory/20 transition-all duration-500"
                onClick={() => setSelectedItem(item)}
              >
                {/* Image Frame */}
                <div className="relative overflow-hidden aspect-[3/4] w-full bg-[#1c1c1c] mb-6">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale contrast-115 brightness-90 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-95 focus:outline-none"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-matte-black/5 opacity-100 group-hover:opacity-0 transition-opacity duration-500" />
                  
                  {/* Zoom indicator on hover */}
                  <div className="absolute bottom-4 right-4 bg-matte-black/75 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-warm-ivory/20">
                    <ZoomIn className="w-4 h-4 text-warm-ivory" />
                  </div>
                </div>

                {/* Caption Detail */}
                <div className="flex justify-between items-start pt-2 border-t border-warm-ivory/10">
                  <div>
                    <h3 className="font-display text-sm uppercase tracking-widest text-warm-ivory group-hover:text-warm-ivory/90 transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-sans text-[10px] tracking-wider text-warm-ivory/60 uppercase mt-0.5">
                      {item.placement}
                    </p>
                  </div>
                  <div className="text-right">
                    <p
                      className="font-mono text-[10px] tracking-widest text-warm-ivory/85"
                      dangerouslySetInnerHTML={{ __html: item.dimensions }}
                    />
                    <span className="inline-block text-[9px] tracking-widest text-warm-ivory/40 uppercase bg-warm-ivory/5 px-2 py-0.5 rounded-sm mt-1">
                      {item.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Gallery Zoom Lightbox Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#0c0c0c]/98 z-50 flex items-center justify-center p-4 md:p-8 overflow-y-auto"
              onClick={() => setSelectedItem(null)}
            >
              <button
                className="absolute top-6 right-6 p-2 text-warm-ivory hover:text-warm-ivory/80 focus:outline-none border border-warm-ivory/10 rounded-full"
                onClick={() => setSelectedItem(null)}
              >
                <X className="w-5 h-5" />
              </button>

              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                className="bg-matte-black border border-warm-ivory/15 max-w-4xl w-full p-6 md:p-8 flex flex-col md:flex-row gap-8 items-stretch justify-center relative shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button Inside the Card Area */}
                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 z-20 bg-matte-black/80 hover:bg-matte-black text-warm-ivory hover:text-[#C4A482] border border-warm-ivory/15 hover:border-[#C4A482]/50 p-2 transition-all cursor-pointer"
                  title="Close selection"
                  id="close-gallery-card-btn"
                >
                  <X className="w-4 h-4" />
                </button>
                {/* Expanded Photo Frame */}
                <div className="w-full md:w-3/5 aspect-[3/4] relative bg-[#151515] overflow-hidden">
                  <img
                    src={selectedItem.imageUrl}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover grayscale contrast-110 brightness-95"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Item Details */}
                <div className="w-full md:w-2/5 flex flex-col justify-between py-2">
                  <div className="space-y-6">
                    <div>
                      <span className="text-[10px] tracking-[0.3em] uppercase text-warm-ivory/40 select-none">
                        COLLECTIVE RECORD &bull; {selectedItem.category}
                      </span>
                      <h3 className="font-display font-light text-3xl md:text-4xl tracking-tight uppercase text-warm-ivory mt-2">
                        {selectedItem.title}
                      </h3>
                    </div>

                    <div className="space-y-4 border-t border-b border-warm-ivory/10 py-6">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-warm-ivory/50 tracking-widest uppercase">ANATOMICAL POSITION</span>
                        <span className="font-sans text-warm-ivory tracking-wider text-right">{selectedItem.placement}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-warm-ivory/50 tracking-widest uppercase">CANVAS FRAME SCALE</span>
                        <span
                          className="font-mono text-warm-ivory text-right"
                          dangerouslySetInnerHTML={{ __html: selectedItem.dimensions }}
                        />
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-warm-ivory/50 tracking-widest uppercase">INTRINSIC HEALING</span>
                        <span className="font-sans text-warm-ivory text-right">Medical Standard (14 Days)</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-warm-ivory/50 tracking-widest uppercase">TECHNIQUE</span>
                        <span className="font-sans text-warm-ivory border border-warm-ivory/20 px-2.5 py-0.5 uppercase text-[9px] tracking-wide text-right">
                          Custom needle load
                        </span>
                      </div>
                    </div>

                    <p className="font-sans text-xs text-warm-ivory/70 leading-relaxed font-light">
                      This skin sculpture was individually drafted following a comprehensive posture analysis, ensuring the fine lines align beautifully with the body's natural muscle flow. Let this prompt your custom illustration.
                    </p>
                  </div>

                  <div className="pt-6">
                    <button
                      onClick={() => {
                        setSelectedItem(null);
                        const contactEl = document.getElementById("contact");
                        contactEl?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="w-full text-center py-4 bg-warm-ivory text-matte-black text-xs uppercase tracking-widest font-semibold hover:opacity-90 transition-opacity whitespace-nowrap cursor-pointer"
                    >
                      Request Similar Style
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
