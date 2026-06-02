/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { BookingSubmission } from "./types";

// Import all custom premium sections
import Header from "./components/Header";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import Artist from "./components/Artist";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import BookingDashboard from "./components/BookingDashboard";
import Footer from "./components/Footer";
import FloatingInstagram from "./components/FloatingInstagram";
import BestTattoosPopup from "./components/BestTattoosPopup";

export default function App() {
  const [bookings, setBookings] = useState<BookingSubmission[]>([]);
  const [isPortalOpen, setIsPortalOpen] = useState(false);

  // Initialize and load schedule items from localStorage safely
  useEffect(() => {
    try {
      const cached = localStorage.getItem("mist_tattoos_bookings");
      if (cached) {
        setBookings(JSON.parse(cached));
      }
    } catch (e) {
      console.error("Failed loading booking cache:", e);
    }
  }, []);

  // Save changes to localStorage
  const saveBookings = (updated: BookingSubmission[]) => {
    setBookings(updated);
    try {
      localStorage.setItem("mist_tattoos_bookings", JSON.stringify(updated));
    } catch (e) {
      console.error("Failed saving booking cache:", e);
    }
  };

  // Add booking submission with unique safe details
  const handleAddBooking = (
    newBooking: Omit<BookingSubmission, "id" | "status" | "createdAt">
  ) => {
    const fresh: BookingSubmission = {
      ...newBooking,
      id: `mst-${Math.random().toString(36).substring(2, 8)}`,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    const updatedList = [fresh, ...bookings];
    saveBookings(updatedList);
    
    // Automatically open the sliding Portal Drawer so the client sees their success
    setTimeout(() => {
      setIsPortalOpen(true);
    }, 1500);
  };

  // Cancel booking with instant cache removal
  const handleCancelBooking = (id: string) => {
    const updatedList = bookings.filter((b) => b.id !== id);
    saveBookings(updatedList);
  };

  return (
    <div className="relative min-h-screen bg-warm-ivory text-matte-black selection:bg-matte-black selection:text-warm-ivory overflow-x-hidden">
      {/* 1. Universal Floating Brand Header */}
      <Header
        onOpenBooking={() => setIsPortalOpen(true)}
        bookingCount={bookings.length}
      />

      {/* 2. Full-screen Immersive Widescreen Hero */}
      <Hero onOpenBooking={() => setIsPortalOpen(true)} />

      {/* 4. Asymmetrical Masonry Portfolio (Matte Black block) */}
      <Gallery />

      {/* 4.5. Specialized Services Offerings */}
      <Services />

      {/* 5. Artist Portrait Frame & Chronology (Off-white canvas) */}
      <Artist />

      {/* 6. Studio Cleanliness & Standards (Matte Black block) */}
      <Experience />

      {/* 7. Client Reviews Grid (Off-white canvas) */}
      <Testimonials />

      {/* 9. Booking Center & Coordinate Details (Matte Black block) */}
      <Contact onAddBooking={handleAddBooking} />

      {/* 9. Standalone Luxury Footer Frame */}
      <Footer />

      {/* 10. Slide-out Client Action Dashboard Panel */}
      <BookingDashboard
        isOpen={isPortalOpen}
        onClose={() => setIsPortalOpen(false)}
        bookings={bookings}
        onCancelBooking={handleCancelBooking}
      />

      {/* 11. Custom Floating Social Interaction Badges */}
      <FloatingInstagram />

      {/* 12. Best Tattoos of the Month Interactive Popup Badge */}
      <BestTattoosPopup />
    </div>
  );
}
