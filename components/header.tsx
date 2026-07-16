"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/data/site";
import { ButtonLink } from "@/components/ui";

export function BrandLogo({ dark = false }: { dark?: boolean }) {
  return <Link href="/" aria-label="LogiSmart Solutions home" className="inline-flex h-12 w-[172px] items-center overflow-hidden">
    <object aria-label="LogiSmart Solutions" className={`h-full w-full pointer-events-none ${dark ? "brightness-0 invert" : ""}`} data="/logismart-logo.pdf#view=FitH&toolbar=0&navpanes=0" type="application/pdf">
      <span className="text-lg font-extrabold text-primary">LogiSmart Solutions</span>
    </object>
  </Link>;
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  return <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur">
    <nav className="container-shell flex h-[76px] items-center justify-between gap-4">
      <BrandLogo />
      <div className="hidden items-center gap-1 xl:flex">
        {navItems.map((item) => <Link key={item.href} href={item.href} className={`rounded px-3 py-2 text-sm font-bold transition ${pathname === item.href ? "text-brand" : "text-primary hover:text-brand"}`}>{item.label}</Link>)}
      </div>
      <div className="hidden xl:block"><ButtonLink href="/contact">Request Consultation</ButtonLink></div>
      <button aria-label="Open navigation menu" aria-expanded={mobileOpen} onClick={() => setMobileOpen(true)} className="grid h-11 w-11 place-items-center rounded-md border border-border text-primary xl:hidden"><Menu size={21} /></button>
    </nav>
    <AnimatePresence>{mobileOpen ? <motion.div className="fixed inset-0 z-[60] bg-primary/35 xl:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div className="ml-auto flex min-h-screen w-[min(88%,380px)] flex-col bg-white p-6 shadow-2xl" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "tween", duration: 0.25 }}>
        <div className="flex items-center justify-between"><BrandLogo /><button aria-label="Close navigation menu" onClick={() => setMobileOpen(false)} className="grid h-10 w-10 place-items-center rounded-md border border-border text-primary"><X size={20} /></button></div>
        <div className="mt-9 grid gap-1">{navItems.map((item) => <Link key={item.href} onClick={() => setMobileOpen(false)} href={item.href} className={`rounded-md px-4 py-3 font-bold ${pathname === item.href ? "bg-soft text-brand" : "text-primary hover:bg-soft"}`}>{item.label}</Link>)}</div>
        <ButtonLink href="/contact" onClick={() => setMobileOpen(false)} className="mt-8 w-full">Request Consultation</ButtonLink>
      </motion.div>
    </motion.div> : null}</AnimatePresence>
  </header>;
}
