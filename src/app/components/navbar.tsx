// app/components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/berkeley", label: "Berkeley" },
    { href: "/contact", label: "Contact" },
    { href: "/resume", label: "Resume" },
  ];

  return (
    <nav className="nav-shell">
      <div className="flex items-center gap-4">
        <a
          href="https://www.linkedin.com/in/jackson-hamada-017241253/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/38669.png"
            alt="LinkedIn"
            width={48}
            height={48}
            className="social-icon"
          />
        </a>
        <a
          href="https://github.com/Sauce-Log"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/github.png"
            alt="GitHub"
            width={48}
            height={48}
            className="social-icon"
          />
        </a>
      </div>

      <ul className="nav-list">
        {navItems.map(({ href, label }) => {
          const isActive =
            pathname === href || (href !== "/" && pathname.startsWith(href)); // simple prefix match

          return (
            <li key={label} className="nav-item">
              <Link
                href={href}
                className={`nav-link ${isActive ? "nav-link-active" : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
