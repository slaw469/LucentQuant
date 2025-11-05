// File: frontend/app/components/news/bias-legend.tsx
import * as React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";

const BIAS_LEGEND = [
  { name: "Left", color: "bg-bias-left" },
  { name: "Right", color: "bg-bias-right" },
  { name: "Center", color: "bg-bias-center" },
  { name: "Niche", color: "bg-bias-niche" },
];

export function BiasLegend() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bias Legend</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
          {BIAS_LEGEND.map((bias, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className={`size-4 rounded-full ${bias.color}`}></div>
              <p className="text-sm text-text-primary">{bias.name}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
