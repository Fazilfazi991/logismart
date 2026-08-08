import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { Footer } from "@/components/home";
import { Header } from "@/components/header";
import { insights } from "@/data/site";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return insights.map((article) => ({ slug: article.slug })); }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = insights.find((item) => item.slug === slug);
  if (!article) return {};
  return { title: article.title, description: article.description, alternates: { canonical: `/insights/${article.slug}` }, openGraph: { title: article.title, description: article.description, images: [article.image] } };
}

export default async function InsightArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = insights.find((item) => item.slug === slug);
  if (!article) notFound();
  return <><Header /><main><article className="section-pad bg-white"><div className="container-shell max-w-4xl"><Link href="/insights" className="inline-flex items-center gap-2 text-sm font-extrabold text-brand transition hover:text-primary"><ArrowLeft size={16} />Back to Insights</Link><p className="mt-10 text-xs font-extrabold tracking-[0.18em] text-brand">{article.category}</p><h1 className="mt-4 text-4xl font-extrabold text-primary md:text-6xl">{article.title}</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-text-muted">{article.description}</p><div className="relative mt-10 aspect-[1.7/1] overflow-hidden rounded-[16px] bg-soft"><Image src={article.image} alt="" fill sizes="(min-width:1024px) 860px, 100vw" className="object-cover" priority /></div><div className="mt-10 grid max-w-3xl gap-5 text-base leading-8 text-text-muted">{article.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div></article></main><Footer /></>;
}
