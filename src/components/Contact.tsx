/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, MapPin, MessageSquare, Check, AlertCircle } from "lucide-react";
import { BookingSubmission } from "../types";

interface ContactProps {
  onAddBooking: (booking: Omit<BookingSubmission, "id" | "status" | "createdAt">) => void;
}

export default function Contact({ onAddBooking }: ContactProps) {
  // Form States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState(true);
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [artistPreference, setArtistPreference] = useState("Shridhar");
  const [description, setDescription] = useState("");
  
  // Interaction & Status States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // Minimal elegant validation strictly using monochrome indicators
    if (!name.trim() || !email.trim() || !phone.trim() || !date || !timeSlot || !description.trim()) {
      setErrorMsg("ALL PRIMARY CHARACTERISTICS ARE MANDATORY.");
      return;
    }

    setIsSubmitting(true);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      // If no key is set yet, we will log a warning and fallback gracefully to local dashboard booking persistence so they can continue testing.
      console.warn("VITE_WEB3FORMS_ACCESS_KEY is not defined. Falling back to reservation simulation.");
      
      setTimeout(() => {
        onAddBooking({
          name,
          email,
          phone,
          whatsapp,
          date,
          timeSlot,
          artistPreference,
          description,
        });
        setIsSubmitting(false);
        setSuccess(true);
        
        // Clear form
        setName("");
        setEmail("");
        setPhone("");
        setDate("");
        setTimeSlot("");
        setDescription("");
      }, 1200);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Consultation Proposal - mist Tattoos [Name: ${name}]`,
          from_name: "mist Tattoos Portal",
          name: name,
          email: email,
          phone: phone,
          whatsapp: whatsapp ? "Enabled" : "Disabled",
          artist_preference: artistPreference,
          preferred_date: date,
          time_slot: timeSlot,
          description: description
        })
      });

      const data = await response.json();

      if (data.success) {
        onAddBooking({
          name,
          email,
          phone,
          whatsapp,
          date,
          timeSlot,
          artistPreference,
          description,
        });
        setIsSubmitting(false);
        setSuccess(true);
        
        // Clear form
        setName("");
        setEmail("");
        setPhone("");
        setDate("");
        setTimeSlot("");
        setDescription("");
      } else {
        throw new Error(data.message || "Failed transmission response from Web3Forms.");
      }
    } catch (err: any) {
      console.error("Web3Forms transmission error:", err);
      setErrorMsg(err.message || "UNABLE TO TRANSMIT PROPOSAL. PLEASE TRY AGAIN.");
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppRedirect = () => {
    // Beautiful clean WhatsApp API bridge
    const message = encodeURIComponent("Hello mist Tattoos, I would like to schedule a custom luxury consultation.");
    window.open(`https://wa.me/919632557189?text=${message}`, "_blank");
  };

  return (
    <section
      id="contact"
      className="bg-matte-black text-warm-ivory py-28 md:py-36 border-b border-warm-ivory/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Label */}
        <div className="mb-16">
          <p className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-warm-ivory/60 mb-4 font-medium">
            [ 06 &bull; DIGITAL PORTAL ]
          </p>
          <h2 className="font-display font-light text-4xl md:text-6xl tracking-tight uppercase text-warm-ivory">
            BOOKING &amp; LOCATION
          </h2>
        </div>

        {/* Dynamic Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24 items-start">
          {/* Left Column: Direct contact info & Atelier guidelines */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <h3 className="font-display font-light text-2xl tracking-wide uppercase text-warm-ivory">
                THE ATELIER AT CHIKMAGALUR
              </h3>
              <p className="font-sans text-xs md:text-sm text-warm-ivory/70 leading-relaxed font-light">
                Our workshop functions exclusively on a private, pre-arranged basis. 
                We do not permit walk-in viewings to maintain absolute sterile parameters 
                and creative solitude for the actively inked client.
              </p>
            </div>

            {/* Structured Info Rows */}
            <div className="space-y-6 pt-6 border-t border-warm-ivory/10">
              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-warm-ivory/80 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-display font-bold text-xs tracking-wider uppercase mb-1">
                    ATELIER COORDINATES
                  </h4>
                  <p className="font-sans text-xs text-warm-ivory/70 leading-relaxed font-light">
                    2nd Floor, Near Sangitha Mobiles, MG Rd,<br />
                    opp. Namma Angadi, Chikkamagaluru,<br />
                    Karnataka - 577101
                  </p>
                  <p className="font-mono text-[10px] text-warm-ivory/40 uppercase mt-1">
                    MAP CODE: 8QFF+8M Chikkamagaluru
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-5 h-5 text-warm-ivory/80 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-display font-bold text-xs tracking-wider uppercase mb-1">
                    DIRECT VOICE LINK
                  </h4>
                  <a href="tel:+919632557189" className="font-mono text-sm text-warm-ivory/80 hover:text-warm-ivory hover:underline transition-all">
                    +91 96325 57189
                  </a>
                  <p className="font-sans text-[10px] text-warm-ivory/40 uppercase mt-0.5">
                    Monday to Saturday, 10:00 &mdash; 19:00 IST
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MessageSquare className="w-5 h-5 text-warm-ivory/80 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-display font-bold text-xs tracking-wider uppercase mb-1">
                    INSTANT CHAT INTERACTION
                  </h4>
                  <p className="font-sans text-xs text-warm-ivory/70 leading-relaxed font-light mb-3">
                    Connect organically with Shridhar and our studio coordinators via encrypted WhatsApp.
                  </p>
                  
                  {/* WhatsApp button - strictly warm ivory & matte black, NO bright neon colors */}
                  <button
                    onClick={handleWhatsAppRedirect}
                    className="flex items-center space-x-2 border border-warm-ivory px-5 py-2.5 text-[10px] uppercase tracking-widest hover:bg-warm-ivory hover:text-matte-black transition-colors duration-300 font-sans font-medium outline-none cursor-pointer"
                  >
                    <span>Connect on WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Interactive Grayscale Premium Map Iframe */}
            <div className="pt-6 border-t border-warm-ivory/10 space-y-3">
              <h4 className="font-display font-bold text-xs tracking-wider uppercase">
                SITE NAVIGATION MAP
              </h4>
              <div className="relative border border-warm-ivory/15 h-56 w-full overflow-hidden bg-[#161616]">
                <iframe
                  title="mist Tattoos Map Location"
                  src="https://maps.google.com/maps?q=8QFF%2B8M%20Chikkamagaluru%20Karnataka&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 grayscale brightness-[0.35] invert contrast-[1.4] transition-all duration-700 hover:brightness-[0.4] hover:contrast-[1.25]"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                
                <a 
                  href="https://maps.app.goo.gl/5o5VGzuRU2aBkFht9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 bg-matte-black text-warm-ivory border border-warm-ivory/20 px-3 py-1 font-mono text-[9px] tracking-widest uppercase hover:bg-warm-ivory hover:text-matte-black transition-all"
                >
                  OPEN GOOGLE MAPS
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Premium Booking Form */}
          <div className="lg:col-span-7 bg-[#151515] border border-warm-ivory/10 p-8 md:p-10">
            <h3 className="font-display font-light text-xl tracking-wider uppercase mb-8 pb-4 border-b border-warm-ivory/10 text-warm-ivory">
              CONSULTATION PROPOSAL
            </h3>

            <AnimatePresence mode="wait">
              {success ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-16 text-center space-y-6"
                >
                  <div className="w-12 h-12 bg-warm-ivory rounded-full flex items-center justify-center text-matte-black select-none border border-warm-ivory">
                    <Check className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-display font-medium text-lg uppercase tracking-wider text-warm-ivory">
                      PROPOSAL RECORDED
                    </h4>
                    <p className="font-sans text-xs text-warm-ivory/70 max-w-sm mx-auto leading-relaxed font-light">
                      Your consultation details have been secured. If you scroll to the top of our page, 
                      you can review your active schedule details in the dashboard.
                    </p>
                  </div>
                  <button
                    onClick={() => setSuccess(false)}
                    className="border border-warm-ivory/50 px-6 py-2.5 text-[10px] uppercase tracking-widest text-warm-ivory hover:border-warm-ivory transition-colors"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMsg && (
                    <div className="flex items-center space-x-3 border border-warm-ivory/30 bg-[#1e1414] p-4 text-xs font-sans text-warm-ivory tracking-wider uppercase font-semibold">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="flex flex-col space-y-2">
                      <label className="font-sans text-[9px] tracking-widest uppercase text-warm-ivory/50 font-bold">
                        FULL CANVAS NAME *
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Clara Vance"
                        className="bg-matte-black text-warm-ivory border border-warm-ivory/20 px-4 py-3 text-xs tracking-wider outline-none focus:border-warm-ivory transition-colors placeholder:text-warm-ivory/25"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col space-y-2">
                      <label className="font-sans text-[9px] tracking-widest uppercase text-warm-ivory/50 font-bold">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. vance@architectur.ch"
                        className="bg-matte-black text-warm-ivory border border-warm-ivory/20 px-4 py-3 text-xs tracking-wider outline-none focus:border-warm-ivory transition-colors placeholder:text-warm-ivory/25"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div className="flex flex-col space-y-2">
                      <label className="font-sans text-[9px] tracking-widest uppercase text-warm-ivory/50 font-bold">
                        MOBILE LINK *
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +91 96325 57189"
                        className="bg-matte-black text-warm-ivory border border-warm-ivory/20 px-4 py-3 text-xs tracking-wider outline-none focus:border-warm-ivory transition-colors placeholder:text-warm-ivory/25"
                        required
                      />
                    </div>

                    {/* Artist Option */}
                    <div className="flex flex-col space-y-2">
                      <label className="font-sans text-[9px] tracking-widest uppercase text-warm-ivory/50 font-bold">
                        ARTIST PREFERENCE
                      </label>
                      <select
                        value={artistPreference}
                        onChange={(e) => setArtistPreference(e.target.value)}
                        className="bg-matte-black text-warm-ivory border border-warm-ivory/20 px-4 py-3 text-xs tracking-wider outline-none focus:border-warm-ivory transition-colors cursor-pointer"
                      >
                        <option value="Shridhar">Shridhar (Founder &bull; Geometric Line)</option>
                        <option value="Private Atelier Guest">Atelier Guest Residencies (Blackwork)</option>
                        <option value="Open Collaboration">Joint Study Studio Collaboration</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Preffered Date */}
                    <div className="flex flex-col space-y-2">
                      <label className="font-sans text-[9px] tracking-widest uppercase text-warm-ivory/50 font-bold">
                        PREFERRED CONTOUR STUDY DATE *
                      </label>
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="bg-matte-black text-warm-ivory border border-warm-ivory/20 px-4 py-3 text-xs tracking-wider outline-none focus:border-warm-ivory transition-colors cursor-pointer"
                        required
                      />
                    </div>

                    {/* Preffered Time Slot */}
                    <div className="flex flex-col space-y-2">
                      <label className="font-sans text-[9px] tracking-widest uppercase text-warm-ivory/50 font-bold">
                        TEMPORAL FRAME SLOAN *
                      </label>
                      <select
                        value={timeSlot}
                        onChange={(e) => setTimeSlot(e.target.value)}
                        className="bg-matte-black text-warm-ivory border border-warm-ivory/20 px-4 py-3 text-xs tracking-wider outline-none focus:border-warm-ivory transition-colors cursor-pointer"
                        required
                      >
                        <option value="">Choose Time...</option>
                        <option value="10:00 - 11:30">Morning Pivot (10:00 &mdash; 11:30)</option>
                        <option value="13:30 - 15:00">Mid-Day Study (13:30 &mdash; 15:00)</option>
                        <option value="16:00 - 17:30">Twilight Convergence (16:00 &mdash; 17:30)</option>
                      </select>
                    </div>
                  </div>

                  {/* Desc */}
                  <div className="flex flex-col space-y-2">
                    <label className="font-sans text-[9px] tracking-widest uppercase text-warm-ivory/50 font-bold">
                      PROJECT DESCRIPTION *
                    </label>
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Outline your layout idea, general physical location on body, approximate scale (cm), and narrative background."
                      rows={4}
                      className="bg-matte-black text-warm-ivory border border-warm-ivory/20 px-4 py-3 text-xs tracking-wider outline-none focus:border-warm-ivory transition-colors placeholder:text-warm-ivory/25 resize-none leading-relaxed"
                      required
                    />
                  </div>

                  {/* WhatsApp opt-in */}
                  <div className="flex items-center space-x-3 pt-2">
                    <input
                      type="checkbox"
                      id="whatsapp-toggle"
                      checked={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.checked)}
                      className="w-4 h-4 bg-matte-black border border-warm-ivory/20 text-matte-black rounded focus:ring-0 checked:bg-warm-ivory checked:border-warm-ivory cursor-pointer"
                    />
                    <label htmlFor="whatsapp-toggle" className="font-sans text-[10px] tracking-wider uppercase text-warm-ivory/60 cursor-pointer select-none">
                      Synchronize with secure voice &amp; WhatsApp communication line
                    </label>
                  </div>

                  {/* Submit button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center space-x-2 border border-warm-ivory py-4 text-xs uppercase tracking-[0.25em] bg-warm-ivory text-matte-black hover:bg-transparent hover:text-warm-ivory transition-colors duration-500 font-sans cursor-pointer font-medium outline-none disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>TRANSMITTING DETAILS...</span>
                      ) : (
                        <span>TRANSMIT PROPOSAL</span>
                      )}
                    </button>
                  </div>

                  {!import.meta.env.VITE_WEB3FORMS_ACCESS_KEY && (
                    <div className="mt-4 border border-warm-ivory/10 p-3 bg-matte-black/40 text-[10px] text-warm-ivory/40 tracking-wider leading-relaxed font-light font-sans text-center">
                      [ WEB3FORMS NOTICE ] : SET <span className="text-warm-ivory/60 font-medium">VITE_WEB3FORMS_ACCESS_KEY</span> IN SECRETS TO ROUTE EMAILS TO YOUR PREFERRED INBOX. ACTIONS TAKEN NOW SIMULATE RESERVATIONS LOCALLY.
                    </div>
                  )}
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
