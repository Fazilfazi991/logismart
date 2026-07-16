"use client";

import { forwardRef, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "framer-motion";
import { BadgeCheck, Container, Factory, FileCheck2, PackageCheck, Truck, Warehouse } from "lucide-react";

const stages = [
  { number: "01", title: "Supplier", description: "We pick up your goods from the supplier.", icon: Factory, kind: "supplier" },
  { number: "02", title: "Port", description: "Safe handling and international shipping.", icon: Container, kind: "port" },
  { number: "03", title: "Customs", description: "All documentation and clearance, handled.", icon: FileCheck2, kind: "customs" },
  { number: "04", title: "Warehouse", description: "Secure storage and smart inventory management.", icon: Warehouse, kind: "warehouse" },
  { number: "05", title: "Customer", description: "On-time delivery, every time.", icon: PackageCheck, kind: "customer" }
] as const;

const benefits = [
  ["Real-Time Visibility", "Track every move."],
  ["Compliance First", "We handle the paperwork."],
  ["Expert Support", "We’re here, always."],
  ["On-Time Delivery", "Your deadlines, our priority."]
] as const;

export function ShipmentJourney() {
  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const desktopLineRef = useRef<HTMLDivElement>(null);
  const mobileLineRef = useRef<HTMLDivElement>(null);
  const desktopTruckRef = useRef<HTMLDivElement>(null);
  const mobileTruckRef = useRef<HTMLDivElement>(null);
  const benefitRefs = useRef<(HTMLDivElement | null)[]>([]);
  const stageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeStage, setActiveStage] = useState(0);
  const reduceMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (reduceMotion) {
      setActiveStage(stages.length - 1);
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      const stageNodes = stageRefs.current.filter((stage): stage is HTMLDivElement => Boolean(stage));
      const benefitNodes = benefitRefs.current.filter((benefit): benefit is HTMLDivElement => Boolean(benefit));
      const animateStageDetails = (timeline: gsap.core.Timeline, stage: HTMLDivElement, position: number) => {
        const visual = stage.querySelector<HTMLElement>("[data-stage-visual]");
        const extras = stage.querySelectorAll<HTMLElement>("[data-stage-extra]");
        if (visual) timeline.to(visual, { opacity: 1, scale: 1.08, duration: 0.24, ease: "power2.out" }, position);
        if (extras.length) timeline.to(extras, { opacity: 1, scale: 1, y: 0, duration: 0.22, stagger: 0.08, ease: "power2.out" }, position + 0.08);
      };

      const createTimeline = (mode: "desktop" | "mobile") => {
        const line = mode === "desktop" ? desktopLineRef.current : mobileLineRef.current;
        const truck = mode === "desktop" ? desktopTruckRef.current : mobileTruckRef.current;
        if (!line || !truck) return;
        const isDesktop = mode === "desktop";
        gsap.set(line, { [isDesktop ? "scaleX" : "scaleY"]: 0, transformOrigin: isDesktop ? "left center" : "center top" });
        gsap.set(truck, isDesktop ? { left: "0%" } : { top: "0%" });
        gsap.set(benefitNodes, { opacity: 0, y: 14 });
        gsap.set(stageNodes, { opacity: 0.55 });
        gsap.set(stageNodes.map((stage) => stage.querySelector("[data-stage-visual]")), { opacity: 0.6, scale: 0.92 });
        gsap.set(stageNodes.flatMap((stage) => Array.from(stage.querySelectorAll("[data-stage-extra]"))), { opacity: 0, scale: 0.82, y: 5 });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: isDesktop ? "top top+=96" : "top 72%",
            end: isDesktop ? "+=900" : "bottom 52%",
            scrub: 0.7,
            pin: isDesktop ? panelRef.current : false,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => setActiveStage(Math.min(stages.length - 1, Math.floor(self.progress * stages.length)))
          }
        });

        timeline.fromTo(introRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.55, ease: "power2.out" }, 0);
        timeline.to(line, { [isDesktop ? "scaleX" : "scaleY"]: 1, duration: stages.length - 0.4, ease: "none" }, 0.18);
        stageNodes.forEach((stage, index) => {
          const point = 0.45 + index * 0.95;
          timeline.to(truck, { [isDesktop ? "left" : "top"]: `${index * 25}%`, duration: 0.88, ease: "none" }, point);
          timeline.to(stage, { opacity: 1, duration: 0.18, ease: "none" }, point);
          animateStageDetails(timeline, stage, point);
        });
        timeline.to(benefitNodes, { opacity: 1, y: 0, duration: 0.38, stagger: 0.1, ease: "power2.out" }, "+=0.1");
      };

      const media = gsap.matchMedia();
      media.add("(min-width: 768px)", () => createTimeline("desktop"));
      media.add("(max-width: 767px)", () => createTimeline("mobile"));
      return () => media.revert();
    }, sectionRef);

    return () => context.revert();
  }, [reduceMotion]);

  return <section ref={sectionRef} className="shipment-journey section-pad overflow-hidden bg-soft" aria-labelledby="shipment-journey-title">
    <div ref={panelRef} className="container-shell">
      <div ref={introRef} className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-extrabold tracking-[0.18em] text-brand">SHIPMENT JOURNEY</p>
        <h2 id="shipment-journey-title" className="mt-4 text-3xl font-extrabold text-primary md:text-5xl">End-to-End. Handled with Precision.</h2>
        <p className="mt-4 text-base leading-7 text-text-muted md:text-lg">From pickup to final delivery, LogiSmart manages every step with visibility, compliance, and care.</p>
      </div>

      <div className="shipment-journey-desktop relative mt-16 hidden md:block">
        <div className="absolute left-[9.5%] right-[9.5%] top-[62px] h-px bg-border" />
        <div ref={desktopLineRef} className="absolute left-[9.5%] right-[9.5%] top-[62px] h-[2px] bg-brand" />
        <div ref={desktopTruckRef} className="absolute top-[45px] z-20 -translate-x-1/2 rounded-full border border-brand/20 bg-white p-2 text-brand shadow-sm"><Truck size={18} /></div>
        <div className="grid grid-cols-5 gap-3">
          {stages.map((stage, index) => <JourneyStage key={stage.title} stage={stage} active={activeStage === index} ref={(element) => { stageRefs.current[index] = element; }} />)}
        </div>
      </div>

      <div className="shipment-journey-mobile relative mt-12 grid gap-8 pl-16 md:hidden">
        <div className="absolute bottom-9 left-7 top-7 w-px bg-border" />
        <div ref={mobileLineRef} className="absolute bottom-9 left-7 top-7 w-[2px] bg-brand" />
        <div ref={mobileTruckRef} className="absolute left-[14px] z-20 -translate-y-1/2 rounded-full border border-brand/20 bg-white p-2 text-brand shadow-sm"><Truck size={16} /></div>
        {stages.map((stage, index) => <JourneyStage key={stage.title} stage={stage} active={activeStage === index} ref={(element) => { stageRefs.current[index] = element; }} />)}
      </div>

      <div className="mt-14 grid border-t border-border pt-7 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map(([title, text], index) => <div ref={(element) => { benefitRefs.current[index] = element; }} key={title} className="border-b border-border px-0 py-5 last:border-b-0 sm:border-b-0 sm:px-6 sm:first:pl-0 sm:odd:border-r lg:border-r lg:last:border-r-0 lg:odd:border-r"><h3 className="text-sm font-extrabold text-primary">{title}</h3><p className="mt-1 text-sm text-text-muted">{text}</p></div>)}
      </div>
    </div>
  </section>;
}

