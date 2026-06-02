/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import artistImg from "../assets/images/shridhar_tattooing_buddha_1780326217358.png";

export default function Artist() {
  return (
    <section
      id="artist"
      className="bg-warm-ivory text-matte-black py-28 md:py-36 border-b border-matte-black/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Mobile-friendly Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          {/* Left Side: Editorial Bio and Work Philosophy */}
          <div className="lg:col-span-7 flex flex-col space-y-8 order-2 lg:order-1">
            <div>
              <p className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-matte-black/60 mb-4 font-medium">
                [ 04 &bull; THE ARTIST ]
              </p>
              <h2 className="font-display font-light text-4xl md:text-6xl tracking-tight leading-none uppercase text-matte-black">
                SHRIDHAR
              </h2>
              <p className="font-sans text-xs tracking-widest text-matte-black/60 uppercase mt-1">
                Founder, Principal Artist &bull; 15+ Years Elite Experience
              </p>
            </div>

            <div className="h-[1px] bg-matte-black/10 w-24" />

            <div className="space-y-6">
              <h3 className="font-display font-medium text-lg md:text-xl tracking-tight text-matte-black uppercase">
                "THE BODY IS NOT AN EMPTY CANVAS. IT HAS ALREADY BEEN SCULPTED BY LIFE, FLOW, AND TENSION. MY JOB IS TO BEAUTIFULLY CAPTURE THOSE CONTOURS."
              </h3>

              <p className="font-sans text-sm md:text-base leading-relaxed text-matte-black/70 font-light">
                Classically trained in fine illustration and anatomical layout, Shridhar transitioned into the skin medium to provide disciplined, architectural scale blackwork. He believes that every line must have weight, balance, and fine-line spatial awareness relative to real bodily anchors.
              </p>

              <p className="font-sans text-sm md:text-base leading-relaxed text-matte-black/70 font-light">
                As the leading force behind mist Tattoos, Shridhar has refined custom single-needle mechanics and dense black ink formulations to create works that remain crisp and retain their details over a lifetime. His premium approach guarantees that every custom layout is crafted collaboratively with absolute attention.
              </p>
            </div>

            {/* Micro-Philosophy indicators */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-matte-black/10">
              <div>
                <h4 className="font-display font-semibold text-xs tracking-wider uppercase mb-1">
                  I. GEOMETRIC INTEGRITY
                </h4>
                <p className="font-sans text-xs text-matte-black/60 font-light">
                  Aligning thin lines and complex shapes with skeletal and posture lines for dynamic symmetry.
                </p>
              </div>

              <div>
                <h4 className="font-display font-semibold text-xs tracking-wider uppercase mb-1">
                  II. ORGANIC BALANCE
                </h4>
                <p className="font-sans text-xs text-matte-black/60 font-light">
                  Utilizing optimal empty space and visual silence to let the anatomical ink breathe beautifully.
                </p>
              </div>
            </div>

            {/* View Portfolio Link */}
            <div className="pt-4">
              <a
                href="#gallery"
                className="inline-flex items-center space-x-2 border border-matte-black bg-matte-black text-warm-ivory px-6 py-3.5 text-xs uppercase tracking-widest hover:bg-transparent hover:text-matte-black transition-colors duration-300 font-sans font-medium"
              >
                <span>Explore Shridhar's Portfolio</span>
              </a>
            </div>
          </div>

          {/* Right Side: Professional Editorial Portrait framing */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center relative">
            <div className="relative w-full max-w-sm aspect-[3/4] border-2 border-red-600 p-4 bg-warm-ivory shadow-[0_0_30px_rgba(220,38,38,0.15)] hover:shadow-[0_0_40px_rgba(220,38,38,0.3)] transition-all duration-500">
              
              {/* Highlight experience badge overlaying the frame */}
              <div className="absolute -top-5 -left-5 bg-red-600 text-warm-ivory py-3 px-5 shadow-[0_0_25px_rgba(220,38,38,0.5)] z-20 flex flex-col items-center justify-center border border-red-500 animate-pulse [animation-duration:2s]">
                <div className="absolute -inset-0.5 rounded border border-white/20 pointer-events-none" />
                <span className="font-mono text-[8px] tracking-[0.2em] uppercase font-bold text-red-200">EXPERIENCE</span>
                <span className="font-display font-black text-3xl tracking-tight leading-none mt-1 text-white">15+ YRS</span>
                <span className="font-sans text-[7px] tracking-[0.1em] uppercase font-extrabold text-red-100 mt-1">MASTER INKED</span>
              </div>

              {/* Pulsing beacon next to the badge */}
              <div className="absolute top-2 right-2 flex items-center space-x-1.5 bg-red-600 text-white px-2 py-0.5 rounded text-[8px] font-mono tracking-wider font-bold uppercase shadow-md z-10">
                <span className="flex h-1.5 w-1.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
                </span>
                <span>ELITE ARTIST</span>
              </div>

              <div className="w-full h-full bg-matte-black overflow-hidden relative border border-matte-black/10">
                <img
                  src={artistImg}
                  alt="Shridhar - Tattoo Artist Portrait with 15+ years experience"
                  className="w-full h-full object-cover contrast-[1.05] brightness-100 transform transition-transform duration-700 hover:scale-102"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Outer caption overlay matching premium fashion publishing */}
              <div className="absolute right-8 bottom-8 bg-warm-ivory text-matte-black border border-matte-black px-4 py-2 font-mono text-[9px] tracking-widest uppercase z-10">
                RECORDED &copy; 2026/06
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
