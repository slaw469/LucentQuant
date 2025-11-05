// File: frontend/app/components/models/model-card.tsx
import * as React from "react";
import clsx from "clsx";

export type ModelStatus = "Active" | "Idle";

export interface ModelCardProps {
  name: string;
  description: string;
  accuracy: number;
  status: ModelStatus;
  lastTrained: string;
}

const ModelStatusIndicator: React.FC<{ status: ModelStatus }> = ({ status }) => {
  const isActive = status === "Active";
  return (
    <div
      className={clsx(
        "flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-semibold",
        {
          "bg-gain/10 text-gain": isActive,
          "bg-pending/10 text-pending": !isActive,
        }
      )}
    >
      <div
        className={clsx("h-2 w-2 rounded-full", {
          "bg-gain": isActive,
          "bg-pending": !isActive,
        })}
      />
      {status}
    </div>
  );
};

export const ModelCard: React.FC<ModelCardProps> = ({
  name,
  description,
  accuracy,
  status,
  lastTrained,
}) => {
  const accuracyColor = accuracy >= 75 ? "text-gain" : "text-danger";

  return (
    <div className="group flex cursor-pointer flex-col justify-between rounded-xl border border-divider bg-panel p-4 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(0,245,160,0.2)] sm:p-5">
      <div>
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-bold text-text-primary">{name}</h3>
          <ModelStatusIndicator status={status} />
        </div>
        <p className="mt-1 text-sm text-text-muted">{description}</p>
      </div>
      <div className="mt-6 flex items-end justify-between">
        <div>
          <p className="text-xs text-text-muted">Accuracy</p>
          <p className={clsx("text-xl font-semibold", accuracyColor)}>
            {accuracy.toFixed(1)}%
          </p>
        </div>
        <div>
          <p className="text-right text-xs text-text-muted">Last Trained</p>
          <p className="text-sm font-medium text-text-primary">
            {lastTrained}
          </p>
        </div>
      </div>
    </div>
  );
};
