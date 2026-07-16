import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { const routes = ["", "/about", "/smart-logistics", "/reliable-solutions", "/expert-consultation", "/contact"]; return routes.map((path) => ({ url: `https://www.logismart.me${path}`, lastModified: new Date() })); }
