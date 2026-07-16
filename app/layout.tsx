import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const body = Manrope({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.logismart.me"),
  title: { default: "LogiSmart Solutions | Smart Logistics in Saudi Arabia", template: "%s | LogiSmart Solutions" },
  description: "LogiSmart Solutions provides smart logistics, reliable operational solutions, and expert supply chain consultation across Saudi Arabia.",
  openGraph: { title: "LogiSmart Solutions | Smart Logistics in Saudi Arabia", description: "Smart logistics, reliable solutions, and expert consultation across Saudi Arabia.", type: "website", url: "/" },
  alternates: { canonical: "/" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={`${body.variable} font-sans antialiased`}>{children}</body></html>; }
