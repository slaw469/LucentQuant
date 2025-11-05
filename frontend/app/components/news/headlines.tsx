// File: frontend/app/components/news/headlines.tsx
import * as React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";

const HEADLINE_DATA = {
  "Left Bias": [
    {
      title: "Inflation Eases, Paving Way for Potential Fed Rate Cuts",
      source: "The Guardian",
      time: "2h ago",
      sentiment: "+0.78",
      bias: "bias-left",
    },
    {
      title: "Consumer Spending Habits Shift Amid Economic Uncertainty",
      source: "NY Times",
      time: "3h ago",
      sentiment: "+0.21",
      bias: "bias-left",
    },
  ],
  "Center": [
    {
      title:
        "Breaking: CPI data released, showing a 0.2% month-over-month increase",
      source: "Reuters",
      time: "15m ago",
      sentiment: "-0.15",
      bias: "bias-center",
    },
    {
      title: "US Jobless Claims Fall, Labor Market Remains Tight",
      source: "Associated Press",
      time: "1h ago",
      sentiment: "+0.45",
      bias: "bias-center",
    },
  ],
  "Right Bias": [
    {
      title:
        "Fed's Hawkish Stance on Inflation Could Trigger Recession, Experts Warn",
      source: "Wall Street Journal",
      time: "45m ago",
      sentiment: "-0.82",
      bias: "bias-right",
    },
  ],
};

export function Headlines() {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader>
        <CardTitle>Headlines</CardTitle>
        <div className="relative w-full">
          <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">
            search
          </span>
          <input
            type="search"
            placeholder="Filter topics (e.g., CPI, Rate Hike)"
            className="w-full rounded-lg border-0 bg-background-dark py-2 pl-10 pr-4 text-sm text-text-primary placeholder:text-text-muted focus:ring-2 focus:ring-inset focus:ring-secondary"
          />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 overflow-y-auto">
        {Object.entries(HEADLINE_DATA).map(([bias, headlines]) => (
          <div key={bias}>
            <h4 className={`mb-2 text-sm font-semibold text-${headlines[0].bias}`}>
              {bias}
            </h4>
            <div className="flex flex-col gap-3">
              {headlines.map((headline, index) => (
                <div
                  key={index}
                  className={`group relative cursor-pointer border-l-2 border-${headline.bias} pl-3 hover:bg-white/5`}
                >
                  <p className="text-sm text-text-primary">{headline.title}</p>
                  <p className="text-xs text-text-muted">
                    {headline.source} - {headline.time}
                  </p>
                  <div className="tooltip invisible absolute left-full z-10 ml-2 -mt-4 w-max rounded-md bg-background-dark p-2 text-xs text-text-muted opacity-0 shadow-lg transition-opacity group-hover:visible group-hover:opacity-100">
                    Sentiment: {headline.sentiment} | View Source
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
