// File: frontend/app/components/news/Headlines.tsx
"use client";

import { Card } from "@/app/components/ui/card";
import { headlines, Headline } from "@/app/news/mock-data";
import { cn } from "@/lib/utils";
import React from "react";

const biasStyles: { [key in Headline["bias"]]: string } = {
  left: "border-bias-left text-bias-left",
  center: "border-bias-center text-bias-center",
  right: "border-bias-right text-bias-right",
  niche: "border-bias-niche text-bias-niche",
};

export function Headlines() {
  const [filter, setFilter] = React.useState("");

  const filteredHeadlines = headlines.filter((headline) =>
    headline.title.toLowerCase().includes(filter.toLowerCase())
  );

  const groupedHeadlines = filteredHeadlines.reduce((acc, headline) => {
    if (!acc[headline.bias]) {
      acc[headline.bias] = [];
    }
    acc[headline.bias].push(headline);
    return acc;
  }, {} as Record<Headline["bias"], Headline[]>);

  return (
    <Card className="flex flex-col gap-4 lg:col-span-4">
      <h3 className="text-lg font-bold text-text-primary">Headlines</h3>
      <div className="relative w-full">
        <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">
          search
        </span>
        <input
          className="w-full rounded-lg border-0 bg-background-dark py-2 pl-10 pr-4 text-sm text-text-primary placeholder:text-text-muted focus:ring-2 focus:ring-inset focus:ring-secondary"
          placeholder="Filter topics (e.g., CPI, Rate Hike)"
          type="search"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <div
        className="flex flex-col gap-4 overflow-y-auto"
        style={{ maxHeight: "calc(100vh - 300px)" }}
      >
        {Object.entries(groupedHeadlines).map(([bias, headlines]) => (
          <div key={bias}>
            <h4
              className={cn(
                "mb-2 text-sm font-semibold",
                biasStyles[bias as Headline["bias"]]
              )}
            >
              {bias.charAt(0).toUpperCase() + bias.slice(1)}{" "}
              {bias === "left" || bias === "right" ? "Bias" : ""}
            </h4>
            <div className="flex flex-col gap-3">
              {headlines.map((headline) => (
                <div
                  key={headline.id}
                  className={cn(
                    "group relative cursor-pointer border-l-2 pl-3 hover:bg-white/5",
                    biasStyles[headline.bias]
                  )}
                >
                  <p className="text-sm text-text-primary">{headline.title}</p>
                  <p className="text-xs text-text-muted">
                    {headline.source} - {headline.time}
                  </p>
                  <div className="tooltip invisible absolute left-full z-10 ml-2 -mt-4 w-max rounded-md bg-background-dark p-2 text-xs text-text-muted opacity-0 shadow-lg transition-opacity group-hover:visible group-hover:opacity-100">
                    Sentiment: {headline.sentiment.toFixed(2)} | View Source
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
