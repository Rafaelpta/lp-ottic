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
      const speed = isHoveredRef.current ? 0.1 : 0.5; // Moderate scroll speed
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
      className="w-full bg-gradient-to-r from-[#0a2a1d] via-[#122319] to-[#0a2a1d] border-b border-[#009c4e]/30 overflow-hidden"
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
                  <span className="text-[#06ff83] text-xs animate-pulse">{item.icon}</span>
                  <span className="text-xs font-medium text-[#47ffa4]">In Progress:</span>
                  <span className="text-xs text-[#00e572]">{item.text}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[#1c3b28] text-[#00e572] font-medium border border-[#009c4e]">
                    {item.status}
                  </span>
                </>
              )}
              {item.type === "planned" && (
                <>
                  <span className="text-[#00e572]/60 text-xs">{item.icon}</span>
                  <span className="text-xs font-medium text-[#47ffa4]">Planned:</span>
                  <span className="text-xs text-[#00e572]">{item.text}</span>
                </>
              )}
              {item.type === "under-review" && (
                <>
                  <span className="text-[#00e572] text-xs">{item.icon}</span>
                  <span className="text-xs font-medium text-[#47ffa4]">Under Review:</span>
                  <span className="text-xs text-[#00e572]">{item.text}</span>
                </>
              )}
              <span className="text-[#009c4e]/40 text-xs">|</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
