// File: frontend/app/models/page.tsx
import * as React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Models - QuantVision",
  description: "Manage and monitor your quantitative trading models",
};

export default function ModelsPage() {
  return (
    <main className="flex-1 p-4 sm:p-6 md:p-8">
        <div className="mx-auto max-w-7xl">
          <header className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-text-primary">Models</h1>
            <p className="mt-2 text-text-muted">
              Manage and monitor your quantitative trading models
            </p>
          </header>

          <div className="rounded-xl border border-divider bg-panel p-12 text-center">
            <div className="mx-auto max-w-md">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-secondary/20">
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
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-text-primary">Models page coming soon</h2>
              <p className="mt-2 text-sm text-text-muted">
                This page is currently under development. Check back soon for model management features.
              </p>
            </div>
          </div>
        </div>
      </main>
  );
}

