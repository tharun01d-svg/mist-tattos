/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import detailImg from "../assets/images/studio_detail_1780323129102.png";
import { ShieldCheck, Sparkles, HeartHandshake, Eye } from "lucide-react";

export default function Experience() {
  const standards = [
    {
      icon: ShieldCheck,
      title: "STERILE LABORATORY SPEC",
      desc: "Our private suite is structured as a class-A sterile room. All skin preparation occurs under unidirectional surgical airflow using medical-grade surface disinfectants between sessions.",
    },
    {
      icon: Sparkles,
      title: "PRECISE HARDWARE INTERACTION",
      desc: "Every single needle is certified surgical-grade 316L stainless steel, custom-tapered, and unsealed immediately before tattooing in front of the client. Machines are insulated with medical-grade barriers.",
    },
    {
      icon: HeartHandshake,
      title: "VEGAN PRESERVATION MEDIA",
      desc: "We operate exclusively with premium, REACH-compliant organic and vegan pigments. Free from heavy metals, synthetic chemicals, or binding agents, guaranteeing longevity and flawless healing integrity.",
    },
    {
      icon: Eye,
      title: "CRAFTED ERGONOMIC COMFORT",
      desc: "Equipped with custom memory-foam anatomical resting chairs and atmospheric sound treatment, ensuring your nervous system remains perfectly calm throughout hours of meticulous blackwork.",
    },
  ];

  return (
    <section
      id="experience"
      className="bg-matte-black text-warm-ivory py-28 md:py-36 border-b border-warm-ivory/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Headline */}
        <div className="mb-16">
          <p className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-warm-ivory/60 mb-4 font-medium">
            [ 05 &bull; STUDIO STANDARDS ]
          </p>
          <h2 className="font-display font-light text-4xl md:text-6xl tracking-tight uppercase text-warm-ivory">
            THE EXPERIENCE
          </h2>
        </div>

        {/* Dynamic split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          {/* List of clinical standards */}
          <div className="lg:col-span-7 space-y-10">
            <p className="font-sans text-sm md:text-base leading-relaxed text-warm-ivory/80 font-light max-w-xl pb-4">
              We understand that tattooing is a medical procedure as much as it is an artistic practice. 
              We have designed "mist Tattoos" to operate with absolute clinical sterility, without losing 
              the warmth of an elite personal salon.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {standards.map((std, i) => {
                const Icon = std.icon;
                return (
                  <div key={i} className="flex flex-col space-y-3 p-6 border border-warm-ivory/10 hover:border-warm-ivory/20 transition-colors bg-[#161616]">
                    <div className="flex items-center space-x-3 text-warm-ivory">
                      <Icon className="w-5 h-5 text-warm-ivory/85" />
                      <h4 className="font-display font-bold text-xs tracking-wider uppercase">
                        {std.title}
                      </h4>
                    </div>
                    <p className="font-sans text-xs text-warm-ivory/70 leading-relaxed font-light">
                      {std.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Large custom detail photography */}
          <div className="lg:col-span-5 w-full flex flex-col space-y-4">
            <div className="relative border border-warm-ivory/15 bg-matte-black p-4 aspect-[4/3] w-full overflow-hidden">
              <img
                src={detailImg}
                alt="mist Tattoos sanitization equipment"
                className="w-full h-full object-cover grayscale contrast-110 brightness-95"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="flex justify-between items-center text-[10px] tracking-widest text-warm-ivory/40 uppercase font-mono px-1">
              <span>EST. &copy; 2026 Atelier Code</span>
              <span>Class-A Sterile</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
