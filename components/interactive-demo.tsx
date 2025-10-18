"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const marketingPrompts = [
  {
    id: 1,
    label: "Hey, can you research keywords for AI courses in the Brazilian market? I want to understand what people are searching for.",
    category: "Research",
    output: `🔍 Got it! Running keyword research for AI courses in Brazil...

Connecting to SEMrush API...
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Fetched 3,398 keywords
✓ Filtered by relevance & volume
✓ Categorized by intent & type

Top Opportunities:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"curso de ia"       → 5,400/mo  45% KD  ALTÍSSIMA
"prompt engineering" → 2,400/mo  61% KD  ALTÍSSIMA
"go to market"      → 1,600/mo  17% KD  ALTÍSSIMA

Total Traffic Potential: 83.15M visits/year
Average KD: 41% (Medium competition)

💡 Strategy Recommendation:
   Focus on "Educacional" + "Conversão" keywords
   Target "ALTÍSSIMA" relevance terms first
   Estimated reach: 15-20K qualified leads/month`,
    ui: "keyword-research",
  },
  {
    id: 2,
    label: "I loved that technical post we published last week. Can you create a campaign based on it?",
    category: "Campaign",
    output: `🚀 Perfect! Creating a campaign from your top-performing post...

Analyzing: "Technical deep-dive: Our migration story"
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✓ Generated 8 new technical posts in similar style
✓ Scheduled across LinkedIn, Twitter, Reddit
✓ Set up A/B tests for 4 headline variations
✓ Allocated $8,500 budget

Content Calendar:
Mon 10am → "Database optimization techniques"
Wed 2pm  → "Scaling Redis for 10M requests/day"
Fri 9am  → "Our approach to zero-downtime deploys"

Targeting:
• Senior Engineers (5+ years)
• DevOps/SRE roles
• Companies: 100-1000 employees

Estimated reach: 25K-30K technical professionals
Ready to launch when you are!`,
    ui: "campaign",
  },
  {
    id: 3,
    label: "Our ads are too expensive. Can you optimize them to get CPA down to $12?",
    category: "Optimization",
    output: `⚡ On it! Analyzing your ads and optimizing for $12 CPA...

Current CPA: $18.50 | Target: $12.00
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Changes Made:
✓ Paused 3 underperforming ad sets (-$2.1K/mo)
✓ Increased budget on top performers (+$3.2K/mo)
✓ Refined audience: removed "general tech" segment
✓ Updated 5 ad creatives with higher CTR variants

New Performance Projection:
• CPA: $18.50 → $11.80 (↓36%) ✨
• Monthly spend: $12.4K → $10.8K (↓13%)
• Conversions: 670 → 915 (↑37%)

ROI Improvement: +$4,200/month

All changes deployed! Monitoring for 48h...`,
    ui: "optimization",
  },
  {
    id: 4,
    label: "Find me some good Reddit threads where we can contribute and get visibility",
    category: "Research",
    output: `🔍 Sure! Scanning Reddit for relevant opportunities...

Found 12 high-value threads where you can add value
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

r/devops (2.1M members)
└─ "Struggling with CI/CD pipeline costs"
   → 847 upvotes │ Posted 4h ago
   → Opportunity Score: 9.2/10
   💬 I've drafted a helpful response for you

r/kubernetes (890K members)
└─ "How do you monitor prod at scale?"
   → 623 upvotes │ Posted 8h ago
   → Opportunity Score: 8.7/10
   💬 Response ready to review

r/aws (450K members)
└─ "Best practices for cost optimization?"
   → 412 upvotes │ Posted 2h ago
   → Opportunity Score: 9.0/10
   💬 Response ready

Want me to post these responses for you?`,
    ui: "research",
  },
  {
    id: 5,
    label: "Schedule some LinkedIn posts for the next 2 weeks. Focus on our best performing times.",
    category: "Scheduling",
    output: `📅 Got it! Setting up your LinkedIn content calendar...

Scheduled 12 posts for optimal engagement times
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

Optimal posting times based on your audience:
• Monday 10am (24% higher engagement)
• Wednesday 2pm (18% higher engagement)
• Friday 9am (31% higher engagement)

All set! Auto-publishing enabled.`,
    ui: "scheduling",
  },
  {
    id: 6,
    label: "I have a board meeting tomorrow. Can you generate an executive summary of our GTM performance?",
    category: "Reporting",
    output: `📈 Absolutely! Pulling together your Q4 GTM report...

Executive GTM Summary - Q4 2024
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

🎯 Next Quarter Recommendations:
   → Scale LinkedIn (proven channel)
   → Launch podcast series (in progress)
   → Expand Reddit presence (untapped)

Full report saved: /reports/q4-2024-gtm.pdf`,
    ui: "reporting",
  },
];

