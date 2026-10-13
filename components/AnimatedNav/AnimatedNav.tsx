"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";

export function AnimatedNav({ children }: { children: ReactNode }) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    const measure = () => {
      const logo = row.querySelector<HTMLElement>(".nav-logo");
      if (!logo) return;
      const logoCenter = logo.offsetLeft + logo.offsetWidth / 2;
      Array.from(row.children).forEach((el) => {
        if (el === logo) return;
        const b = el as HTMLElement;
        const dx = logoCenter - (b.offsetLeft + b.offsetWidth / 2);
        b.style.setProperty("--dx", `${dx}px`);
      });
    };

    measure();
    document.fonts?.ready.then(measure);
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <div
      ref={rowRef}
      className="nav-row"
      data-open={open}
      onClick={(e) => {
        const target = e.target as HTMLElement;
        if (target.closest(".nav-logo")) {
          setOpen((o) => !o);
        } else if (target.closest("a")) {
          setOpen(false);
        }
      }}
    >
      {children}
    </div>
  );
}
