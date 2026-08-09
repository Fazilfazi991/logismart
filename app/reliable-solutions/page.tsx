import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/home";
import { FinalCta, VisualHero } from "@/components/content-page";
import { SectionHeading } from "@/components/ui";
import { reliabilityDetails, reliabilityPoints } from "@/data/site";

export const metadata: Metadata = { title: "Reliable Solutions", description: "Dependable logistics operations designed around accurate processes, responsive service and consistent delivery.", alternates: { canonical: "/reliable-solutions" } };

export default function ReliableSolutionsPage() {
  return <><Header /><main>
    <VisualHero eyebrow="Core solution" title="Reliable Solutions" text="Reliable Solutions means providing logistics services and operational systems that consistently deliver accurate, timely and dependable results." image="/images/reliable-solutions/reliable-solutions-hero.png" secondary="What reliability means" />
    <section id="services" className="section-pad bg-white"><div className="container-shell grid items-center gap-10 lg:grid-cols-[.95fr_1.05fr]">
      <div className="relative aspect-[4/3] overflow-hidden rounded-[20px]"><Image src="/images/reliable-solutions/managed-operations.png" alt="Managed logistics operations at a distribution facility" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" /></div>
      <SectionHeading eyebrow="Built into every operation" title="Reliability is planned, not promised" text="Dependable logistics is created through the disciplined work behind a shipment: clear planning, accurate documentation, coordinated handovers, visible progress and timely communication. When those fundamentals are built into the operation, teams can make decisions earlier and customers have a clearer view of what happens next. LogiSmart approaches reliability as a daily operating practice, not a final status update." />
    </div></section>
    <section className="section-pad bg-soft"><div className="container-shell"><SectionHeading eyebrow="The standard" title="What reliable logistics looks like" /><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{reliabilityPoints.map((point, index) => <article key={point} className="rounded-[16px] border border-border bg-white p-6"><span className="text-xs font-extrabold tracking-[.14em] text-brand">{String(index + 1).padStart(2, "0")}</span><h2 className="mt-3 text-lg font-extrabold text-primary">{point}</h2><p className="mt-3 text-sm leading-6 text-text-muted">{reliabilityDetails[index]}</p></article>)}</div></div></section>
    <section className="section-pad bg-white"><div className="container-shell grid items-center gap-10 lg:grid-cols-2"><div><SectionHeading eyebrow="Prepared for exceptions" title="Reducing disruption before it affects your business" text="Disruptions cannot always be removed, but their impact can be managed through early planning. Route options, carrier coordination, equipment readiness, inventory checks and complete documentation all help a team respond with practical alternatives. Clear escalation also matters: when an issue needs attention, the right people should have the information to decide and communicate promptly." /><p className="mt-5 leading-8 text-text-muted">This approach is particularly useful where import schedules, industrial operations, delivery windows and customer commitments depend on several teams working in sequence. It keeps the focus on the next workable action rather than simply reporting a problem.</p></div><div className="relative aspect-[4/3] overflow-hidden rounded-[20px]"><Image src="/images/reliable-solutions/dispatch-coordination.png" alt="Cargo dispatch coordination" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" /></div></div></section>
    <FinalCta title="Looking for more dependable logistics execution?" text="Share the points that matter most to your operation and let’s identify a practical way to support them." />
  </main><Footer /></>;
}
