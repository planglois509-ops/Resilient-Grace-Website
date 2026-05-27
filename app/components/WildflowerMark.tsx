"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * A simplified, hand-drawn wildflower SVG echoing the brand logo.
 * Renders with a draw-in animation by default. Used decoratively
 * across the page; not a substitute for the brand logo file.
 */
export function WildflowerMark({
  className = "",
  delay = 0.2,
  scale = 1,
}: {
  className?: string;
  delay?: number;
  scale?: number;
}) {
  const reduce = useReducedMotion();
  const draw = (d: number) => ({
    initial: reduce ? {} : { pathLength: 0, opacity: 0 },
    animate: reduce
      ? {}
      : {
          pathLength: 1,
          opacity: 1,
          transition: { duration: 2.6, delay: delay + d, ease: "easeInOut" },
        },
  });

  return (
    <svg
      viewBox="0 0 240 280"
      className={className}
      style={{ width: 240 * scale, height: 280 * scale }}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {/* Main stem */}
      <motion.path
        d="M120 280 C120 240 118 200 116 160"
        stroke="#24585E"
        {...draw(0)}
      />
      {/* Main flower petals */}
      <motion.path
        d="M116 160 C92 138 84 110 96 86 C108 70 132 70 144 86 C156 110 148 138 116 160 Z"
        stroke="#867BA3"
        {...draw(0.4)}
      />
      <motion.path
        d="M116 156 C100 152 86 148 80 130 C76 116 88 102 104 108 C112 116 116 134 116 156 Z"
        stroke="#867BA3"
        {...draw(0.7)}
      />
      <motion.path
        d="M116 156 C132 152 146 148 152 130 C156 116 144 102 128 108 C120 116 116 134 116 156 Z"
        stroke="#867BA3"
        {...draw(0.7)}
      />
      {/* Center */}
      <motion.circle cx="116" cy="124" r="8" stroke="#FEB0A0" {...draw(1.4)} />
      <motion.circle cx="116" cy="124" r="3" fill="#FEB0A0" stroke="#FEB0A0" {...draw(1.7)} />
      {/* Left bud */}
      <motion.path
        d="M70 200 C60 190 56 178 64 168 C72 162 84 168 84 180 C84 192 78 202 70 200 Z"
        stroke="#FEB0A0"
        {...draw(1.0)}
      />
      <motion.path
        d="M76 198 L100 232"
        stroke="#24585E"
        {...draw(1.1)}
      />
      {/* Leaves */}
      <motion.path
        d="M118 232 C100 224 88 232 84 244 C96 248 110 244 118 232 Z"
        stroke="#24585E"
        {...draw(0.8)}
      />
      <motion.path
        d="M118 250 C136 244 150 252 154 264 C140 268 126 262 118 250 Z"
        stroke="#24585E"
        {...draw(0.95)}
      />
      {/* Right buds stalk */}
      <motion.path
        d="M168 244 C176 220 188 200 196 184"
        stroke="#867BA3"
        {...draw(1.1)}
      />
      <motion.circle cx="186" cy="208" r="4" stroke="#867BA3" {...draw(1.3)} />
      <motion.circle cx="194" cy="190" r="3.5" stroke="#867BA3" {...draw(1.45)} />
      <motion.circle cx="178" cy="226" r="3.5" stroke="#867BA3" {...draw(1.6)} />
    </svg>
  );
}
