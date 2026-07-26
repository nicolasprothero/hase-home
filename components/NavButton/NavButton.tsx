"use client";

import Link from "next/link";
import { Button } from "hase-ui";
import { ReactNode } from "react";

export interface NavButtonProps {
  href: string;
  children: ReactNode;
}

export function NavButton({ href, children }: NavButtonProps) {
  return (
    <Button as={Link} href={href}>
      {children}
    </Button>
  );
}
