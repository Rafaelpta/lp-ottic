"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const testimonials = [
  {
    name: "Leandro Herrera",
    handle: "Founder and CEO at Tera",
    initial: "L",
    image: "/testimonials/leandro-herrera.jpg",
    quote: "We're thrilled with the results. Ottic transforms our data into high-quality content that drives traffic and compounds over time: a huge asset."
  },
  {
    name: "Lucas Costas",
    handle: "CEO of Briefer (YC S 23)",
    initial: "L",
    image: "/testimonials/lucas-costas.jpg",
    quote: "We worked with Ottic to support our content strategy, and they are consistently thoughtful, responsive, and easy to collaborate with."
  },
  {
    name: "Sophia Faria",
    handle: "COO at Abstra (YC S21)",
    initial: "S",
    image: "/testimonials/sophia-faria.jpg",
    quote: "I was skeptical at first, but Ottic replaced 100% our content team. Highly recommend!"
  },
  {
    name: "Tiago Serrano",
    handle: "Founder and CEO at Solucx",
    initial: "T",
    image: "/testimonials/tiago-serrano.jpg",
    quote: "Ottic was a game-changer. It's like having a strategic editorial brain and a senior content team in one."
  },
  {
    name: "Leandro Herrera",
    handle: "Founder and CEO at Tera",
    initial: "L",
    image: "/testimonials/leandro-herrera.jpg",
    quote: "We're thrilled with the results. Ottic transforms our data into high-quality content that drives traffic and compounds over time: a huge asset."
  },
  {
    name: "Lucas Costas",
    handle: "CEO of Briefer (YC S 23)",
    initial: "L",
    image: "/testimonials/lucas-costas.jpg",
    quote: "We worked with Ottic to support our content strategy, and they are consistently thoughtful, responsive, and easy to collaborate with."
  },
];

function TestimonialCard({ name, handle, initial, image, quote }: { name: string; handle: string; initial: string; image: string; quote: string }) {
  return (
    <Card className="w-[300px] min-h-[220px] border-2 border-primary/30 flex-shrink-0">
      <CardHeader className="p-4 flex flex-col gap-3 h-full">
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-primary/20 flex-shrink-0 relative">
            <Image
              src={image}
              alt={name}
              width={48}
              height={48}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex-1 min-w-0">
            <CardTitle className="text-base leading-tight">{name}</CardTitle>
            <p className="text-xs text-muted-foreground leading-tight">{handle}</p>
          </div>
        </div>
        <CardDescription className="text-foreground/80 text-sm leading-relaxed">
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

      {/* Single row - scroll left */}
      <div className="flex gap-4 animate-scroll-left">
        {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
          <TestimonialCard key={`testimonial-${index}`} {...testimonial} />
        ))}
      </div>
    </div>
  );
}
