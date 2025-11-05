// File: frontend/lib/routes.ts
export const ROUTES = {
  HOME: "/",
  SIGNALS: "/signals",
  TRADES: "/trades",
  MODELS: "/models",
  NEWS: "/news",
  RESEARCH: "/research",
} as const;

export type RouteKey = keyof typeof ROUTES;
export type RoutePath = (typeof ROUTES)[RouteKey];

export interface NavLink {
  href: RoutePath;
  label: string;
}

export const NAV_LINKS: NavLink[] = [
  { href: ROUTES.HOME, label: "Overview" },
  { href: ROUTES.SIGNALS, label: "Signals" },
  { href: ROUTES.TRADES, label: "Trades" },
  { href: ROUTES.MODELS, label: "Models" },
  { href: ROUTES.NEWS, label: "News" },
  { href: ROUTES.RESEARCH, label: "Research" },
];

