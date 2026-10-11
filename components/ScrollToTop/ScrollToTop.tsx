"use client";

import { Button } from "hase-ui";
import { useState, useEffect } from "react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <Button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        justifyContent: "center",
        zIndex: 1000,
      }}
      aria-label="Scroll to top"
    >
      TOP
    </Button>
  );
}
