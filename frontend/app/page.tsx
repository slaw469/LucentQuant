// File: frontend/app/page.tsx
import * as React from "react";
import { Header } from "@/components/header";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Signal {
  exchange: string;
  probability: string;
  edge: string;
  edgeValue: number;
  confidence: string;
}

interface StatusItem {
  label: string;
  status: string;
  variant: "success" | "warning" | "danger" | "default";
  icon: "check" | "sync" | "error";
}

interface TopicSentiment {
  topic: string;
  intensity: number;
}

const demoSignals: Signal[] = [
  {
    exchange: "BINANCE:BTC/USDT",
    probability: "82.1%",
    edge: "+2.5%",
    edgeValue: 2.5,
    confidence: "95%",
  },
  {
    exchange: "COINBASE:ETH/USD",
    probability: "78.5%",
    edge: "+1.8%",
    edgeValue: 1.8,
    confidence: "92%",
  },
  {
    exchange: "FTX:SOL/USD",
    probability: "65.3%",
    edge: "-0.7%",
    edgeValue: -0.7,
    confidence: "88%",
  },
  {
    exchange: "BYBIT:ADA/USDT",
    probability: "85.0%",
    edge: "+3.1%",
    edgeValue: 3.1,
    confidence: "98%",
  },
  {
    exchange: "KRAKEN:XRP/EUR",
    probability: "71.2%",
    edge: "+1.2%",
    edgeValue: 1.2,
    confidence: "85%",
  },
];

const systemStatus: StatusItem[] = [
  { label: "Data Feed", status: "OK", variant: "success", icon: "check" },
  { label: "Model Freshness", status: "Training", variant: "warning", icon: "sync" },
  { label: "System Latency", status: "12ms", variant: "default", icon: "check" },
  { label: "API Connection", status: "Error", variant: "danger", icon: "error" },
];

const topicSentiments: TopicSentiment[] = [
  { topic: "FED Rate Hike", intensity: 0.8 },
  { topic: "AAPL Earnings", intensity: 0.3 },
  { topic: "CPI Data", intensity: 0.4 },
  { topic: "Oil Prices", intensity: 0.9 },
];

