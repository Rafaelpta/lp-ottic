import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedInput } from "@/components/animated-input";
import { TestimonialsScroll } from "@/components/testimonials-scroll";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navigation */}
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <a className="flex items-center gap-3" href="#">
          <div className="w-12 h-12 bg-foreground flex items-center justify-center">
            <span className="text-2xl font-bold text-background">O</span>
          </div>
          <span className="text-2xl font-bold">Ottic</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Button variant="ghost" className="text-sm font-medium">
            Pricing
          </Button>
          <Button size="sm">
            Get started
          </Button>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-8 md:py-12 lg:py-16 min-h-[calc(100vh-3.5rem)]">
          <div className="container px-4 md:px-6 mx-auto max-w-5xl h-full flex items-center">
            <div className="flex flex-col items-center space-y-5 text-center w-full">
              {/* Badge */}
              <Badge variant="secondary" className="px-4 py-1.5 text-sm">
                GTM Infrastructure for the Age of Agents
              </Badge>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-6xl">
                  Building is easy.
                  <br />
                  Distribution is <span className="italic font-serif text-primary">hard</span>.
                </h1>

                <div className="space-y-2 text-muted-foreground text-base md:text-lg max-w-3xl mx-auto">
                  <p>One terminal. Your entire GTM. AI agents orchestrating everything.</p>
                  <p>From strategy to execution to optimization. No context switching.</p>
                  <p className="opacity-70">Not another marketing tool. Marketing infrastructure.</p>
                </div>
              </div>

              {/* Input Area */}
              <div className="w-full max-w-2xl space-y-3 pt-4">
                <div className="relative">
                  <AnimatedInput />
                  <div className="absolute bottom-3 right-3 flex gap-2">
                    <Button variant="ghost" size="sm">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                      </svg>
                    </Button>
                    <Button variant="ghost" size="sm">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </Button>
                    <Button size="sm" className="rounded-full w-10 h-10 p-0">
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
                  <Button variant="outline" size="sm" className="gap-2 font-mono text-xs">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2 a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    analyze --last-7d
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2 font-mono text-xs">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                    create campaign --from top-post
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2 font-mono text-xs">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    optimize ads --target-cpa 15
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2 font-mono text-xs">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    find opportunities --channel reddit
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2 font-mono text-xs">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    schedule posts --platform all
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2 font-mono text-xs">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    generate report --for-ceo
                  </Button>
                </div>
                <Button variant="link" className="mt-2 text-xs font-mono text-foreground">
                  <svg className="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  try different ideas
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Why teams choose Ottic
              </h2>
              <p className="mt-4 text-muted-foreground md:text-xl max-w-[700px] mx-auto">
                Built for technical teams who can't afford a marketing department
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </div>
                  <CardTitle>Single Source of Truth</CardTitle>
                  <CardDescription>
                    All your marketing data in one place. No more context switching between 10 tools.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <CardTitle>Agents That Execute</CardTitle>
                  <CardDescription>
                    Not just suggestions—real execution. Agents coordinate across channels automatically.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <CardTitle>Persistent Memory</CardTitle>
                  <CardDescription>
                    Remembers every campaign, every result. Learns what works for YOUR audience.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                      />
                    </svg>
                  </div>
                  <CardTitle>Deep Integrations</CardTitle>
                  <CardDescription>
                    Semrush, Meta Ads, HubSpot, GA4, Mailchimp. Not just API calls—true orchestration.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <CardTitle>Open Source</CardTitle>
                  <CardDescription>
                    Free to self-host forever. No vendor lock-in. Your data stays yours.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <CardTitle>Terminal Interface</CardTitle>
                  <CardDescription>
                    For people who build things. Scriptable, automatable, composable. CLI for humans.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 overflow-hidden">
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

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to 10x your GTM leverage?
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                  Start with self-hosted (free forever) or try Ottic Cloud
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col gap-2 sm:flex-row">
                  <input
                    className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="your@email.com"
                    type="email"
                  />
                  <Button type="submit" size="lg" className="h-12">
                    Get Started
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  Open source. MIT License. Your data stays yours.
                </p>
              </div>
            </div>
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
              <a className="text-xs hover:underline underline-offset-4" href="#">
                Docs
              </a>
              <a className="text-xs hover:underline underline-offset-4" href="#">
                GitHub
              </a>
              <a className="text-xs hover:underline underline-offset-4" href="#">
                Discord
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
