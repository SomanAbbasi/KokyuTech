// ─────────────────────────────────────────────────────────────
// KOKYU TECH — CENTRAL SITE CONFIGURATION
// Change contact/brand details here; the rest of the site reads from this file.
// ─────────────────────────────────────────────────────────────

export const COMPANY = {
  name: "Kokyu Technologies",
  shortName: "KOKYU",
  domain: "kokyutech.com",
  tagline: "Technology should work for your business.",
  positioning:
    "We understand the business problem, engineer the right software system, automate what can be automated, and continuously improve it.",
};

export const EMAIL = "contact@kokyutech.com";
export const MAILTO = `mailto:${EMAIL}`;

export const PHONE = "+913481822987";
export const TEL = `tel:${PHONE}`;

// Social accounts are only rendered if they are verified. Do not add links here
// unless the accounts actually exist.
export const SOCIALS: { label: string; href: string }[] = [];

// ─────────────────────────────────────────────────────────────
// NAVIGATION
// Home sections scroll smoothly; `href` may also point to a route.
// ─────────────────────────────────────────────────────────────
export const SECTION_IDS = {
  services: "services",
  solutions: "solutions",
  work: "work",
  security: "security",
  process: "process",
  why: "why",
  contact: "contact",
} as const;

export const NAV_LINKS = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Security", href: "/#security" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

// ─────────────────────────────────────────────────────────────
// WHAT WE DO — capabilities
// ─────────────────────────────────────────────────────────────
export const CAPABILITIES = [
  {
    id: "AI SYSTEMS",
    title: "AI Systems",
    desc: "AI agents, conversational systems, RAG and intelligent workflows that understand context and act.",
    tags: ["AI Agents", "RAG", "Conversational AI", "Voice"],
  },
  {
    id: "AUTOMATION",
    title: "Automation",
    desc: "Business process automation, email workflows, WhatsApp workflows and API integrations.",
    tags: ["Workflows", "Email", "WhatsApp", "APIs"],
  },
  {
    id: "SOFTWARE",
    title: "Software",
    desc: "Web applications, dashboards, backend systems and SaaS platforms engineered for real use.",
    tags: ["Full Stack", "Backend", "SaaS", "Dashboards"],
  },
  {
    id: "DIGITAL PRODUCTS",
    title: "Digital Products",
    desc: "Websites, customer portals, internal tools and product interfaces with serious engineering behind them.",
    tags: ["Websites", "Portals", "Internal Tools", "Interfaces"],
  },
  {
    id: "BUSINESS SYSTEMS",
    title: "Business Systems",
    desc: "CRM, inventory, workflow management and operational software built around how your business runs.",
    tags: ["CRM", "Inventory", "Workflows", "Operations"],
  },
  {
    id: "SECURITY & COMPLIANCE",
    title: "Security & Compliance",
    desc: "Security workflows, compliance automation and SOC 2 / ISO 27001 readiness systems.",
    tags: ["Compliance", "SOC 2", "ISO 27001", "Audit"],
  },
];

// ─────────────────────────────────────────────────────────────
// CASE STUDIES — real projects only. No invented metrics.
// ─────────────────────────────────────────────────────────────
export interface CaseStudy {
  id: string;
  slug: string;
  category: string;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  problem: string;
  approach: string;
  solution: string;
  features: string[];
  architecture: { title: string; desc: string }[];
  outcome: string;
  preview: "chat" | "pharmacy" | "email" | "food" | "health";
}

