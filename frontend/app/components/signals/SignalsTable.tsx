// File: frontend/app/components/signals/SignalsTable.tsx
import * as React from 'react';
import { Signal } from '@/app/signals/data';

type SignalsTableProps = {
  signals: Signal[];
  onRowClick: (signal: Signal) => void;
  sortConfig: { key: keyof Signal; direction: 'asc' | 'desc' } | null;
  setSortConfig: React.Dispatch<React.SetStateAction<{ key: keyof Signal; direction: 'asc' | 'desc' } | null>>;
};

const SortableHeader = ({
  label,
  sortKey,
  sortConfig,
  setSortConfig,
}: {
  label: string;
  sortKey: keyof Signal;
  sortConfig: { key: keyof Signal; direction: 'asc' | 'desc' } | null;
  setSortConfig: React.Dispatch<React.SetStateAction<{ key: keyof Signal; direction: 'asc' | 'desc' } | null>>;
}) => {
  const isSorted = sortConfig?.key === sortKey;
  const direction = isSorted ? (sortConfig.direction === 'asc' ? 'desc' : 'asc') : 'desc';

  return (
    <th className="py-3 px-4 text-sm font-semibold text-text-muted cursor-pointer" onClick={() => setSortConfig({ key: sortKey, direction })}>
      <div className="flex items-center gap-2">
        {label}
        <span className="material-symbols-outlined text-base">
          {isSorted ? (sortConfig.direction === 'asc' ? 'arrow_upward' : 'arrow_downward') : 'swap_vert'}
        </span>
      </div>
    </th>
  );
};

export default function SignalsTable({ signals, onRowClick, sortConfig, setSortConfig }: SignalsTableProps) {
  return (
    <table className="w-full text-left">
      <thead>
        <tr className="border-b border-divider">
          <SortableHeader label="Market Name" sortKey="marketName" sortConfig={sortConfig} setSortConfig={setSortConfig} />
          <SortableHeader label="Exchange" sortKey="exchange" sortConfig={sortConfig} setSortConfig={setSortConfig} />
          <SortableHeader label="Predicted" sortKey="predicted" sortConfig={sortConfig} setSortConfig={setSortConfig} />
          <SortableHeader label="Implied" sortKey="implied" sortConfig={sortConfig} setSortConfig={setSortConfig} />
          <SortableHeader label="Edge" sortKey="edge" sortConfig={sortConfig} setSortConfig={setSortConfig} />
          <SortableHeader label="Confidence" sortKey="confidence" sortConfig={sortConfig} setSortConfig={setSortConfig} />
          <SortableHeader label="Last Updated" sortKey="lastUpdated" sortConfig={sortConfig} setSortConfig={setSortConfig} />
        </tr>
      </thead>
      <tbody className="divide-y divide-divider">
        {signals.map((signal) => (
          <tr
            key={signal.marketName}
            className={`hover:bg-background-dark/50 transition-colors ${signal.edge > 5 ? 'shadow-glow-green' : signal.edge < -5 ? 'shadow-glow-red' : ''}`}
            onClick={() => onRowClick(signal)}
          >
            <td className="p-4"><a className="font-medium text-text-primary hover:text-secondary" href="#details-modal">{signal.marketName}</a></td>
            <td className="p-4 text-text-muted">{signal.exchange}</td>
            <td className="p-4 text-text-primary">{signal.predicted.toFixed(1)}%</td>
            <td className="p-4 text-text-muted">{signal.implied.toFixed(1)}%</td>
            <td className={`p-4 font-medium ${signal.edge >= 0 ? 'text-gain' : 'text-danger'}`}>{signal.edge >= 0 ? `+${signal.edge.toFixed(1)}` : signal.edge.toFixed(1)}%</td>
            <td className="p-4 text-text-primary">{signal.confidence}%</td>
            <td className="p-4 text-text-muted">{signal.lastUpdated}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
