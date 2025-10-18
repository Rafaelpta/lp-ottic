"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const marketingPrompts = [
  {
    id: 1,
    label: "analyze performance --last-30d",
    category: "Analytics",
    output: `📊 Campaign Performance Analysis (Last 30 Days)

Platform Breakdown:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LinkedIn  │ ████████████░░░░░░ 65%  │ $12.4K spent
Reddit    │ ████████░░░░░░░░░░ 42%  │ $8.2K spent
Twitter   │ ██████░░░░░░░░░░░░ 31%  │ $5.1K spent

Top Performing Content:
1. "How we reduced AWS costs by 60%"
   → 2,847 clicks │ $4.20 CPA │ 127 conversions

2. "Technical deep-dive: Our migration story"
   → 1,923 clicks │ $5.80 CPA │ 89 conversions

💡 Recommendation:
   Scale LinkedIn budget by 40% ($4.9K → $6.9K)
   Double down on technical deep-dive content`,
  },
  {
    id: 2,
    label: "create campaign --from top-post",
    category: "Campaign",
    output: `🚀 New Campaign Created: "Technical Deep-Dive Series"

Based on: "Technical deep-dive: Our migration story"
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✓ Generated 8 new technical posts
✓ Scheduled across 3 platforms
✓ A/B testing 4 headline variations
✓ Budget allocated: $8,500

Content Calendar:
Mon 10am → "Database optimization techniques"
Wed 2pm  → "Scaling Redis for 10M requests/day"
Fri 9am  → "Our approach to zero-downtime deploys"

Targeting:
• Senior Engineers (5+ years)
• DevOps/SRE roles
• Companies: 100-1000 employees

Estimated reach: 25K-30K technical professionals
Ready to launch? (y/n)`,
  },
  {
    id: 3,
    label: "optimize ads --target-cpa 12",
    category: "Optimization",
    output: `⚡ Ad Optimization Complete

Target CPA: $12.00 | Current: $18.50
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Changes Made:
✓ Paused 3 underperforming ad sets (-$2.1K/mo)
✓ Increased budget on top performers (+$3.2K/mo)
✓ Refined audience: removed "general tech" segment
✓ Updated 5 ad creatives with higher CTR variants

New Performance Projection:
• CPA: $18.50 → $11.80 (↓36%)
• Monthly spend: $12.4K → $10.8K (↓13%)
• Conversions: 670 → 915 (↑37%)

ROI Improvement: +$4,200/month

Changes deployed. Monitoring for 48h...`,
  },
  {
    id: 4,
    label: "find opportunities --channel reddit",
    category: "Research",
    output: `🔍 Reddit Opportunity Analysis

Found 12 high-value opportunities
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

r/devops (2.1M members)
└─ Thread: "Struggling with CI/CD pipeline costs"
   → 847 upvotes │ Posted 4h ago
   → Opportunity Score: 9.2/10
   💬 Suggested response drafted

r/kubernetes (890K members)
└─ Thread: "How do you monitor prod at scale?"
   → 623 upvotes │ Posted 8h ago
   → Opportunity Score: 8.7/10
   💬 Suggested response drafted

r/aws (450K members)
└─ Thread: "Best practices for cost optimization?"
   → 412 upvotes │ Posted 2h ago
   → Opportunity Score: 9.0/10
   💬 Suggested response drafted

🎯 Action: Reply to top 3 threads? (y/n)`,
  },
  {
    id: 5,
    label: "schedule posts --platform linkedin",
    category: "Scheduling",
    output: `📅 LinkedIn Content Scheduled

Next 14 Days | 12 posts queued
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Week 1:
Mon 10:00 → "5 mistakes we made scaling to 1M users"
Wed 14:00 → "Why we chose Postgres over MongoDB"
Fri 09:00 → "Technical hiring: our interview process"

Week 2:
Mon 10:00 → "Observability on a budget: our stack"
Wed 14:00 → "From monolith to microservices"
Thu 16:00 → "How we handle database migrations"
Fri 09:00 → "Our approach to on-call rotations"

Optimal posting times identified:
• Monday 10am (24% higher engagement)
• Wednesday 2pm (18% higher engagement)
• Friday 9am (31% higher engagement)

All posts ready. Auto-publish enabled.`,
  },
  {
    id: 6,
    label: "generate report --for-ceo",
    category: "Reporting",
    output: `📈 Executive GTM Report - Q4 2024

Key Metrics:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CAC              $847  (↓23% vs Q3)
LTV              $12.4K (↑15% vs Q3)
LTV:CAC Ratio    14.6x (Target: 10x) ✓

Marketing Spend: $42.5K
Pipeline Generated: $1.2M
ROI: 28x

Top Channels:
1. LinkedIn      → $680K pipeline (57%)
2. Reddit        → $312K pipeline (26%)
3. Twitter       → $198K pipeline (17%)

Content Performance:
• 47 pieces published
• 2.8M impressions
• 89K clicks (3.2% CTR)
• 847 conversions

🎯 Next Quarter Focus:
   → Scale LinkedIn (proven channel)
   → Launch podcast series (in progress)
   → Expand Reddit presence (untapped)

Full report: /reports/q4-2024-gtm.pdf`,
  },
];

