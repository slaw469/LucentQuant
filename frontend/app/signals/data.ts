// File: frontend/app/signals/data.ts
export type Signal = {
  marketName: string;
  exchange: 'Kalshi' | 'Polymarket';
  predicted: number;
  implied: number;
  edge: number;
  confidence: number;
  lastUpdated: string;
};

export const signals: Signal[] = [
  {
    marketName: 'Will the fed funds rate be ≥5.5% on Dec 31?',
    exchange: 'Kalshi',
    predicted: 82.1,
    implied: 71.5,
    edge: 10.6,
    confidence: 98,
    lastUpdated: '2m ago',
  },
  {
    marketName: 'Will Taylor Swift announce a new album by EOY?',
    exchange: 'Polymarket',
    predicted: 45.0,
    implied: 38.2,
    edge: 6.8,
    confidence: 95,
    lastUpdated: '15m ago',
  },
  {
    marketName: 'Will global temperature anomaly be >1.5°C in 2024?',
    exchange: 'Kalshi',
    predicted: 65.3,
    implied: 72.0,
    edge: -6.7,
    confidence: 88,
    lastUpdated: '3h ago',
  },
  {
    marketName: 'Will USA GDP growth be >2.5% in Q4?',
    exchange: 'Kalshi',
    predicted: 85.0,
    implied: 79.5,
    edge: 5.5,
    confidence: 99,
    lastUpdated: '22m ago',
  },
  {
    marketName: 'Will Ethereum ETF be approved by the SEC by Sep 30?',
    exchange: 'Polymarket',
    predicted: 71.2,
    implied: 70.0,
    edge: 1.2,
    confidence: 85,
    lastUpdated: '45s ago',
  },
  {
    marketName: 'Will OpenAI release GPT-5 by EOY 2024?',
    exchange: 'Polymarket',
    predicted: 22.8,
    implied: 25.5,
    edge: -2.7,
    confidence: 91,
    lastUpdated: '1h ago',
  },
  {
    marketName: 'Will movie box office receipts exceed $10B in July?',
    exchange: 'Kalshi',
    predicted: 58.9,
    implied: 58.0,
    edge: 0.9,
    confidence: 76,
    lastUpdated: '5h ago',
  },
];

export const modalData = {
  marketName: 'Will the fed funds rate be ≥5.5% on Dec 31?',
  marketCategory: 'Interest Rates',
  exchange: 'Kalshi',
  predicted: 82.1,
  implied: 71.5,
  featureImportance: [
    { feature: 'CPI Data', importance: 85 },
    { feature: 'FOMC Minutes', importance: 72 },
    { feature: 'Unemployment Rate', importance: 60 },
    { feature: 'Bond Yields', importance: 45 },
  ],
  relatedNews: [
    {
      title: 'Fed Signals Patience on Rate Cuts Amid Sticky Inflation',
      source: 'Reuters',
      time: '2h ago',
    },
    {
      title: "Job Market Remains Robust, Complicating Fed's Path",
      source: 'Bloomberg',
      time: '8h ago',
    },
    {
      title: 'Analysts Divided on Year-End Interest Rate Outlook',
      source: 'Wall Street Journal',
      time: '1d ago',
    },
  ],
};
