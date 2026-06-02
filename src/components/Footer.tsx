/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowUp } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { label: "INSTAGRAM", href: "https://www.instagram.com/mist_tattoo_chikmagalur/", code: "@mist_tattoo_chikmagalur" },
    { label: "WHATSAPP CHAT", href: "https://wa.me/918431136665", code: "+91 84311 36665" },
    { label: "GOOGLE LOCATION", href: "https://maps.app.goo.gl/5o5VGzuRU2aBkFht9", code: "8QFF+8M, MG Road" },
    { label: "JOURNAL PUBLICATION", href: "#", code: "sub/mist-journal" },
  ];

  return (
    <footer
      id="main-footer"
      className="bg-matte-black text-warm-ivory pt-20 pb-12 border-t border-warm-ivory/10 z-10 relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Dynamic Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-warm-ivory/10 items-start">
          {/* Col 1: Brand & Charter */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="flex items-center space-x-3 select-none group">
              <Logo className="w-12 h-12 transition-transform duration-500 group-hover:rotate-[15deg]" inverse={true} />
              <div className="flex flex-col items-start">
                <span className="font-display font-light text-2xl tracking-[0.2em] leading-none text-warm-ivory uppercase">
                  mist
                </span>
                <span className="font-sans text-[9px] tracking-[0.3em] text-warm-ivory/60 uppercase mt-0.5 font-medium group-hover:text-warm-ivory transition-colors">
                  TATTOOS
                </span>
              </div>
            </a>
            <p className="font-sans text-xs text-warm-ivory/60 max-w-sm leading-relaxed font-light">
              We cultivate a deliberate quietude to transform abstract human memories and postures into immaculate, permanent blackwork illustration. Operating under class-A aseptic security parameters on a private atelier basis in Chikkamagaluru, Karnataka.
            </p>
          </div>

          {/* Col 2: Social Links */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-bold text-xs tracking-wider uppercase text-warm-ivory/40">
              SOCIAL &amp; DIGITAL CHANNELS
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-start group"
                >
                  <span className="font-sans text-[11px] tracking-wider uppercase text-warm-ivory group-hover:text-[#ffffff] transition-colors relative">
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-warm-ivory transition-all duration-300 group-hover:w-full" />
                  </span>
                  <span className="font-mono text-[9px] text-warm-ivory/45 mt-0.5">
                    {item.code}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Hours & Legal Disclaimer */}
          <div className="md:col-span-3 space-y-4 text-left md:text-right flex flex-col md:items-end">
            <h4 className="font-display font-bold text-xs tracking-wider uppercase text-warm-ivory/40">
              TEMPORAL HOURS
            </h4>
            <div className="font-sans text-[11px] text-warm-ivory/75 space-y-1 font-light">
              <p>Mondays to Saturdays: 10:00 &mdash; 19:00 IST</p>
              <p>Special Projects: By Reservation Only</p>
              <p>Sundays: Quiet Solitude / Closed</p>
            </div>
          </div>
        </div>

        {/* Bottom Line Info */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[10px] tracking-widest text-warm-ivory/45 uppercase font-mono">
            <span>&copy; {new Date().getFullYear()} MIST TATTOOS ATELIER.</span>
            <span>ALL RIGHTS SECURED.</span>
            <a href="#" className="hover:text-warm-ivory/80 transition-colors">PRIVACY CODE</a>
            <a href="#" className="hover:text-warm-ivory/80 transition-colors">STERILIZATION LAW</a>
          </div>

          {/* Return To Top Trigger button */}
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 border border-warm-ivory/20 px-4 py-2 text-[10px] uppercase tracking-widest hover:border-warm-ivory hover:bg-warm-ivory hover:text-matte-black transition-all duration-300 font-sans cursor-pointer outline-none"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
