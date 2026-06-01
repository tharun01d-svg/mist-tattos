/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface GalleryItem {
  id: string;
  title: string;
  category: "fine-line" | "blackwork" | "minimalist" | "all";
  imageUrl: string;
  dimensions: string;
  placement: string;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  quote: string;
  date: string;
}

export interface BookingSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  whatsapp: boolean;
  date: string;
  timeSlot: string;
  artistPreference: string;
  description: string;
  status: "pending" | "confirmed";
  createdAt: string;
}
