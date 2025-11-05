import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Header } from "./components/header";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "QuantVision - Trading Dashboard",
  description: "Professional quantitative trading system for event-based prediction markets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} font-display bg-background-dark text-text-primary antialiased`}
      >
        <div className="relative flex min-h-screen w-full flex-col">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
