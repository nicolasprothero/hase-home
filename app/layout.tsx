import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Button, Flex, Header } from "hase-ui";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nic Hase",
  description: "Hase Home",
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
            <Button as={Link} href="/">
              Home
            </Button>
            <Button as={Link} href="/books">
              Books
            </Button>
            <Button as={Link} href="/writings">
              Writings
            </Button>
            <Button as={Link} href="/photos">
              Photos
            </Button>
          </Flex>
        </Header>
        {children}
      </body>
    </html>
  );
}
