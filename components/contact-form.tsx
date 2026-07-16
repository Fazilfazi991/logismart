"use client";

import { FormEvent, useState } from "react";

const services = ["Smart Logistics", "Freight Forwarding", "Land Transportation", "Customs Clearance", "Warehousing and 3PL", "Packing and Moving", "Equipment Rental", "Reliable Solutions", "Expert Consultation", "Other"];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); const form = event.currentTarget; if (!form.checkValidity()) { form.reportValidity(); return; } setStatus("loading"); window.setTimeout(() => { form.reset(); setStatus("success"); }, 700); }
  return <form noValidate onSubmit={submit} className="grid gap-5 rounded-[20px] border border-border bg-white p-6 shadow-[var(--shadow-card)] md:p-8">
    <div className="grid gap-5 md:grid-cols-2"><Field label="Full Name" required /><Field label="Company Name" required /><Field label="Email Address" type="email" required /><Field label="Phone Number" type="tel" required /><label className="grid gap-2 text-sm font-bold text-primary md:col-span-2"><span>Service Required</span><select className="field" required defaultValue=""><option value="" disabled>Select a service</option>{services.map((service) => <option key={service}>{service}</option>)}</select></label></div>
    <label className="grid gap-2 text-sm font-bold text-primary"><span>Message</span><textarea className="field min-h-36 resize-y" required placeholder="Tell us how we can help." /></label>
    <button disabled={status === "loading"} className="inline-flex min-h-12 items-center justify-center rounded-md bg-brand px-5 text-sm font-extrabold text-white transition hover:bg-primary disabled:opacity-70">{status === "loading" ? "Sending Enquiry..." : "Send Enquiry"}</button>
    {status === "success" ? <p role="status" className="flex items-center gap-2 text-sm font-bold text-brand">Your enquiry has been received. Our team will be in touch shortly.</p> : null}
  </form>;
}

function Field({ label, type = "text", required = false }: { label: string; type?: string; required?: boolean }) { return <label className="grid gap-2 text-sm font-bold text-primary"><span>{label}</span><input className="field" type={type} required={required} /></label>; }
