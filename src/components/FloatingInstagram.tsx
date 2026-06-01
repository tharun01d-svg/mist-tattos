/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Instagram, MessageCircle } from "lucide-react";

export default function FloatingInstagram() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello mist Tattoos, I would like to schedule a custom luxury consultation.");
    window.open(`https://wa.me/919632557189?text=${message}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3 items-end">
      {/* WhatsApp Floating Action */}
      <motion.button
        onClick={handleWhatsAppClick}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-matte-black text-warm-ivory border border-warm-ivory/20 shadow-xl hover:bg-warm-ivory hover:text-matte-black hover:border-matte-black transition-colors duration-300 group cursor-pointer"
        title="Direct WhatsApp Query"
        id="floating-whatsapp-trigger"
      >
        <MessageCircle className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
      </motion.button>

      {/* Instagram Floating Action */}
      <motion.a
        href="https://www.instagram.com/mist_tattoo_chikmagalur/"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-matte-black text-warm-ivory border border-warm-ivory/20 shadow-xl hover:bg-warm-ivory hover:text-matte-black hover:border-matte-black transition-colors duration-300 group"
        title="Follow us on Instagram"
        id="floating-instagram-trigger"
      >
        <Instagram className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
      </motion.a>
    </div>
  );
}