// UI Mockup Components
function KeywordResearchUI() {
  const keywords = [
    { keyword: "curso de ia", volume: "5,400", kd: "45%", relevance: "ALTÍSSIMA", category: "Educacional", type: "Conversão" },
    { keyword: "curso ia", volume: "2,900", kd: "48%", relevance: "ALTÍSSIMA", category: "Educacional", type: "Conversão" },
    { keyword: "o que é ia generativa", volume: "2,500", kd: "55%", relevance: "ALTA", category: "Core AI", type: "Awareness" },
    { keyword: "curso de ia gratuito", volume: "2,400", kd: "49%", relevance: "ALTA", category: "Educacional", type: "Conversão" },
    { keyword: "prompt engineering", volume: "2,400", kd: "61%", relevance: "ALTÍSSIMA", category: "Técnico", type: "Especializado" },
    { keyword: "cursos de ia", volume: "1,600", kd: "43%", relevance: "ALTA", category: "Educacional", type: "Conversão" },
    { keyword: "go to market", volume: "1,600", kd: "17%", relevance: "ALTÍSSIMA", category: "Strategy", type: "Estratégico" },
    { keyword: "curso ia gratuito", volume: "1,300", kd: "58%", relevance: "ALTA", category: "Educacional", type: "Conversão" },
    { keyword: "ia generativa de musica gratis", volume: "1,300", kd: "24%", relevance: "MÉDIA", category: "Aplicação", type: "Funcional" },
    { keyword: "cursos ia", volume: "1,000", kd: "40%", relevance: "ALTA", category: "Educacional", type: "Conversão" },
    { keyword: "ia generativa de imagens", volume: "1,000", kd: "64%", relevance: "MÉDIA", category: "Aplicação", type: "Funcional" },
    { keyword: "ia generativa o que é", volume: "720", kd: "54%", relevance: "MÉDIA", category: "Core AI", type: "Awareness" },
    { keyword: "prompt engineer", volume: "720", kd: "52%", relevance: "MÉDIA", category: "Profissão", type: "Carreira" },
    { keyword: "go to market strategy", volume: "590", kd: "57%", relevance: "ALTA", category: "Strategy", type: "Estratégico" },
    { keyword: "product discovery", volume: "590", kd: "18%", relevance: "ALTA", category: "Strategy", type: "Estratégico" },
    { keyword: "curso de ia para iniciantes", volume: "390", kd: "42%", relevance: "ALTA", category: "Educacional", type: "Conversão" },
    { keyword: "product strategy", volume: "390", kd: "52%", relevance: "ALTÍSSIMA", category: "Strategy", type: "Estratégico" },
    { keyword: "product roadmap", volume: "390", kd: "43%", relevance: "ALTA", category: "Strategy", type: "Estratégico" },
    { keyword: "ia generativa exemplos", volume: "390", kd: "40%", relevance: "MÉDIA", category: "Aplicação", type: "Tutorial" },
    { keyword: "curso gratuito de ia", volume: "320", kd: "43%", relevance: "ALTA", category: "Educacional", type: "Conversão" },
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Toolbar */}
      <div className="border-b px-4 py-3 flex items-center gap-3 bg-muted/30">
        <div className="flex gap-4 text-[10px] text-muted-foreground">
          <span>16 courses</span>
          <span className="text-primary font-medium">3,398 keywords</span>
          <span>83.15M traffic</span>
          <span>41% avg KD</span>
          <span className="text-green-500">🇧🇷 Brazil</span>
        </div>
      </div>

      {/* Filters */}
      <div className="border-b px-4 py-2 flex items-center gap-2 bg-background">
        <div className="flex-1 max-w-xs">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-2 py-1 text-[10px] border rounded bg-background"
          />
        </div>
        <select className="px-2 py-1 text-[10px] border rounded bg-background">
          <option>Product</option>
        </select>
        <select className="px-2 py-1 text-[10px] border rounded bg-background">
          <option>Category</option>
        </select>
        <select className="px-2 py-1 text-[10px] border rounded bg-background">
          <option>Relevance</option>
        </select>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-auto">
        <table className="w-full text-[10px]">
          <thead className="sticky top-0 bg-muted/80 backdrop-blur">
            <tr className="border-b">
              <th className="text-left px-4 py-2 font-bold text-muted-foreground uppercase">Keyword</th>
              <th className="text-left px-3 py-2 font-bold text-muted-foreground uppercase">Volume</th>
              <th className="text-left px-3 py-2 font-bold text-muted-foreground uppercase">KD%</th>
              <th className="text-left px-3 py-2 font-bold text-muted-foreground uppercase">Relevance</th>
              <th className="text-left px-3 py-2 font-bold text-muted-foreground uppercase">Category</th>
              <th className="text-left px-3 py-2 font-bold text-muted-foreground uppercase">Type</th>
            </tr>
          </thead>
          <tbody>
            {keywords.map((kw, i) => (
              <tr key={i} className="border-b hover:bg-muted/30 transition-colors">
                <td className="px-4 py-2 font-medium">{kw.keyword}</td>
                <td className="px-3 py-2">
                  <span className="text-green-500">{kw.volume}</span>
                </td>
                <td className="px-3 py-2">
                  <span className={kw.kd.includes("17") || kw.kd.includes("24") ? "text-green-500" : "text-red-400"}>
                    {kw.kd}
                  </span>
                </td>
                <td className="px-3 py-2">
                  <span className={`px-2 py-0.5 rounded text-[9px] font-medium ${
                    kw.relevance === "ALTÍSSIMA" ? "bg-green-500/10 text-green-500" :
                    kw.relevance === "ALTA" ? "bg-primary/10 text-primary" :
                    "bg-muted text-muted-foreground"
                  }`}>
                    {kw.relevance}
                  </span>
                </td>
                <td className="px-3 py-2">
                  <span className="px-2 py-0.5 rounded text-[9px] bg-muted">
                    {kw.category}
                  </span>
                </td>
                <td className="px-3 py-2 text-muted-foreground">{kw.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AnalyticsUI() {
  return (
    <div className="bg-background border-2 border-border rounded-lg p-6 h-full overflow-auto">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-bold mb-4">Campaign Performance</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-card border rounded-lg p-4">
              <div className="text-sm text-muted-foreground">LinkedIn</div>
              <div className="text-2xl font-bold text-primary">$12.4K</div>
              <div className="text-xs text-green-500">↑ 65% conversion</div>
            </div>
            <div className="bg-card border rounded-lg p-4">
              <div className="text-sm text-muted-foreground">Reddit</div>
              <div className="text-2xl font-bold">$8.2K</div>
              <div className="text-xs text-green-500">↑ 42% conversion</div>
            </div>
            <div className="bg-card border rounded-lg p-4">
              <div className="text-sm text-muted-foreground">Twitter</div>
              <div className="text-2xl font-bold">$5.1K</div>
              <div className="text-xs text-green-500">↑ 31% conversion</div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold mb-3">Top Performing Content</h4>
          <div className="space-y-2">
            <div className="bg-card border rounded p-3">
              <div className="text-sm font-medium">How we reduced AWS costs by 60%</div>
              <div className="flex gap-4 text-xs text-muted-foreground mt-1">
                <span>2,847 clicks</span>
                <span>$4.20 CPA</span>
                <span className="text-green-500">127 conversions</span>
              </div>
            </div>
            <div className="bg-card border rounded p-3">
              <div className="text-sm font-medium">Technical deep-dive: Our migration story</div>
              <div className="flex gap-4 text-xs text-muted-foreground mt-1">
                <span>1,923 clicks</span>
                <span>$5.80 CPA</span>
                <span className="text-green-500">89 conversions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ResearchUI() {
  return (
    <div className="bg-background border-2 border-border rounded-lg p-6 h-full overflow-auto">
      <div className="space-y-4">
        <h3 className="text-lg font-bold">Reddit Opportunities</h3>

        <div className="space-y-3">
          <div className="bg-card border rounded-lg p-4">
            <div className="flex items-start justify-between mb-2">
              <div>
                <div className="text-sm font-bold">r/devops</div>
                <div className="text-xs text-muted-foreground">2.1M members</div>
              </div>
              <span className="px-2 py-1 bg-green-500/10 text-green-500 text-xs rounded">9.2/10</span>
            </div>
            <div className="text-sm mb-2">Struggling with CI/CD pipeline costs</div>
            <div className="flex gap-3 text-xs text-muted-foreground">
              <span>847 upvotes</span>
              <span>Posted 4h ago</span>
            </div>
          </div>

          <div className="bg-card border rounded-lg p-4">
            <div className="flex items-start justify-between mb-2">
              <div>
                <div className="text-sm font-bold">r/kubernetes</div>
                <div className="text-xs text-muted-foreground">890K members</div>
              </div>
              <span className="px-2 py-1 bg-green-500/10 text-green-500 text-xs rounded">8.7/10</span>
            </div>
            <div className="text-sm mb-2">How do you monitor prod at scale?</div>
            <div className="flex gap-3 text-xs text-muted-foreground">
              <span>623 upvotes</span>
              <span>Posted 8h ago</span>
            </div>
          </div>

          <div className="bg-card border rounded-lg p-4">
            <div className="flex items-start justify-between mb-2">
              <div>
                <div className="text-sm font-bold">r/aws</div>
                <div className="text-xs text-muted-foreground">450K members</div>
              </div>
              <span className="px-2 py-1 bg-green-500/10 text-green-500 text-xs rounded">9.0/10</span>
            </div>
            <div className="text-sm mb-2">Best practices for cost optimization?</div>
            <div className="flex gap-3 text-xs text-muted-foreground">
              <span>412 upvotes</span>
              <span>Posted 2h ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CampaignUI() {
  return (
    <div className="bg-background border-2 border-border rounded-lg p-6 h-full overflow-auto">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-bold mb-2">Technical Deep-Dive Series</h3>
          <div className="text-sm text-muted-foreground">8 posts • 3 platforms • $8,500 budget</div>
        </div>

        <div>
          <h4 className="text-sm font-bold mb-3">Content Calendar</h4>
          <div className="space-y-2">
            <div className="bg-card border rounded p-3 flex items-center justify-between">
              <div>
                <div className="text-sm font-medium">Database optimization techniques</div>
                <div className="text-xs text-muted-foreground">Monday 10:00 AM</div>
              </div>
              <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Scheduled</span>
            </div>
            <div className="bg-card border rounded p-3 flex items-center justify-between">
              <div>
                <div className="text-sm font-medium">Scaling Redis for 10M requests/day</div>
                <div className="text-xs text-muted-foreground">Wednesday 2:00 PM</div>
              </div>
              <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Scheduled</span>
            </div>
            <div className="bg-card border rounded p-3 flex items-center justify-between">
              <div>
                <div className="text-sm font-medium">Our approach to zero-downtime deploys</div>
                <div className="text-xs text-muted-foreground">Friday 9:00 AM</div>
              </div>
              <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Scheduled</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold mb-2">Targeting</h4>
          <div className="flex gap-2 flex-wrap">
            <span className="px-2 py-1 bg-muted text-xs rounded">Senior Engineers</span>
            <span className="px-2 py-1 bg-muted text-xs rounded">DevOps/SRE</span>
            <span className="px-2 py-1 bg-muted text-xs rounded">100-1000 employees</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function OptimizationUI() {
  return (
    <div className="bg-background border-2 border-border rounded-lg p-6 h-full overflow-auto">
      <div className="space-y-4">
        <h3 className="text-lg font-bold">Ad Optimization Results</h3>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-card border rounded-lg p-4">
            <div className="text-sm text-muted-foreground">Target CPA</div>
            <div className="text-2xl font-bold text-primary">$12.00</div>
          </div>
          <div className="bg-card border rounded-lg p-4">
            <div className="text-sm text-muted-foreground">New CPA</div>
            <div className="text-2xl font-bold text-green-500">$11.80</div>
            <div className="text-xs text-green-500">↓ 36%</div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold mb-3">Changes Made</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-green-500">✓</span>
              <span>Paused 3 underperforming ad sets</span>
              <span className="ml-auto text-xs text-red-500">-$2.1K/mo</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-green-500">✓</span>
              <span>Increased budget on top performers</span>
              <span className="ml-auto text-xs text-green-500">+$3.2K/mo</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-green-500">✓</span>
              <span>Refined audience targeting</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-green-500">✓</span>
              <span>Updated 5 ad creatives</span>
            </div>
          </div>
        </div>

        <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
          <div className="text-sm font-bold text-primary">ROI Improvement</div>
          <div className="text-2xl font-bold text-primary">+$4,200/month</div>
        </div>
      </div>
    </div>
  );
}

function SchedulingUI() {
  return (
    <div className="bg-background border-2 border-border rounded-lg p-6 h-full overflow-auto">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold">LinkedIn Content Calendar</h3>
          <span className="text-xs text-muted-foreground">Next 14 days • 12 posts</span>
        </div>

        <div className="space-y-2">
          {[
            { day: "Mon", time: "10:00", title: "5 mistakes we made scaling to 1M users", engagement: "High" },
            { day: "Wed", time: "14:00", title: "Why we chose Postgres over MongoDB", engagement: "High" },
            { day: "Fri", time: "09:00", title: "Technical hiring: our interview process", engagement: "Very High" },
            { day: "Mon", time: "10:00", title: "Observability on a budget: our stack", engagement: "High" },
            { day: "Wed", time: "14:00", title: "From monolith to microservices", engagement: "Medium" },
          ].map((post, i) => (
            <div key={i} className="bg-card border rounded p-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="text-sm font-medium">{post.title}</div>
                  <div className="text-xs text-muted-foreground mt-1">{post.day} {post.time}</div>
                </div>
                <span className={`px-2 py-1 text-xs rounded ${
                  post.engagement === "Very High" ? "bg-green-500/10 text-green-500" :
                  post.engagement === "High" ? "bg-primary/10 text-primary" :
                  "bg-muted text-muted-foreground"
                }`}>
                  {post.engagement}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ReportingUI() {
  return (
    <div className="bg-background border-2 border-border rounded-lg p-6 h-full overflow-auto">
      <div className="space-y-4">
        <h3 className="text-lg font-bold">Executive GTM Report - Q4 2024</h3>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-card border rounded-lg p-4">
            <div className="text-sm text-muted-foreground">CAC</div>
            <div className="text-2xl font-bold">$847</div>
            <div className="text-xs text-green-500">↓ 23% vs Q3</div>
          </div>
          <div className="bg-card border rounded-lg p-4">
            <div className="text-sm text-muted-foreground">LTV</div>
            <div className="text-2xl font-bold">$12.4K</div>
            <div className="text-xs text-green-500">↑ 15% vs Q3</div>
          </div>
          <div className="bg-card border rounded-lg p-4">
            <div className="text-sm text-muted-foreground">LTV:CAC</div>
            <div className="text-2xl font-bold text-green-500">14.6x</div>
            <div className="text-xs text-muted-foreground">Target: 10x ✓</div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold mb-3">Top Channels</h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 bg-card border rounded">
              <span className="text-sm">LinkedIn</span>
              <div className="flex items-center gap-3">
                <div className="w-32 bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{width: "57%"}}></div>
                </div>
                <span className="text-sm font-bold">$680K</span>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-card border rounded">
              <span className="text-sm">Reddit</span>
              <div className="flex items-center gap-3">
                <div className="w-32 bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{width: "26%"}}></div>
                </div>
                <span className="text-sm font-bold">$312K</span>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-card border rounded">
              <span className="text-sm">Twitter</span>
              <div className="flex items-center gap-3">
                <div className="w-32 bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{width: "17%"}}></div>
                </div>
                <span className="text-sm font-bold">$198K</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-2">
          <div className="bg-card border rounded p-3">
            <div className="text-sm text-muted-foreground">Content Published</div>
            <div className="text-xl font-bold">47 pieces</div>
          </div>
          <div className="bg-card border rounded p-3">
            <div className="text-sm text-muted-foreground">Conversions</div>
            <div className="text-xl font-bold text-green-500">847</div>
          </div>
        </div>
      </div>
    </div>
  );
}

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

  const renderUI = () => {
    switch (selectedPrompt.ui) {
      case "keyword-research":
        return <KeywordResearchUI />;
      case "analytics":
        return <AnalyticsUI />;
      case "research":
        return <ResearchUI />;
      case "campaign":
        return <CampaignUI />;
      case "optimization":
        return <OptimizationUI />;
      case "scheduling":
        return <SchedulingUI />;
      case "reporting":
        return <ReportingUI />;
      default:
        return <KeywordResearchUI />;
    }
  };

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

      {/* Unified Ottic Interface - Terminal + UI */}
      <div className="relative max-w-7xl mx-auto">
        {/* Ottic App Container */}
        <div className="rounded-lg border-2 border-border bg-card shadow-2xl overflow-hidden">
          {/* Unified Header */}
          <div className="bg-muted border-b px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="text-xs font-mono text-muted-foreground">
                ottic://workspace
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-muted-foreground">AI Agent Active</span>
            </div>
          </div>

          {/* Two Column Layout - Terminal + UI */}
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-x divide-border">
            {/* Left: Terminal */}
            <div className="bg-[#0a1e1e] p-6 min-h-[600px] max-h-[600px] overflow-auto font-mono text-xs">
              {/* User Message - Highlighted */}
              <div className="mb-4">
                <div className="flex items-start gap-2 mb-1">
                  <span className="text-green-400 font-bold">You:</span>
                </div>
                <div className="bg-green-500/10 border-l-2 border-green-500 px-3 py-2 rounded">
                  <span className="text-green-300 text-xs font-medium">{selectedPrompt.label}</span>
                </div>
              </div>

              {/* AI Response */}
              <div className="mb-4">
                <div className="flex items-start gap-2 mb-1">
                  <span className="text-primary font-bold">Ottic AI:</span>
                </div>
                <div className="text-green-400/90 whitespace-pre-wrap leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-500 text-xs pl-3">
                  {selectedPrompt.output}
                </div>
              </div>

              {/* Input Prompt */}
              <div className="flex items-center gap-2 mt-6 opacity-50">
                <span className="text-green-400">$</span>
                <div className="w-2 h-3 bg-green-400 animate-pulse" />
              </div>
            </div>

            {/* Right: UI Output */}
            <div className="bg-background overflow-hidden">
              {renderUI()}
            </div>
          </div>
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-teal-500/20 blur-3xl opacity-40" />
      </div>
    </div>
  );
}
