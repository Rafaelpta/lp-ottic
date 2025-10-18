import type { Metadata } from "next";
import { Roboto_Mono, Space_Mono, Fira_Code } from "next/font/google";
import "./globals.css";

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
  title: "Ottic - AI-Powered Solutions",
  description: "Build websites, SaaS, and mobile apps in minutes by chatting with AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoMono.variable} ${spaceMono.variable} ${firaCode.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
