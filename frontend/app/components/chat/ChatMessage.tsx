// File: frontend/app/components/chat/ChatMessage.tsx
import React from "react";
import { ChatAvatar } from "./ChatAvatar";

export interface Message {
  author: "user" | "ai";
  content: React.ReactNode;
}

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const authorName = message.author === "user" ? "User" : "QuantVision AI";
  return (
    <div className="flex items-start gap-4">
      <ChatAvatar variant={message.author} />
      <div className="w-full rounded-xl rounded-tl-none border border-divider bg-panel p-4">
        <p className="font-semibold text-text-primary">{authorName}</p>
        <div className="text-text-muted">{message.content}</div>
      </div>
    </div>
  );
};
