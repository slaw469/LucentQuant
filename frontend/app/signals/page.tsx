// File: frontend/app/signals/page.tsx
import * as React from "react";
import type { Metadata } from "next";
import SignalsPage from "@/app/components/signals/SignalsPage";

export const metadata: Metadata = {
  title: "QuantVision - Signals Explorer",
};

export default function Page() {
  return <SignalsPage />;
}
