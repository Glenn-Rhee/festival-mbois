"use client";

import React from "react";

export type StarSize = "small" | "medium" | "large";

export interface StarParticlesProps {
  top?: string | number;
  bottom?: string | number;
  left?: string | number;
  right?: string | number;
  size?: StarSize;
  glow?: boolean;
  opacity?: number;
  className?: string;
}

const formatPosition = (val: string | number | undefined): string | undefined => {
  if (val === undefined) return undefined;
  if (typeof val === "number") {
    return `${val}%`;
  }
  return val;
};

export function StarParticles({
  top,
  bottom,
  left,
  right,
  size = "medium",
  glow = false,
  opacity = 1.0,
  className = "",
}: StarParticlesProps) {
  let sizeClass = "";
  let glowClass = "";

  switch (size) {
    case "small":
      sizeClass = "h-[1.5px] w-[1.5px]";
      break;
    case "medium":
      sizeClass = "h-[3px] w-[3px]";
      break;
    case "large":
      sizeClass = "h-[5px] w-[5px]";
      break;
  }

  if (glow) {
    if (size === "large") {
      glowClass = "shadow-[0_0_15px_4px_rgba(255,255,255,0.5)] blur-[1px]";
    } else {
      glowClass = "shadow-[0_0_10px_3px_rgba(255,255,255,0.6)]";
    }
  }

  return (
    <div
      className={`absolute rounded-full bg-white ${sizeClass} ${glowClass} ${className}`}
      style={{
        top: formatPosition(top),
        bottom: formatPosition(bottom),
        left: formatPosition(left),
        right: formatPosition(right),
        opacity,
      }}
    />
  );
}