type Stage = (typeof stages)[number];

const JourneyStage = forwardRef<HTMLDivElement, { stage: Stage; active: boolean }>(function JourneyStage({ stage, active }, ref) {
  const Icon = stage.icon;
  return <div ref={ref} className={`relative z-10 text-center transition-colors duration-300 md:px-3 ${active ? "text-brand" : "text-text-muted"}`} data-active={active}>
    <div data-stage-visual className={`mx-auto grid h-16 w-16 place-items-center rounded-full border bg-white transition-colors duration-300 ${active ? "border-brand bg-soft shadow-sm" : "border-border"}`}>
      <Icon size={26} strokeWidth={1.6} />
      <StageMicroVisual kind={stage.kind} />
    </div>
    <span className={`mt-5 inline-flex rounded-full px-3 py-1 text-xs font-extrabold transition-colors duration-300 ${active ? "bg-accent/30 text-brand" : "bg-white text-text-muted"}`}>{stage.number}</span>
    <h3 className="mt-3 text-lg font-extrabold text-primary">{stage.title}</h3>
    <p className="mx-auto mt-2 max-w-[190px] text-sm leading-6 text-text-muted">{stage.description}</p>
  </div>;
});

function StageMicroVisual({ kind }: { kind: Stage["kind"] }) {
  if (kind === "port") return <span aria-hidden="true" className="pointer-events-none absolute"><span data-stage-extra className="absolute -left-3 -top-10 h-7 w-px bg-brand" /><span data-stage-extra className="absolute -left-[13px] -top-4 h-2 w-2 rounded-full border border-brand bg-white" /></span>;
  if (kind === "customs") return <span data-stage-extra className="pointer-events-none absolute -right-9 top-1 rounded bg-brand px-1.5 py-0.5 text-[9px] font-extrabold text-white">Cleared</span>;
  if (kind === "warehouse") return <span className="pointer-events-none absolute -bottom-2 -right-4 flex gap-0.5">{[0, 1, 2].map((box) => <span key={box} data-stage-extra className="h-2.5 w-2.5 border border-brand bg-soft" />)}</span>;
  if (kind === "customer") return <BadgeCheck data-stage-extra className="pointer-events-none absolute -bottom-2 -right-3 text-brand" size={19} />;
  return null;
}
