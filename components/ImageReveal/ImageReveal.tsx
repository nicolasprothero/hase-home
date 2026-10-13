"use client";

import { Image } from "hase-ui";
import { useImageReveal } from "./useImageReveal";

export interface ImageRevealProps {
  src: string;
  alt: string;
  height?: string | number;
  width?: string | number;
  borderRadius?: string | number;
  direction?: "vertical" | "horizontal";
  onIntroDone?: () => void;
}

export function ImageReveal({
  src,
  alt,
  height,
  width,
  borderRadius = "22px",
  direction = "vertical",
  onIntroDone,
}: ImageRevealProps) {
  const { revealing, skipAnimation } = useImageReveal(src);

  return (
    <div
      className="reveal-frame"
      style={{
        position: "relative",
        height,
        width,
        overflow: "hidden",
        borderRadius: revealing ? borderRadius : 0,
        transition: skipAnimation
          ? "none"
          : "border-radius 1.2s cubic-bezier(0.65, 0, 0.35, 1)",
        transitionDelay: skipAnimation ? "0s" : "0.4s",
      }}
      onTransitionEnd={(e) => {
        if (e.propertyName === "border-radius") {
          onIntroDone?.();
        }
      }}
    >
      <Image
        src={src}
        alt={alt}
        height={height}
        width={width}
        style={{ objectFit: "cover" }}
        skeletonColor="#ffffff"
      />
      <div
        className={`reveal-curtain curtain-${direction}-a ${
          revealing ? "loaded" : ""
        } ${skipAnimation ? "no-transition" : ""}`}
      />
      <div
        className={`reveal-curtain curtain-${direction}-b ${
          revealing ? "loaded" : ""
        } ${skipAnimation ? "no-transition" : ""}`}
      />

      <style jsx>{`
        .reveal-curtain {
          position: absolute;
          background: white;
          z-index: 2;
          transition: transform 1s cubic-bezier(0.65, 0, 0.35, 1);
        }

        .no-transition {
          transition: none !important;
        }

        /* vertical: top/bottom halves slide up/down */
        .curtain-vertical-a {
          top: 0;
          left: 0;
          width: 100%;
          height: 50%;
          transform: translateY(0%);
        }
        .curtain-vertical-a.loaded {
          transform: translateY(-100%);
        }
        .curtain-vertical-b {
          bottom: 0;
          left: 0;
          width: 100%;
          height: 50%;
          transform: translateY(0%);
        }
        .curtain-vertical-b.loaded {
          transform: translateY(100%);
        }

        /* horizontal: left/right halves slide left/right */
        .curtain-horizontal-a {
          top: 0;
          left: 0;
          width: 50%;
          height: 100%;
          transform: translateX(0%);
        }
        .curtain-horizontal-a.loaded {
          transform: translateX(-100%);
        }
        .curtain-horizontal-b {
          top: 0;
          right: 0;
          width: 50%;
          height: 100%;
          transform: translateX(0%);
        }
        .curtain-horizontal-b.loaded {
          transform: translateX(100%);
        }
      `}</style>
    </div>
  );
}
