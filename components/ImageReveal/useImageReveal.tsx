"use client";

import { useState, useEffect } from "react";

const SEEN_KEY_PREFIX = "hase-image-seen:";

export function useImageReveal(src: string) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [revealing, setRevealing] = useState(false);
  const [skipAnimation, setSkipAnimation] = useState(false);

  useEffect(() => {
    const alreadySeen =
      typeof window !== "undefined" &&
      sessionStorage.getItem(SEEN_KEY_PREFIX + src) === "true";

    if (alreadySeen) {
      setSkipAnimation(true);
      setImageLoaded(true);
      setRevealing(true);
      return;
    }

    setImageLoaded(false);
    setRevealing(false);
    setSkipAnimation(false);

    const probe = new window.Image();
    probe.src = src;
    if (probe.complete) {
      setImageLoaded(true);
    } else {
      probe.onload = () => setImageLoaded(true);
    }
  }, [src]);

  useEffect(() => {
    if (!imageLoaded || skipAnimation) return;
    setRevealing(true);
    sessionStorage.setItem(SEEN_KEY_PREFIX + src, "true");
  }, [imageLoaded, skipAnimation, src]);

  return { imageLoaded, revealing, skipAnimation };
}
