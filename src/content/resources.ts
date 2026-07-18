export type Resource = {
  title: string;
  org: string;
  href: string;
  description: string;
};

export type ResourceGroup = { title: string; resources: Resource[] };

/**
 * Curated external library. All links are to real, established organisations.
 * No WeEnable claims are attached to these sources.
 */
export const resourceGroups: ResourceGroup[] = [
  {
    title: "Global reports & data",
    resources: [
      {
        title: "Global report on health equity for persons with disabilities",
        org: "World Health Organization",
        href: "https://www.who.int/publications/i/item/9789240063600",
        description:
          "WHO's landmark report on the 1.3 billion people living with significant disability and the systemic barriers they face.",
      },
      {
        title: "Disability and health — fact sheet",
        org: "World Health Organization",
        href: "https://www.who.int/news-room/fact-sheets/detail/disability-and-health",
        description:
          "Concise, citable global figures on disability prevalence, health inequities, and access.",
      },
      {
        title: "UN Disability and development",
        org: "United Nations (DESA)",
        href: "https://www.un.org/development/desa/disabilities/",
        description:
          "The UN's hub for disability statistics, the CRPD, and the Sustainable Development Goals.",
      },
      {
        title: "Convention on the Rights of Persons with Disabilities",
        org: "United Nations",
        href: "https://www.un.org/development/desa/disabilities/convention-on-the-rights-of-persons-with-disabilities.html",
        description:
          "The international treaty that frames disability as a rights and design issue, not a medical one.",
      },
    ],
  },
  {
    title: "Sports & fitness",
    resources: [
      {
        title: "International Paralympic Committee",
        org: "IPC",
        href: "https://www.paralympic.org/",
        description:
          "Global governing body for the Paralympic movement, para-sport classification, and athlete pathways.",
      },
      {
        title: "Physical activity — fact sheet",
        org: "World Health Organization",
        href: "https://www.who.int/news-room/fact-sheets/detail/physical-activity",
        description:
          "WHO guidance on physical activity, including recommendations for people with disability.",
      },
    ],
  },
  {
    title: "Education",
    resources: [
      {
        title: "Inclusion in education",
        org: "UNESCO",
        href: "https://www.unesco.org/en/inclusion-education",
        description:
          "UNESCO's work on inclusive education and the children still left out of school.",
      },
      {
        title: "Global Education Monitoring Report",
        org: "UNESCO",
        href: "https://www.unesco.org/gem-report/en",
        description:
          "Annual evidence on progress toward inclusive, equitable education worldwide.",
      },
    ],
  },
  {
    title: "Healthcare",
    resources: [
      {
        title: "Ageing and health — fact sheet",
        org: "World Health Organization",
        href: "https://www.who.int/news-room/fact-sheets/detail/ageing-and-health",
        description:
          "Global data on population aging, including the shift to one in six people aged 60+ by 2030.",
      },
      {
        title: "Assistive technology — fact sheet",
        org: "World Health Organization",
        href: "https://www.who.int/news-room/fact-sheets/detail/assistive-technology",
        description:
          "The global need for assistive technology and the access gap — including wheelchairs.",
      },
      {
        title: "Blindness and vision impairment — fact sheet",
        org: "World Health Organization",
        href: "https://www.who.int/news-room/fact-sheets/detail/blindness-and-visual-impairment",
        description:
          "Figures on the 285 million people who are visually impaired and 39 million who are blind.",
      },
    ],
  },
  {
    title: "Employment",
    resources: [
      {
        title: "Disability and work",
        org: "International Labour Organization",
        href: "https://www.ilo.org/topics/disability-and-work",
        description:
          "ILO research and guidance on inclusive employment and closing the disability employment gap.",
      },
      {
        title: "Global Business and Disability Network",
        org: "International Labour Organization",
        href: "https://www.businessanddisability.org/",
        description:
          "A network of employers building disability-inclusive workplaces and hiring pipelines.",
      },
    ],
  },
  {
    title: "Skills & digital accessibility",
    resources: [
      {
        title: "Web Content Accessibility Guidelines (WCAG)",
        org: "W3C Web Accessibility Initiative",
        href: "https://www.w3.org/WAI/standards-guidelines/wcag/",
        description:
          "The testable global standard for digital accessibility — the reference we build and audit against.",
      },
      {
        title: "Introduction to Web Accessibility",
        org: "W3C Web Accessibility Initiative",
        href: "https://www.w3.org/WAI/fundamentals/accessibility-intro/",
        description:
          "A clear starting point for teams learning to design accessible digital products.",
      },
    ],
  },
  {
    title: "Government services by country",
    resources: [
      {
        title: "SG Enable (Singapore)",
        org: "Government of Singapore",
        href: "https://www.sgenable.sg/",
        description:
          "Singapore's focal agency for disability and enabling services, employment, and support.",
      },
      {
        title: "Disability services (United Kingdom)",
        org: "GOV.UK",
        href: "https://www.gov.uk/browse/disabilities",
        description:
          "UK government services and financial support for disabled people and carers.",
      },
      {
        title: "ADA.gov (United States)",
        org: "U.S. Department of Justice",
        href: "https://www.ada.gov/",
        description:
          "Official information on the Americans with Disabilities Act and accessibility rights.",
      },
      {
        title: "Department of Empowerment of Persons with Disabilities (India)",
        org: "Government of India",
        href: "https://depwd.gov.in/",
        description:
          "India's nodal department for disability schemes, entitlements, and services.",
      },
    ],
  },
];
