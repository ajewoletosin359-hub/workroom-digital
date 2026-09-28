// Editable working list — described as tools used, never as
// certifications or "expert in" claims. Update as experience is confirmed.
export const toolGroups = [
  {
    label: "AI",
    note: "Everyday working tools",
    tools: ["OpenAI", "Claude", "Gemini"],
  },
  {
    label: "Automation",
    note: "Connected workflows",
    tools: ["n8n", "Make", "Zapier"],
  },
  {
    label: "Web",
    note: "Fast, maintainable sites",
    tools: ["Next.js", "React", "JavaScript", "TypeScript"],
  },
  {
    label: "SEO",
    note: "Measure what matters",
    tools: ["Google Search Console", "Google Analytics"],
  },
  {
    label: "Content",
    note: "Repeatable creation",
    tools: ["AI video tools", "CapCut", "Canva"],
  },
];

export const processSteps = [
  {
    index: "01",
    title: "Discover",
    text: "Understand the business, audience and bottleneck.",
  },
  {
    index: "02",
    title: "Plan",
    text: "Identify the simplest useful strategy and tools.",
  },
  {
    index: "03",
    title: "Build",
    text: "Create the automation, content system or SEO implementation.",
  },
  {
    index: "04",
    title: "Test",
    text: "Check the workflow, content or website experience.",
  },
  {
    index: "05",
    title: "Optimize",
    text: "Improve the system based on what is working.",
  },
  {
    index: "06",
    title: "Hand over",
    text: "Leave the business with something practical and usable.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

// No verified testimonials — intentionally empty. The reusable
// components/Testimonials.tsx stays in place for future use.
export const testimonials: Testimonial[] = [];

// Working principles shown inside the About section.
export const workingPrinciples = [
  {
    title: "Practical",
    text: "Start with the business problem, not the technology.",
  },
  {
    title: "Simple",
    text: "Use technology where it actually removes friction.",
  },
  {
    title: "Useful",
    text: "Build systems that can be used and improved in the real world.",
  },
];

// Frequently asked questions — honest answers only, no invented pricing.
export const faqs = [
  {
    q: "How do we start?",
    a: "Message me on WhatsApp, email, or the contact form with a few sentences about the problem. We have a short call, and you get a one-page plan: what gets built and how we will judge that it worked.",
  },
  {
    q: "How long does work take?",
    a: "Small automations, videos, and audits typically land within one to two weeks. Larger systems are split into milestones so you see working results early.",
  },
  {
    q: "Do I need technical skills to run what you build?",
    a: "No. Systems are documented and handed over in plain language, built on tools you already use — spreadsheets, inboxes, and off-the-shelf platforms.",
  },
  {
    q: "How much does it cost?",
    a: "It depends on scope. Describe the problem and you will get an honest fixed quote — no retainers full of reports, no surprise line items.",
  },
];
