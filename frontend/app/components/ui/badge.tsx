// File: frontend/app/components/ui/badge.tsx
import * as React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "success" | "warning" | "danger";
  children: React.ReactNode;
}

export function Badge({
  className = "",
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  const variants = {
    default: "bg-panel text-text-primary",
    success: "bg-gain/20 text-gain",
    warning: "bg-pending/20 text-pending",
    danger: "bg-danger/20 text-danger",
  };

  return (
    <div
      className={`inline-flex items-center gap-1.5 rounded px-2 py-1 text-xs font-medium ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

