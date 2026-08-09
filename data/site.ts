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
  { slug: "technology-transforming-modern-logistics", title: "How Technology Is Transforming Modern Logistics", description: "Explore how real-time tracking, warehouse systems, automation, and data analytics improve visibility and operational performance.", category: "Smart Logistics", image: "/images/smart-logistics/smart-logistics-hero.png" },
  { slug: "building-reliable-logistics-operations", title: "Building More Reliable Logistics Operations", description: "Learn how standardized processes, accurate documentation, and proactive planning help reduce disruption and improve service quality.", category: "Reliable Solutions", image: "/images/reliable-solutions/reliable-solutions-hero.png" },
  { slug: "expert-consultation-reduces-supply-chain-costs", title: "How Expert Consultation Reduces Supply Chain Costs", description: "Discover how strategic planning, warehouse optimization, and transportation analysis can improve efficiency and reduce logistics costs.", category: "Expert Consultation", image: "/images/expert-consultation/expert-consultation-hero.png" }
] as const;

export const reliabilityPoints = [
  "Consistent service quality", "Minimal disruptions", "On-time delivery", "Dependable operations", "Accurate processes", "Efficient systems", "Quick issue resolution", "Reduced operational risk", "Data-driven decision-making", "Customer satisfaction", "Long-term business support"
];

export const consultationPoints = [
  "Strategic supply chain design", "Warehouse layout planning", "Warehouse process improvement", "Transportation network optimization", "Inventory optimization", "Cost reduction strategies", "Performance enhancement", "Compliance with local regulations", "Technology-driven logistics solutions", "WMS, TMS, and automation planning", "Distribution network design", "Identification and development of new logistics facilities"
];

const visualPool = [
  "/images/smart-logistics/freight-forwarding-port.png", "/images/smart-logistics/land-transportation-saudi.png", "/images/smart-logistics/customs-clearance.png", "/images/logistics/04_quote_team_variant_2.png", "/images/logistics/12_suspended_container.png", "/images/logistics/17_testimonial_worker_variant_2.png", "/images/logistics/07_testimonial_worker_variant_1.png", "/images/logistics/05_stacked_containers_variant_1.png"
];

export const serviceDetails = services.map((service, index) => ({ ...service, image: visualPool[index], copy: [
  "Freight forwarding brings air and sea movement, routing, shipment visibility and documentation into one coordinated plan. It supports importers and exporters that need a practical point of control from booking through delivery, while keeping handovers and transit risks visible.",
  "Land transportation connects ports, warehouses, industrial sites and customer locations across the Kingdom. The service is planned around cargo type, timing and handling requirements, with FTL or LTL movements coordinated alongside the wider logistics operation.",
  "Customs clearance depends on accurate preparation long before cargo reaches a border or port. Our process supports document review, import and export formalities, and coordination that helps cargo move forward with fewer avoidable administrative delays.",
  "Warehousing and 3PL turn storage into an operating advantage. From receiving and put-away to inventory visibility and dispatch, the approach can support changing volumes while linking stock decisions to transportation, handling and customer requirements.",
  "Packing and moving protects the condition of goods during relocation, export preparation and site transitions. Each activity is scoped around the cargo, access conditions and destination, with professional loading and handling supporting an orderly handover.",
  "Equipment rental gives operations access to the material-handling capability they need without treating every peak requirement as a permanent asset decision. Suitable equipment can be coordinated around warehouse activity, loading needs and the expected duration of work.",
  "Equipment maintenance and AMC support help keep material-handling and operational equipment ready for use. Planned inspections, responsive correction and documented service records give teams a clearer basis for managing equipment availability and approved repairs.",
  "Warehouse racking design and installation connect storage capacity with safe day-to-day access. Layout, rack selection and installation are considered against load requirements, operational flow and available space so the finished system supports the way a facility actually works."
][index] }));

export const reliabilityDetails = [
  "Clear operating standards help teams deliver the same level of care across recurring movements and handovers.", "Planning dependencies early gives teams more room to respond before a delay becomes a wider disruption.", "Schedules, status checks and practical coordination keep delivery commitments visible throughout execution.", "Defined responsibilities and escalation paths support steady operations when requirements change.", "Accurate documents, inventory records and shipment details reduce avoidable rework and uncertainty.", "Well-organised workflows reduce duplicated effort and make day-to-day decisions easier to manage.", "Fast, informed responses help contain exceptions and keep customers aware of the next practical step.", "Controls around handling, documentation and equipment reduce exposure to preventable operational risk.", "Useful operational data makes patterns, priorities and improvement opportunities easier to see.", "Reliable communication and fulfilment strengthen confidence over the course of an ongoing relationship.", "A dependable operating partner can support planning as business requirements and volumes evolve."
];

export const consultationDetails = [
  "Map supply chain decisions to service levels, operating constraints and practical execution.", "Shape storage, travel paths and work zones around the flow of goods and people.", "Review receiving, put-away, picking and dispatch to reduce friction in daily work.", "Assess routes, delivery patterns and carrier choices to improve network decisions.", "Balance stock availability, working capital and replenishment discipline.", "Identify sources of avoidable spend without separating cost decisions from service needs.", "Use practical KPIs and operating rhythms to focus improvement work.", "Consider local operating requirements as part of early planning and documentation.", "Select technology opportunities that support people, process and usable information.", "Plan WMS, TMS and automation requirements before implementation decisions are made.", "Review where facilities and inventory should sit to support customers and operations.", "Assess requirements for new facilities from flow, capacity and implementation priorities."
];
