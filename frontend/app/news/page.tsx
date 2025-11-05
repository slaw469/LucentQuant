// File: frontend/app/news/page.tsx
import * as React from "react";
import type { Metadata } from "next";
import { Headlines } from "@/app/components/news/headlines";
import { SentimentTimeline } from "@/app/components/news/sentiment-timeline";
import { TopKeywords } from "@/app/components/news/top-keywords";
import { BiasLegend } from "@/app/components/news/bias-legend";

export const metadata: Metadata = {
  title: "News & Sentiment - QuantVision",
  description: "Stay updated with market news and sentiment analysis",
};

export default function NewsPage() {
  return (
    <main className="flex-1 p-4 sm:p-6 md:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Headlines />
          </div>
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
