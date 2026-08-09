"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { motion, useReducedMotion, useScroll } from "framer-motion";
import { advantageCards, contactDetails, insights, services } from "@/data/site";
import { BrandLogo } from "@/components/header";
import { ButtonLink, SectionHeading } from "@/components/ui";
import { ContactForm } from "@/components/contact-form";
import { ConsultationForm } from "@/components/consultation-form";
import { ShipmentJourney } from "@/components/shipment-journey";

const fade = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0 } };

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} variants={reduce ? undefined : fade} initial={reduce ? false : "hidden"} whileInView={reduce ? undefined : "show"} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, ease: "easeOut" }}>{children}</motion.div>;
}

export function HomePage() {
  return <main><ScrollProgress /><Hero /><StatsStrip /><ServicesGrid /><ShipmentJourney /><Consultation /><Advantages /><Sectors /><ContactSection /><Insights /></main>;
}

function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  return <motion.div aria-hidden="true" className="fixed inset-x-0 top-0 z-[70] h-1 origin-left bg-accent" style={{ scaleX: reduce ? 0 : scrollYProgress }} />;
}

function Hero() {
  return <section aria-label="Logistics operations video" className="relative h-[min(78svh,780px)] min-h-[440px] overflow-hidden bg-primary-deep"><video autoPlay muted loop playsInline preload="auto" disablePictureInPicture poster="/logismart-hero-poster.jpg" className="absolute inset-0 h-full w-full object-cover"><source src="/logismart-hero.mp4" type="video/mp4" /></video></section>;
}

function StatsStrip() {
  const items = [["01", "Smart Logistics", "/smart-logistics"], ["02", "Reliable Solutions", "/reliable-solutions"], ["03", "Expert Consultation", "/expert-consultation"]];
  return <section className="relative z-10 -mt-8"><div className="container-shell grid overflow-hidden rounded-[16px] border border-border bg-white shadow-[var(--shadow-card)] md:grid-cols-3">{items.map(([number, label, href]) => <Link key={number} href={href} className="group flex items-center gap-4 border-b border-border p-6 transition duration-200 hover:bg-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand active:bg-soft md:border-b-0 md:border-r last:md:border-r-0"><span className="text-3xl font-extrabold text-brand">{number}</span><p className="text-sm font-extrabold text-primary transition group-hover:text-brand">{label}</p><ArrowRight size={16} className="ml-auto text-brand opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" /></Link>)}</div></section>;
}

function ServicesGrid() {
  return <section id="services" className="section-pad bg-white"><div className="container-shell"><Reveal><SectionHeading eyebrow="Our Services" title="End-to-End Logistics Solutions" text="Comprehensive logistics services powered by technology, expertise, and a commitment to operational excellence." /></Reveal><div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{services.map((service) => { const Icon = service.icon; return <Reveal key={service.slug}><Link href={`/smart-logistics#${service.slug}`} className="group flex h-full flex-col rounded-[16px] border border-border bg-white p-7 shadow-[var(--shadow-card)] transition duration-200 hover:-translate-y-1 hover:border-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"><Icon className="text-brand" size={31} /><h3 className="mt-7 text-xl font-extrabold text-primary">{service.title}</h3><p className="mt-4 flex-1 text-sm leading-7 text-text-muted">{service.description}</p><span className="mt-6 flex items-center gap-2 text-sm font-extrabold text-brand">Learn More <ArrowRight size={16} className="transition group-hover:translate-x-1" /></span></Link></Reveal>; })}</div></div></section>;
}

function Consultation() { return <section className="section-pad bg-soft"><div className="container-shell grid overflow-hidden rounded-[20px] border border-border bg-white lg:grid-cols-[0.82fr_1.18fr]"><div className="relative min-h-[420px]"><Image src="/images/logistics/04_quote_team_variant_1.png" alt="Logistics professionals discussing operational requirements" fill sizes="(min-width:1024px) 43vw, 100vw" className="object-cover" /></div><div><SectionHeading eyebrow="Request a Consultation" title="Plan Your Next Logistics Solution" text="Tell us about your operational requirements and our team will help identify the right logistics solution for your business." /><ConsultationForm /></div></div></section>; }

function Advantages() {
  return <section className="section-pad bg-white"><div className="container-shell"><SectionHeading eyebrow="Our Advantage" title="Why Businesses Choose LogiSmart" align="center" /><div className="mt-12 grid items-center gap-7 lg:grid-cols-[1fr_0.9fr_1fr]"><div className="grid gap-5">{advantageCards.slice(0, 3).map((item) => <Advantage key={item.title} {...item} />)}</div><Reveal className="relative min-h-[500px] overflow-hidden rounded-[20px]"><Image src="/images/logistics/16_topdown_ship_variant_2.png" alt="Overhead view of a logistics operation" fill sizes="(min-width:1024px) 32vw, 100vw" className="object-cover" /><div className="absolute inset-0 bg-primary/15" /></Reveal><div className="grid gap-5">{advantageCards.slice(3).map((item) => <Advantage key={item.title} {...item} />)}</div></div></div></section>;
}

