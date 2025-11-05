// File: frontend/app/page.tsx
import * as React from "react";

// Data from the original page.tsx
const demoSignals = [
  {
    exchange: "BINANCE:BTC/USDT",
    probability: "82.1%",
    edge: "+2.5%",
    confidence: "95%",
  },
  {
    exchange: "COINBASE:ETH/USD",
    probability: "78.5%",
    edge: "+1.8%",
    confidence: "92%",
  },
  {
    exchange: "FTX:SOL/USD",
    probability: "65.3%",
    edge: "-0.7%",
    confidence: "88%",
  },
  {
    exchange: "BYBIT:ADA/USDT",
    probability: "85.0%",
    edge: "+3.1%",
    confidence: "98%",
  },
  {
    exchange: "KRAKEN:XRP/EUR",
    probability: "71.2%",
    edge: "+1.2%",
    confidence: "85%",
  },
];

const systemStatus = [
    {
        label: "Data Feed",
        status: "OK",
        icon: "check",
        color: "text-gain",
    },
    {
        label: "Model Freshness",
        status: "Training",
        icon: "sync",
        color: "text-pending",
    },
    {
        label: "System Latency",
        status: "12ms",
        icon: "check",
        color: "text-text-primary",
    },
    {
        label: "API Connection",
        status: "Error",
        icon: "priority_high",
        color: "text-danger",
    },
];

const topicSentiments = [
  { topic: "FED Rate Hike", sentiment: "danger" },
  { topic: "AAPL Earnings", sentiment: "gain" },
  { topic: "CPI Data", sentiment: "gain" },
  { topic: "Oil Prices", sentiment: "danger" },
];


