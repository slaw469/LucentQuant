// File: frontend/app/not-found.tsx
import * as React from "react";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";

export default function NotFoundPage() {
  return (
    <main className="flex flex-1 items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="mx-auto max-w-md text-center">
          <div className="mb-8">
            <p className="text-primary text-6xl font-bold">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-text-primary">
              Page not found
            </h1>
            <p className="mt-4 text-text-muted">
              Sorry, we couldn't find the page you're looking for.
            </p>
          </div>

          <Link
            href={ROUTES.HOME}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-background-dark transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background-dark"
          >
            Go back home
          </Link>
        </div>
      </main>
  );
}