function Advantage({ title, description, icon: Icon }: (typeof advantageCards)[number]) { return <Reveal className="border-l-2 border-brand bg-soft p-5"><Icon size={24} className="text-brand" /><h3 className="mt-3 font-extrabold text-primary">{title}</h3><p className="mt-2 text-sm leading-6 text-text-muted">{description}</p></Reveal>; }

function Sectors() {
  const sectors = ["Importers", "Manufacturers", "Distributors", "Retailers", "E-Commerce", "Industrial Businesses"];
  return <section className="border-y border-border bg-soft py-16"><div className="container-shell"><SectionHeading title="Supporting Businesses Across Key Sectors" align="center" /><div className="mt-9 grid gap-px overflow-hidden rounded-[14px] border border-border bg-border sm:grid-cols-2 lg:grid-cols-6">{sectors.map((sector) => <div key={sector} className="grid min-h-28 place-items-center bg-white px-4 text-center text-sm font-extrabold text-primary">{sector}</div>)}</div></div></section>;
}

function ContactSection() {
  return <section className="section-pad bg-white"><div className="container-shell grid gap-10 lg:grid-cols-[0.75fr_1.25fr]"><Reveal><SectionHeading eyebrow="Contact Us" title="Talk to a Logistics Specialist" text="Share your logistics requirements with our team and discover a solution designed around your business." /><div className="mt-8 grid gap-4 text-sm leading-6 text-text-muted"><p className="flex gap-3"><MapPin className="shrink-0 text-brand" size={18} />{contactDetails.address}</p><a href="tel:+966502964915" className="flex gap-3 hover:text-brand"><Phone className="shrink-0 text-brand" size={18} />{contactDetails.phonePrimary}</a><a href="tel:+966557818795" className="flex gap-3 hover:text-brand"><Phone className="shrink-0 text-brand" size={18} />{contactDetails.phoneSecondary}</a><a href={`mailto:${contactDetails.email}`} className="flex gap-3 hover:text-brand"><Mail className="shrink-0 text-brand" size={18} />{contactDetails.email}</a></div></Reveal><Reveal><ContactForm /></Reveal></div></section>;
}

function Insights() {
  return <section className="section-pad bg-soft"><div className="container-shell"><SectionHeading eyebrow="Insights" title="Latest Logistics Thinking" /><div className="mt-11 grid gap-5 lg:grid-cols-3">{insights.map((article) => <Reveal key={article.slug}><Link href={`/insights/${article.slug}`} className="group block h-full overflow-hidden rounded-[16px] border border-border bg-white shadow-[var(--shadow-card)] transition duration-200 hover:-translate-y-1 hover:border-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"><article className="h-full"><div className="relative aspect-[1.4/1]"><Image src={article.image} alt="" fill sizes="(min-width:1024px) 31vw, 100vw" className="object-cover" /></div><div className="p-6"><p className="text-xs font-extrabold tracking-[0.1em] text-brand">{article.category}</p><h3 className="mt-3 text-xl font-extrabold text-primary">{article.title}</h3><p className="mt-3 text-sm leading-6 text-text-muted">{article.description}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-brand">Read article <ArrowRight size={16} className="transition group-hover:translate-x-1" /></span></div></article></Link></Reveal>)}</div><ButtonLink href="/insights" variant="secondary" className="mt-8">View All Insights</ButtonLink></div></section>;
}

export function Footer() {
  return <footer className="bg-primary-deep text-white"><div className="container-shell grid gap-10 py-14 lg:grid-cols-[1.25fr_0.75fr]"><div><BrandLogo dark /><p className="mt-5 max-w-xl text-sm leading-7 text-white/70">Smart logistics, reliable solutions, and expert consultation designed to drive operational excellence and sustainable growth.</p></div><div><h2 className="text-sm font-extrabold tracking-[0.12em] text-accent">CONTACT</h2><div className="mt-4 grid gap-3 text-sm leading-6 text-white/70"><p>{contactDetails.address}</p><a href="tel:+966502964915" className="hover:text-accent">{contactDetails.phonePrimary}</a><a href="tel:+966557818795" className="hover:text-accent">{contactDetails.phoneSecondary}</a><a href={`mailto:${contactDetails.email}`} className="hover:text-accent">{contactDetails.email}</a><a href={contactDetails.website} className="hover:text-accent">www.logismart.sa</a></div></div></div><div className="border-t border-white/10"><div className="container-shell py-5 text-sm text-white/50">Copyright 2026 LogiSmart Solutions. All rights reserved.</div></div></footer>;
}
