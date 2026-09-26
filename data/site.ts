export const site = {
  name: "Workroom Digital",
  brandShort: "Workroom Digital",
  // No personal name supplied — brand stays as Sam Logistics.
  role: "AI Automation · AI Video · SEO",
  tagline: "Practical digital systems for small businesses.",
  // No location supplied — location is intentionally omitted from the UI.
  availability: "Available for new projects",
  email: "ajewoletosin359@gmail.com",
  whatsapp: "https://wa.me/2349031413869",
  whatsappLabel: "+234 903 141 3869",
  calendarUrl: "", // optional: e.g. https://cal.com/samlogistics/intro
  resumeUrl: "", // optional: /resume.pdf
  logoText: "WD",
  // Social profiles — only verified, supplied URLs. Never invent any.
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/samuel-ajewole-263434423" },
  ] as { label: string; href: string }[],
  // One-page anchor navigation.
  nav: [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

// Compact positioning band — what Sam Logistics does, no invented numbers.
export const positioning = [
  {
    title: "AI Automation",
    text: "Build systems that reduce repetitive work.",
  },
  {
    title: "AI Video",
    text: "Create scalable content workflows.",
  },
  {
    title: "SEO",
    text: "Make your business easier to discover.",
  },
];
