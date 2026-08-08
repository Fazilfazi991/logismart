import { Boxes, ChartNoAxesCombined, ShieldCheck, Plane, Truck, FileCheck2, Warehouse, PackageCheck, Forklift, Route, Eye, Handshake, BadgeCheck, UsersRound, Wrench, Rows3 } from "lucide-react";

export const contactDetails = {
  address: "King Khalid Street, Al Tubayshi District, Dammam, Saudi Arabia",
  phonePrimary: "+966 50 296 4915",
  phoneSecondary: "+966 55 781 8795",
  email: "support@logismart.sa",
  website: "https://www.logismart.sa"
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Smart Logistics", href: "/smart-logistics" },
  { label: "Reliable Solutions", href: "/reliable-solutions" },
  { label: "Expert Consultation", href: "/expert-consultation" },
  { label: "Contact Us", href: "/contact" }
];

export const coreSolutions = [
  {
    title: "Smart Logistics",
    href: "/smart-logistics",
    description: "Technology-enabled, end-to-end logistics services covering freight forwarding, transportation, customs clearance, warehousing, packing, moving, and equipment rental.",
    image: "/images/logistics/14_quote_team_variant_2.png",
    icon: Boxes
  },
  {
    title: "Reliable Solutions",
    href: "/reliable-solutions",
    description: "Dependable logistics operations built around consistent service quality, on-time delivery, accurate processes, rapid response, and reliable performance.",
    image: "/images/logistics/17_testimonial_worker_variant_2.png",
    icon: ShieldCheck
  },
  {
    title: "Expert Consultation",
    href: "/expert-consultation",
    description: "Professional logistics advisory services for supply chain optimization, warehouse planning, cost reduction, compliance, and technology-driven transformation.",
    image: "/images/logistics/19_smart_logistics_blog_variant_2.png",
    icon: ChartNoAxesCombined
  }
];

export const services = [
  { slug: "freight-forwarding", title: "Freight Forwarding", description: "Air and sea freight solutions with optimized routing, shipment visibility, documentation support, and international network coordination.", icon: Plane, points: ["Seamless international cargo movement", "Optimized routing and real-time shipment visibility", "Regulatory compliance and reduced transit risks", "Integrated tracking systems and an international logistics network"] },
  { slug: "land-transportation", title: "Land Transportation", description: "Kingdom-wide FTL and LTL transportation with secure handling, GPS-enabled movement, and timely delivery.", icon: Truck, points: ["Kingdom-wide FTL and LTL transportation", "Faster, cost-effective movement with secure handling", "Timely delivery and compliance with Saudi transportation regulations"] },
  { slug: "customs-clearance", title: "Customs Clearance", description: "Import and export clearance, documentation processing, regulatory compliance, and smooth cargo movement across borders.", icon: FileCheck2, points: ["Import and export documentation", "Local regulatory compliance", "Reduced customs delays and penalty risk", "Smooth cross-border cargo movement"] },
  { slug: "warehousing-3pl", title: "Warehousing and 3PL", description: "Modern storage facilities, WMS-supported inventory control, real-time visibility, and flexible storage options.", icon: Warehouse, points: ["Real-time inventory tracking and warehouse management systems", "Automated inventory control and demand forecasting", "Palletized, bulk, and racked storage", "Temperature-controlled, frozen, chilled, and chemical-compliant storage"] },
  { slug: "packing-moving", title: "Packing and Moving", description: "Industrial and export packing, office relocation, household relocation, and professional loading and unloading.", icon: PackageCheck, points: ["Industrial and export packing", "Household and office relocation", "Disassembly, reinstallation, and professional loading", "Damage-free handling from start to finish"] },
  { slug: "equipment-rental", title: "Equipment Rental", description: "Forklifts, cranes, manlifts, warehouse equipment, and material-handling equipment for short- and long-term rental.", icon: Forklift, points: ["Forklifts, cranes, manlifts, and warehouse equipment", "Material handling equipment for short- and long-term rental", "Safety-compliant and well-maintained fleet"] },
  { slug: "equipment-maintenance-amc", title: "Equipment Maintenance / AMC", description: "Planned and responsive maintenance solutions to keep logistics and operational equipment performing reliably.", icon: Wrench, points: ["Preventive maintenance and routine inspection", "Breakdown and corrective maintenance", "Mechanical, electrical, and hydraulic servicing", "Emergency breakdown support", "Maintenance reports and service records", "Spare parts replacement as per approval"] },
  { slug: "warehouse-racking", title: "Warehouse Racking Design & Installation Services", description: "Space-efficient warehouse racking solutions designed, supplied, and installed around operational requirements.", icon: Rows3, points: ["Warehouse layout and racking design", "Supply and installation of pallet racking systems", "Selective, drive-in, and heavy-duty racking solutions", "Load capacity and space optimization", "Safety protection and rack accessories", "Installation, inspection, and handover"] }
] as const;

