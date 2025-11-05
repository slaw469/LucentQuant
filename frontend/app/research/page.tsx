// File: frontend/app/research/page.tsx
"use client";
import React, { useState } from "react";
import type { Metadata } from "next";
import { ChatInput } from "../components/chat/ChatInput";
import { ChatMessage, Message } from "../components/chat/ChatMessage";
import { ChatPanel } from "../components/chat/ChatPanel";

const initialMessages: Message[] = [
  {
    author: "user",
    content: "Summarize the market sentiment on the latest CPI report and suggest potential trades.",
  },
  {
    author: "ai",
    content: (
      <div className="space-y-2">
        <p>
          The latest CPI report showed a slight cooling in inflation, which has
          been interpreted positively by the market. Sentiment analysis of news
          articles and social media indicates a bullish short-term outlook,
          particularly for tech stocks.
        </p>
        <p>Potential trades:</p>
        <ul className="list-inside list-disc space-y-1 pl-2">
          <li>
            <strong>Long NASDAQ 100 (QQQ):</strong> Capitalize on the positive
            tech sentiment.
          </li>
          <li>
            <strong>Short Volatility (VIX):</strong> As market fears subside,
            volatility is expected to decrease.
          </li>
        </ul>
      </div>
    ),
  },
];

export default function ResearchPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);

  const handleNewChat = () => {
    setMessages([]);
  };

  const handleSendMessage = (text: string) => {
    const userMessage: Message = { author: "user", content: text };
    setMessages((prev) => [...prev, userMessage]);

    // Mock AI Response
    setTimeout(() => {
      const aiResponse: Message = {
        author: "ai",
        content: "This is a mocked AI response.",
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 500);
  };

  return (
    <main className="flex flex-1 flex-col overflow-hidden">
      <div className="mx-auto flex h-full w-full max-w-4xl flex-1 flex-col p-4 sm:p-6 md:p-8">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-text-primary">
            AI Research Assistant
          </h1>
          <button
            onClick={handleNewChat}
            className="flex items-center gap-2 rounded-lg border border-divider bg-panel px-4 py-2 text-sm text-text-primary hover:bg-divider"
          >
            <span className="material-symbols-outlined text-base">add</span>
            New Chat
          </button>
        </div>
        <div className="flex-1 space-y-6 overflow-y-auto pr-2">
          {messages.length === 0 ? (
            <ChatPanel />
          ) : (
            messages.map((msg, i) => <ChatMessage key={i} message={msg} />)
          )}
        </div>
        <div className="mt-auto">
          <ChatInput onSendMessage={handleSendMessage} />
        </div>
      </div>
    </main>
  );
}
