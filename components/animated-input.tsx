"use client";

import { Input } from "@/components/ui/input";
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

export function AnimatedInput() {
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

  return (
    <Input
      placeholder={placeholder}
      className="h-14 pr-32 font-mono"
    />
  );
}
