"use client";

import { useEffect, useState } from "react";

const commands = [
  "analyze performance --last-30d --channels all",
  "create campaign --from top-performing-post",
  "optimize ads --target-cpa 12 --platform meta",
  "find opportunities --channel reddit --keywords saas",
  "schedule posts --platform linkedin --time 10am",
  "generate report --for-ceo --metrics all",
  "launch campaign --target technical-founders",
  "analyze competitors --last-quarter",
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

  return (
    <div className="relative">
      {value === "" && (
        <div className="absolute top-3 left-3 pointer-events-none z-10 flex items-center">
          <span className="inline-block w-[2px] h-4 bg-foreground animate-cursor" />
          <span className="text-sm text-muted-foreground font-mono ml-1">{placeholder}</span>
        </div>
      )}
      <textarea
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        onKeyDown={handleKeyDown}
        autoFocus
        className="flex min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-3 text-sm ring-offset-background placeholder:text-muted-foreground outline-none ring-2 ring-ring ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-mono resize-none pr-32 relative z-20"
        rows={4}
      />
    </div>
  );
}
