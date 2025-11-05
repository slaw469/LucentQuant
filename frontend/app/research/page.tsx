// File: frontend/app/research/page.tsx
import * as React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research - QuantVision",
  description: "Access quantitative research and market analysis",
};

export default function ResearchPage() {
  return (
    <main className="flex-1 p-4 sm:p-6 md:p-8">
        <div className="mx-auto max-w-7xl">
          <header className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-text-primary">Research</h1>
            <p className="mt-2 text-text-muted">
              Access quantitative research and market analysis
            </p>
          </header>

          <div className="rounded-xl border border-divider bg-panel p-12 text-center">
            <div className="mx-auto max-w-md">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                <svg
                  className="h-8 w-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-text-primary">Research page coming soon</h2>
              <p className="mt-2 text-sm text-text-muted">
                This page is currently under development. Check back soon for research and analysis tools.
              </p>
            </div>
          </div>
        </div>
      </main>
  );
}

