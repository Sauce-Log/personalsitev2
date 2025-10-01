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
          <h1 className="text-4xl md:text-5xl font-normal bg-clip-text bg-gradient-to-r from-accent to-accent-dark text-transparent">
            Jackson Hamada
          </h1>
          <p className="text-sm md:text-base font-normal">
            Recent UC Berkeley graduate pursuing a career in software
            engineering to leverage my eagerness to learn and problem solving
            nature to tackle interesting problems and build software to make
            people's lives simpler.
          </p>
        </div>
      </section>

      {/* New 3-Column Section */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="item-container">
            <h3
              className="text-xl font-semibold mb-3"
              style={{ color: "var(--color-text)" }}
            >
              Column 1
            </h3>
            <p className="text-sm" style={{ color: "var(--color-text)" }}>
              Content for the first column goes here.
            </p>
          </div>

          <div className="item-container">
            <h3
              className="text-xl font-semibold mb-3"
              style={{ color: "var(--color-text)" }}
            >
              Column 2
            </h3>
            <p className="text-sm" style={{ color: "var(--color-text)" }}>
              Content for the second column goes here.
            </p>
          </div>

          <div className="item-container">
            <h3
              className="text-xl font-semibold mb-3"
              style={{ color: "var(--color-text)" }}
            >
              Column 3
            </h3>
            <p className="text-sm" style={{ color: "var(--color-text)" }}>
              Content for the third column goes here.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