export const PROJECTS: CaseStudy[] = [
  {
    id: "01",
    slug: "ai-whatsapp-agent",
    category: "AI Systems",
    name: "Ava — AI WhatsApp Agent",
    tagline: "A WhatsApp AI agent with persistent conversation memory.",
    description:
      "An AI-powered WhatsApp conversational system capable of remembering conversations, processing voice messages, generating responses and interacting with users through persistent conversational memory.",
    tech: ["LangGraph", "Groq", "WhatsApp Cloud API", "Qdrant", "Voice AI"],
    problem:
      "Businesses operate on WhatsApp, but every conversation is manual. Leads wait for replies, follow-ups get missed, and context resets every time a new person opens the chat. A business inbox is not a memory.",
    approach:
      "We built an agentic system — not a scripted chatbot. LangGraph orchestrates stateful conversations, Qdrant provides long-term memory, and the WhatsApp Cloud API is the channel, with voice-message support layered on top.",
    solution:
      "An AI-powered WhatsApp conversational system with persistent memory: it remembers prior conversations, processes voice messages and generates contextual responses for every user.",
    features: [
      "Persistent conversational memory across sessions",
      "Voice message processing and transcription",
      "LangGraph state-machine orchestration",
      "Retrieval-backed answers (RAG)",
      "Multi-session isolation and history",
    ],
    architecture: [
      { title: "CHANNEL", desc: "WhatsApp Cloud API handles inbound messages and voice." },
      { title: "AGENT CORE", desc: "LangGraph graph decides intent, state and next action." },
      { title: "INFERENCE", desc: "Groq provides fast LLM generation and tool calling." },
      { title: "MEMORY", desc: "Qdrant stores conversation vectors for long-term recall." },
      { title: "WRITE-BACK", desc: "Every exchange is persisted back into memory." },
    ],
    outcome:
      "A single channel where customers get consistent, contextual answers — and the business keeps a durable record of every conversation.",
    preview: "chat",
  },
  {
    id: "02",
    slug: "pharmacy-management-system",
    category: "Business Software",
    name: "Pharmacy Management System",
    tagline: "Daily pharmacy operations in one system.",
    description:
      "An end-to-end pharmacy management platform for daily operations, sales, inventory and business workflows.",
    tech: ["Full Stack", "Database", "Inventory", "POS", "Business Automation"],
    problem:
      "Pharmacies juggle sales, stock, expiry tracking and daily paperwork across separate notebooks and tools. Information moves by hand and mistakes are expensive.",
    approach:
      "We mapped the daily operating workflow first — sale, inventory, reorder — then engineered a single application that covers the full loop instead of a stack of isolated tools.",
    solution:
      "An end-to-end pharmacy management platform that handles sales, inventory and the business workflows that keep daily operations running.",
    features: [
      "Point of sale for daily sales",
      "Inventory and stock management",
      "Expiry and stock-level visibility",
      "Operational reporting",
      "Business workflow support",
    ],
    architecture: [
      { title: "SALES", desc: "POS captures every transaction at the counter." },
      { title: "INVENTORY", desc: "Stock levels update with each sale and purchase." },
      { title: "CORE", desc: "The database keeps products, sales and suppliers in one place." },
      { title: "OPERATIONS", desc: "Workflows surface what to reorder and what to monitor." },
    ],
    outcome:
      "Day-to-day operations — sales, stock and business workflows — managed from a single platform instead of scattered records.",
    preview: "pharmacy",
  },
  {
    id: "03",
    slug: "ai-email-automation",
    category: "AI Automation",
    name: "AI Email Automation",
    tagline: "Incoming email, processed automatically.",
    description:
      "An AI-powered workflow system that processes incoming email information and automates repetitive email-based business operations.",
    tech: ["AI", "Automation", "Email", "Workflow"],
    problem:
      "Teams lose hours a day to repetitive email work — reading, classifying, routing and answering similar messages again and again.",
    approach:
      "We treated email as a workflow input. An AI layer reads and classifies incoming mail, then hands each message to the correct automated path.",
    solution:
      "A workflow system where an AI layer processes incoming email, extracts what matters and triggers automated, repetitive operations.",
    features: [
      "Incoming mail processing",
      "AI classification and extraction",
      "Automated actions and routing",
      "Repeatable workflow definitions",
      "Full action logging",
    ],
    architecture: [
      { title: "INBOX", desc: "Incoming mail is captured from the connected mailbox." },
      { title: "AI READ", desc: "The model classifies intent and extracts the key information." },
      { title: "RULES", desc: "Classified mail is routed to the matching workflow." },
      { title: "ACTIONS", desc: "Automated responses and operations run without manual work." },
    ],
    outcome:
      "Repetitive email operations are handled automatically, with every action logged and auditable.",
    preview: "email",
  },
  {
    id: "04",
    slug: "food-ordering-platform",
    category: "Web Application",
    name: "Food Ordering Platform",
    tagline: "Restaurant ordering, end to end.",
    description:
      "A full-stack food ordering platform designed for restaurant ordering and operational workflows.",
    tech: ["Full Stack", "MongoDB", "Ordering", "Restaurant"],
    problem:
      "Restaurants take orders across phone, chat and walk-ins, then manually push them into kitchen and fulfilment workflows — double entry everywhere.",
    approach:
      "We built a full-stack ordering flow where the customer's order is also the restaurant's operational record. One entry, no re-keying.",
    solution:
      "A full-stack digital ordering platform where customers place orders and the restaurant's workflow runs off the same record.",
    features: [
      "Digital menu and ordering",
      "Order lifecycle tracking",
      "Persistent order storage (MongoDB)",
      "Restaurant fulfilment workflows",
      "Responsive customer interface",
    ],
    architecture: [
      { title: "CUSTOMER", desc: "The ordering UI lets customers browse and check out." },
      { title: "ORDER SERVICE", desc: "Orders are validated and recorded immediately." },
      { title: "DATA", desc: "MongoDB persists menus, orders and customer records." },
      { title: "FULFILMENT", desc: "Kitchen and operational workflows follow the order." },
    ],
    outcome:
      "Customers order digitally and the restaurant's operational workflow runs off the same order record.",
    preview: "food",
  },
  {
    id: "05",
    slug: "healthcare-management-system",
    category: "Business Software",
    name: "Healthcare Management System",
    tagline: "Healthcare operations, managed in one place.",
    description:
      "A software platform designed to manage healthcare-related workflows and operations.",
    tech: ["Full Stack", "Workflows", "Records", "Operations"],
    problem:
      "Healthcare workflows are information-dense — appointments, records, staff and operations — and scattered systems make them hard to manage coherently.",
    approach:
      "We designed a platform around the operational workflow: registration, scheduling, records and day-to-day operations in a single coherent system.",
    solution:
      "A centralized software platform that manages healthcare workflows, records and operational processes.",
    features: [
      "Workflow management",
      "Operational and patient records",
      "Process visibility",
      "Centralized operations",
      "Role-based day-to-day use",
    ],
    architecture: [
      { title: "REGISTRATION", desc: "Patients and staff enter the system through registration and scheduling." },
      { title: "RECORDS", desc: "A central records layer holds operational information." },
      { title: "WORKFLOWS", desc: "Operational processes run against the records." },
      { title: "OPERATIONS", desc: "Teams see and manage the whole workflow from one place." },
    ],
    outcome:
      "Healthcare workflows and operations are managed from a single platform instead of disconnected tools.",
    preview: "health",
  },
];

