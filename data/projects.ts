export type ProjectCategory = "automation" | "video" | "seo";

export type Project = {
  slug: string;
  index: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  /** True until replaced with real, approved client work. */
  concept: boolean;
  summary: string;
  role: string;
  timeline: string;
  tools: string[];
  problem: string;
  approach: string;
  solution: string;
  outcome: string;
  mediaLabel: string;
  mediaKind: "workflow" | "video" | "seo" | "image" | "doc";
  layout: "split-left" | "split-right" | "full";
  /** Real video file served from /public — renders a player instead of a placeholder. */
  videoSrc?: string;
  /** Real screenshot — rendered with next/image. */
  imageSrc?: { src: string; width: number; height: number; alt: string };
  /** Real screenshot gallery — rendered as captioned frames. */
  images?: { src: string; width: number; height: number; alt: string; caption: string }[];
  /** Real document — rendered as a view/download card. */
  docSrc?: { src: string; title: string; meta: string };
};

const finishedPiece =
  "Finished portfolio piece — presented as the work itself, with no client metrics claimed.";

export const projects: Project[] = [
  {
    slug: "tiktok-to-reels-automation",
    index: "01",
    title: "TikTok-to-Instagram Content Automation",
    category: "automation",
    categoryLabel: "AI Automation",
    concept: false,
    summary:
      "An automated content workflow that takes TikTok video links submitted through Telegram, downloads and logs the videos, then schedules them for Instagram Reels with AI-generated captions and hashtags.",
    role: "Design & build — workflow, integrations, scheduling",
    timeline: "Under 1 week",
    tools: ["Telegram", "Instagram Reels", "AI captions & hashtags"],
    problem:
      "Repurposing short-form content means manually handling every publishing step — downloading, logging, captioning, scheduling — for each video.",
    approach:
      "Let creators submit TikTok links where they already chat (Telegram), then automate everything downstream: download, log, caption, schedule.",
    solution:
      "A connected workflow: Telegram intake → download & log → AI-generated captions and hashtags → scheduled Instagram Reels publishing.",
    outcome: finishedPiece,
    mediaLabel: "Content automation walkthrough",
    mediaKind: "video",
    layout: "split-left",
    videoSrc: "/automation/tiktok-reels.mp4",
  },
  {
    slug: "ai-lead-outreach-followup",
    index: "02",
    title: "AI-Powered Lead Outreach & Follow-Up",
    category: "automation",
    categoryLabel: "AI Automation",
    concept: false,
    summary:
      "An AI-assisted sales outreach workflow that reads leads from a spreadsheet, determines the outreach stage, generates personalized first-touch and follow-up emails, sends them through Gmail and tracks every action in Google Sheets.",
    role: "Design & build — workflow, AI email generation, tracking",
    timeline: "1-2 weeks",
    tools: ["Google Sheets", "Gmail", "AI email generation"],
    problem:
      "Prospecting eats the week: reading lead lists, deciding who gets what message, writing each email, remembering every follow-up.",
    approach:
      "Keep the spreadsheet as the source of truth, then let the workflow decide the stage and draft the message — humans approve, the system sends and logs.",
    solution:
      "Stage-aware outreach: spreadsheet leads → AI-personalized first-touch and follow-up emails via Gmail → every action tracked back in Sheets.",
    outcome: finishedPiece,
    mediaLabel: "Outreach workflow screenshot",
    mediaKind: "image",
    layout: "split-right",
    imageSrc: {
      src: "/automation/lead-outreach.png",
      width: 1366,
      height: 629,
      alt: "Screenshot of the AI lead outreach and follow-up workflow",
    },
  },
  {
    slug: "ai-real-estate-deal-analyzer",
    index: "03",
    title: "AI Real Estate Deal Analyzer",
    category: "automation",
    categoryLabel: "AI Automation",
    concept: false,
    summary:
      "An automated real-estate investment workflow that captures new property opportunities, validates and calculates deal information, checks for duplicates, runs an AI investment analysis and generates an investment report.",
    role: "Design & build — workflow, validation, AI analysis",
    timeline: "Under 1 week",
    tools: ["Deal intake", "Validation & calculations", "AI investment analysis"],
    problem:
      "Investors and teams handling multiple opportunities lose deals in manual validation — duplicate entries, inconsistent calculations, slow analysis.",
    approach:
      "Standardize every opportunity the moment it arrives: validate, calculate, dedupe, then let AI do the first-pass investment analysis.",
    solution:
      "Capture → validate & calculate → duplicate check → AI investment analysis → recorded deal history with a generated investment report.",
    outcome: finishedPiece,
    mediaLabel: "Deal analyzer workflow screenshot",
    mediaKind: "image",
    layout: "split-left",
    imageSrc: {
      src: "/automation/deal-analyzer.png",
      width: 1366,
      height: 683,
      alt: "Screenshot of the AI real estate deal analyzer workflow",
    },
  },
  {
    slug: "ai-investment-deal-screening",
    index: "04",
    title: "AI Investment Deal Screening",
    category: "automation",
    categoryLabel: "AI Automation",
    concept: false,
    summary:
      "An AI-powered deal-screening system that collects opportunities from emails or web forms, extracts key business information, evaluates each against defined investment criteria and classifies deals as PASS, REVIEW or REJECT.",
    role: "Design & build — intake, criteria evaluation, alerts",
    timeline: "1-2 weeks",
    tools: ["Email & web forms", "Google Sheets", "Telegram alerts"],
    problem:
      "Every opportunity looks worth a meeting until it isn't — teams burn hours reading deals that never fit their criteria.",
    approach:
      "Define the criteria once, then screen everything against them automatically: extract, evaluate, classify, and only alert humans about qualified deals.",
    solution:
      "Intake from email/forms → information extraction → criteria-based PASS / REVIEW / REJECT classification → Sheets log → Telegram alerts for qualified opportunities.",
    outcome: finishedPiece,
    mediaLabel: "Deal screening documentation",
    mediaKind: "doc",
    layout: "split-right",
    docSrc: {
      src: "/automation/deal-screening.pdf",
      title: "Deal screening — workflow documentation",
      meta: "PDF · opens in browser",
    },
  },
  {
    slug: "ai-reddit-brand-monitoring",
    index: "05",
    title: "AI Reddit Brand Monitoring & Engagement",
    category: "automation",
    categoryLabel: "AI Automation",
    concept: false,
    summary:
      "An automated Reddit monitoring system that searches configured brand mentions, analyzes sentiment, relevance and engagement potential, generates context-aware responses and sends a daily activity summary to Slack.",
    role: "Design & build — monitoring, sentiment analysis, reporting",
    timeline: "Under 1 week",
    tools: ["Reddit", "AI sentiment analysis", "Slack"],
    problem:
      "Brand conversations on Reddit move fast — by the time a team notices a thread, the moment to respond helpfully has passed.",
    approach:
      "Watch continuously, judge carefully: monitor mentions, score each for sentiment and engagement potential, respond where it counts, summarize daily.",
    solution:
      "Mention monitoring → sentiment & relevance analysis → context-aware responses published automatically → logged reporting → daily Slack summary.",
    outcome: finishedPiece,
    mediaLabel: "Brand monitoring documentation",
    mediaKind: "doc",
    layout: "split-left",
    docSrc: {
      src: "/automation/reddit-monitoring.pdf",
      title: "Brand monitoring — workflow documentation",
      meta: "PDF · opens in browser",
    },
  },
  {
    slug: "local-search-growth",
    index: "06",
    title: "SEO Audit: Health & Findings",
    category: "seo",
    categoryLabel: "SEO",
    concept: false,
    summary:
      "A two-stage SEO audit of an example website — first the overall site health (technical issues, performance, metadata, links, images, keyword opportunities), then detailed findings across technical, on-page and content work with recommended actions.",
    role: "Audit & analysis — technical review, findings, recommendations",
    timeline: "Under 1 week",
    tools: ["SEO audit", "Technical SEO", "On-page analysis"],
    problem:
      "Without a structured audit, site issues hide in plain sight — broken links, slow pages, missing metadata and thin content all drag search performance down at once.",
    approach:
      "Audit in two passes: first measure overall health to see the full picture, then break findings into technical, on-page and content opportunities with concrete recommended actions.",
    solution:
      "An overview report covering health, speed, metadata, links, images and keywords — followed by detailed findings with actions like fixing broken links, improving speed, optimizing metadata and strengthening internal linking.",
    outcome:
      "Finished portfolio piece — a sample audit presented as the work itself. No traffic or ranking results are claimed or implied.",
    mediaLabel: "Audit screenshots",
    mediaKind: "seo",
    layout: "full",
    images: [
      {
        src: "/seo/audit-overview.webp",
        width: 1536,
        height: 1024,
        alt: "SEO audit overview report showing overall site health",
        caption: "01 — Audit overview: site health at a glance",
      },
      {
        src: "/seo/audit-findings.webp",
        width: 1536,
        height: 1024,
        alt: "Detailed SEO findings across technical, on-page and content areas",
        caption: "02 — Detailed findings with recommended actions",
      },
    ],
  },
];

export const categories = [
  { id: "all", label: "All" },
  { id: "automation", label: "AI Automation" },
  { id: "video", label: "AI Video" },
  { id: "seo", label: "SEO" },
] as const;
