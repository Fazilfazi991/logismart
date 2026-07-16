"use client";

import { forwardRef, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "framer-motion";
import Image from "next/image";

const stages = [
  { number: "01", title: "Supplier", description: "We pick up your goods from the supplier.", icon: "/images/logistics/shipment-journey/01-minimalist_green_factory_icon.png", kind: "supplier" },
  { number: "02", title: "Port", description: "Safe handling and international shipping.", icon: "/images/logistics/shipment-journey/02-minimalist_crane_lifting_shipping_container.png", kind: "port" },
  { number: "03", title: "Customs", description: "All documentation and clearance, handled.", icon: "/images/logistics/shipment-journey/03-document_approval_icon_in_green.png", kind: "customs" },
  { number: "04", title: "Warehouse", description: "Secure storage and smart inventory management.", icon: "/images/logistics/shipment-journey/04-warehouse_interior_with_stacked_boxes.png", kind: "warehouse" },
  { number: "05", title: "Customer", description: "On-time delivery, every time.", icon: "/images/logistics/shipment-journey/05-verified_delivery_icon_with_checkmark.png", kind: "customer" }
] as const;

const benefits = [
  ["Real-Time Visibility", "Track every move."],
  ["Compliance First", "We handle the paperwork."],
  ["Expert Support", "We're here, always."],
  ["On-Time Delivery", "Your deadlines, our priority."]
] as const;

export function ShipmentJourney() {
  const sectionRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const desktopLineRef = useRef<HTMLDivElement>(null);
  const mobileLineRef = useRef<HTMLDivElement>(null);
  const desktopTruckRef = useRef<HTMLDivElement>(null);
  const mobileTruckRef = useRef<HTMLDivElement>(null);
  const benefitRefs = useRef<(HTMLDivElement | null)[]>([]);
  const desktopStageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileStageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const reduceMotion = useReducedMotion();

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const allStageNodes = [...desktopStageRefs.current, ...mobileStageRefs.current].filter((stage): stage is HTMLDivElement => Boolean(stage));
    const benefitNodes = benefitRefs.current.filter((benefit): benefit is HTMLDivElement => Boolean(benefit));
    const activate = (index: number) => {
      allStageNodes.forEach((stage) => {
        const stageIndex = Number(stage.dataset.stageIndex);
        stage.classList.toggle("is-active", stageIndex <= index);
      });
    };

    if (reduceMotion) {
      activate(stages.length - 1);
      benefitNodes.forEach((benefit) => { benefit.style.opacity = "1"; benefit.style.transform = "none"; });
      return;
    }

    let disposed = false;
    let media: gsap.MatchMedia | undefined;
    const context = gsap.context(() => {}, section);
    const fontsReady = document.fonts?.ready ?? Promise.resolve();

    fontsReady.then(() => {
      if (disposed) return;

      context.add(() => {
        gsap.registerPlugin(ScrollTrigger);
        media = gsap.matchMedia();
        let activeIndex = -1;

        const setActive = (index: number) => {
          if (index === activeIndex) return;
          activeIndex = index;
          activate(index);
        };

        const createJourney = (mode: "desktop" | "mobile") => {
          const isDesktop = mode === "desktop";
          const line = isDesktop ? desktopLineRef.current : mobileLineRef.current;
          const truck = isDesktop ? desktopTruckRef.current : mobileTruckRef.current;
          if (!line || !truck) return;

          const stageNodes = (isDesktop ? desktopStageRefs.current : mobileStageRefs.current).filter((stage): stage is HTMLDivElement => Boolean(stage));
          const visualNodes = stageNodes.map((stage) => stage.querySelector<HTMLElement>("[data-stage-visual]")).filter((node): node is HTMLElement => Boolean(node));
          const extras = stageNodes.flatMap((stage) => Array.from(stage.querySelectorAll<HTMLElement>("[data-stage-extra]")));
          const axis = isDesktop ? "x" : "y";
          const travelDistance = () => (isDesktop ? line.clientWidth : line.clientHeight);

          activate(0);
          gsap.set(line, { [isDesktop ? "scaleX" : "scaleY"]: 0, transformOrigin: isDesktop ? "left center" : "center top", force3D: true });
          gsap.set(truck, { [axis]: 0, force3D: true, willChange: "transform" });
          gsap.set(benefitNodes, { opacity: 0, y: 10, force3D: true });
          gsap.set(stageNodes, { opacity: 0.55 });
          gsap.set(visualNodes, { opacity: 0.55, scale: 0.96, force3D: true });
          gsap.set(extras, { opacity: 0, scale: 0.9, force3D: true });

          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
              end: "bottom 30%",
              scrub: 0.35,
              invalidateOnRefresh: true,
              onUpdate: (self) => setActive(Math.min(stages.length - 1, Math.floor(self.progress * stages.length)))
            }
          });

          timeline.fromTo(introRef.current, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.12, ease: "power2.out", force3D: true }, 0);
          timeline.to(line, { [isDesktop ? "scaleX" : "scaleY"]: 1, duration: 1, ease: "none", force3D: true, willChange: "transform" }, 0);
          stageNodes.forEach((stage, index) => {
            const point = index * 0.2;
            const visual = stage.querySelector<HTMLElement>("[data-stage-visual]");
            const stageExtras = stage.querySelectorAll<HTMLElement>("[data-stage-extra]");
            timeline.to(truck, { [axis]: () => (travelDistance() * index) / (stages.length - 1), duration: 0.18, ease: "none", force3D: true }, point);
            timeline.to(stage, { opacity: 1, duration: 0.12, ease: "none" }, point);
            if (visual) timeline.to(visual, { opacity: 1, scale: 1, duration: 0.16, ease: "power2.out", force3D: true }, point);
            if (stageExtras.length) timeline.to(stageExtras, { opacity: 1, scale: 1, duration: 0.14, stagger: 0.04, ease: "power2.out", force3D: true }, point + 0.04);
          });
          timeline.to(benefitNodes, { opacity: 1, y: 0, duration: 0.2, stagger: 0.05, ease: "power2.out", force3D: true }, 0.82);
        };

        media.add("(min-width: 768px)", () => createJourney("desktop"));
        media.add("(max-width: 767px)", () => createJourney("mobile"));
        ScrollTrigger.refresh();
      });
    });

    return () => {
      disposed = true;
      media?.revert();
      context.revert();
    };
  }, [reduceMotion]);

  return <section ref={sectionRef} className="shipment-journey section-pad overflow-hidden bg-soft" aria-labelledby="shipment-journey-title">
    <div className="container-shell">
      <div ref={introRef} className="shipment-journey__intro mx-auto max-w-2xl text-center">
        <p className="text-xs font-extrabold tracking-[0.18em] text-brand">SHIPMENT JOURNEY</p>
        <h2 id="shipment-journey-title" className="mt-4 text-3xl font-extrabold text-primary md:text-5xl">End-to-End. Handled with Precision.</h2>
        <p className="mt-4 text-base leading-7 text-text-muted md:text-lg">From pickup to final delivery, LogiSmart manages every step with visibility, compliance, and care.</p>
      </div>

      <div className="shipment-journey-desktop relative mt-16 hidden min-h-[254px] md:block">
        <div className="absolute left-[9.5%] right-[9.5%] top-[62px] h-px bg-border" />
        <div ref={desktopLineRef} className="shipment-journey__progress-line absolute left-[9.5%] right-[9.5%] top-[62px] h-[2px] bg-brand" />
        <div ref={desktopTruckRef} className="shipment-journey__truck absolute left-[9.5%] top-[42px] z-20"><div className="-translate-x-1/2 rounded-full border border-brand/20 bg-white p-1 shadow-sm"><Image src="/images/logistics/shipment-journey/06-delivery_truck_icon_in_green_outline.png" alt="" width={30} height={30} className="h-7 w-7 object-contain" /></div></div>
        <div className="grid grid-cols-5 gap-3">
          {stages.map((stage, index) => <JourneyStage key={stage.title} index={index} stage={stage} ref={(element) => { desktopStageRefs.current[index] = element; }} />)}
        </div>
      </div>

      <div className="shipment-journey-mobile relative mt-12 grid gap-8 pl-16 md:hidden">
        <div className="absolute bottom-9 left-7 top-7 w-px bg-border" />
        <div ref={mobileLineRef} className="shipment-journey__progress-line absolute bottom-9 left-7 top-7 w-[2px] bg-brand" />
        <div ref={mobileTruckRef} className="shipment-journey__truck absolute left-7 top-7 z-20"><div className="-translate-x-1/2 -translate-y-1/2 rounded-full border border-brand/20 bg-white p-1 shadow-sm"><Image src="/images/logistics/shipment-journey/06-delivery_truck_icon_in_green_outline.png" alt="" width={28} height={28} className="h-6 w-6 object-contain" /></div></div>
        {stages.map((stage, index) => <JourneyStage key={stage.title} index={index} stage={stage} ref={(element) => { mobileStageRefs.current[index] = element; }} />)}
      </div>

      <div className="mt-14 grid border-t border-border pt-7 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map(([title, text], index) => <div ref={(element) => { benefitRefs.current[index] = element; }} key={title} className="shipment-journey__benefit border-b border-border px-0 py-5 last:border-b-0 sm:border-b-0 sm:px-6 sm:first:pl-0 sm:odd:border-r lg:border-r lg:last:border-r-0 lg:odd:border-r"><h3 className="text-sm font-extrabold text-primary">{title}</h3><p className="mt-1 text-sm text-text-muted">{text}</p></div>)}
      </div>
    </div>
  </section>;
}

