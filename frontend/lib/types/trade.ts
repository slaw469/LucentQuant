// File: frontend/lib/types/trade.ts
export interface Trade {
  id: string;
  market: string;
  side: "Long" | "Short";
  size: number;
  entryPrice: number;
  entryTime: string;
  exitPrice: number | null;
  exitTime: string | null;
  pnl: number;
  pnlPercent: number;
  duration: string;
  signalId: string;
  status: "open" | "closed";
  aiSummary: string;
}

export interface TradeMetrics {
  totalPnL: number;
  realizedPnL: number;
  openPnL: number;
  winRate: number;
  totalTrades: number;
  winningTrades: number;
  losingTrades: number;
}

export type SortField = "market" | "side" | "size" | "entryPrice" | "exitPrice" | "pnl" | "duration";
export type SortDirection = "asc" | "desc";

