// File: frontend/app/components/news/top-keywords.tsx
import * as React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";

const KEYWORDS = [
  { word: "Inflation", style: "primary", size: "medium" },
  { word: "Fed", style: "secondary", size: "medium" },
  { word: "Hike", style: "danger", size: "small" },
  { word: "Jobs", style: "muted", size: "small" },
  { word: "Rates", style: "secondary", size: "medium" },
  { word: "Market", style: "muted", size: "small" },
  { word: "CPI", style: "primary", size: "medium" },
  { word: "Recession", style: "danger", size: "small" },
  { word: "Consumer", style: "muted", size: "small" },
  { word: "Policy", style: "secondary", size: "medium" },
];

const STYLE_MAPS = {
  size: {
    small: "text-xs",
    medium: "text-sm",
  },
  style: {
    primary: "bg-primary/20 text-primary shadow-glow-primary",
    secondary: "bg-secondary/20 text-secondary shadow-glow-secondary",
    danger: "bg-danger/20 text-danger shadow-glow-danger",
    muted: "bg-background-dark text-text-muted",
  },
};

export function TopKeywords() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Keywords</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap items-center gap-2">
          {KEYWORDS.map((keyword, index) => (
            <span
              key={index}
              className={`rounded px-2 py-1 font-medium ${
                STYLE_MAPS.size[keyword.size as keyof typeof STYLE_MAPS.size]
              } ${
                STYLE_MAPS.style[
                  keyword.style as keyof typeof STYLE_MAPS.style
                ]
              }`}
            >
              {keyword.word}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
