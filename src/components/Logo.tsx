/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface LogoProps {
  className?: string;
  inverse?: boolean;
}

export default function Logo({ className = "w-16 h-16", inverse = false }: LogoProps) {
  const textColor = inverse ? "#F5F2ED" : "#111111";
  const ringColor = inverse ? "#F5F2ED" : "#111111";
  const pathIdSuffix = React.useId().replace(/[^a-zA-Z0-9]/g, "");

  return (
    <svg
      viewBox="0 0 400 400"
      className={`${className} select-none`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Red dragon gradient */}
        <linearGradient id={`dragon-grad-${pathIdSuffix}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff1111" />
          <stop offset="60%" stopColor="#b30000" />
          <stop offset="100%" stopColor="#1a0000" />
        </linearGradient>

        {/* Paths for the curved texts */}
        {/* Top text path - clockwise arch */}
        <path
          id={`text-path-top-${pathIdSuffix}`}
          d="M 68 200 A 132 132 0 0 1 332 200"
          fill="none"
        />
        {/* Bottom text path - clockwise arch from bottom-left to bottom-right (meaning we start left, arch down, ends right) */}
        <path
          id={`text-path-bottom-${pathIdSuffix}`}
          d="M 72 200 A 128 128 0 0 0 328 200"
          fill="none"
        />
      </defs>

      {/* Main outer double border rings */}
      <circle cx="200" cy="200" r="190" fill="none" stroke={ringColor} strokeWidth="6" />
      <circle cx="200" cy="200" r="178" fill="none" stroke={ringColor} strokeWidth="1.5" />

      {/* Outer gothic/distressed ring border with flame-like jagged teeth pointing inwards & outwards */}
      <path
        d="M 200 35 C 180 35, 172 45, 160 38 C 148 31, 148 48, 134 43 C 120 38, 126 55, 110 52 C 94 49, 105 65, 91 66 C 77 67, 86 83, 74 88 C 62 93, 71 108, 62 116 C 53 124, 60 140, 53 150 C 46 160, 52 176, 48 188 C 44 200, 48 212, 48 212 L 40 216 L 49 224"
        fill="none"
        stroke={ringColor}
        strokeWidth="1"
        className="opacity-40"
      />
      
      {/* Dynamic distressed inner jagged flame ring (to give that brutalist/metal look) */}
      <g stroke={ringColor} fill="none" strokeWidth="2.5" className="opacity-85">
        <path d="M 200 48 L 195 56 L 202 59 L 187 63 L 185 54 L 178 64 L 163 64 L 167 73 L 152 79 L 148 70 L 141 81 L 128 84 L 132 93 L 118 101 L 111 93 L 107 106 L 96 112 L 102 119 L 90 131 L 81 123 L 81 138 L 73 148 L 81 154 L 71 169 L 63 162 L 67 178 L 62 191 L 71 195 L 63 211 L 56 206 L 62 223 L 61 238 L 70 238 L 66 255 L 75 264 L 70 274 L 81 278 L 81 291 L 91 292 L 91 306 L 101 305 L 105 318 L 115 313 L 123 325 L 130 317 L 141 327 L 148 318 L 161 326 L 168 316 L 182 322 L 188 311 L 200 315 L 212 311 L 218 322 L 232 316 L 239 326 L 252 318 L 259 327 L 270 317 L 277 325 L 285 313 L 295 318 L 299 305 L 309 306 L 309 292 L 319 291 L 319 278 L 330 274 L 325 264 L 334 255 L 330 238 L 339 238 L 338 223 L 344 206 L 337 211 L 329 195 L 338 191 L 333 178 L 337 162 L 329 169 L 319 154 L 327 148 L 319 138 L 319 123 L 310 131 L 298 119 L 304 112 L 293 106 L 289 93 L 282 101 L 268 93 L 272 84 L 259 81 L 252 70 L 248 79 L 233 73 L 237 64 L 222 64 L 215 54 L 213 63 L 198 59 Z" />
      </g>

      <circle cx="200" cy="200" r="115" fill="none" stroke={ringColor} strokeWidth="1.5" />

      {/* ================= CURVED TEXT LAYERS ================= */}
      {/* Top Text: CHIKMAGALUR */}
      <text className="font-display tracking-[0.25em] text-[27px] font-bold" fill={textColor}>
        <textPath href={`#text-path-top-${pathIdSuffix}`} startOffset="50%" textAnchor="middle">
          CHIKMAGALUR
        </textPath>
      </text>

      {/* Bottom Text: TATTOO STUDIO */}
      <text className="font-display tracking-[0.2em] text-[25px] font-bold" fill={textColor}>
        <textPath href={`#text-path-bottom-${pathIdSuffix}`} startOffset="50%" textAnchor="middle">
          TATTOO STUDIO
        </textPath>
      </text>

      {/* ================= MIDDLE ARTWORK LAYERS ================= */}
      {/* Left side: Gothic lettering "Mi" */}
      <g fill={textColor}>
        {/* Main "M" spike shaft */}
        <path d="M 125 152 L 144 153 L 141 185 L 146 153 L 157 153 C 158 170, 161 200, 155 242 L 151 242 C 149 210, 146 179, 145 170 C 144 179, 137 205, 133 218 L 129 218 L 122 173 C 121 180, 117 210, 115 250 L 110 250 C 114 200, 118 170, 119 152 Z" />
        {/* Needle-like gothic point extensions on M */}
        <path d="M 119 152 L 125 140 L 125 152 Z" />
        <path d="M 146 153 L 152 141 L 152 153 Z" />
        {/* Slashed decorative bar */}
        <path d="M 106 177 L 162 177 L 160 182 L 108 182 Z" />
        {/* Small "i" next to M */}
        <path d="M 166 182 L 175 182 L 171 215 L 165 215 Z" />
        <circle cx="171" cy="172" r="4.5" />
      </g>

      {/* Center: STYLIZED DRAGON (S-shape symbol) */}
      <g>
        {/* Red and Black dragon with premium spikes/horns */}
        <path
          d="M 235 155 
             C 215 150, 195 160, 190 180 
             C 185 195, 200 210, 215 215 
             C 235 220, 260 225, 255 255 
             C 250 275, 225 295, 195 285 
             C 210 280, 225 270, 220 255 
             C 215 240, 190 235, 180 215 
             C 170 195, 185 170, 215 162 
             C 225 160, 235 165, 235 155 Z"
          fill={`url(#dragon-grad-${pathIdSuffix})`}
          stroke="#000000"
          strokeWidth="1.5"
        />

        {/* Tail spikes & fire wings */}
        <path
          d="M 195 285 
             C 190 282, 185 275, 185 268 
             C 185 258, 202 262, 198 250 
             C 192 258, 178 248, 175 238
             C 173 248, 168 253, 162 250
             C 172 260, 168 272, 178 280
             C 182 285, 188 287, 195 285 Z"
          fill={`url(#dragon-grad-${pathIdSuffix})`}
          stroke="#000000"
          strokeWidth="1"
        />

        {/* Dragon Head with detailed horns */}
        {/* Upper horn */}
        <path
          d="M 235 155 C 248 148, 258 135, 250 120 C 242 135, 238 146, 235 155 Z"
          fill={`url(#dragon-grad-${pathIdSuffix})`}
          stroke="#000000"
          strokeWidth="1"
        />
        {/* Lower snout / jaw */}
        <path
          d="M 245 165 C 262 165, 275 178, 280 188 C 265 182, 252 174, 245 165 Z"
          fill={`url(#dragon-grad-${pathIdSuffix})`}
          stroke="#000000"
          strokeWidth="1"
        />
        {/* Back neck spikes */}
        <path
          d="M 215 162 C 218 152, 224 145, 222 138 C 216 148, 215 155, 215 162 Z"
          fill={`url(#dragon-grad-${pathIdSuffix})`}
          stroke="#000000"
          strokeWidth="1"
        />
        
        {/* Glowing Dragon Eye */}
        <circle cx="244" cy="158" r="2.5" fill="#ffffff" />
      </g>

      {/* Right side: Stylized Dagger Cross "sT" */}
      <g fill={textColor}>
        {/* Cross center blade */}
        <path d="M 298 165 L 302 165 L 302 245 L 298 245 Z" />
        {/* Cross upper point */}
        <path d="M 300 152 L 303 166 L 297 166 Z" />
        {/* Cross guard bar (horizontal spikes) */}
        <path d="M 285 175 C 290 174, 310 174, 315 175 L 315 178 C 310 179, 290 179, 285 178 Z" />
        {/* Right side cross-guard dagger point */}
        <path d="M 315 175 L 325 176.5 L 315 178 Z" />
        {/* Left side cross-guard dagger point */}
        <path d="M 285 175 L 275 176.5 L 285 178 Z" />
        {/* Distressed dagger/cross center ornament drops */}
        <path d="M 297 195 Q 294 205, 296 215 L 300 215 Z" />
        <path d="M 303 195 Q 306 205, 304 215 L 300 215 Z" />
      </g>
    </svg>
  );
}
