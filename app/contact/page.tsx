import type { Metadata } from "next";
import { Mail, MapPin, Phone, Globe2 } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/home";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/ui";
import { contactDetails } from "@/data/site";

export const metadata: Metadata = { title: "Contact Us", description: "Talk to a LogiSmart logistics specialist in Dammam, Saudi Arabia." };
export default function ContactPage() { return <><Header /><main><PageHero eyebrow="Contact Us" title="Talk to a Logistics Specialist" text="Tell us about your requirements and receive focused support from the LogiSmart Solutions team." /><section className="section-pad bg-white"><div className="container-shell grid gap-10 lg:grid-cols-[0.82fr_1.18fr]"><div><h2 className="text-3xl font-extrabold text-primary">Let&apos;s start a conversation.</h2><div className="mt-7 grid gap-5 text-text-muted"><p className="flex gap-3"><MapPin className="shrink-0 text-brand" />{contactDetails.address}</p><a className="flex gap-3 hover:text-brand" href="tel:+966502964915"><Phone className="shrink-0 text-brand" />{contactDetails.phonePrimary}</a><a className="flex gap-3 hover:text-brand" href="tel:+966557818795"><Phone className="shrink-0 text-brand" />{contactDetails.phoneSecondary}</a><a className="flex gap-3 hover:text-brand" href={`mailto:${contactDetails.email}`}><Mail className="shrink-0 text-brand" />{contactDetails.email}</a><a className="flex gap-3 hover:text-brand" href={contactDetails.website}><Globe2 className="shrink-0 text-brand" />www.logismart.sa</a></div></div><ContactForm /></div></section></main><Footer /></>; }