export const advantageCards = [
  { title: "Nationwide Network", description: "Logistics support designed for operations across Saudi Arabia.", icon: Route },
  { title: "Real-Time Visibility", description: "Improved shipment, warehouse, and inventory visibility.", icon: Eye },
  { title: "Reliable Reach", description: "Consistent and dependable logistics execution.", icon: Handshake },
  { title: "Cost-Efficient Solutions", description: "Solutions designed to improve performance and control operating costs.", icon: ChartNoAxesCombined },
  { title: "Secure Handling", description: "Professional processes that reduce risks and protect goods.", icon: BadgeCheck },
  { title: "Customer-Focused", description: "Flexible service models designed around business requirements.", icon: UsersRound }
];

export const insights = [
  { slug: "technology-transforming-modern-logistics", title: "How Technology Is Transforming Modern Logistics", description: "Explore how real-time tracking, warehouse systems, automation, and data analytics improve visibility and operational performance.", category: "Smart Logistics", image: "/images/logistics/19_smart_logistics_blog_variant_2.png", content: ["Real-time information helps logistics teams coordinate movement, inventory, and customer communication with greater clarity.", "Warehouse systems, automation, and data-led planning can support more responsive operations and better visibility across the supply chain."] },
  { slug: "building-reliable-logistics-operations", title: "Building More Reliable Logistics Operations", description: "Learn how standardized processes, accurate documentation, and proactive planning help reduce disruption and improve service quality.", category: "Reliable Solutions", image: "/images/logistics/20_sustainable_shipping_blog_variant_2.png", content: ["Reliable operations begin with clear processes, accurate documentation, and consistent handling at every stage of a shipment.", "Proactive planning helps teams identify dependencies early and maintain dependable service when requirements change."] },
  { slug: "expert-consultation-reduces-supply-chain-costs", title: "How Expert Consultation Reduces Supply Chain Costs", description: "Discover how strategic planning, warehouse optimization, and transportation analysis can improve efficiency and reduce logistics costs.", category: "Expert Consultation", image: "/images/logistics/21_global_freight_blog_variant_2.png", content: ["A focused review of transport, warehousing, and process design can reveal practical opportunities to improve operational efficiency.", "Consultation brings planning and implementation into the same conversation, helping businesses make decisions with a clearer operational view."] }
] as const;

export const reliabilityPoints = [
  "Consistent service quality", "Minimal disruptions", "On-time delivery", "Dependable operations", "Accurate processes", "Efficient systems", "Quick issue resolution", "Reduced operational risk", "Data-driven decision-making", "Customer satisfaction", "Long-term business support"
];

export const consultationPoints = [
  "Strategic supply chain design", "Warehouse layout planning", "Warehouse process improvement", "Transportation network optimization", "Inventory optimization", "Cost reduction strategies", "Performance enhancement", "Compliance with local regulations", "Technology-driven logistics solutions", "WMS, TMS, and automation planning", "Distribution network design", "Identification and development of new logistics facilities"
];
