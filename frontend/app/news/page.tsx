// File: frontend/app/news/page.tsx
import * as React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News - QuantVision",
  description: "Stay updated with market news and event analysis",
};

export default function NewsPage() {
  return (
    <main className="flex-1 p-4 sm:p-6 md:p-8">
        <div className="mx-auto max-w-7xl">
          <header className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-text-primary">News</h1>
            <p className="mt-2 text-text-muted">
              Stay updated with market news and event analysis
            </p>
          </header>

          <div className="rounded-xl border border-divider bg-panel p-12 text-center">
            <div className="mx-auto max-w-md">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-pending/20">
                <svg
                  className="h-8 w-8 text-pending"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-text-primary">News page coming soon</h2>
              <p className="mt-2 text-sm text-text-muted">
                This page is currently under development. Check back soon for news and event analysis.
              </p>
            </div>
          </div>
        </div>
      </main>
  );
}

