"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Site-wide MotionConfig.
 * `reducedMotion="user"` honors the visitor's OS preference. When reduce-motion
 * is on, framer-motion skips transitions but still snaps to the final state —
 * so static content remains visible for users with that setting.
 */
export function MotionRoot({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ ease: [0.21, 0.61, 0.35, 1] }}>
      {children}
    </MotionConfig>
  );
}