type Stage = (typeof stages)[number];

const JourneyStage = forwardRef<HTMLDivElement, { index: number; stage: Stage }>(function JourneyStage({ index, stage }, ref) {
  return <div ref={ref} data-stage-index={index} className="shipment-journey__stage relative z-10 text-center text-text-muted md:px-3">
    <div data-stage-visual className="shipment-journey__stage-visual relative mx-auto grid h-16 w-16 place-items-center rounded-full border border-border bg-white">
      <Image src={stage.icon} alt="" width={48} height={48} className="h-12 w-12 object-contain" />
      <StageMicroVisual kind={stage.kind} />
    </div>
    <span className="shipment-journey__badge mt-5 inline-flex min-h-6 min-w-10 items-center justify-center rounded-full bg-white px-3 py-1 text-xs font-extrabold">{stage.number}</span>
    <h3 className="mt-3 text-lg font-extrabold text-primary">{stage.title}</h3>
    <p className="mx-auto mt-2 max-w-[190px] text-sm leading-6 text-text-muted">{stage.description}</p>
  </div>;
});

function StageMicroVisual({ kind }: { kind: Stage["kind"] }) {
  if (kind === "port") return <span aria-hidden="true" className="pointer-events-none absolute"><span data-stage-extra className="absolute -left-3 -top-10 h-7 w-px bg-brand" /><span data-stage-extra className="absolute -left-[13px] -top-4 h-2 w-2 rounded-full border border-brand bg-white" /></span>;
  if (kind === "customs") return <span data-stage-extra className="pointer-events-none absolute -right-9 top-1 rounded bg-brand px-1.5 py-0.5 text-[9px] font-extrabold text-white">Cleared</span>;
  if (kind === "warehouse") return <span className="pointer-events-none absolute -bottom-2 -right-4 flex gap-0.5">{[0, 1, 2].map((box) => <span key={box} data-stage-extra className="h-2.5 w-2.5 border border-brand bg-soft" />)}</span>;
  if (kind === "customer") return <span data-stage-extra className="pointer-events-none absolute -bottom-2 -right-3 grid h-[19px] w-[19px] place-items-center rounded-full bg-soft text-xs font-extrabold text-brand">&#10003;</span>;
  return null;
}
