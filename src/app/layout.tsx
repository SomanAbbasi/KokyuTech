import type { Metadata } from "next";
import { Inter, Space_Grotesk, Space_Mono } from "next/font/google";
import { COMPANY, EMAIL } from "@/lib/config";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Background from "@/components/Background";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${COMPANY.domain}`),
  title: `${COMPANY.name} — AI Systems, Automation & Software`,
  description:
    "We understand the business problem, engineer the right software system, automate what can be automated, and continuously improve it. AI agents, automation, custom software, web applications and security & compliance systems for modern businesses.",
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: `${COMPANY.name} — Technology should work for your business`,
    description:
      "AI systems, automation, software and integrations engineered around how your business actually works.",
    images: ["/logo.svg"],
    url: `https://${COMPANY.domain}`,
    type: "website",
    emails: [EMAIL],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.name} — Technology should work for your business`,
    description:
      "AI systems, automation, software and integrations engineered around how your business actually works.",
    images: ["/logo.svg"],
  },
};

export const viewport = {
  themeColor: "#0A0A0A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${spaceMono.variable}`}
    >
      <body>
        <Background />
        <SmoothScroll />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
