export type Service = {
  index: string;
  id: string;
  title: string;
  outcome: string;
  description: string;
  capabilities: string[];
  cta: { label: string; href: string };
};

export const services: Service[] = [
  {
    index: "01",
    id: "automation",
    title: "AI Automation",
    outcome: "Less manual effort on repetitive work.",
    description:
      "Turn repetitive business tasks into connected workflows that run with less manual effort.",
    capabilities: [
      "Workflow automation",
      "AI-assisted processes",
      "Lead workflows",
      "Data collection",
      "CRM workflows",
      "API integrations",
      "Notifications",
      "Follow-ups",
    ],
    cta: { label: "Automate a process", href: "#contact" },
  },
  {
    index: "02",
    id: "video",
    title: "AI Video",
    outcome: "Video content without manual production every time.",
    description:
      "Create useful, engaging video content without making every piece of content a completely manual production.",
    capabilities: [
      "AI-assisted video",
      "Short-form content",
      "Social content",
      "Promotional videos",
      "Content repurposing",
      "Video workflows",
    ],
    cta: { label: "Discuss a video project", href: "#contact" },
  },
  {
    index: "03",
    id: "seo",
    title: "SEO Optimization",
    outcome: "Foundations that help you get discovered.",
    description:
      "Improve the technical, content and search foundations that help small businesses become easier to discover online.",
    capabilities: [
      "Technical SEO",
      "On-page optimization",
      "Keyword research",
      "Content optimization",
      "SEO audits",
      "Search Console analysis",
      "Internal linking",
    ],
    cta: { label: "Improve my visibility", href: "#contact" },
  },
];
