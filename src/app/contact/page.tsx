import { navFont, mainFont } from "@/app/layout";

export default function Contact() {
  return (
    <div
      className="min-h-screen w-full px-4 py-8"
      style={{ fontFamily: mainFont.style.fontFamily }}
    >
      <section className="max-w-4xl mx-auto text-center mb-16">
        <div className="item-container">
          <h1 className="text-4xl md:text-5xl font-normal bg-clip-text bg-gradient-to-r from-accent to-accent-dark text-transparent">
            Contact
          </h1>

          <p className="text-sm md:text-base font-normal">
            Feel free to reach out to me via email or LinkedIn.
          </p>
          <div className="flex justify-center gap-4">
            <a href="mailto:jhamada@berkeley.edu" className="nothing">
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/jackson-hamada123/"
              target="_blank"
              rel="noopener noreferrer"
              className="nothing"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
