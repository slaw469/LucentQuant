// File: frontend/app/components/news/sentiment-timeline.tsx
import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";

export function SentimentTimeline() {
  return (
    <Card>
      <CardHeader className="flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <CardTitle>
            Sentiment Timeline: <span className="text-primary">CPI</span>
          </CardTitle>
          <CardDescription>Positive vs. Negative News Volume</CardDescription>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-sm bg-gain"></div>
            <span className="text-text-muted">Positive</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-sm bg-danger"></div>
            <span className="text-text-muted">Negative</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="min-h-[250px] w-full pt-4">
          <svg
            className="h-full w-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 500 150"
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
              <path
                d="M 0 0 L 50 -10 L 100 -20 L 150 -15 L 200 -30 L 250 -45 L 300 -40 L 350 -55 L 400 -60 L 450 -50 L 500 -40 V 0 H 0 Z"
                fill="url(#gain-gradient)"
              ></path>
              <path
                d="M 0 0 L 50 15 L 100 5 L 150 25 L 200 10 L 250 30 L 300 20 L 350 40 L 400 35 L 450 45 L 500 50 V 0 H 0 Z"
                fill="url(#danger-gradient)"
              ></path>
              <path
                d="M 0 0 L 50 -10 L 100 -20 L 150 -15 L 200 -30 L 250 -45 L 300 -40 L 350 -55 L 400 -60 L 450 -50 L 500 -40"
                stroke="#14FFB9"
                strokeWidth="2"
              ></path>
              <path
                d="M 0 0 L 50 15 L 100 5 L 150 25 L 200 10 L 250 30 L 300 20 L 350 40 L 400 35 L 450 45 L 500 50"
                stroke="#FF5C93"
                strokeWidth="2"
              ></path>
              <line
                className="stroke-divider"
                strokeDasharray="4 4"
                x1="0"
                y1="0"
                x2="500"
                y2="0"
              ></line>
            </g>
            <line
              className="stroke-divider"
              x1="0"
              y1="150"
              x2="500"
              y2="150"
            ></line>
            <text className="fill-current text-xs text-text-muted" x="0" y="70">
              50
            </text>
            <text className="fill-current text-xs text-text-muted" x="0" y="15">
              100
            </text>
            <text className="fill-current text-xs text-text-muted" x="0" y="85">
              -50
            </text>
            <text
              className="fill-current text-xs text-text-muted"
              x="0"
              y="145"
            >
              -100
            </text>
          </svg>
        </div>
      </CardContent>
    </Card>
  );
}