export function getCaseStudy(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}

// ─────────────────────────────────────────────────────────────
// SOLUTIONS / AI + AUTOMATION
// ─────────────────────────────────────────────────────────────
export const ENGINEERING_FLOW = [
  { step: "01", title: "Business Problem", desc: "We start with the real problem, not the technology." },
  { step: "02", title: "Understand Workflow", desc: "We map how the work actually flows through your operation." },
  { step: "03", title: "Design System", desc: "We define the architecture, product and user experience." },
  { step: "04", title: "AI / Automation", desc: "We put AI and automation where they remove real work." },
  { step: "05", title: "Integrations", desc: "We connect your tools, data and APIs into one system." },
  { step: "06", title: "Deploy", desc: "We put the system into real-world use." },
  { step: "07", title: "Improve", desc: "We measure, refine and evolve as the business grows." },
];

// ─────────────────────────────────────────────────────────────
// SECURITY & COMPLIANCE
// ─────────────────────────────────────────────────────────────
export const SECURITY_WORKFLOW = [
  { step: "01", label: "Framework", desc: "Pick the standard — SOC 2, ISO 27001 or internal policy." },
  { step: "02", label: "Controls", desc: "Define the controls the framework requires." },
  { step: "03", label: "Policies", desc: "Maintain versioned policy documents, never stale copies." },
  { step: "04", label: "Owners", desc: "Assign owners to every control and policy." },
  { step: "05", label: "Evidence", desc: "Collect and link evidence as work actually happens." },
  { step: "06", label: "Reviews", desc: "Run recurring reviews with approvals tracked." },
  { step: "07", label: "Audit Ready", desc: "Package everything for audit, on demand." },
];

// ─────────────────────────────────────────────────────────────
// PROCESS — HOW WE WORK
// ─────────────────────────────────────────────────────────────
export const PROCESS_STEPS = [
  { step: "01", title: "Understand", desc: "We start with the actual business problem and workflow." },
  { step: "02", title: "Design", desc: "We define the right product, architecture and user experience." },
  { step: "03", title: "Engineer", desc: "We build the software, AI systems and integrations." },
  { step: "04", title: "Deploy", desc: "We put the system into real-world use." },
  { step: "05", title: "Evolve", desc: "We improve the system as the business grows." },
];

// ─────────────────────────────────────────────────────────────
// WHY KOKYU
// ─────────────────────────────────────────────────────────────
export const DIFFERENTIATORS = [
  {
    id: "01",
    title: "Problem First",
    desc: "We start with the workflow, not the technology. The right system only appears once the problem is understood.",
  },
  {
    id: "02",
    title: "System Thinking",
    desc: "We connect AI, software, APIs and automation into one system — not a stack of disconnected tools.",
  },
  {
    id: "03",
    title: "Built For Real Use",
    desc: "We build production-oriented software rather than demos. It has to survive real workflows and real data.",
  },
  {
    id: "04",
    title: "Evolution",
    desc: "We design systems that can grow with the business, and we keep improving them after launch.",
  },
];

// ─────────────────────────────────────────────────────────────
// PROJECT FORM
// The endpoint is intentionally empty. Connect a real API / email service
// (e.g. a Cloudflare Worker or form backend) by setting PROJECT_INQUIRY_ENDPOINT.
// Until then the form falls back to a pre-filled mailto and a success state.
// ─────────────────────────────────────────────────────────────
export const PROJECT_INQUIRY_ENDPOINT = "";

export const PROJECT_TYPES = [
  "AI Agent",
  "AI Automation",
  "Business Automation",
  "Website",
  "Web Application",
  "Custom Software",
  "SaaS Product",
  "WhatsApp AI",
  "Cybersecurity / Compliance",
  "Other",
];

export const CAPABILITY_TICKER = [
  "AI AGENTS",
  "AUTOMATION",
  "CUSTOM SOFTWARE",
  "API INTEGRATIONS",
  "BUSINESS SYSTEMS",
  "SECURITY & COMPLIANCE",
];
