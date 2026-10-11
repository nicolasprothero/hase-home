import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Flex, Header } from "hase-ui";
import { NavButton } from "@/components/NavButton";
import { Footer } from "@/components/Footer";

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
          <Flex gap="12px">
            <NavButton href="/">Home</NavButton>
            <NavButton href="/books2026">Books (2026)</NavButton>
            <NavButton href="/photos">Photos</NavButton>
          </Flex>
        </Header>
        {children}
        <Footer>HASE 2026</Footer>
      </body>
    </html>
  );
}
