// File: frontend/app/components/header.tsx
"use client";

import * as React from "react";
import Link from "next/link";

interface NavLink {
  href: string;
  label: string;
  isActive?: boolean;
}

const navLinks: NavLink[] = [
  { href: "/", label: "Overview", isActive: true },
  { href: "/signals", label: "Signals" },
  { href: "/trades", label: "Trades" },
  { href: "/models", label: "Models" },
  { href: "/news", label: "News" },
  { href: "/research", label: "Research" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b border-solid border-divider bg-background-dark/80 px-4 py-3 backdrop-blur-sm sm:px-6 md:px-10">
      <div className="flex items-center gap-4 text-text-primary">
        <div className="size-6 text-primary">
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path
              d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] text-text-primary">
          QuantVision
        </h2>
      </div>

      <nav className="hidden items-center gap-8 md:flex" role="navigation" aria-label="Main navigation">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-medium leading-normal transition-colors ${
              link.isActive
                ? "relative text-text-primary after:absolute after:bottom-[-16px] after:left-0 after:h-[2px] after:w-full after:bg-primary after:content-['']"
                : "text-text-muted hover:text-text-primary"
            }`}
            aria-current={link.isActive ? "page" : undefined}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <button
          className="text-text-muted hover:text-text-primary md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <svg
            className="size-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <nav
          className="absolute left-0 right-0 top-full border-b border-divider bg-background-dark md:hidden"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-2 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  link.isActive
                    ? "bg-primary/10 text-primary"
                    : "text-text-muted hover:bg-panel hover:text-text-primary"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

