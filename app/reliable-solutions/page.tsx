import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/home";
import { PageHero } from "@/components/ui";
import { reliabilityPoints } from "@/data/site";

export const metadata: Metadata = { title: "Reliable Solutions", description: "Dependable logistics operations designed around accuracy, responsive service, and consistent delivery." };
export default function ReliableSolutionsPage() { return <><Header /><main><PageHero eyebrow="Core Solution" title="Reliable Solutions" text="Reliable Solutions means providing logistics services and operational systems that consistently deliver accurate, timely, and dependable results." /><section className="section-pad bg-white"><div className="container-shell"><div className="grid overflow-hidden rounded-[20px] border border-border md:grid-cols-2">{reliabilityPoints.map((point, index) => <div key={point} className="flex gap-4 border-b border-border p-6 md:nth-[2n+1]:border-r"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-soft text-sm font-extrabold text-brand">{String(index + 1).padStart(2, "0")}</span><div><CheckCircle2 className="text-brand" size={18} /><p className="mt-2 font-bold text-primary">{point}</p></div></div>)}</div></div></section></main><Footer /></>; }
