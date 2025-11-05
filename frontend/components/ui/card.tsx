// File: frontend/components/ui/card.tsx
import * as React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ className = "", children, ...props }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-divider bg-panel ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function CardHeader({ className = "", children, ...props }: CardHeaderProps) {
  return (
    <div className={`flex flex-col gap-2 p-4 sm:p-6 ${className}`} {...props}>
      {children}
    </div>
  );
}

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function CardTitle({ className = "", children, ...props }: CardTitleProps) {
  return (
    <h3
      className={`text-lg font-bold leading-tight tracking-[-0.015em] text-text-primary ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
}

interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export function CardDescription({ className = "", children, ...props }: CardDescriptionProps) {
  return (
    <p
      className={`text-sm font-normal leading-normal text-text-muted ${className}`}
      {...props}
    >
      {children}
    </p>
  );
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function CardContent({ className = "", children, ...props }: CardContentProps) {
  return (
    <div className={`p-4 sm:p-6 pt-0 ${className}`} {...props}>
      {children}
    </div>
  );
}

