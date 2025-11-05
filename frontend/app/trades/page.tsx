// File: frontend/app/trades/page.tsx
import * as React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trades - QuantVision",
  description: "View your trading history and performance metrics",
};

export default function TradesPage() {
  return (
    <main className="flex-1 p-4 sm:p-6 md:p-8">
        <div className="mx-auto max-w-7xl">
          <header className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-text-primary">Trades</h1>
            <p className="mt-2 text-text-muted">
              View your trading history and performance metrics
            </p>
          </header>

          <div className="rounded-xl border border-divider bg-panel p-12 text-center">
            <div className="mx-auto max-w-md">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gain/20">
                <svg
                  className="h-8 w-8 text-gain"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-text-primary">Trades page coming soon</h2>
              <p className="mt-2 text-sm text-text-muted">
                This page is currently under development. Check back soon for trade history features.
              </p>
            </div>
          </div>
        </div>
      </main>
  );
}

