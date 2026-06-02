/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import logoImg from "../assets/images/mist_tattoo_logo_1780399448720.png";

interface LogoProps {
  className?: string;
  inverse?: boolean;
}

export default function Logo({ className = "w-16 h-16", inverse = false }: LogoProps) {
  return (
    <img
      src={logoImg}
      alt="Mist Tattoo Studio"
      className={`${className} object-contain select-none rounded-full`}
      referrerPolicy="no-referrer"
    />
  );
}