function ScrollingRow({
  prompts,
  direction = "left",
  onPromptClick,
  selectedId
}: {
  prompts: typeof marketingPrompts;
  direction?: "left" | "right";
  onPromptClick: (prompt: typeof marketingPrompts[0]) => void;
  selectedId: number;
}) {
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    let animationId: number;
    let position = direction === "left" ? 0 : -row.scrollWidth / 2;

    const animate = () => {
      if (direction === "left") {
        position -= 0.5;
        if (Math.abs(position) >= row.scrollWidth / 2) {
          position = 0;
        }
      } else {
        position += 0.5;
        if (position >= 0) {
          position = -row.scrollWidth / 2;
        }
      }

      row.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [direction]);

  return (
    <div className="overflow-hidden py-3">
      <div ref={rowRef} className="flex gap-3 w-max">
        {/* Duplicate the prompts for infinite scroll */}
        {[...prompts, ...prompts].map((prompt, index) => (
          <Button
            key={`${prompt.id}-${index}`}
            variant={selectedId === prompt.id ? "default" : "outline"}
            size="sm"
            onClick={() => onPromptClick(prompt)}
            className={`font-mono text-xs whitespace-nowrap transition-all ${
              selectedId === prompt.id
                ? "ring-2 ring-primary ring-offset-2"
                : "hover:border-primary/50"
            }`}
          >
            <span className="opacity-60 mr-2">{prompt.category}</span>
            {prompt.label}
          </Button>
        ))}
      </div>
    </div>
  );
}

export function InteractiveDemo() {
  const [selectedPrompt, setSelectedPrompt] = useState(marketingPrompts[0]);

  // Split prompts into 2 rows
  const row1 = marketingPrompts.slice(0, 3);
  const row2 = marketingPrompts.slice(3, 6);

  return (
    <div className="w-full space-y-8">
      {/* Scrolling Prompts */}
      <div className="space-y-2">
        <ScrollingRow
          prompts={row1}
          direction="left"
          onPromptClick={setSelectedPrompt}
          selectedId={selectedPrompt.id}
        />
        <ScrollingRow
          prompts={row2}
          direction="right"
          onPromptClick={setSelectedPrompt}
          selectedId={selectedPrompt.id}
        />
      </div>

      {/* Terminal Mockup */}
      <div className="relative max-w-5xl mx-auto">
        <div className="rounded-lg border-2 border-border bg-card shadow-2xl overflow-hidden">
          {/* Terminal Header */}
          <div className="bg-muted border-b px-4 py-3 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="ml-4 flex-1">
              <div className="text-xs font-mono text-muted-foreground">
                ottic://terminal
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-muted-foreground">AI Agent Active</span>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="bg-[#0a1e1e] p-6 min-h-[500px] font-mono text-sm">
            {/* Command Input */}
            <div className="flex items-start gap-2 mb-4">
              <span className="text-green-400">$</span>
              <span className="text-green-300">{selectedPrompt.label}</span>
            </div>

            {/* Output */}
            <div className="text-green-400/90 whitespace-pre-wrap leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-500">
              {selectedPrompt.output}
            </div>

            {/* Cursor */}
            <div className="flex items-center gap-2 mt-6">
              <span className="text-green-400">$</span>
              <div className="w-2 h-4 bg-green-400 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-teal-500/20 blur-3xl opacity-40" />
      </div>
    </div>
  );
}
