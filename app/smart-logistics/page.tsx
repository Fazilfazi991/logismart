import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/home";
import { PageHero } from "@/components/ui";
import { smartLogisticsServices } from "@/data/site";

export const metadata: Metadata = { title: "Smart Logistics", description: "Technology-enabled freight, transport, customs, warehousing, and equipment support across Saudi Arabia." };
export default function SmartLogisticsPage() { return <><Header /><main><PageHero eyebrow="Core Solution" title="Smart Logistics" text="Smart Logistics combines advanced technology with comprehensive logistics support to deliver complete, efficient, reliable, and cost-effective operations across Saudi Arabia." /><section className="section-pad bg-white"><div className="container-shell grid gap-6 md:grid-cols-2">{smartLogisticsServices.map(([title, points], index) => <article key={title} className={`rounded-[20px] border border-border p-7 ${index === 0 ? "md:col-span-2 bg-soft" : "bg-white"}`}><p className="text-sm font-extrabold text-brand">0{index + 1}</p><h2 className="mt-3 text-2xl font-extrabold text-primary">{title}</h2><ul className="mt-5 grid gap-3">{points.map((point) => <li key={point} className="flex gap-3 text-sm leading-6 text-text-muted"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand" />{point}</li>)}</ul></article>)}</div></section></main><Footer /></>; }
