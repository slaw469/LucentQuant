// File: frontend/app/components/trades/trade-modal.tsx
"use client";

import * as React from "react";
import type { Trade } from "@/lib/types/trade";

interface TradeModalProps {
  trade: Trade;
  onClose: () => void;
}

export function TradeModal({ trade, onClose }: TradeModalProps) {
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const isProfitable = trade.pnl >= 0;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="trade-modal-title"
    >
      <div
        className="relative w-full max-w-4xl rounded-2xl border border-divider bg-background-dark shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-divider px-6 py-4">
          <div>
            <h2 id="trade-modal-title" className="text-xl font-bold text-text-primary">
              {trade.market}
            </h2>
            <p className="mt-1 text-sm text-text-muted">Trade ID: {trade.id}</p>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-text-muted transition-colors hover:bg-panel hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Close modal"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="max-h-[calc(100vh-12rem)] overflow-y-auto p-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-xl border border-divider bg-panel p-4">
                <h3 className="mb-3 text-sm font-semibold text-text-muted">Trade Details</h3>
                <dl className="space-y-2">
                  <div className="flex justify-between">
                    <dt className="text-sm text-text-muted">Signal ID</dt>
                    <dd className="text-sm font-medium text-text-primary">{trade.signalId}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-sm text-text-muted">Side</dt>
                    <dd className={`text-sm font-medium ${trade.side === "Long" ? "text-gain" : "text-danger"}`}>
                      {trade.side}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-sm text-text-muted">Size</dt>
                    <dd className="text-sm font-medium text-text-primary">{trade.size}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-sm text-text-muted">Entry Price</dt>
                    <dd className="text-sm font-medium text-text-primary">${trade.entryPrice.toLocaleString()}</dd>
                  </div>
                  {trade.exitPrice && (
                    <div className="flex justify-between">
                      <dt className="text-sm text-text-muted">Exit Price</dt>
                      <dd className="text-sm font-medium text-text-primary">${trade.exitPrice.toLocaleString()}</dd>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <dt className="text-sm text-text-muted">Duration</dt>
                    <dd className="text-sm font-medium text-text-primary">{trade.duration}</dd>
                  </div>
                  <div className="flex justify-between border-t border-divider pt-2">
                    <dt className="text-sm font-semibold text-text-muted">PnL</dt>
                    <dd className={`text-sm font-bold ${isProfitable ? "text-gain" : "text-danger"}`}>
                      {isProfitable ? "+" : ""}${trade.pnl.toFixed(2)} ({isProfitable ? "+" : ""}{trade.pnlPercent.toFixed(2)}%)
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-xl border border-divider bg-panel p-4">
                <h3 className="mb-3 text-sm font-semibold text-text-muted">Entry/Exit Chart</h3>
                <div className="flex h-48 items-center justify-center rounded-lg bg-black/20">
                  <svg className="h-full w-full" viewBox="0 0 400 150" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id={`chart-${trade.id}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={isProfitable ? "#00F5A0" : "#FF4444"} stopOpacity="0.3" />
                        <stop offset="100%" stopColor={isProfitable ? "#00F5A0" : "#FF4444"} stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d={
                        isProfitable
                          ? "M 0 100 L 100 95 L 200 80 L 300 60 L 400 40 V 150 H 0 Z"
                          : "M 0 40 L 100 50 L 200 70 L 300 90 L 400 110 V 150 H 0 Z"
                      }
                      fill={`url(#chart-${trade.id})`}
                    />
                    <path
                      d={
                        isProfitable
                          ? "M 0 100 L 100 95 L 200 80 L 300 60 L 400 40"
                          : "M 0 40 L 100 50 L 200 70 L 300 90 L 400 110"
                      }
                      stroke={isProfitable ? "#00F5A0" : "#FF4444"}
                      strokeWidth="2"
                      fill="none"
                    />
                    <circle cx="0" cy={isProfitable ? "100" : "40"} r="4" fill="#00D4FF" />
                    {trade.exitPrice && (
                      <circle cx="400" cy={isProfitable ? "40" : "110"} r="4" fill={isProfitable ? "#00F5A0" : "#FF4444"} />
                    )}
                  </svg>
                </div>
                <div className="mt-3 flex items-center justify-between text-xs text-text-muted">
                  <span>Entry: {new Date(trade.entryTime).toLocaleString()}</span>
                  {trade.exitTime && <span>Exit: {new Date(trade.exitTime).toLocaleString()}</span>}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl border border-divider bg-panel p-4">
                <div className="mb-3 flex items-center gap-2">
                  <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                  <h3 className="text-sm font-semibold text-text-primary">AI Analysis</h3>
                </div>
                <p className="text-sm leading-relaxed text-text-primary">{trade.aiSummary}</p>
              </div>

              <div className="rounded-xl border border-divider bg-panel p-4">
                <h3 className="mb-3 text-sm font-semibold text-text-muted">Performance Metrics</h3>
                <div className="space-y-3">
                  <div>
                    <div className="mb-1 flex justify-between text-xs">
                      <span className="text-text-muted">Return</span>
                      <span className={`font-medium ${isProfitable ? "text-gain" : "text-danger"}`}>
                        {trade.pnlPercent.toFixed(2)}%
                      </span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-black/20">
                      <div
                        className={`h-full ${isProfitable ? "bg-gain" : "bg-danger"}`}
                        style={{ width: `${Math.min(Math.abs(trade.pnlPercent) * 10, 100)}%` }}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="rounded-lg bg-black/20 p-3">
                      <p className="text-xs text-text-muted">Status</p>
                      <p className="mt-1 text-sm font-medium capitalize text-text-primary">{trade.status}</p>
                    </div>
                    <div className="rounded-lg bg-black/20 p-3">
                      <p className="text-xs text-text-muted">Duration</p>
                      <p className="mt-1 text-sm font-medium text-text-primary">{trade.duration}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

