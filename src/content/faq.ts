export type Faq = { question: string; answer: string };
export type FaqGroup = { title: string; items: Faq[] };

export const faqGroups: FaqGroup[] = [
  {
    title: "For donors",
    items: [
      {
        question: "Where does my money actually go?",
        answer:
          "Every contribution is tracked to the specific program it funds, disability, seniors, caregivers, employment, and the rest. When you give, you choose a program designation, and our real-time impact reporting shows where support goes and what it changes. No middlemen, no vague promises.",
      },
      {
        question: "Is my donation tax-deductible?",
        answer:
          "Tax treatment depends on your country of residence and our registration status there. We provide a receipt for every gift. For specific tax advice, check with a qualified advisor, or email hello@weenable.org and we will tell you what documentation we can provide in your region.",
      },
      {
        question: "Can I cancel or change a monthly gift?",
        answer:
          "Yes, at any time, with no friction. Monthly giving is designed to be fully under your control, you can pause, change the amount, or cancel from your donor portal or by emailing us. We never make you call to leave.",
      },
      {
        question: "Will I see the impact of my giving?",
        answer:
          "Yes. Donors receive program-level impact reporting, and our annual Impact Report publishes program-by-program results and financials, including what did not work. We hold ourselves to the same transparency standard we ask of our partners.",
      },
      {
        question: "What is the difference between one-time and monthly giving?",
        answer:
          "One-time gifts fund immediate needs; monthly gifts let us plan and sustain programs with confidence. Both are tracked to the program you choose. Monthly giving is the single most useful thing an individual supporter can do, because it makes the work predictable.",
      },
    ],
  },
  {
    title: "For volunteers",
    items: [
      {
        question: "How much time do I need to commit?",
        answer:
          "As little or as much as you want. We offer everything from remote micro-tasks that take minutes to skills-based projects that run over weeks. Our matching starts from your availability, not from a fixed quota.",
      },
      {
        question: "Can I volunteer remotely?",
        answer:
          "Yes. A large share of our volunteering is fully remote, accessibility testing, mentorship, translation, design, and micro-tasks. Where you are does not limit how you can help.",
      },
      {
        question: "How does the matching process work?",
        answer:
          "You complete a short profile, about five minutes, no résumé required, telling us what you are good at and when you are free. Our matching connects your skills and time to the roles and communities that need them most, and you start contributing. No long onboarding.",
      },
      {
        question: "Do I need a background in disability or aging work?",
        answer:
          "No. We hire and match for skills and willingness, not for a specific background. Whether you are an engineer, a teacher, a designer, or simply someone with time and patience, there is a role where you are needed.",
      },
    ],
  },
  {
    title: "Partners & general",
    items: [
      {
        question: "What changed when Creating Abilities became WeEnable?",
        answer:
          "The mission grew. Creating Abilities helped individuals adapt to a world with barriers. WeEnable redesigns the world so the barriers stop existing. Every program now aims to prove a model that governments, companies, and communities can adopt at scale. Creating Abilities, the founding adaptive-sports work, continues as the founding program inside WeEnable.",
      },
      {
        question: "How do government partnerships work?",
        answer:
          "We work with national and public-sector agencies on aging and disability inclusion, through independent research, program design and delivery, accessibility standards and certification, and independent monitoring and evaluation. The output is evidence, not just a thank-you letter. Governments can start a conversation at partners@weenable.org.",
      },
      {
        question: "What do corporate partners actually get?",
        answer:
          "A credible mandate, access to overlooked talent, and measurable, reportable impact. Partnerships range from employee volunteering and awareness (Ally), to program co-funding and hiring pipelines with quarterly reporting (Champion), to co-designed programs and joint public commitments (Founding Partner).",
      },
      {
        question: "How do I reach the press team?",
        answer:
          "Email press@weenable.org. We can provide our media kit, brand assets, spokespeople, and program data. We do not put our name to endorsements or partnerships that are not confirmed.",
      },
      {
        question: "Is the WeEnable website accessible?",
        answer:
          "That is the point. We target WCAG 2.2 AA across every page, with AAA where content allows, keyboard operability, screen-reader structure, sufficient contrast, resizable text, and reduced-motion support. If you hit a barrier, tell us at accessibility@weenable.org and we will fix it.",
      },
      {
        question: "How can I get help from a WeEnable program?",
        answer:
          "Tell us where the barrier is. Reach out through our contact page or email hello@weenable.org, and we will point you to the right program or partner. If we cannot help directly, we will try to connect you with someone who can.",
      },
    ],
  },
];

export const allFaqs: Faq[] = faqGroups.flatMap((g) => g.items);
