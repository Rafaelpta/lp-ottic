"use client";

import { useEffect, useRef } from "react";

const announcements = [
  { type: "in-progress", icon: "⚡", text: "Multi-channel analytics dashboard", status: "75% complete" },
  { type: "planned", icon: "◆", text: "Real-time competitor tracking" },
  { type: "under-review", icon: "●", text: "LinkedIn AI agent with auto-posting" },
  { type: "in-progress", icon: "⚡", text: "Reddit integration & sentiment analysis", status: "40% complete" },
  { type: "planned", icon: "◆", text: "Campaign performance optimization" },
  { type: "under-review", icon: "●", text: "Email marketing automation" },
  { type: "in-progress", icon: "⚡", text: "Keyword research with AI recommendations", status: "60% complete" },
  { type: "planned", icon: "◆", text: "Twitter thread generator" },
];

export function AnnouncementBar() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isHoveredRef = useRef(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let position = 0;

    const animate = () => {
      const speed = isHoveredRef.current ? 0.2 : 1.5; // Slow on hover, fast otherwise
      position -= speed;

      // Reset position for infinite scroll
      if (Math.abs(position) >= scrollContainer.scrollWidth / 2) {
        position = 0;
      }

      scrollContainer.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 border-b border-zinc-800 overflow-hidden"
      onMouseEnter={() => { isHoveredRef.current = true; }}
      onMouseLeave={() => { isHoveredRef.current = false; }}
    >
      <div className="relative h-9 flex items-center">
        <div ref={scrollRef} className="flex gap-6 items-center w-max px-4">
          {/* Duplicate announcements for infinite scroll */}
          {[...announcements, ...announcements].map((item, index) => (
            <div key={index} className="flex items-center gap-2 whitespace-nowrap">
              {item.type === "in-progress" && (
                <>
                  <span className="text-zinc-200 text-xs animate-pulse">{item.icon}</span>
                  <span className="text-xs font-medium text-zinc-100">In Progress:</span>
                  <span className="text-xs text-zinc-300">{item.text}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-300 font-medium border border-zinc-700">
                    {item.status}
                  </span>
                </>
              )}
              {item.type === "planned" && (
                <>
                  <span className="text-zinc-400 text-xs">{item.icon}</span>
                  <span className="text-xs font-medium text-zinc-100">Planned:</span>
                  <span className="text-xs text-zinc-300">{item.text}</span>
                </>
              )}
              {item.type === "under-review" && (
                <>
                  <span className="text-zinc-300 text-xs">{item.icon}</span>
                  <span className="text-xs font-medium text-zinc-100">Under Review:</span>
                  <span className="text-xs text-zinc-300">{item.text}</span>
                </>
              )}
              <span className="text-zinc-700 text-xs">|</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
