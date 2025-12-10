// 'use client';
import './globals.css';
import { Inter } from 'next/font/google';
import RefreshRedirect from './refresh-redirect';

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Utrack – Smart Fleet & Vehicle Tracking Platform",
  description:
    "Utrack is a next-generation fleet intelligence platform offering real-time GPS tracking, trip analytics, fuel monitoring, driver performance insights, and advanced vehicle health diagnostics.",
  metadataBase: new URL("https://www.yourdomain.com"), // replace with live domain

  keywords: [
    "Utrack",
    "fleet management",
    "vehicle tracking",
    "GPS tracking system",
    "real-time tracking",
    "fuel monitoring",
    "driver performance",
    "vehicle health",
    "fleet analytics",
    "transport tracking",
    "Next.js GPS platform",
    "transport monitoring system",
    "fleet maintenance software",
  ],

  openGraph: {
    title: "Utrack – Smart Fleet & Vehicle Tracking Platform",
    description:
      "Real-time fleet tracking, fuel analytics, smart notifications, trip monitoring, and complete vehicle intelligence.",
    url: "https://www.yourdomain.com",
    siteName: "Utrack Fleet Intelligence",
    images: [
      {
        url: "/images/utrack-og.png", // put image in /public/images
        width: 1200,
        height: 630,
        alt: "Utrack – Vehicle & Fleet Tracking Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Utrack – Smart Fleet & Vehicle Tracking Platform",
    description:
      "Monitor vehicles in real-time, analyze fuel usage, improve driver behavior, and enhance fleet safety using Utrack.",
    images: ["/images/utrack-og.png"],
  },
};


const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RefreshRedirect />
        {children}
      </body>
    </html>
  );
}
