"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";

export function AnimatedNav({ children }: { children: ReactNode }) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

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
        const center = b.offsetLeft + b.offsetWidth / 2;
        b.style.setProperty("--dx", `${logoCenter - center}px`);
        b.style.setProperty("--side", center < logoCenter ? "-1" : "1");
      });
    };

    measure();
    document.fonts?.ready.then(measure);

    const ro = new ResizeObserver(measure);
    ro.observe(row);
    Array.from(row.children).forEach((c) => ro.observe(c));

    return () => ro.disconnect();
  }, [children]);

  return (
    <div
      ref={rowRef}
      className="nav-row"
      data-open={open}
      onClick={(e) => {
        const target = e.target as HTMLElement;
        if (target.closest(".nav-logo")) {
          setOpen((o) => !o);
        } else {
          const link = target.closest("a");
          if (link && link.getAttribute("href") !== pathname) {
            setOpen(false);
          }
        }
      }}
    >
      {children}
    </div>
  );
}
