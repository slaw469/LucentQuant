// File: frontend/app/components/signals/SignalsPage.tsx
"use client";
import * as React from 'react';
import { signals, Signal, modalData } from '@/app/signals/data';
import FiltersSidebar from './FiltersSidebar';
import SignalsTable from './SignalsTable';
import DetailsModal from './DetailsModal';

export default function SignalsPage() {
  const [filteredSignals, setFilteredSignals] = React.useState<Signal[]>(signals);
  const [selectedSignal, setSelectedSignal] = React.useState<Signal | null>(null);

  // State for filters
  const [exchanges, setExchanges] = React.useState({
    kalshi: true,
    polymarket: true,
  });
  const [confidence, setConfidence] = React.useState(75);
  const [edge, setEdge] = React.useState(5);

  // State for sorting
  const [sortConfig, setSortConfig] = React.useState<{ key: keyof Signal; direction: 'asc' | 'desc' } | null>({ key: 'lastUpdated', direction: 'desc' });

  React.useEffect(() => {
    let newFilteredSignals = [...signals];

    // Filter by exchange
    newFilteredSignals = newFilteredSignals.filter(signal => {
      if (exchanges.kalshi && signal.exchange === 'Kalshi') return true;
      if (exchanges.polymarket && signal.exchange === 'Polymarket') return true;
      return false;
    });

    // Filter by confidence
    newFilteredSignals = newFilteredSignals.filter(signal => signal.confidence >= confidence);

    // Filter by edge
    newFilteredSignals = newFilteredSignals.filter(signal => Math.abs(signal.edge) >= edge);

    // Sort the signals
    if (sortConfig !== null) {
      newFilteredSignals.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }

    setFilteredSignals(newFilteredSignals);
  }, [exchanges, confidence, edge, sortConfig]);

  const handleRowClick = (signal: Signal) => {
    setSelectedSignal(signal);
  };

  const closeModal = () => {
    setSelectedSignal(null);
  };

  return (
    <div className="flex h-full">
      <FiltersSidebar
        exchanges={exchanges}
        setExchanges={setExchanges}
        confidence={confidence}
        setConfidence={setConfidence}
        edge={edge}
        setEdge={setEdge}
      />
      <div className="flex-1 p-4 sm:p-6 md:p-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex flex-col gap-4 rounded-xl border border-divider bg-panel p-0">
            <div className="overflow-x-auto">
              <SignalsTable
                signals={filteredSignals}
                onRowClick={handleRowClick}
                sortConfig={sortConfig}
                setSortConfig={setSortConfig}
              />
            </div>
          </div>
        </div>
      </div>
      {selectedSignal && (
        <DetailsModal
          modalData={{
            ...modalData,
            ...selectedSignal,
          }}
          onClose={closeModal}
        />
      )}
    </div>
  );
}
