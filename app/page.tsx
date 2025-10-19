"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedInput } from "@/components/animated-input";
import { TestimonialsScroll } from "@/components/testimonials-scroll";
import { ThemeToggle } from "@/components/theme-toggle";
import { InteractiveDemo } from "@/components/interactive-demo";
import { AnnouncementBar } from "@/components/announcement-bar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [userInput, setUserInput] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [suggestionSet, setSuggestionSet] = useState(0);

  const handleSubmit = () => {
    setShowLoginModal(true);
  };

  const suggestionSets = [
    [
      { icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2 a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", text: "Show me last week's performance", prompt: "Show me how my marketing performed last week. Break it down by channel - organic, paid ads, social, email. Highlight what's working and what's not. My LinkedIn ads seem expensive lately, flag if something's off." },
      { icon: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z", text: "Create campaign from my best post", prompt: "My post about AI replacing junior developers blew up on LinkedIn. Turn it into a full campaign - adapt it for Twitter, write an email for my newsletter, create ad variations. Make it work across all channels." },
      { icon: "M13 10V3L4 14h7v7l9-11h-7z", text: "Optimize my ads for lower costs", prompt: "My Meta ads are too expensive right now. Review what I'm running, kill what's not working, and suggest new angles to test. I need to lower my cost per customer without losing volume." },
      { icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z", text: "Find opportunities on Reddit", prompt: "Find subreddits where B2B founders talk about marketing problems. I sell a website builder. Show me trending discussions where I can jump in and help. Draft some authentic comments I can use." },
      { icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", text: "Schedule posts across all channels", prompt: "Plan my content for the next two weeks - LinkedIn, Twitter, and blog. We're launching a new feature soon. Optimize posting times for tech founders and mix in product updates with helpful content." },
      { icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "Generate executive report", prompt: "Create a marketing summary for our board meeting. Cover what we spent, what we got, what worked, what didn't. Include recommendations for next quarter's budget. Keep it visual and to the point." },
    ],
    [
      { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", text: "Launch Product Hunt campaign", prompt: "We're launching on Product Hunt next week. Create the product description, first comment, gallery images, and an email to send our users. Also draft outreach messages for hunters. Goal is to hit top 5." },
      { icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", text: "Write newsletter about latest update", prompt: "Write a newsletter announcing our new Figma integration. My audience is design-focused founders. Make the subject line catchy, explain why they'll love it, add GIFs, and a clear call-to-action. Keep it conversational." },
      { icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z", text: "What's my best performing content?", prompt: "Show me my top content from the last few months across blog, LinkedIn, and Twitter. Rank by engagement and signups. What patterns should I repeat? What's working that I should double down on?" },
      { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "Create week-long launch campaign", prompt: "Design a launch campaign for our new AI feature. Map out content for each day - teasers, announcement, tutorials, case studies, closing offer. Coordinate across email, social, and blog." },
      { icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z", text: "Turn my landing page into ads", prompt: "My landing page converts well with the headline 'Build websites in minutes, not weeks'. Extract this into ad variations for LinkedIn, Facebook carousels, and Google search ads. Keep what's working." },
      { icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z", text: "Find trending topics in my niche", prompt: "What's trending in B2B SaaS marketing right now? Find hot topics from Twitter, LinkedIn, and communities. Suggest unique angles we can take. I want thought leadership, not generic takes." },
    ],
    [
      { icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z", text: "Where should I find my first 100 users?", prompt: "I built a Slack integration for customer feedback. Currently just friends and family using it. My ideal customers are product managers at small startups. Where should I find them? Give me specific channels and what to do daily." },
      { icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1", text: "Build backlink strategy for SEO", prompt: "Our blog needs more authority. Find sites in the project management space that accept guest posts. Create an outreach email template and suggest content ideas we can pitch. I have a few hours per week for this." },
      { icon: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122", text: "Launch viral Twitter thread campaign", prompt: "Write a Twitter thread about how we hit our revenue goal in two months. Make the first tweet hook people instantly. Include data, screenshots, and one controversial take. Aim for maximum engagement." },
      { icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10", text: "Analyze competitor marketing strategy", prompt: "Deep dive into how Notion, ClickUp, and Airtable do marketing. What channels are they using? What's their messaging? Find their top keywords and ad patterns. Show me gaps where we can differentiate." },
      { icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", text: "Calculate ROI of current campaigns", prompt: "Break down my marketing ROI from last quarter. Show me what each channel actually returned - Google Ads, LinkedIn, content. Calculate true cost per customer and tell me where to invest more or cut back." },
      { icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2", text: "Build content calendar for next month", prompt: "Plan next month's content across LinkedIn, blog, Twitter, and newsletter. We have a product update mid-month and a conference at the end. Create a cohesive story that ties everything together." },
    ],
  ];

  const currentSuggestions = suggestionSets[suggestionSet];

  const rotateSuggestions = () => {
    setSuggestionSet((prev) => (prev + 1) % suggestionSets.length);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Announcement Bar */}
      <AnnouncementBar />

      {/* Header/Navigation */}
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <a className="flex items-center gap-3 cursor-pointer" href="#">
          <div className="w-12 h-12 bg-foreground flex items-center justify-center">
            <span className="text-2xl font-bold text-background">O</span>
          </div>
          <span className="text-2xl font-bold">Ottic</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Button variant="ghost" className="text-sm font-medium cursor-pointer">
            Pricing
          </Button>
          <ThemeToggle />
          <Button variant="ghost" size="sm" className="cursor-pointer" onClick={() => setShowLoginModal(true)}>
            Login
          </Button>
          <Button size="sm" className="cursor-pointer">
            Get started
          </Button>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-8 md:py-10 lg:py-12 min-h-[calc(100vh-3.5rem)]">
          <div className="container px-4 md:px-6 mx-auto max-w-5xl h-full flex items-center">
            <div className="flex flex-col items-center space-y-5 text-center w-full">
              {/* Badge */}
              <Badge variant="secondary" className="px-4 py-1.5 text-sm">
                GTM infrastructure for AI-native companies
              </Badge>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-6xl">
                  You chat.
                  <br />
                  Agents run your entire GTM.
                </h1>

                <div className="space-y-2 text-muted-foreground text-base md:text-lg max-w-3xl mx-auto">
                  <p>Chat in plain English, agents plan and execute across every platform. No setup, no tools, no <span className="line-through">marketing team</span> required.</p>
                </div>
              </div>

              {/* Input Area */}
              <div className="w-full max-w-2xl space-y-3 pt-4">
                <div className="relative">
                  <AnimatedInput
                    value={userInput}
                    onChange={setUserInput}
                    onSubmit={handleSubmit}
                  />
                  <div className="absolute bottom-3 right-3 flex gap-2 z-30">
                    <Button variant="ghost" size="sm" onClick={handleSubmit} className="text-[#00e572] hover:text-[#06ff83] hover:bg-[#1c3b28] cursor-pointer">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                      </svg>
                    </Button>
                    <Button variant="ghost" size="sm" onClick={handleSubmit} className="text-[#00e572] hover:text-[#06ff83] hover:bg-[#1c3b28] cursor-pointer">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </Button>
                    <Button
                      size="sm"
                      onClick={handleSubmit}
                      className={`rounded-full transition-all h-10 hover:opacity-90 hover:scale-105 cursor-pointer ${
                        userInput.trim()
                          ? "w-auto px-4 gap-2"
                          : "w-10 p-0"
                      }`}
                    >
                      {userInput.trim() && (
                        <span className="text-xs font-medium">Start marketing</span>
                      )}
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Suggestions */}
              <div className="pt-3">
                <p className="text-muted-foreground/70 text-xs mb-2">Not sure where to start? Try one of these:</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {currentSuggestions.map((suggestion, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="gap-2 text-xs cursor-pointer"
                      onClick={() => setUserInput(suggestion.prompt)}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={suggestion.icon} />
                      </svg>
                      {suggestion.text}
                    </Button>
                  ))}
                </div>
                <Button variant="link" className="mt-2 text-xs text-foreground cursor-pointer" onClick={rotateSuggestions}>
                  <svg className="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  try different ideas
                </Button>
              </div>

              {/* Feature Highlights */}
              <div className="w-full max-w-4xl pt-8">
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="text-center p-6 rounded-lg border bg-card/50 backdrop-blur">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold mb-2">Context-Aware</h3>
                    <p className="text-sm text-muted-foreground">
                      Remembers your brand voice, past campaigns, and what works for your audience
                    </p>
                  </div>

                  <div className="text-center p-6 rounded-lg border bg-card/50 backdrop-blur">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold mb-2">Instant Execution</h3>
                    <p className="text-sm text-muted-foreground">
                      From insight to action in seconds. No manual work, no context switching
                    </p>
                  </div>

                  <div className="text-center p-6 rounded-lg border bg-card/50 backdrop-blur">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold mb-2">Everything Built-in</h3>
                    <p className="text-sm text-muted-foreground">
                      SEMrush, Google Ads, Meta, LinkedIn, YouTube—every marketing tool you need, already connected.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-8 md:py-12 lg:py-16 overflow-hidden">
          <div className="w-full">
            <div className="text-center mb-12 px-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <span className="text-primary">✦</span>
                <span className="text-sm font-medium">Testimonials</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Loved by technical teams
              </h2>
              <p className="mt-4 text-muted-foreground md:text-xl max-w-[700px] mx-auto">
                See what founders and engineers are saying about Ottic
              </p>
            </div>

            <TestimonialsScroll />
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section className="w-full py-8 md:py-12 lg:py-16 overflow-hidden bg-muted/30">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <span className="text-primary">✦</span>
                <span className="text-sm font-medium">Demo</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Stop managing marketing. Start shipping it.
              </h2>
              <p className="mt-4 text-muted-foreground md:text-xl max-w-[700px] mx-auto">
                See how founders run entire campaigns by describing what they need. Real execution across all platforms, not just suggestions.
              </p>
            </div>

            <InteractiveDemo />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-8 md:py-12 lg:py-16">
          <div className="container px-4 md:px-6 mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                FAQs
              </h2>
              <p className="text-muted-foreground md:text-lg">
                Here's everything you may want to know. For any other info, just{" "}
                <a href="mailto:contact@ottic.ai" className="text-primary hover:underline cursor-pointer">
                  reach us
                </a>
                .
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left cursor-pointer">
                  What is Ottic?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Ottic is GTM infrastructure for AI-native companies. It's an AI-powered system that runs your entire go-to-market—from content and ads to analytics and distribution—through simple chat commands. Think of it as your marketing department in a terminal.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left cursor-pointer">
                  Do I need marketing experience to use Ottic?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  No. Ottic is built for founders who want to ship fast without hiring a marketing team. You describe what you want in plain English, and AI agents handle strategy and execution. No marketing expertise required.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left cursor-pointer">
                  What is an AI agent for GTM?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  AI agents are autonomous systems that plan and execute marketing tasks across platforms. Unlike chatbots that just suggest ideas, Ottic's agents actually run campaigns, create content, optimize ads, and coordinate across channels—without human intervention.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left cursor-pointer">
                  Why should I care about GTM infrastructure now?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  AI search is reshaping how people discover products. Companies like HubSpot lost 75% of their organic traffic in the past year. CACs are skyrocketing. Building product is getting easier, but GTM is getting harder. In the long run, distribution is your only moat—not the product itself.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left cursor-pointer">
                  What types of marketing can I run with Ottic?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Everything. Launch campaigns, create content, run paid ads, analyze performance, optimize SEO, track competitors, schedule social posts, build email sequences, and more. Ottic coordinates all channels from a single interface—no switching between 10 different tools.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left cursor-pointer">
                  How much does Ottic cost?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Ottic is free forever if you self-host (open source, MIT license). For Ottic Cloud with managed infrastructure and premium features, pricing starts at a fraction of hiring a single marketer. No long-term contracts—pay monthly and cancel anytime.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 border-t">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted-foreground">
              © 2025 Ottic. Open source. MIT License.
            </p>
            <nav className="flex gap-4 sm:gap-6">
              <a className="text-xs hover:underline underline-offset-4 cursor-pointer" href="#">
                Docs
              </a>
              <a className="text-xs hover:underline underline-offset-4 cursor-pointer" href="#">
                GitHub
              </a>
              <a className="text-xs hover:underline underline-offset-4 cursor-pointer" href="#">
                Discord
              </a>
            </nav>
          </div>
        </div>
      </footer>

      {/* Login Modal */}
      <Dialog open={showLoginModal} onOpenChange={setShowLoginModal}>
        <DialogContent className="sm:max-w-md backdrop-blur-sm">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Start Marketing</DialogTitle>
            <DialogDescription>
              Sign in to start building your GTM infrastructure
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="w-full"
              />
            </div>
            <Button className="w-full cursor-pointer" size="lg">
              Continue with Email
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full cursor-pointer">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </Button>
              <Button variant="outline" className="w-full cursor-pointer">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
                GitHub
              </Button>
            </div>

            <p className="text-xs text-center text-muted-foreground">
              By continuing, you agree to our{" "}
              <a href="#" className="underline hover:text-foreground cursor-pointer">
                Terms
              </a>{" "}
              and{" "}
              <a href="#" className="underline hover:text-foreground cursor-pointer">
                Privacy Policy
              </a>
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
