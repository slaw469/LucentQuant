// File: frontend/app/loading.tsx
import * as React from "react";

export default function LoadingPage() {
  return (
    <main className="flex flex-1 items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-panel border-t-primary" role="status" aria-label="Loading"></div>
          <p className="text-sm text-text-muted">Loading...</p>
        </div>
      </main>
  );
}

