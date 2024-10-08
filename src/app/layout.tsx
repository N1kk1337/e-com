import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import StaticHeader from "./ui/Header/StaticHeader";
import StickyHeader from "./ui/Header/StickyHeader";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Generic ecommerce project",
  description: "Generated by me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StaticHeader></StaticHeader>
        <StickyHeader></StickyHeader>
        {children}
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        FOOTER
      </footer>
      </body>
    </html>
  );
}