export default function DashboardPage() {
  return (
      <main className="flex-1 p-4 sm:p-6 md:p-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="flex flex-col gap-4 rounded-xl border border-divider bg-panel p-4 sm:p-6 lg:col-span-2">
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-text-primary text-base font-medium leading-normal">
                    Total PnL
                  </p>
                  <p className="text-text-primary tracking-light text-3xl font-bold leading-tight truncate">
                    +$1,234.56
                  </p>
                  <div className="flex gap-2">
                    <p className="text-text-muted text-sm font-normal leading-normal">
                      1M
                    </p>
                    <p className="text-gain text-sm font-medium leading-normal">
                      +5.8%
                    </p>
                  </div>
                </div>
                <div className="w-full sm:w-auto">
                  <div className="flex h-10 w-full flex-1 items-center justify-center rounded-lg bg-black/20 p-1 sm:w-52">
                    <label className="flex h-full grow cursor-pointer items-center justify-center overflow-hidden rounded-md px-2 text-sm font-medium leading-normal text-text-muted has-[:checked]:bg-secondary/20 has-[:checked]:text-text-primary">
                      <span className="truncate">1D</span>
                      <input
                        className="invisible w-0"
                        name="pnl-range"
                        type="radio"
                        value="1D"
                      />
                    </label>
                    <label className="flex h-full grow cursor-pointer items-center justify-center overflow-hidden rounded-md px-2 text-sm font-medium leading-normal text-text-muted has-[:checked]:bg-secondary/20 has-[:checked]:text-text-primary">
                      <span className="truncate">1W</span>
                      <input
                        className="invisible w-0"
                        name="pnl-range"
                        type="radio"
                        value="1W"
                      />
                    </label>
                    <label className="flex h-full grow cursor-pointer items-center justify-center overflow-hidden rounded-md px-2 text-sm font-medium leading-normal text-text-muted has-[:checked]:bg-secondary/20 has-[:checked]:text-text-primary">
                      <span className="truncate">1M</span>
                      <input
                        defaultChecked
                        className="invisible w-0"
                        name="pnl-range"
                        type="radio"
                        value="1M"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex min-h-[200px] flex-1 flex-col justify-end gap-2 py-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 472 150"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient
                      id="chart-gradient"
                      x1="236"
                      y1="1"
                      x2="236"
                      y2="149"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00F5A0" stopOpacity="0.3"></stop>
                      <stop
                        offset="1"
                        stopColor="#00F5A0"
                        stopOpacity="0"
                      ></stop>
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H0V109Z"
                    fill="url(#chart-gradient)"
                  ></path>
                  <path
                    d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
                    stroke="#00F5A0"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                </svg>
                <div className="flex justify-between border-t border-dashed border-divider pt-2">
                  <p className="text-text-muted text-xs font-medium tracking-wide">
                    W1
                  </p>
                  <p className="text-text-muted text-xs font-medium tracking-wide">
                    W2
                  </p>
                  <p className="text-text-muted text-xs font-medium tracking-wide">
                    W3
                  </p>
                  <p className="text-text-muted text-xs font-medium tracking-wide">
                    W4
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2 rounded-xl border border-divider bg-panel p-6">
                <p className="text-text-muted text-base font-medium leading-normal">
                  Rolling Sharpe Ratio
                </p>
                <p className="text-text-primary tracking-light text-3xl font-bold leading-tight">
                  1.87
                </p>
              </div>
              <div className="flex flex-col gap-2 rounded-xl border border-divider bg-panel p-6">
                <p className="text-text-muted text-base font-medium leading-normal">
                  Win Rate
                </p>
                <p className="text-text-primary tracking-light text-3xl font-bold leading-tight">
                  62.5%
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-xl border border-divider bg-panel p-4 sm:p-6 lg:col-span-3">
              <h3 className="text-text-primary text-lg font-bold leading-tight tracking-[-0.015em]">
                Active Signals
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-divider">
                      <th className="py-3 pr-3 text-sm font-semibold text-text-muted">
                        Exchange
                      </th>
                      <th className="py-3 px-3 text-sm font-semibold text-text-muted">
                        Probability
                      </th>
                      <th className="py-3 px-3 text-sm font-semibold text-text-muted">
                        Edge
                      </th>
                      <th className="py-3 pl-3 text-sm font-semibold text-text-muted">
                        Confidence
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {demoSignals.map((signal, index) => (
                      <tr key={index} className="border-b border-divider">
                        <td className="py-3 pr-3 text-sm font-medium text-text-primary">
                          {signal.exchange}
                        </td>
                        <td className="py-3 px-3 text-sm font-medium text-text-primary">
                          {signal.probability}
                        </td>
                        <td
                          className={`py-3 px-3 text-sm font-medium ${
                            signal.edge.startsWith("+")
                              ? "text-primary"
                              : "text-danger"
                          }`}
                        >
                          {signal.edge}
                        </td>
                        <td className="py-3 pl-3 text-sm font-medium text-text-primary">
                          {signal.confidence}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex flex-col gap-6 lg:col-span-3 lg:flex-row">
              <div className="flex flex-1 flex-col gap-4 rounded-xl border border-divider bg-panel p-4 sm:p-6">
                <h3 className="text-text-primary text-lg font-bold leading-tight tracking-[-0.015em]">
                  Topic Sentiment
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {topicSentiments.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between rounded-lg bg-black/20 p-3"
                    >
                      <p className="text-sm text-text-primary/80">
                        {item.topic}
                      </p>
                      <div
                        className={`h-6 w-10 rounded bg-${item.sentiment}/50`}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-4 rounded-xl border border-divider bg-panel p-4 sm:p-6">
                <h3 className="text-text-primary text-lg font-bold leading-tight tracking-[-0.015em]">
                  System Status
                </h3>
                <div className="flex flex-col gap-3">
                  {systemStatus.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div
                        className={`flex h-6 w-6 items-center justify-center rounded-full bg-${item.color.replace('text-','')}/20`}
                      >
                        <span
                          className={`material-symbols-outlined text-sm ${item.color}`}
                        >
                          {item.icon}
                        </span>
                      </div>
                      <p className="flex-1 text-sm text-text-primary/80">
                        {item.label}
                      </p>
                      <p className={`text-sm font-medium ${item.color}`}>
                        {item.status}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
  );
}