function StatusIcon({ icon }: { icon: "check" | "sync" | "error" }) {
  const icons = {
    check: (
      <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
    sync: (
      <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
    error: (
      <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
    ),
  };

  return icons[icon];
}

export default function DashboardPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-dark">
      <Header />

      <main className="flex-1 p-6">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
            {/* PnL Chart - Large card */}
            <Card className="flex flex-col gap-6 p-6 lg:col-span-8">
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-1">
                  <p className="text-xs font-medium uppercase tracking-wider text-text-muted">Total PnL</p>
                  <p className="text-4xl font-bold text-text-primary">+$1,234.56</p>
                  <div className="flex items-center gap-2">
                    <p className="text-xs text-text-muted">1M</p>
                    <p className="text-xs font-semibold text-gain">+5.8%</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="px-4 py-2 text-sm font-medium text-text-muted transition-colors hover:text-text-primary">
                    1D
                  </button>
                  <button className="px-4 py-2 text-sm font-medium text-text-muted transition-colors hover:text-text-primary">
                    1W
                  </button>
                  <button className="rounded bg-secondary/20 px-4 py-2 text-sm font-medium text-text-primary">
                    1M
                  </button>
                </div>
              </div>

              <div className="flex min-h-[200px] flex-1 flex-col justify-end gap-2 py-4">
                <svg
                  fill="none"
                  height="100%"
                  preserveAspectRatio="none"
                  viewBox="0 0 472 150"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="PnL performance chart"
                  role="img"
                >
                  <defs>
                    <linearGradient
                      gradientUnits="userSpaceOnUse"
                      id="chart-gradient"
                      x1="236"
                      x2="236"
                      y1="1"
                      y2="149"
                    >
                      <stop stopColor="#00F5A0" stopOpacity="0.3" />
                      <stop offset="1" stopColor="#00F5A0" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H0V109Z"
                    fill="url(#chart-gradient)"
                  />
                  <path
                    d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
                    stroke="#00F5A0"
                    strokeLinecap="round"
                    strokeWidth="2"
                  />
                </svg>
                <div className="flex justify-between border-t border-dashed border-divider pt-2">
                  <p className="text-xs font-medium tracking-wide text-text-muted">W1</p>
                  <p className="text-xs font-medium tracking-wide text-text-muted">W2</p>
                  <p className="text-xs font-medium tracking-wide text-text-muted">W3</p>
                  <p className="text-xs font-medium tracking-wide text-text-muted">W4</p>
                </div>
              </div>
            </Card>

            {/* Metrics Cards */}
            <div className="flex flex-col gap-4 lg:col-span-4">
              <Card className="flex flex-col gap-3 p-6">
                <p className="text-xs font-medium uppercase tracking-wider text-text-muted">Rolling Sharpe Ratio</p>
                <p className="text-5xl font-bold text-text-primary">1.87</p>
              </Card>

              <Card className="flex flex-col gap-3 p-6">
                <p className="text-xs font-medium uppercase tracking-wider text-text-muted">Win Rate</p>
                <p className="text-5xl font-bold text-text-primary">62.5%</p>
              </Card>
            </div>

            {/* Active Signals Table */}
            <Card className="flex flex-col gap-6 p-6 lg:col-span-12">
              <h3 className="text-lg font-bold text-text-primary">Active Signals</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-divider/60">
                      <th className="pb-4 pr-4 text-xs font-semibold uppercase tracking-wider text-text-muted">
                        Exchange
                      </th>
                      <th className="pb-4 px-4 text-xs font-semibold uppercase tracking-wider text-text-muted">
                        Probability
                      </th>
                      <th className="pb-4 px-4 text-xs font-semibold uppercase tracking-wider text-text-muted">
                        Edge
                      </th>
                      <th className="pb-4 pl-4 text-xs font-semibold uppercase tracking-wider text-text-muted">
                        Confidence
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {demoSignals.map((signal, index) => (
                      <tr key={index} className="border-b border-divider/40 last:border-0">
                        <td className="py-4 pr-4 text-sm font-medium text-text-primary">
                          {signal.exchange}
                        </td>
                        <td className="py-4 px-4 text-sm font-medium text-text-primary">
                          {signal.probability}
                        </td>
                        <td className="py-4 px-4 text-sm font-semibold">
                          <span className={signal.edgeValue > 0 ? "text-primary" : "text-danger"}>
                            {signal.edge}
                          </span>
                        </td>
                        <td className="py-4 pl-4 text-sm font-medium text-text-primary">
                          {signal.confidence}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            {/* Topic Sentiment and System Status */}
            <div className="grid grid-cols-1 gap-4 lg:col-span-12 lg:grid-cols-2">
              {/* Topic Sentiment */}
              <Card className="flex flex-col gap-6 p-6">
                <h3 className="text-lg font-bold text-text-primary">Topic Sentiment</h3>
                <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                  {topicSentiments.map((topic, index) => (
                    <div key={index} className="flex items-center justify-between gap-4">
                      <p className="text-sm text-text-primary/90">{topic.topic}</p>
                      <div
                        className={`h-6 w-12 rounded ${
                          topic.intensity > 0.7
                            ? "bg-danger"
                            : topic.intensity > 0.5
                            ? "bg-danger/60"
                            : topic.intensity > 0.3
                            ? "bg-gain/40"
                            : "bg-gain"
                        }`}
                        aria-label={`Sentiment intensity: ${topic.intensity}`}
                      />
                    </div>
                  ))}
                </div>
              </Card>

              {/* System Status */}
              <Card className="flex flex-col gap-6 p-6">
                <h3 className="text-lg font-bold text-text-primary">System Status</h3>
                <div className="flex flex-col gap-4">
                  {systemStatus.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className={`flex h-6 w-6 items-center justify-center rounded-full ${
                        item.variant === "success" ? "bg-gain/20" :
                        item.variant === "warning" ? "bg-pending/20" :
                        item.variant === "danger" ? "bg-danger/20" :
                        "bg-text-muted/20"
                      }`}>
                        <div className={`${
                          item.variant === "success" ? "text-gain" :
                          item.variant === "warning" ? "text-pending" :
                          item.variant === "danger" ? "text-danger" :
                          "text-text-muted"
                        }`}>
                          <StatusIcon icon={item.icon} />
                        </div>
                      </div>
                      <p className="flex-1 text-sm text-text-primary/80">{item.label}</p>
                      <p className={`text-sm font-semibold ${
                        item.variant === "success" ? "text-gain" :
                        item.variant === "warning" ? "text-pending" :
                        item.variant === "danger" ? "text-danger" :
                        "text-text-primary"
                      }`}>
                        {item.status}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
