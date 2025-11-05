// File: frontend/app/components/chat/ChatPanel.tsx
import React from "react";

export const ChatPanel: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center">
      <div className="rounded-full bg-primary/10 p-4 text-primary shadow-glow-primary">
        <svg
          className="h-10 w-10"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 6h2v6h-2zm0 8h2v2h-2z"
            opacity=".3"
          ></path>
          <path d="M13 18h-2v-2h2v2zm-2-4h2V6h-2v8zM12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zm0-18c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8z"></path>
        </svg>
      </div>
      <h2 className="text-xl font-semibold">How can I help you today?</h2>
      <p className="text-text-muted">
        Ask me anything about market analysis, sentiment, or trading
        strategies.
      </p>
    </div>
  );
};
