// File: frontend/app/components/news/SentimentTimeline.tsx

import { Card } from "@/app/components/ui/card";
import { sentimentData } from "@/app/news/mock-data";

function formatPath(data: { x: number; y: number }[]): string {
  return data.map((p, i) => (i === 0 ? "M" : "L") + `${p.x} ${-p.y}`).join(" ");
}

export function SentimentTimeline() {
  const positivePath = formatPath(sentimentData.positive);
  const negativePath = formatPath(sentimentData.negative);

  const positiveArea = `${positivePath} V 0 H ${sentimentData.positive[0].x} Z`;
  const negativeArea = `${negativePath} V 0 H ${sentimentData.negative[0].x} Z`;

  return (
    <Card className="flex flex-col gap-4">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h3 className="text-lg font-bold leading-tight tracking-[-0.015em] text-text-primary">
            Sentiment Timeline: <span className="text-primary">CPI</span>
          </h3>
          <p className="text-sm text-text-muted">
            Positive vs. Negative News Volume
          </p>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-sm bg-gain"></div>
            <span className="text-text-muted">Positive</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-sm bg-danger"></div>
            <span className="text-text-muted">Negative</span>
          </div>
        </div>
      </div>
      <div className="min-h-[250px] w-full pt-4">
        <svg
          className="h-full w-full"
          preserveAspectRatio="none"
          viewBox="0 0 500 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="gain-gradient"
              x1="0"
              y1="0"
              x2="0"
              y2="150"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#14FFB9" stopOpacity="0.4"></stop>
              <stop offset="1" stopColor="#14FFB9" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="danger-gradient"
              x1="0"
              y1="0"
              x2="0"
              y2="150"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF5C93" stopOpacity="0.4"></stop>
              <stop offset="1" stopColor="#FF5C93" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
          <g transform="translate(0, 75)">
            <path d={positiveArea} fill="url(#gain-gradient)"></path>
            <path d={negativeArea} fill="url(#danger-gradient)"></path>
            <path
              d={positivePath}
              stroke="#14FFB9"
              strokeWidth="2"
            ></path>
            <path
              d={negativePath}
              stroke="#FF5C93"
              strokeWidth="2"
            ></path>
            <line
              x1="0"
              y1="0"
              x2="500"
              y2="0"
              className="stroke-divider"
              strokeDasharray="4 4"
            ></line>
          </g>
          <line
            x1="0"
            y1="150"
            x2="500"
            y2="150"
            className="stroke-divider"
          ></line>
          <text x="0" y="70" className="fill-current text-xs text-text-muted">50</text>
          <text x="0" y="15" className="fill-current text-xs text-text-muted">100</text>
          <text x="0" y="85" className="fill-current text-xs text-text-muted">-50</text>
          <text x="0" y="145" className="fill-current text-xs text-text-muted">-100</text>
        </svg>
      </div>
    </Card>
  );
}
