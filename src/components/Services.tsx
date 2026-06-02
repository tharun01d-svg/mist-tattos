/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Sparkles, Scissors, Disc, Eye, Droplet, Flame, HelpCircle } from "lucide-react";

interface ServiceItem {
  id: string;
  name: string;
  description: string;
}

interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  items: ServiceItem[];
  icon: React.ComponentType<{ className?: string }>;
}

const ATELIER_SERVICES: ServiceCategory[] = [
  {
    id: "piercing",
    title: "PIERCING",
    subtitle: "Precision Piercing Studio",
    description: "Expert skeletal-anatomical styling and placement using ultra-hygienic tools and custom solid titanium/gold placement jewelry.",
    icon: Scissors,
    items: [
      {
        id: "gunshot",
        name: "GUNSHOT",
        description: "Standard rapid mechanical lobe piercing with sterile-sealed cartridges, safe, rapid, and low-discomfort with precise alignment.",
      },
      {
        id: "needle",
        name: "NEEDLE",
        description: "Elite freehand cannula needle piercing. Tailored specifically for delicate cartilaginous and complex flesh placements with minimal cellular trauma.",
      },
    ],
  },
  {
    id: "permanent-makeup",
    title: "PERMANENT MAKEUP",
    subtitle: "Aesthetic Cosmetic Micro-Pigmentation",
    description: "Subtle dermal facial pigmentation that replaces traditional daily cosmetic products with organic, long-lasting contouring.",
    icon: Droplet,
    items: [
      {
        id: "lip-correction",
        name: "LIP CORRECTION",
        description: "Corrective tonal symmetry adjustment to reshape, balance uneven borders, and restore natural youthful proportions of the lips.",
      },
      {
        id: "lip-colour",
        name: "LIP COLOUR",
        description: "Full-surface custom pigment infusion ranging from delicate nude tones to sophisticated natural matte reds that never smudge.",
      },
      {
        id: "lip-blush",
        name: "LIP BLUSH",
        description: "Ultra-thin, air-soft pixel misting to deliver a sheer wash of color, enhancing thickness, hydration aesthetic, and soft visual volume.",
      },
    ],
  },
  {
    id: "microblading",
    title: "MICRO BLADING",
    subtitle: "Premium Eyebrow Reconstruction",
    description: "Meticulous dermal hair-strokes and soft gradient shadow mapping designed around your specific facial bone structure.",
    icon: Eye,
    items: [
      {
        id: "eyebrow-correction",
        name: "EYE BROW CORRECTION",
        description: "Rescue and alignment redesign of compromised, asymmetrical, or faded prior eyebrow procedures to restore gorgeous framing.",
      },
      {
        id: "powder-ombre",
        name: "POWDER AND OMBRE",
        description: "Precision machine shading blending from a soft light front to a denser pixel tail, creating a natural makeup-powder finish.",
      },
    ],
  },
  {
    id: "scalp",
    title: "SCALP",
    subtitle: "Scalp Micro-Pigmentation (SMP)",
    description: "Non-surgical hair follicle replication mimicking the exact shade, size, and depth of your natural active hair stubble.",
    icon: Sparkles,
    items: [
      {
        id: "micro-pigmentation",
        name: "MICRO PIGMENTATION",
        description: "Targeted regional scalp density density shading to conceal thinning crown patterns, parting gaps, and visible hair transplant scars.",
      },
      {
        id: "scalp-treatment",
        name: "SCALP",
        description: "Complete full-scalp hairline simulation and hairline restoration mapping to restore the youthful frame of your face.",
      },
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-warm-ivory text-matte-black py-28 md:py-36 border-b border-matte-black/5 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-xl">
            <p className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-matte-black/65 mb-4 font-medium">
              [ 04 &bull; SPECIALIZED OFFERINGS ]
            </p>
            <h2 className="font-display font-light text-4xl md:text-6xl tracking-tight uppercase text-matte-black">
              STUDIO SERVICES
            </h2>
          </div>
          <div className="max-w-sm md:text-right">
            <p className="font-sans text-xs md:text-sm text-matte-black/75 leading-relaxed font-light">
              Beyond traditional tattoo illustrations, our studio specializes in high-precision artistic procedures. Every service is governed by strict sanitary protocols and master aesthetics.
            </p>
          </div>
        </div>

        {/* Catalog Layout - Accordions / Custom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {ATELIER_SERVICES.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                id={`service-cat-${category.id}`}
                className="group flex flex-col justify-between border-2 border-matte-black/10 hover:border-red-600/30 bg-[#FAF9F5]/40 hover:bg-[#FAF9F5] p-8 md:p-10 transition-all duration-500 shadow-sm relative overflow-hidden"
              >
                {/* Thin top accent indicator */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-matte-black/5 group-hover:bg-red-600 transition-colors duration-500" />
                
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full border border-matte-black/10 flex items-center justify-center shrink-0 bg-warm-ivory group-hover:bg-red-600/5 group-hover:border-red-600/30 transition-all duration-500">
                        <Icon className="w-5 h-5 text-matte-black/80 group-hover:text-red-600 transition-colors" />
                      </div>
                      <div>
                        <span className="font-mono text-[9px] tracking-[0.2em] text-[#C4A482] uppercase block font-semibold">
                          {category.subtitle}
                        </span>
                        <h3 className="font-display font-light text-2xl tracking-normal text-matte-black uppercase mt-0.5">
                          {category.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="font-sans text-xs text-matte-black/75 leading-relaxed font-light mb-8 max-w-lg">
                    {category.description}
                  </p>

                  {/* Sub-items List */}
                  <div className="space-y-6 pt-6 border-t border-matte-black/10">
                    {category.items.map((item) => (
                      <div
                        key={item.id}
                        className="flex flex-col pl-4 border-l-2 border-matte-black/20 hover:border-red-600 transition-colors duration-300"
                      >
                        <h4 className="font-sans font-bold text-xs tracking-wider uppercase text-matte-black flex items-center gap-2">
                          <span className="w-1 h-1 bg-red-600 rounded-full inline-block" />
                          {item.name}
                        </h4>
                        <p className="font-sans text-[11px] text-matte-black/70 leading-relaxed font-light mt-1.5">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Aesthetic frame badge */}
                <div className="mt-8 pt-6 flex justify-between items-center text-[9px] tracking-[0.25em] text-matte-black/40 uppercase font-mono border-t border-dashed border-matte-black/10">
                  <span>Elite Grade</span>
                  <span className="group-hover:text-red-600 font-bold transition-colors">Select Options</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlighted CTAs */}
        <div className="mt-20 border border-matte-black/10 p-8 text-center bg-[#FAF9F5] max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-[9px] font-mono tracking-widest font-extrabold px-3 py-1 uppercase rounded shadow">
            PRE-PROCEDURE CONSULTATION INCLUDED
          </div>
          <div className="text-left max-w-md">
            <h4 className="font-display font-normal text-lg tracking-wider text-matte-black uppercase">
              INTERESTED IN A SPECIALIZED SESSION?
            </h4>
            <p className="font-sans text-xs text-matte-black/70 leading-relaxed font-light mt-1">
              Select any piercing, microblading, permanent makeup, or scalp micro-pigmentation treatment when starting your custom consultation inquiry.
            </p>
          </div>
          <button
            onClick={() => {
              const contactEl = document.getElementById("contact");
              contactEl?.scrollIntoView({ behavior: "smooth" });
              // Small helpful visual cue: preset the inquiry input in Contact component if we can target it
              const selectEl = document.getElementById("service-type-select") as HTMLSelectElement;
              if (selectEl) {
                selectEl.value = "specialty";
                // Trigger change event
                selectEl.dispatchEvent(new Event("change", { bubbles: true }));
              }
            }}
            className="shrink-0 px-6 py-3.5 bg-matte-black text-warm-ivory hover:bg-red-600 transition-all text-xs tracking-widest uppercase font-semibold w-full md:w-auto text-center"
          >
            Request Booking
          </button>
        </div>
      </div>
    </section>
  );
}
