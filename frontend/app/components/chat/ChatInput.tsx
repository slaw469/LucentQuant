// File: frontend/app/components/chat/ChatInput.tsx
"use client";
import React, { useState } from "react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      onSendMessage(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="flex w-full items-center gap-4 border-t border-divider pt-4">
      <textarea
        className="flex-1 resize-none rounded-lg border-0 bg-panel py-3 pl-4 pr-12 text-sm text-text-primary placeholder:text-text-muted focus:ring-2 focus:ring-inset focus:ring-primary"
        placeholder="Ask me anything..."
        rows={1}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
          }
        }}
      />
      <button
        className="rounded-full bg-primary p-3 text-background-dark shadow-glow-primary transition-transform hover:scale-110"
        onClick={handleSendMessage}
      >
        <span className="material-symbols-outlined">send</span>
      </button>
    </div>
  );
};
