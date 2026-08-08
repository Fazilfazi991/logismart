import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/home";
import { Header } from "@/components/header";
import { PageHero } from "@/components/ui";
import { insights } from "@/data/site";

export const metadata: Metadata = { title: "Logistics Insights", description: "Practical perspectives on smart logistics, reliable operations, and supply chain planning." };

export default function InsightsPage() {
  return <><Header /><main><PageHero eyebrow="Insights" title="Latest Logistics Thinking" text="Practical perspectives on logistics operations, visibility, reliability, and informed supply chain planning." /><section className="section-pad bg-white"><div className="container-shell grid gap-5 md:grid-cols-2 lg:grid-cols-3">{insights.map((article) => <Link key={article.slug} href={`/insights/${article.slug}`} className="group flex h-full flex-col overflow-hidden rounded-[16px] border border-border bg-white shadow-[var(--shadow-card)] transition duration-200 hover:-translate-y-1 hover:border-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"><div className="relative aspect-[1.4/1]"><Image src={article.image} alt="" fill sizes="(min-width:1024px) 31vw, (min-width:768px) 48vw, 100vw" className="object-cover" /></div><div className="flex flex-1 flex-col p-6"><p className="text-xs font-extrabold tracking-[0.1em] text-brand">{article.category}</p><h2 className="mt-3 text-xl font-extrabold text-primary">{article.title}</h2><p className="mt-3 flex-1 text-sm leading-6 text-text-muted">{article.description}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-brand">Read article <ArrowRight size={16} className="transition group-hover:translate-x-1" /></span></div></Link>)}</div></section></main><Footer /></>;
}
