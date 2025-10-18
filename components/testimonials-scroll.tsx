"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Chen",
    handle: "@sarahbuilds",
    initial: "S",
    quote: "Finally, a GTM tool that doesn't make me want to hire a marketing team. One command and my LinkedIn posts are scheduled, ads are optimized, and I can actually see what's working."
  },
  {
    name: "Marcus Rodriguez",
    handle: "@marcusdev",
    initial: "M",
    quote: "The terminal interface is *chef's kiss*. I can script my entire GTM strategy and integrate it with our deployment pipeline. This is what marketing tooling should have always been."
  },
  {
    name: "Emma Thompson",
    handle: "@emmathompson",
    initial: "E",
    quote: "Self-hosted and open source meant I could customize everything for our compliance requirements. The agents actually learn from our data without sending it to third parties."
  },
  {
    name: "David Kim",
    handle: "@dkim_builds",
    initial: "D",
    quote: "Reduced our GTM stack from 12 tools to 1. The agents coordinate across channels better than our old marketing agency did. And it's all in the terminal where I live anyway."
  },
  {
    name: "Lisa Park",
    handle: "@lisaparkhq",
    initial: "L",
    quote: "The persistent memory is game-changing. It remembers what worked 6 months ago and uses that context when planning new campaigns. It's like having a CMO who never forgets."
  },
  {
    name: "James Wilson",
    handle: "@jwilsontech",
    initial: "J",
    quote: "As a solo founder, I can't afford to hire marketing. Ottic lets me compete with funded startups that have full GTM teams. It's like having a whole department for $0."
  },
];

function TestimonialCard({ name, handle, initial, quote }: { name: string; handle: string; initial: string; quote: string }) {
  return (
    <Card className="w-[300px] h-[192px] border-2 border-primary/30 flex-shrink-0">
      <CardHeader className="p-4 flex flex-col gap-4 h-full">
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
            <span className="text-xl font-bold">{initial}</span>
          </div>
          <div className="flex-1">
            <CardTitle className="text-base">{name}</CardTitle>
            <p className="text-sm text-muted-foreground">{handle}</p>
          </div>
        </div>
        <CardDescription className="text-foreground/80 text-sm line-clamp-4">
          {quote}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

export function TestimonialsScroll() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* First row - scroll left */}
      <div className="flex gap-4 mb-4 animate-scroll-left">
        {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
          <TestimonialCard key={`left-${index}`} {...testimonial} />
        ))}
      </div>

      {/* Second row - scroll right */}
      <div className="flex gap-4 animate-scroll-right">
        {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
          <TestimonialCard key={`right-${index}`} {...testimonial} />
        ))}
      </div>
    </div>
  );
}
