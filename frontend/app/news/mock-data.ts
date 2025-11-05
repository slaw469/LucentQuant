// File: frontend/app/news/mock-data.ts

export type Headline = {
  id: number;
  bias: "left" | "center" | "right" | "niche";
  title: string;
  source: string;
  time: string;
  sentiment: number;
};

export type Keyword = {
  id: number;
  name: string;
  sentiment: "positive" | "negative" | "neutral" | "secondary";
  size: "sm" | "md" | "lg";
};

export const headlines: Headline[] = [
  {
    id: 1,
    bias: "left",
    title: "Inflation Eases, Paving Way for Potential Fed Rate Cuts",
    source: "The Guardian",
    time: "2h ago",
    sentiment: 0.78,
  },
  {
    id: 2,
    bias: "left",
    title: "Consumer Spending Habits Shift Amid Economic Uncertainty",
    source: "NY Times",
    time: "3h ago",
    sentiment: 0.21,
  },
  {
    id: 3,
    bias: "center",
    title: "Breaking: CPI data released, showing a 0.2% month-over-month increase",
    source: "Reuters",
    time: "15m ago",
    sentiment: -0.15,
  },
  {
    id: 4,
    bias: "center",
    title: "US Jobless Claims Fall, Labor Market Remains Tight",
    source: "Associated Press",
    time: "1h ago",
    sentiment: 0.45,
  },
  {
    id: 5,
    bias: "right",
    title: "Fed's Hawkish Stance on Inflation Could Trigger Recession, Experts Warn",
    source: "Wall Street Journal",
    time: "45m ago",
    sentiment: -0.82,
  },
];

export const keywords: Keyword[] = [
  { id: 1, name: "Inflation", sentiment: "positive", size: "lg" },
  { id: 2, name: "Fed", sentiment: "secondary", size: "lg" },
  { id: 3, name: "Hike", sentiment: "negative", size: "sm" },
  { id: 4, name: "Jobs", sentiment: "neutral", size: "sm" },
  { id: 5, name: "Rates", sentiment: "secondary", size: "lg" },
  { id: 6, name: "Market", sentiment: "neutral", size: "sm" },
  { id: 7, name: "CPI", sentiment: "positive", size: "lg" },
  { id: 8, name: "Recession", sentiment: "negative", size: "sm" },
  { id: 9, name: "Consumer", sentiment: "neutral", size: "sm" },
  { id: 10, name: "Policy", sentiment: "secondary", size: "lg" },
];

export const sentimentData = {
  positive: [
    { x: 0, y: 0 },
    { x: 50, y: 10 },
    { x: 100, y: 20 },
    { x: 150, y: 15 },
    { x: 200, y: 30 },
    { x: 250, y: 45 },
    { x: 300, y: 40 },
    { x: 350, y: 55 },
    { x: 400, y: 60 },
    { x: 450, y: 50 },
    { x: 500, y: 40 },
  ],
  negative: [
    { x: 0, y: 0 },
    { x: 50, y: -15 },
    { x: 100, y: -5 },
    { x: 150, y: -25 },
    { x: 200, y: -10 },
    { x: 250, y: -30 },
    { x: 300, y: -20 },
    { x: 350, y: -40 },
    { x: 400, y: -35 },
    { x: 450, y: -45 },
    { x: 500, y: -50 },
  ],
};
