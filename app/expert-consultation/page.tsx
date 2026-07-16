import type { Metadata } from "next";
import { ChartNoAxesCombined } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/home";
import { PageHero } from "@/components/ui";
import { consultationPoints } from "@/data/site";

export const metadata: Metadata = { title: "Expert Consultation", description: "Logistics advisory for supply chain design, optimization, cost control, and operational transformation." };
export default function ExpertConsultationPage() { return <><Header /><main><PageHero eyebrow="Core Solution" title="Expert Logistics Consultation" text="We provide professional advisory services designed to optimize end-to-end supply chain operations, improve efficiency, and reduce logistics costs." /><section className="section-pad bg-white"><div className="container-shell grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{consultationPoints.map((point, index) => <article key={point} className="rounded-[16px] border border-border p-6 transition hover:border-brand hover:shadow-[var(--shadow-card)]"><div className="flex items-center justify-between"><ChartNoAxesCombined className="text-brand" size={22} /><span className="text-xs font-extrabold text-brand">{String(index + 1).padStart(2, "0")}</span></div><h2 className="mt-5 text-lg font-extrabold text-primary">{point}</h2></article>)}</div></section></main><Footer /></>; }
