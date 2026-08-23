import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Flex, Header } from "hase-ui";
import { NavButton } from "@/components/NavButton";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Nic Hase",
    default: "Nic Hase",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <Header paddingY="10px">
          <Flex gap="12px">
            <NavButton href="/">Home</NavButton>
            <NavButton href="/books2026">Books (2026)</NavButton>
            <NavButton href="/writings">Writings</NavButton>
            <NavButton href="/photos">Photos</NavButton>
          </Flex>
        </Header>
        {children}
        <Footer>HASE 2026</Footer>
      </body>
    </html>
  );
}
