/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Review } from "../types";
import { Star } from "lucide-react";

const REVIEWS: Review[] = [
  {
    id: "rev-1",
    name: "VISHWAJITH KUMAR",
    location: "VERIFIED GOOGLE REVIEW",
    quote: "Worth every paisa,u will never find a better tattoo artist than this place,i repeat u won't,just go and get inked,one of the best portraits art u can only see in mist,not chikmagalur,but i can say this the most affordable yet the best place ...",
    date: "2 YEARS AGO",
  },
  {
    id: "rev-2",
    name: "NAYANA MADHU D K",
    location: "VERIFIED GOOGLE REVIEW",
    quote: "Am very well pleased,,entirely happy...for diz magnificent band tattoo ..spectacular tattooist n a good communication it made me feel much comfort...Too Clean n tidy n hygiene shop ...one f d best tattooist shop in chikmanglore...thank you so much fo diz fab tattoo 😊 Big thanks to MIST TATTOO 😊 ...",
    date: "5 YEARS AGO",
  },
  {
    id: "rev-3",
    name: "KAMPANA GOWDA",
    location: "LOCAL GUIDE &bull; GOOGLE REVIEW",
    quote: "Got our first matching tattoo, must say one of the best place with, hygienic & professional work ❤️ Happy with there work 😊 ...",
    date: "3 YEARS AGO",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-warm-ivory text-matte-black py-28 md:py-36 border-b border-matte-black/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="mb-16">
          <p className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-matte-black/60 mb-4 font-medium">
            [ 05 &bull; CLIENT RECORDS ]
          </p>
          <h2 className="font-display font-light text-4xl md:text-6xl tracking-tight uppercase text-matte-black">
            CLIENT COLLECTIVE
          </h2>
        </div>

        {/* Minimal Editorial Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="flex flex-col justify-between border border-matte-black/10 p-8 min-h-[340px] bg-warm-ivory hover:border-matte-black/30 transition-colors duration-300"
            >
              <div>
                {/* 5 Star Rating Row */}
                <div className="flex gap-1 mb-6 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>

                {/* Quote Body with elegant italic/standard modern fashion typography */}
                <p className="font-sans text-sm md:text-base leading-relaxed text-matte-black/80 font-light italic mb-8">
                  "{rev.quote}"
                </p>
              </div>

              {/* Author Footer Info */}
              <div className="pt-6 border-t border-matte-black/10 flex justify-between items-end">
                <div>
                  <h4 className="font-display font-bold text-xs tracking-widest uppercase">
                    {rev.name}
                  </h4>
                  <p 
                    className="font-sans text-[9px] tracking-widest text-matte-black/50 uppercase mt-1"
                    dangerouslySetInnerHTML={{ __html: rev.location }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
