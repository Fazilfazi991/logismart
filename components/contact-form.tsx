"use client";

import { useForm, ValidationError } from "@formspree/react";
import { services } from "@/data/site";

const serviceOptions = ["Smart Logistics", ...services.map((service) => service.title), "Reliable Solutions", "Expert Consultation", "Other"];

export function ContactForm() {
  const [state, handleSubmit] = useForm("meajebqp");
  if (state.succeeded) return <div role="status" className="rounded-[20px] border border-border bg-soft p-8 text-center"><h2 className="text-2xl font-extrabold text-primary">Thank you for your enquiry.</h2><p className="mt-3 leading-7 text-text-muted">Our team will be in touch shortly.</p></div>;
  return <form onSubmit={handleSubmit} className="grid gap-5 rounded-[20px] border border-border bg-white p-6 shadow-[var(--shadow-card)] md:p-8">
    <div className="grid gap-5 md:grid-cols-2"><Field name="name" label="Full Name" required /><Field name="company" label="Company Name" required /><Field name="email" label="Email Address" type="email" required /><Field name="phone" label="Phone Number" type="tel" required /><label className="grid gap-2 text-sm font-bold text-primary md:col-span-2"><span>Service Required</span><select name="service" className="field" required defaultValue=""><option value="" disabled>Select a service</option>{serviceOptions.map((service) => <option key={service}>{service}</option>)}</select></label></div>
    <label className="grid gap-2 text-sm font-bold text-primary"><span>Message</span><textarea name="message" className="field min-h-36 resize-y" required placeholder="Tell us how we can help." /></label><ValidationError prefix="Message" field="message" errors={state.errors} className="text-sm font-bold text-red-700" /><ValidationError prefix="Email" field="email" errors={state.errors} className="text-sm font-bold text-red-700" /><button disabled={state.submitting} className="inline-flex min-h-12 items-center justify-center rounded-md bg-brand px-5 text-sm font-extrabold text-white transition hover:bg-brand-hover disabled:opacity-70">{state.submitting ? "Sending Enquiry..." : "Send Enquiry"}</button>{state.errors ? <p role="alert" className="text-sm font-bold text-red-700">We could not send your enquiry. Please check the form and try again.</p> : null}
  </form>;
}
function Field({ name, label, type = "text", required = false }: { name: string; label: string; type?: string; required?: boolean }) { return <label className="grid gap-2 text-sm font-bold text-primary"><span>{label}</span><input name={name} className="field" type={type} required={required} /></label>; }
