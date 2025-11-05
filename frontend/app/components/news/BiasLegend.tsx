// File: frontend/app/components/news/BiasLegend.tsx

import { Card } from "@/app/components/ui/card";

const biasItems = [
  { name: "Left", color: "bg-bias-left" },
  { name: "Right", color: "bg-bias-right" },
  { name: "Center", color: "bg-bias-center" },
  { name: "Niche", color: "bg-bias-niche" },
];

export function BiasLegend() {
  return (
    <Card className="flex flex-col gap-4">
      <h3 className="text-lg font-bold leading-tight tracking-[-0.015em] text-text-primary">
        Bias Legend
      </h3>
      <div className="flex flex-col gap-3">
        {biasItems.map((item) => (
          <div key={item.name} className="flex items-center gap-3">
            <div className={`size-4 rounded-full ${item.color}`}></div>
            <p className="text-sm text-text-primary">{item.name}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
