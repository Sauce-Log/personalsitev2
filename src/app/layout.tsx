// app/layout.tsx
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import ParticleBackground from "./components/bg";

export const navFont = Rubik({
  variable: "--font-nav",
  subsets: ["latin"],
  weight: ["500"],
  fallback: ["system-ui"],
});

export const mainFont = Rubik({
  variable: "--font-main",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  fallback: ["system-ui"],
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
      <body>
        <ParticleBackground />
        {/*switch to fixed if you want it always visible */}
        <div
          className="sticky top-0 z-50"
          style={{ fontFamily: navFont.style.fontFamily }}
        >
          <Navbar />
        </div>

        {/* Main content area */}
        <main className="min-h-screen w-full">{children}</main>
      </body>
    </html>
  );
}
