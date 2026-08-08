import type { MetadataRoute } from "next";
import { insights } from "@/data/site";
export default function sitemap(): MetadataRoute.Sitemap { const routes = ["", "/about", "/smart-logistics", "/reliable-solutions", "/expert-consultation", "/contact", "/insights", ...insights.map((article) => `/insights/${article.slug}`)]; return routes.map((path) => ({ url: `https://www.logismart.sa${path}`, lastModified: new Date() })); }
