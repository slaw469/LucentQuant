// File: frontend/app/components/news/TopKeywords.tsx

import { Card } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { keywords, Keyword } from "@/app/news/mock-data";

const sentimentStyles: { [key in Keyword["sentiment"]]: string } = {
  positive:
    "border-transparent bg-primary/20 text-primary shadow-glow-primary",
  negative: "border-transparent bg-danger/20 text-danger shadow-glow-danger",
  secondary:
    "border-transparent bg-secondary/20 text-secondary shadow-glow-secondary",
  neutral: "border-transparent bg-background-dark text-text-muted",
};

const sizeStyles = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
};

export function TopKeywords() {
  return (
    <Card className="flex flex-col gap-4">
      <h3 className="text-lg font-bold leading-tight tracking-[-0.015em] text-text-primary">
        Top Keywords
      </h3>
      <div className="flex flex-wrap items-center gap-2">
        {keywords.map((keyword) => (
          <Badge
            key={keyword.id}
            className={`${sentimentStyles[keyword.sentiment]} ${
              sizeStyles[keyword.size]
            }`}
          >
            {keyword.name}
          </Badge>
        ))}
      </div>
    </Card>
  );
}
