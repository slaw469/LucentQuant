// File: frontend/app/components/signals/FiltersSidebar.tsx
import * as React from 'react';

type FiltersSidebarProps = {
  exchanges: { kalshi: boolean; polymarket: boolean };
  setExchanges: React.Dispatch<React.SetStateAction<{ kalshi: boolean; polymarket: boolean }>>;
  confidence: number;
  setConfidence: React.Dispatch<React.SetStateAction<number>>;
  edge: number;
  setEdge: React.Dispatch<React.SetStateAction<number>>;
};

export default function FiltersSidebar({
  exchanges,
  setExchanges,
  confidence,
  setConfidence,
  edge,
  setEdge,
}: FiltersSidebarProps) {
  return (
    <aside className="sticky top-[61px] hidden h-[calc(100vh-61px)] w-64 flex-col gap-6 border-r border-divider bg-panel/50 p-6 lg:flex">
      <h3 className="text-lg font-bold tracking-[-0.015em]">Filters</h3>
      <div className="flex flex-col gap-4">
        <p className="text-sm font-semibold text-text-muted">Exchanges</p>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 text-sm text-text-primary">
            <input
              checked={exchanges.kalshi}
              onChange={(e) => setExchanges({ ...exchanges, kalshi: e.target.checked })}
              className="form-checkbox rounded-sm border-divider bg-background-dark text-primary focus:ring-primary/50"
              type="checkbox"
            />
            <span>Kalshi</span>
          </label>
          <label className="flex items-center gap-2 text-sm text-text-primary">
            <input
              checked={exchanges.polymarket}
              onChange={(e) => setExchanges({ ...exchanges, polymarket: e.target.checked })}
              className="form-checkbox rounded-sm border-divider bg-background-dark text-primary focus:ring-primary/50"
              type="checkbox"
            />
            <span>Polymarket</span>
          </label>
        </div>
      </div>
      <div className="border-t border-divider"></div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-text-muted">Confidence</p>
          <p className="text-sm font-medium text-primary"> &gt; {confidence}%</p>
        </div>
        <input
          className="slider-thumb h-1 w-full cursor-pointer appearance-none rounded-full bg-divider accent-primary"
          max="100"
          min="0"
          type="range"
          value={confidence}
          onChange={(e) => setConfidence(Number(e.target.value))}
        />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-text-muted">Edge</p>
          <p className="text-sm font-medium text-primary"> &gt; {edge}%</p>
        </div>
        <input
          className="slider-thumb h-1 w-full cursor-pointer appearance-none rounded-full bg-divider accent-primary"
          max="20"
          min="0"
          step="0.5"
          type="range"
          value={edge}
          onChange={(e) => setEdge(Number(e.target.value))}
        />
      </div>
    </aside>
  );
}
