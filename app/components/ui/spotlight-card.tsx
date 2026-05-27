"use client";

import React, { useEffect, useRef, ReactNode } from "react";

type GlowColor =
  | "amethyst"
  | "bloom"
  | "cypress"
  | "midnight"
  | "blue"
  | "purple"
  | "green"
  | "red"
  | "orange";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: GlowColor;
  size?: "sm" | "md" | "lg";
  width?: string | number;
  height?: string | number;
  customSize?: boolean;
}

// Tuned for the Resilient Grace palette.
// amethyst (#867BA3) → hue ~256, bloom (#FEB0A0) → hue ~11,
// cypress (#24585E) → hue ~187, midnight (#032D3D) → hue ~197.
const glowColorMap: Record<GlowColor, { base: number; spread: number; saturation: number; lightness: number }> = {
  amethyst: { base: 256, spread: 60, saturation: 38, lightness: 72 },
  bloom:    { base: 11,  spread: 30, saturation: 95, lightness: 78 },
  cypress:  { base: 187, spread: 40, saturation: 50, lightness: 60 },
  midnight: { base: 197, spread: 30, saturation: 80, lightness: 18 },
  blue:     { base: 220, spread: 200, saturation: 100, lightness: 70 },
  purple:   { base: 280, spread: 300, saturation: 100, lightness: 70 },
  green:    { base: 120, spread: 200, saturation: 100, lightness: 70 },
  red:      { base: 0,   spread: 200, saturation: 100, lightness: 70 },
  orange:   { base: 30,  spread: 200, saturation: 100, lightness: 70 },
};

const sizeMap = {
  sm: "w-48 h-64",
  md: "w-64 h-80",
  lg: "w-80 h-96",
};

export const GlowCard: React.FC<GlowCardProps> = ({
  children,
  className = "",
  glowColor = "amethyst",
  size = "md",
  width,
  height,
  customSize = false,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const syncPointer = (e: PointerEvent) => {
      const { clientX: x, clientY: y } = e;
      if (cardRef.current) {
        cardRef.current.style.setProperty("--x", x.toFixed(2));
        cardRef.current.style.setProperty(
          "--xp",
          (x / window.innerWidth).toFixed(2)
        );
        cardRef.current.style.setProperty("--y", y.toFixed(2));
        cardRef.current.style.setProperty(
          "--yp",
          (y / window.innerHeight).toFixed(2)
        );
      }
    };
    document.addEventListener("pointermove", syncPointer);
    return () => document.removeEventListener("pointermove", syncPointer);
  }, []);

  const { base, spread, saturation, lightness } = glowColorMap[glowColor];

  const getSizeClasses = () => (customSize ? "" : sizeMap[size]);

  const getInlineStyles = () => {
    const baseStyles: React.CSSProperties & Record<string, string | number> = {
      "--base": base,
      "--spread": spread,
      "--saturation": saturation,
      "--lightness": lightness,
      "--radius": "28",
      "--border": "1.5",
      // Transparent white surface — luminous against violet background.
      "--backdrop": "hsl(0 0% 100% / 0.62)",
      "--backup-border": "hsl(0 0% 100% / 0.55)",
      "--size": "360",
      "--outer": "1",
      "--bg-spot-opacity": "0.22",
      "--border-spot-opacity": "0.9",
      "--border-light-opacity": "0.8",
      "--border-size": "calc(var(--border, 2) * 1px)",
      "--spotlight-size": "calc(var(--size, 150) * 1px)",
      "--hue": "calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))",
      backgroundImage: `radial-gradient(
        var(--spotlight-size) var(--spotlight-size) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 70) * 1%) / var(--bg-spot-opacity, 0.1)), transparent
      )`,
      backgroundColor: "var(--backdrop, transparent)",
      backgroundSize:
        "calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)))",
      backgroundPosition: "50% 50%",
      backgroundAttachment: "fixed",
      border: "var(--border-size) solid var(--backup-border)",
      position: "relative",
      touchAction: "none",
    };

    if (width !== undefined) {
      baseStyles.width = typeof width === "number" ? `${width}px` : width;
    }
    if (height !== undefined) {
      baseStyles.height = typeof height === "number" ? `${height}px` : height;
    }

    return baseStyles;
  };

  const beforeAfterStyles = `
    [data-glow]::before,
    [data-glow]::after {
      pointer-events: none;
      content: "";
      position: absolute;
      inset: calc(var(--border-size) * -1);
      border: var(--border-size) solid transparent;
      border-radius: calc(var(--radius) * 1px);
      background-attachment: fixed;
      background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
      background-repeat: no-repeat;
      background-position: 50% 50%;
      mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
      mask-clip: padding-box, border-box;
      mask-composite: intersect;
    }
    [data-glow]::before {
      background-image: radial-gradient(
        calc(var(--spotlight-size) * 0.75) calc(var(--spotlight-size) * 0.75) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 50) * 1%) / var(--border-spot-opacity, 1)), transparent 100%
      );
      filter: brightness(1.6);
    }
    [data-glow]::after {
      background-image: radial-gradient(
        calc(var(--spotlight-size) * 0.5) calc(var(--spotlight-size) * 0.5) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(0 100% 100% / var(--border-light-opacity, 1)), transparent 100%
      );
    }
    [data-glow] [data-glow] {
      position: absolute;
      inset: 0;
      will-change: filter;
      opacity: var(--outer, 1);
      border-radius: calc(var(--radius) * 1px);
      border-width: calc(var(--border-size) * 20);
      filter: blur(calc(var(--border-size) * 10));
      background: none;
      pointer-events: none;
      border: none;
    }
    [data-glow] > [data-glow]::before {
      inset: -10px;
      border-width: 10px;
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: beforeAfterStyles }} />
      <div
        ref={cardRef}
        data-glow
        style={getInlineStyles()}
        className={`
          ${getSizeClasses()}
          ${!customSize ? "aspect-[3/4]" : ""}
          rounded-[28px]
          relative
          backdrop-blur-[10px]
          ${className}
        `}
      >
        <div ref={innerRef} data-glow />
        {children}
      </div>
    </>
  );
};
