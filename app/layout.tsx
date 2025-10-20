import type { Metadata } from "next";
import { Roboto_Mono, Space_Mono, Fira_Code } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const robotoMono = Roboto_Mono({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const firaCode = Fira_Code({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ottic.ai'),
  title: {
    default: "Ottic - GTM Infrastructure for AI-Native Companies",
    template: "%s | Ottic"
  },
  description: "Chat in plain English, AI agents plan and execute your entire go-to-market across every platform. No setup, no tools, no marketing team required.",
  keywords: [
    "GTM infrastructure",
    "AI marketing automation",
    "marketing agents",
    "AI-native companies",
    "marketing terminal",
    "go-to-market automation",
    "AI GTM platform",
    "marketing orchestration",
    "agent-based marketing",
    "marketing AI agents"
  ],
  authors: [{ name: "Ottic" }],
  creator: "Ottic",
  publisher: "Ottic",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ottic.ai',
    siteName: 'Ottic',
    title: 'Ottic - GTM Infrastructure for AI-Native Companies',
    description: 'Chat in plain English, AI agents plan and execute your entire go-to-market across every platform. No setup, no tools, no marketing team required.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ottic - GTM Infrastructure for AI-Native Companies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ottic - GTM Infrastructure for AI-Native Companies',
    description: 'Chat in plain English, AI agents plan and execute your entire go-to-market across every platform.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://ottic.ai',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${robotoMono.variable} ${spaceMono.variable} ${firaCode.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
