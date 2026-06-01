/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, User, Clock, Trash2, ShieldAlert } from "lucide-react";
import { BookingSubmission } from "../types";

interface BookingDashboardProps {
  isOpen: boolean;
  onClose: () => void;
  bookings: BookingSubmission[];
  onCancelBooking: (id: string) => void;
}

export default function BookingDashboard({
  isOpen,
  onClose,
  bookings,
  onCancelBooking,
}: BookingDashboardProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay mask */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#000000] z-50 cursor-pointer"
            onClick={onClose}
          />

          {/* Slide-out Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full sm:max-w-md bg-warm-ivory text-matte-black shadow-2xl z-50 flex flex-col justify-between border-l border-matte-black/10"
          >
            {/* Header */}
            <div className="p-6 md:p-8 border-b border-matte-black/10 flex justify-between items-center bg-warm-ivory">
              <div>
                <span className="text-[10px] tracking-[0.3em] uppercase text-matte-black/50 font-bold">
                  MIST ATELIER PORTAL
                </span>
                <h3 className="font-display text-lg tracking-wider uppercase font-semibold mt-1">
                  Active Schedules
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-matte-black/5 rounded-full text-matte-black transition-colors"
                aria-label="Close panel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* List Body */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
              {bookings.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-20">
                  <div className="w-10 h-10 border border-matte-black/10 flex items-center justify-center rounded-full opacity-40">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xs uppercase tracking-wider mb-1">
                      No Active Records
                    </h4>
                    <p className="font-sans text-xs text-matte-black/60 max-w-xs mx-auto leading-relaxed font-light">
                      Submit a consultation request using our booking form below to secure your private physical review.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      onClose();
                      const contactEl = document.getElementById("contact");
                      contactEl?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="border border-matte-black px-6 py-2.5 text-[10px] uppercase tracking-widest hover:bg-matte-black hover:text-warm-ivory transition-all"
                  >
                    Configure Draft
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  <p className="font-sans text-[11px] text-matte-black/55 uppercase tracking-wider">
                    Total Secure Registries: {bookings.length}
                  </p>
                  
                  {bookings.map((booking) => (
                    <div
                      key={booking.id}
                      className="border border-matte-black/10 bg-warm-ivory p-6 space-y-4 hover:border-matte-black/25 transition-all relative group"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="text-[9px] tracking-widest text-[#5c5c5c] font-mono">
                            ID: {booking.id.toUpperCase()}
                          </span>
                          <h4 className="font-display font-bold text-sm uppercase text-matte-black mt-1">
                            {booking.name}
                          </h4>
                          <span className="inline-block text-[9px] font-sans font-bold tracking-widest text-warm-ivory bg-matte-black px-2 py-0.5 uppercase mt-1 rounded-sm">
                            {booking.status}
                          </span>
                        </div>

                        {/* Cancel Button */}
                        <button
                          onClick={() => onCancelBooking(booking.id)}
                          className="p-2 hover:bg-red-50 text-matte-black/40 hover:text-red-700 transition-colors border border-matte-black/5 hover:border-red-200"
                          title="Withdraw schedule"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Schedule Summary details */}
                      <div className="space-y-2.5 pt-4 border-t border-matte-black/5 text-xs">
                        <div className="flex items-center space-x-2 text-matte-black/75">
                          <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
                          <span className="font-mono text-[11px]">{booking.date}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-matte-black/75">
                          <Clock className="w-3.5 h-3.5 flex-shrink-0" />
                          <span className="font-mono text-[11px]">{booking.timeSlot}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-matte-black/75">
                          <User className="w-3.5 h-3.5 flex-shrink-0" />
                          <span className="font-sans text-[11px]">Preference: {booking.artistPreference}</span>
                        </div>
                      </div>

                      {/* Brief Idea summary preview */}
                      <div className="p-3 bg-matte-black/5 text-[11px] leading-relaxed text-matte-black/70 font-light border-l-2 border-matte-black">
                        "{booking.description.slice(0, 100)}
                        {booking.description.length > 100 ? "..." : ""}"
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer Rules */}
            <div className="p-6 md:p-8 border-t border-matte-black/10 bg-warm-ivory space-y-4">
              <div className="flex items-start space-x-3 text-matte-black/70">
                <ShieldAlert className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <p className="font-sans text-[10px] leading-relaxed font-light">
                  <strong>MODIFICATION POLICIES:</strong> If you need to make changes to your coordinates or shift your time slot, 
                  please click the WhatsApp support button below page to directly communicate with Atelier admin.
                </p>
              </div>
              
              <button
                onClick={onClose}
                className="w-full text-center py-4 bg-matte-black text-warm-ivory text-xs uppercase tracking-widest font-semibold hover:opacity-90 transition-opacity"
              >
                Close Portal
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
