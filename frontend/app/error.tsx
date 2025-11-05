// File: frontend/app/error.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  React.useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <main className="flex flex-1 items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="mx-auto max-w-md text-center">
          <div className="mb-8">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-danger/20">
              <svg
                className="h-8 w-8 text-danger"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-text-primary">
              Something went wrong
            </h1>
            <p className="mt-4 text-sm text-text-muted">
              {error.message || "An unexpected error occurred"}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={reset}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-background-dark transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background-dark"
            >
              Try again
            </button>
            <Link
              href={ROUTES.HOME}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-divider bg-transparent px-4 py-2 text-sm font-medium text-text-primary transition-colors hover:bg-panel focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background-dark"
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>
  );
}

