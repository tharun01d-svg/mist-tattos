/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Sparkles, CircleDot, Layers, ShieldCheck, HeartHandshake } from "lucide-react";

export default function Services() {
  const serviceCategories = [
    {
      icon: Sparkles,
      title: "Aesthetic Permanent Makeup",
      items: [
        "Microblading",
        "Eyebrow Correction (Powder & Ombre)",
        "Permanent Makeup",
        "Lip Correction",
        "Lip Color Enhancement",
        "Lip Blush"
      ],
      description: "Crafted to redefine symmetry and highlight facial structure. We deploy hyper-precise pigments designed to match neutral undertones with perfect healing fidelity."
    },
    {
      icon: Layers,
      title: "Aesthetic Micropigmentation",
      items: [
        "Scalp Micropigmentation (SMP)",
        "Beard Micropigmentation"
      ],
      description: "Dense, pointillism-grade pigment simulation that replicates organic hair follicle density. Tailored to provide visual density and perfect shade matches."
    },
    {
      icon: CircleDot,
      title: "Elite Body Piercing",
      items: [
        "Body Piercing",
        "Needle Piercing",
        "Gunshot Piercing"
      ],
      description: "Conducted under absolute sterile laboratory standards. Our precision orientation guarantees seamless anatomical alignment and optimal healing paths."
    }
  ];

  return (
    <section
      id="services"
      className="bg-warm-ivory text-matte-black py-28 md:py-36 border-b border-matte-black/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Headline */}
        <div className="mb-16 max-w-3xl">
          <p className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-matte-black/60 mb-4 font-medium">
            [ 02 &bull; PROFESSIONAL TREATMENTS ]
          </p>
          <h2 className="font-display font-light text-4xl md:text-6xl tracking-tight uppercase text-matte-black mb-6">
            Aesthetic &amp; Body Art
          </h2>
          <p className="font-sans text-sm md:text-base leading-relaxed text-matte-black/75 max-w-2xl font-light">
            We offer a wide range of professional aesthetic and body art services, including Microblading, Eyebrow Correction (Powder Brows and Ombre Brows), Permanent Makeup, Lip Correction, Lip Color Enhancement, Lip Blush, Scalp and Beard Micropigmentation, Body Piercing, Needle Piercing, and Gunshot Piercing. Our treatments are designed to enhance your natural features with precision, safety, and long-lasting results.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {serviceCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-matte-black/[0.015] border border-matte-black/10 hover:border-[#C4A482] p-8 flex flex-col justify-between relative group transition-all duration-300"
              >
                {/* Corner highlights */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-matte-black/10 group-hover:border-[#C4A482] transition-colors" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-matte-black/10 group-hover:border-[#C4A482] transition-colors" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-matte-black/10 group-hover:border-[#C4A482] transition-colors" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-matte-black/10 group-hover:border-[#C4A482] transition-colors" />

                <div>
                  <div className="w-10 h-10 rounded-full bg-[#C4A482]/5 flex items-center justify-center shrink-0 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-4.5 h-4.5 text-[#C4A482]" />
                  </div>
                  <h3 className="font-display font-medium text-lg tracking-wider uppercase text-matte-black mb-4">
                    {cat.title}
                  </h3>
                  <p className="font-sans text-[11px] text-matte-black/60 leading-relaxed font-light mb-6">
                    {cat.description}
                  </p>
                </div>

                <div className="border-t border-matte-black/5 pt-6 mt-auto">
                  <span className="block font-sans text-[9px] tracking-[0.2em] text-[#C4A482] font-semibold uppercase mb-3.5">
                    Service Catalog
                  </span>
                  <ul className="space-y-2">
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <span className="w-1 h-1 bg-[#C4A482] rounded-full shrink-0" />
                        <span className="font-sans text-xs text-matte-black/80 font-normal">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quality commitment ribbon */}
        <div className="border border-matte-black/10 bg-matte-black/[0.01] p-6 lg:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full border border-matte-black/10 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-matte-black/65" />
            </div>
            <div>
              <h4 className="font-display font-semibold text-xs tracking-wider uppercase text-matte-black mb-1">
                Precision &amp; Clinical Safety Guaranteed
              </h4>
              <p className="font-sans text-xs text-matte-black/65 max-w-xl font-light leading-relaxed">
                Every tool, ink cartridge, and needle is individual-grade, single-use, and sterile-unsealed dynamically before your session. All procedures follow medical and aesthetic validation guidelines.
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              const contactEl = document.getElementById("contact");
              contactEl?.scrollIntoView({ behavior: "smooth" });
            }}
            className="border border-matte-black px-6 py-3 text-[10px] uppercase tracking-widest hover:bg-matte-black hover:text-warm-ivory transition-all cursor-pointer font-sans"
          >
            Schedule Consultation &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
