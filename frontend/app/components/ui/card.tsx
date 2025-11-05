// File: frontend/app/components/ui/card.tsx
import { cn } from "@/lib/utils";
import * as React from "react";

export const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border border-divider bg-panel p-4 sm:p-6",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";
