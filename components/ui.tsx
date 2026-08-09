import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ComponentProps } from "react";

type ButtonProps = ComponentProps<typeof Link> & { variant?: "primary" | "secondary"; };

export function ButtonLink({ className = "", variant = "primary", children, ...props }: ButtonProps) {
  const styles = variant === "primary"
    ? "bg-brand text-white hover:bg-brand-hover shadow-[0_10px_24px_rgba(113,147,123,0.25)]"
    : "border border-border bg-white text-primary hover:border-brand hover:text-brand";
  return <Link className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${styles} ${className}`} {...props}>{children}</Link>;
}

export function SectionHeading({ eyebrow, title, text, align = "left" }: { eyebrow?: string; title: string; text?: string; align?: "left" | "center" }) {
  return <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
    {eyebrow ? <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-brand">{eyebrow}</p> : null}
    <h2 className="text-3xl font-extrabold tracking-normal text-primary md:text-5xl">{title}</h2>
    {text ? <p className="mt-4 text-base leading-7 text-text-muted md:text-lg">{text}</p> : null}
  </div>;
}

export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link href={href} className="inline-flex items-center gap-2 text-sm font-extrabold text-brand transition hover:text-primary">{children}<ArrowRight size={16} /></Link>;
}

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <section className="border-b border-border bg-soft py-20 md:py-28"><div className="container-shell"><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-brand">{eyebrow}</p><h1 className="mt-4 max-w-3xl text-4xl font-extrabold text-primary md:text-6xl">{title}</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-text-muted">{text}</p></div></section>;
}
