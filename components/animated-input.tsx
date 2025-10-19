"use client";

import { useEffect, useState } from "react";

const commands = [
  "Create a Product Hunt launch campaign for next Tuesday",
  "Get our first 1,000 users in 30 days",
  "Find subreddits where our target customers hang out",
  "Launch our new pricing and announce it everywhere",
  "Analyze why our LinkedIn ads cost so much lately",
  "Build hype for our beta waitlist opening",
  "Turn our best case study into social content",
];

interface AnimatedInputProps {
  onSubmit?: () => void;
  value?: string;
  onChange?: (value: string) => void;
}

export function AnimatedInput({ onSubmit, value = "", onChange }: AnimatedInputProps) {
  const [placeholder, setPlaceholder] = useState("");
  const [commandIndex, setCommandIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentCommand = commands[commandIndex];
    const typingSpeed = isDeleting ? 30 : 60;
    const pauseTime = isDeleting ? 500 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentCommand.length) {
        setPlaceholder(currentCommand.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setPlaceholder(currentCommand.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentCommand.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setCommandIndex((commandIndex + 1) % commands.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, commandIndex]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (onSubmit) {
        onSubmit();
      }
    }
  };

  // Auto-resize textarea based on content
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = Math.max(120, e.target.scrollHeight) + 'px';
  };

  return (
    <div className="relative">
      <textarea
        value={value}
        onChange={handleTextareaChange}
        onKeyDown={handleKeyDown}
        autoFocus
        className="flex min-h-[120px] w-full rounded-md border-2 border-[#009c4e] bg-[#122319] text-[#47ffa4] px-3 py-3 pb-16 text-sm placeholder:text-[#00e572] outline-none ring-2 ring-[#06ff83]/30 focus:ring-[#06ff83] ring-offset-2 ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 resize-none relative z-10 transition-all"
        rows={4}
      />
      {value === "" && (
        <div className="absolute top-3 left-3 pointer-events-none z-20 flex items-center">
          <span className="inline-block w-[2px] h-4 bg-[#06ff83] animate-cursor shadow-[0_0_8px_rgba(6,255,131,0.5)]" />
          <span className="text-sm text-[#00e572] font-mono ml-1">{placeholder}</span>
        </div>
      )}
    </div>
  );
}
