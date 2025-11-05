// File: frontend/app/components/chat/ChatAvatar.tsx
import clsx from "clsx";
import React from "react";

interface ChatAvatarProps {
  variant: "user" | "ai";
}

export const ChatAvatar: React.FC<ChatAvatarProps> = ({ variant }) => {
  const icon = variant === "user" ? "person" : "psychology";
  const bgColor = variant === "user" ? "bg-secondary" : "bg-primary";

  return (
    <div
      className={clsx(
        "flex size-8 shrink-0 items-center justify-center rounded-full text-background-dark",
        bgColor
      )}
    >
      <span className="material-symbols-outlined text-lg">{icon}</span>
    </div>
  );
};
