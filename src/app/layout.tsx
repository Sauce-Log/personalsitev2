// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto_Slab } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jackson Hamada",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${robotoSlab.variable} antialiased`}>
        {/* Sticky is a nice default for navs; switch to fixed if you want it always visible */}
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>

        {/* Main content area */}
        <main className="min-h-screen w-full">{children}</main>
      </body>
    </html>
  );
}
