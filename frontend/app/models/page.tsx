// File: frontend/app/models/page.tsx
import * as React from "react";
import type { Metadata } from "next";
import { ModelCard, ModelCardProps } from "../components/models/model-card";

export const metadata: Metadata = {
  title: "Model Management - QuantVision",
  description: "Manage, monitor, and train your quantitative trading models",
};

const modelsData: ModelCardProps[] = [
  {
    name: "Momentum Scalper v3",
    description: "High-frequency BTC/ETH model",
    status: "Active",
    accuracy: 89.2,
    lastTrained: "2024-07-21",
  },
  {
    name: "Arbitrage Hunter",
    description: "Cross-exchange arbitrage signals",
    status: "Idle",
    accuracy: 92.5,
    lastTrained: "2024-06-15",
  },
  {
    name: "Volatility Predictor",
    description: "Predicts short-term market volatility",
    status: "Active",
    accuracy: 71.8,
    lastTrained: "2024-07-20",
  },
  {
    name: "News Sentiment Bot",
    description: "NLP-based sentiment analysis",
    status: "Active",
    accuracy: 85.6,
    lastTrained: "2024-07-18",
  },
  {
    name: "MACD Crossover AI",
    description: "Technical indicator-based model",
    status: "Idle",
    accuracy: 79.4,
    lastTrained: "2024-05-30",
  },
  {
    name: "On-Chain Analyst",
    description: "Analyzes blockchain transaction data",
    status: "Idle",
    accuracy: 95.1,
    lastTrained: "2024-07-02",
  },
];

export default function ModelsPage() {
  return (
    <>
      <main className="flex-1 p-4 sm:p-6 md:p-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-text-primary text-2xl font-bold leading-tight tracking-[-0.015em] sm:text-3xl">
              Model Management
            </h1>
            <div className="flex h-10 w-full flex-1 items-center justify-center rounded-lg bg-panel p-1 sm:w-auto sm:max-w-xs">
              <label className="flex h-full grow cursor-pointer items-center justify-center overflow-hidden rounded-md px-3 text-sm font-medium leading-normal text-text-muted has-[:checked]:bg-secondary/20 has-[:checked]:text-text-primary">
                <span className="truncate">Overview</span>
                <input
                  defaultChecked
                  className="invisible w-0"
                  name="model-tab"
                  type="radio"
                  value="overview"
                />
              </label>
              <label className="flex h-full grow cursor-pointer items-center justify-center overflow-hidden rounded-md px-3 text-sm font-medium leading-normal text-text-muted has-[:checked]:bg-secondary/20 has-[:checked]:text-text-primary">
                <span className="truncate">Training History</span>
                <input
                  className="invisible w-0"
                  name="model-tab"
                  type="radio"
                  value="history"
                />
              </label>
              <label className="flex h-full grow cursor-pointer items-center justify-center overflow-hidden rounded-md px-3 text-sm font-medium leading-normal text-text-muted has-[:checked]:bg-secondary/20 has-[:checked]:text-text-primary">
                <span className="truncate">Comparison</span>
                <input
                  className="invisible w-0"
                  name="model-tab"
                  type="radio"
                  value="compare"
                />
              </label>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {modelsData.map((model) => (
              <ModelCard key={model.name} {...model} />
            ))}
          </div>
        </div>
      </main>
      <button className="fixed bottom-8 right-8 flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-semibold text-background-dark shadow-lg shadow-primary/20 transition-transform hover:scale-105">
        <span className="material-symbols-outlined text-xl">add</span>
        Train New Model
      </button>
    </>
  );
}
