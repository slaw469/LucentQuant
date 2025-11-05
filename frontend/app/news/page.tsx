// File: frontend/app/news/page.tsx
import * as React from "react";
import type { Metadata } from "next";
import { Headlines } from "@/app/components/news/Headlines";
import { SentimentTimeline } from "@/app/components/news/SentimentTimeline";
import { TopKeywords } from "@/app/components/news/TopKeywords";
import { BiasLegend } from "@/app/components/news/BiasLegend";

export const metadata: Metadata = {
  title: "News & Sentiment - QuantVision",
  description: "News & Sentiment Analysis",
};

export default function NewsPage() {
  return (
    <main className="flex-1 p-4 sm:p-6 md:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <Headlines />
          <div className="flex flex-col gap-6 lg:col-span-8">
            <SentimentTimeline />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <TopKeywords />
              <BiasLegend />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
