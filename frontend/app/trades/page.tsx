// File: frontend/app/trades/page.tsx
"use client";

import * as React from "react";
import type { Metadata } from "next";
import type { Trade, SortField, SortDirection } from "@/lib/types/trade";
import { mockTrades, mockMetrics } from "./data";
import { TradeModal } from "../components/trades/trade-modal";

export default function TradesPage() {
  const [activeTab, setActiveTab] = React.useState<"open" | "closed">("open");
  const [selectedTrade, setSelectedTrade] = React.useState<Trade | null>(null);
  const [sortField, setSortField] = React.useState<SortField>("pnl");
  const [sortDirection, setSortDirection] = React.useState<SortDirection>("desc");

  const filteredTrades = mockTrades.filter((trade) => trade.status === activeTab);

  const sortedTrades = [...filteredTrades].sort((a, b) => {
    let aVal: number | string = a[sortField] ?? 0;
    let bVal: number | string = b[sortField] ?? 0;

    if (sortField === "exitPrice") {
      aVal = a.exitPrice ?? 0;
      bVal = b.exitPrice ?? 0;
    }

    if (typeof aVal === "string") aVal = aVal.toLowerCase();
    if (typeof bVal === "string") bVal = bVal.toLowerCase();

    if (aVal < bVal) return sortDirection === "asc" ? -1 : 1;
    if (aVal > bVal) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("desc");
    }
  };

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return null;
    return (
      <svg className="ml-1 inline h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d={sortDirection === "asc" ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
        />
      </svg>
    );
  };

  return (
    <main className="flex min-h-screen flex-1 flex-col p-4 sm:p-6 md:p-8">
      <div className="mx-auto w-full max-w-[1800px]">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-text-primary">Trades & Positions</h1>
          <p className="mt-2 text-text-muted">Track your paper trading performance and positions</p>
        </header>

        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-divider bg-panel p-6">
            <p className="text-sm font-medium text-text-muted">Total PnL</p>
            <p className="mt-2 text-3xl font-bold text-gain">+${mockMetrics.totalPnL.toFixed(2)}</p>
            <p className="mt-1 text-xs text-text-muted">{mockMetrics.totalTrades} trades</p>
          </div>
          <div className="rounded-xl border border-divider bg-panel p-6">
            <p className="text-sm font-medium text-text-muted">Realized PnL</p>
            <p className="mt-2 text-3xl font-bold text-text-primary">+${mockMetrics.realizedPnL.toFixed(2)}</p>
            <p className="mt-1 text-xs text-gain">+{((mockMetrics.realizedPnL / 100000) * 100).toFixed(2)}%</p>
          </div>
          <div className="rounded-xl border border-divider bg-panel p-6">
            <p className="text-sm font-medium text-text-muted">Open PnL</p>
            <p className="mt-2 text-3xl font-bold text-primary">+${mockMetrics.openPnL.toFixed(2)}</p>
            <p className="mt-1 text-xs text-text-muted">3 positions</p>
          </div>
          <div className="rounded-xl border border-divider bg-panel p-6">
            <p className="text-sm font-medium text-text-muted">Win Rate</p>
            <p className="mt-2 text-3xl font-bold text-text-primary">{mockMetrics.winRate.toFixed(1)}%</p>
            <p className="mt-1 text-xs text-text-muted">
              {mockMetrics.winningTrades}W / {mockMetrics.losingTrades}L
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          <div className="flex flex-col">
            <div className="mb-4 flex items-center gap-2 border-b border-divider">
              <button
                onClick={() => setActiveTab("open")}
                className={`px-4 py-3 text-sm font-medium transition-colors ${
                  activeTab === "open"
                    ? "border-b-2 border-primary text-primary"
                    : "text-text-muted hover:text-text-primary"
                } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background-dark`}
              >
                Open Positions ({mockTrades.filter((t) => t.status === "open").length})
              </button>
              <button
                onClick={() => setActiveTab("closed")}
                className={`px-4 py-3 text-sm font-medium transition-colors ${
                  activeTab === "closed"
                    ? "border-b-2 border-primary text-primary"
                    : "text-text-muted hover:text-text-primary"
                } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background-dark`}
              >
                Closed Trades ({mockTrades.filter((t) => t.status === "closed").length})
              </button>
            </div>

            <div className="overflow-hidden rounded-xl border border-divider bg-panel">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="border-b border-divider bg-black/20">
                    <tr>
                      <th
                        className="cursor-pointer px-4 py-3 text-xs font-semibold text-text-muted transition-colors hover:text-text-primary"
                        onClick={() => handleSort("market")}
                      >
                        Market
                        <SortIcon field="market" />
                      </th>
                      <th
                        className="cursor-pointer px-4 py-3 text-xs font-semibold text-text-muted transition-colors hover:text-text-primary"
                        onClick={() => handleSort("side")}
                      >
                        Side
                        <SortIcon field="side" />
                      </th>
                      <th
                        className="cursor-pointer px-4 py-3 text-xs font-semibold text-text-muted transition-colors hover:text-text-primary"
                        onClick={() => handleSort("size")}
                      >
                        Size
                        <SortIcon field="size" />
                      </th>
                      <th
                        className="cursor-pointer px-4 py-3 text-xs font-semibold text-text-muted transition-colors hover:text-text-primary"
                        onClick={() => handleSort("entryPrice")}
                      >
                        Entry Price
                        <SortIcon field="entryPrice" />
                      </th>
                      {activeTab === "closed" && (
                        <th
                          className="cursor-pointer px-4 py-3 text-xs font-semibold text-text-muted transition-colors hover:text-text-primary"
                          onClick={() => handleSort("exitPrice")}
                        >
                          Exit Price
                          <SortIcon field="exitPrice" />
                        </th>
                      )}
                      <th
                        className="cursor-pointer px-4 py-3 text-xs font-semibold text-text-muted transition-colors hover:text-text-primary"
                        onClick={() => handleSort("pnl")}
                      >
                        PnL
                        <SortIcon field="pnl" />
                      </th>
                      <th
                        className="cursor-pointer px-4 py-3 text-xs font-semibold text-text-muted transition-colors hover:text-text-primary"
                        onClick={() => handleSort("duration")}
                      >
                        Duration
                        <SortIcon field="duration" />
                      </th>
                      <th className="px-4 py-3 text-xs font-semibold text-text-muted">Signal ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedTrades.map((trade) => {
                      const isProfitable = trade.pnl >= 0;
                      return (
                        <tr
                          key={trade.id}
                          onClick={() => setSelectedTrade(trade)}
                          className="cursor-pointer border-b border-divider transition-colors hover:bg-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              setSelectedTrade(trade);
                            }
                          }}
                        >
                          <td className="px-4 py-3 text-sm font-medium text-text-primary">{trade.market}</td>
                          <td className="px-4 py-3">
                            <span
                              className={`inline-flex rounded px-2 py-1 text-xs font-medium ${
                                trade.side === "Long" ? "bg-gain/20 text-gain" : "bg-danger/20 text-danger"
                              }`}
                            >
                              {trade.side}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-sm text-text-primary">{trade.size}</td>
                          <td className="px-4 py-3 text-sm text-text-primary">${trade.entryPrice.toLocaleString()}</td>
                          {activeTab === "closed" && (
                            <td className="px-4 py-3 text-sm text-text-primary">
                              {trade.exitPrice ? `$${trade.exitPrice.toLocaleString()}` : "-"}
                            </td>
                          )}
                          <td className={`px-4 py-3 text-sm font-semibold ${isProfitable ? "text-gain" : "text-danger"}`}>
                            {isProfitable ? "+" : ""}${trade.pnl.toFixed(2)}
                            <span className="ml-1 text-xs">({isProfitable ? "+" : ""}{trade.pnlPercent.toFixed(2)}%)</span>
                          </td>
                          <td className="px-4 py-3 text-sm text-text-muted">{trade.duration}</td>
                          <td className="px-4 py-3 text-sm text-text-muted">{trade.signalId}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-xl border border-divider bg-panel p-6">
              <h3 className="mb-4 text-sm font-semibold text-text-primary">PnL Curve</h3>
              <div className="flex h-48 items-end justify-between gap-1">
                {[420, 580, 890, 1120, 1350, 1680, 2100, 2400].map((value, i) => (
                  <div
                    key={i}
                    className="w-full rounded-t bg-gradient-to-t from-gain/20 to-gain"
                    style={{ height: `${(value / 2400) * 100}%` }}
                  />
                ))}
              </div>
              <div className="mt-3 flex justify-between text-xs text-text-muted">
                <span>Week 1</span>
                <span>Week 8</span>
              </div>
            </div>

            <div className="rounded-xl border border-divider bg-panel p-6">
              <h3 className="mb-4 text-sm font-semibold text-text-primary">PnL Distribution</h3>
              <div className="flex h-48 items-end justify-center gap-2">
                {[12, 25, 48, 85, 62, 35, 18, 8].map((value, i) => {
                  const colors = [
                    "bg-danger",
                    "bg-danger/70",
                    "bg-pending/50",
                    "bg-pending",
                    "bg-gain/50",
                    "bg-gain/70",
                    "bg-gain",
                    "bg-gain",
                  ];
                  return (
                    <div key={i} className={`w-8 rounded-t ${colors[i]}`} style={{ height: `${value}%` }} />
                  );
                })}
              </div>
              <div className="mt-3 text-center text-xs text-text-muted">
                <span className="text-danger">Loss</span>
                <span className="mx-2">←</span>
                <span className="text-text-muted">Distribution</span>
                <span className="mx-2">→</span>
                <span className="text-gain">Profit</span>
              </div>
            </div>

            <div className="rounded-xl border border-divider bg-panel p-6">
              <h3 className="mb-4 text-sm font-semibold text-text-primary">Quick Stats</h3>
              <dl className="space-y-3">
                <div className="flex justify-between">
                  <dt className="text-sm text-text-muted">Avg Win</dt>
                  <dd className="text-sm font-medium text-gain">+$430.50</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm text-text-muted">Avg Loss</dt>
                  <dd className="text-sm font-medium text-danger">-$200.00</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm text-text-muted">Profit Factor</dt>
                  <dd className="text-sm font-medium text-text-primary">2.15</dd>
                </div>
                <div className="flex justify-between border-t border-divider pt-3">
                  <dt className="text-sm text-text-muted">Largest Win</dt>
                  <dd className="text-sm font-medium text-gain">+$1,650.00</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </div>

      {selectedTrade && <TradeModal trade={selectedTrade} onClose={() => setSelectedTrade(null)} />}
    </main>
  );
}
