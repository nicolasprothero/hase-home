import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header, Image } from "hase-ui";
import { NavButton } from "@/components/NavButton";
import { Footer } from "@/components/Footer";
import { AnimatedNav } from "@/components/AnimatedNav/AnimatedNav";

const arealFont = localFont({
  src: "./fonts/ABCArealVariable.ttf",
  variable: "--font-areal",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Hase Home",
    default: "Hase Home",
  },
  manifest: "/icons/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${arealFont.variable} h-full antialiased`}>
      <body>
        <Header paddingY="10px">
          <AnimatedNav>
            <NavButton href="/">Home</NavButton>
            <NavButton href="/books2026">Books</NavButton>
            <div className="nav-logo">
              <Image src="/apple-icon.png" height="45px" width="45px" />
            </div>
            <NavButton href="/books2026">Writings</NavButton>
            <NavButton href="/photos">Photos</NavButton>
          </AnimatedNav>
        </Header>
        {children}
        <Footer>HASE 2026</Footer>
      </body>
    </html>
  );
}
