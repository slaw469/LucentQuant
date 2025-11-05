// File: frontend/app/components/signals/DetailsModal.tsx
import * as React from 'react';

type DetailsModalProps = {
  modalData: {
    marketName: string;
    marketCategory: string;
    exchange: string;
    predicted: number;
    implied: number;
    featureImportance: { feature: string; importance: number }[];
    relatedNews: { title: string; source: string; time: string }[];
  };
  onClose: () => void;
};

export default function DetailsModal({ modalData, onClose }: DetailsModalProps) {
  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-background-dark/80 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl rounded-xl border border-divider bg-panel m-4">
        <button className="absolute top-4 right-4 text-text-muted hover:text-text-primary transition-colors" onClick={onClose}>
          <span className="material-symbols-outlined">close</span>
        </button>
        <div className="grid grid-cols-1 lg:grid-cols-5">
          <div className="lg:col-span-3 p-6 flex flex-col gap-6">
            <div>
              <h3 className="text-xl font-bold tracking-[-0.015em] text-text-primary">{modalData.marketName}</h3>
              <p className="text-text-muted">{modalData.exchange} / {modalData.marketCategory}</p>
            </div>
            <div className="flex-1 flex flex-col min-h-[250px]">
              <div className="flex justify-between items-baseline">
                <p className="text-sm text-text-muted">Price vs. Time</p>
                <div className="flex gap-2 items-center text-sm">
                  <span className="text-gain font-medium">Predicted: {modalData.predicted}%</span>
                  <span className="text-text-muted">Implied: {modalData.implied}%</span>
                </div>
              </div>
              <div className="flex-1 -ml-8 mt-4">
                <svg height="100%" preserveAspectRatio="none" viewBox="0 0 500 200" width="100%">
                  <defs>
                    <linearGradient id="chart-grad" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#00C2FF" stopOpacity="0.3"></stop>
                      <stop offset="100%" stopColor="#00C2FF" stopOpacity="0"></stop>
                    </linearGradient>
                  </defs>
                  <path d="M0,200 L0,100 C50,80 100,120 150,110 S250,50 300,60 S400,150 450,140 L500,160 L500,200 Z" fill="url(#chart-grad)"></path>
                  <path d="M0,100 C50,80 100,120 150,110 S250,50 300,60 S400,150 450,140 L500,160" fill="none" stroke="#00C2FF" strokeWidth="2"></path>
                  <path d="M0,120 C50,110 100,140 150,130 S250,80 300,90 S400,170 450,160 L500,180" fill="none" stroke="#8B93A7" strokeDasharray="4" strokeWidth="1.5"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 bg-background-dark/50 p-6 rounded-r-xl flex flex-col gap-6">
            <div>
              <h4 className="font-semibold text-text-muted mb-3">Feature Importance</h4>
              <div className="flex flex-col gap-2.5 text-sm">
                {modalData.featureImportance.map((item) => (
                  <div className="flex items-center gap-2" key={item.feature}>
                    <span className="w-28 text-text-muted truncate">{item.feature}</span>
                    <div className="flex-1 h-4 bg-divider rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: `${item.importance}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t border-divider"></div>
            <div>
              <h4 className="font-semibold text-text-muted mb-3">Related News</h4>
              <div className="flex flex-col gap-3">
                {modalData.relatedNews.map((news) => (
                  <div className="text-sm" key={news.title}>
                    <p className="text-text-primary hover:text-secondary cursor-pointer">{news.title}</p>
                    <p className="text-text-muted text-xs">{news.source} · {news.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
