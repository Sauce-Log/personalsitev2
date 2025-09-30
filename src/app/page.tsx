import Image from "next/image";
import { navFont, mainFont } from "@/app/layout";

export default function Home() {
  return (
    <div
      className="min-h-screen w-full px-4 py-8"
      style={{ fontFamily: mainFont.style.fontFamily }}
    >
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center mb-16">
        <div className="item-container">
          <h1
            className="text-5xl md:text-6xl font-normal"
            style={{ color: "var(--color-text)" }}
          >
            Jackson Hamada
          </h1>
        </div>
      </section>
    </div>
  );
}
