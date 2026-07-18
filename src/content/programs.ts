export type ProgramCta = {
  kind: "donate" | "volunteer" | "partner";
  label: string;
  href: string;
};

export type Program = {
  slug: string;
  number: string; // "01".."08"
  /** Short label used in nav/rows, e.g. "People with Disabilities". */
  label: string;
  /** Program headline / tagline, e.g. "Independence, engineered". */
  tagline: string;
  /** One-paragraph description for the programs overview row. */
  summary: string;
  /** Three service bullets (overview). */
  bullets: string[];
  /** The statistic this program answers. */
  barrier: { stat: string; body: string; source: string };
  /** Expanded services for the detail page. */
  whatWeDo: { title: string; body: string }[];
  /** A relevant stat block for the detail page. */
  stat: { value: string; label: string; source: string };
  relatedStorySlug: string;
  cta: ProgramCta;
  accent: "coral" | "teal";
  image: { src: string; alt: string };
};

export const programs: Program[] = [
  {
    slug: "people-with-disabilities",
    number: "01",
    label: "People with Disabilities",
    tagline: "Independence, engineered",
    summary:
      "We treat exclusion as a design problem with a solution. Access to the right assistive device, training to use it, and a path into work turn a diagnosis back into an ordinary life with ordinary choices.",
    bullets: [
      "Assistive device access and training",
      "Inclusive employment placement",
      "Independent living skills coaching",
    ],
    barrier: {
      stat: "1.3B",
      body: "people live with a significant disability — roughly one in six of us, at some point in life. Most barriers they meet were built, not born.",
      source: "World Health Organization",
    },
    whatWeDo: [
      {
        title: "Assistive device access and training",
        body: "A wheelchair, a screen reader, or a prosthetic is only useful in the hands of someone who has one and knows how to use it. We fund and fit devices, then train the person until the tool disappears into daily life. Of the 75 million people who need a wheelchair, only about 1 in 10 has access to one; we work to close that gap one fitting at a time.",
      },
      {
        title: "Inclusive employment placement",
        body: "Skills are common; access to employers is not. We coach candidates, audit workplaces for real accessibility, and place people in roles that fit their ability — not roles invented out of pity. The measure of success is a paycheck and a manager who forgets the accommodation was ever unusual.",
      },
      {
        title: "Independent living skills coaching",
        body: "Independence is a set of learnable skills: navigating transit, managing a home, handling money and health systems. We coach these directly, so support fades as confidence grows. The goal is fewer touchpoints with us over time, not more.",
      },
    ],
    stat: {
      value: "1 in 10",
      label:
        "is roughly how many of the 75 million people who need a wheelchair actually have access to one.",
      source: "World Health Organization",
    },
    relatedStorySlug: "ananya",
    cta: {
      kind: "donate",
      label: "Fund a device and training",
      href: "/donate?program=people-with-disabilities",
    },
    accent: "coral",
    image: {
      src: "/images/program-disabilities.jpg",
      alt: "A person using a powered wheelchair moving confidently through a bright public space.",
    },
  },
  {
    slug: "adaptive-sports",
    number: "02",
    label: "Adaptive Sports & Recreation",
    tagline: "Where the movement began",
    summary:
      "Our first program was not a clinic. It was a playing field — competition for people the world assumed could not compete. Adaptive sport builds the strength, community, and public visibility that everything else stands on.",
    bullets: [
      "Parasports leagues and coaching",
      "Adaptive equipment access and fitting",
      "School and community recreation programs",
    ],
    barrier: {
      stat: "9/10",
      body: "children with disabilities in the developing world are still out of school — and out of the sport, play, and teamwork that build confidence early.",
      source: "UNESCO",
    },
    whatWeDo: [
      {
        title: "Parasports leagues and coaching",
        body: "We run and support leagues across wheelchair basketball, para-athletics, seated volleyball and more, with coaches trained in adaptive technique. Competition is the point: it replaces the question of whether someone can with the question of how well.",
      },
      {
        title: "Adaptive equipment access and fitting",
        body: "Sport chairs, racing blades, and specialised gear are expensive and rarely covered. We source, fit, and maintain equipment so cost is never the reason a talented athlete stays on the sidelines.",
      },
      {
        title: "School and community recreation programs",
        body: "Inclusion starts young. We bring adaptive recreation into schools and community centres so disabled and non-disabled children play together as a matter of course, not as a special event.",
      },
    ],
    stat: {
      value: "9/10",
      label:
        "children with disabilities in the developing world are out of school — the same children most often left out of sport.",
      source: "UNESCO",
    },
    relatedStorySlug: "diego",
    cta: {
      kind: "volunteer",
      label: "Coach or support a league",
      href: "/volunteer",
    },
    accent: "coral",
    image: {
      src: "/images/program-sports.jpg",
      alt: "A wheelchair basketball player mid-game, reaching for the ball with intense focus.",
    },
  },
  {
    slug: "senior-citizens",
    number: "03",
    label: "Senior Citizens",
    tagline: "Aging without isolation",
    summary:
      "Longer lives should not mean lonelier ones. We help older adults stay connected, safe online, and in control of their own health — so aging is a stage of life, not a slow disappearance from it.",
    bullets: [
      "Digital literacy and scam-safety training",
      "Telehealth navigation support",
      "Community and companionship circles",
    ],
    barrier: {
      stat: "1 in 6",
      body: "people will be aged 60 or over by 2030. Systems built for a younger world leave many of them isolated, offline, and exposed to fraud.",
      source: "World Health Organization",
    },
    whatWeDo: [
      {
        title: "Digital literacy and scam-safety training",
        body: "A video call, a banking app, a government portal — these are lifelines, and they are also where older adults are targeted by fraud. We teach the skills and the warning signs together, patiently, until confidence replaces fear. Teaching a video call is teaching independence.",
      },
      {
        title: "Telehealth navigation support",
        body: "Healthcare has moved online faster than many seniors were shown how to follow. We guide older adults through booking, joining, and following up on telehealth appointments, so a missed click never becomes a missed diagnosis.",
      },
      {
        title: "Community and companionship circles",
        body: "Isolation is a health risk with measurable effects. We convene regular in-person and virtual circles that give older adults company, purpose, and a reason to stay engaged — the simplest intervention we run, and one of the most effective.",
      },
    ],
    stat: {
      value: "1 in 6",
      label:
        "people worldwide will be 60 or older by 2030, up from 1 in 11 in 2019.",
      source: "World Health Organization",
    },
    relatedStorySlug: "grace",
    cta: {
      kind: "donate",
      label: "Sponsor a digital literacy course",
      href: "/donate?program=senior-citizens",
    },
    accent: "teal",
    image: {
      src: "/images/program-seniors.jpg",
      alt: "An older adult confidently using a tablet, focused and at ease with the device.",
    },
  },
  {
    slug: "caregivers",
    number: "04",
    label: "Caregivers",
    tagline: "Support for the ones who support",
    summary:
      "Behind most people receiving care is someone giving it, often unpaid and unseen. We support caregivers directly, because a system that burns out its carers cannot call itself a care system.",
    bullets: [
      "Respite care coordination",
      "Mental wellbeing counselling",
      "Peer caregiver networks",
    ],
    barrier: {
      stat: "Millions",
      body: "of family caregivers provide unpaid care every day, absorbing physical, financial, and emotional strain that no one is measuring — until they can no longer continue.",
      source: "World Health Organization",
    },
    whatWeDo: [
      {
        title: "Respite care coordination",
        body: "Everyone needs a break; caregivers rarely get one. We coordinate trusted respite cover so carers can rest, work, or simply have an hour that is theirs — often the difference between sustainable care and collapse.",
      },
      {
        title: "Mental wellbeing counselling",
        body: "Caregiving carries a mental health load that goes largely unspoken. We provide access to counselling built around a carer's real schedule, treating their wellbeing as essential infrastructure, not an afterthought.",
      },
      {
        title: "Peer caregiver networks",
        body: "No one understands a caregiver like another caregiver. We build peer networks where practical knowledge and honest support are exchanged freely, so no one carries it alone.",
      },
    ],
    stat: {
      value: "2 hrs",
      label:
        '"Respite care gave me back two hours a week that were just mine." — a caregiver in São Paulo.',
      source: "WeEnable program participant",
    },
    relatedStorySlug: "marisa",
    cta: {
      kind: "volunteer",
      label: "Support a caregiver network",
      href: "/volunteer",
    },
    accent: "coral",
    image: {
      src: "/images/program-caregivers.jpg",
      alt: "A quiet moment between a caregiver and the person they support, hands resting together.",
    },
  },
  {
    slug: "employment-livelihoods",
    number: "05",
    label: "Employment & Livelihoods",
    tagline: "Skills, matched to opportunity",
    summary:
      "Ability is abundant; access to work is not. We build the training, the employer relationships, and the workplace changes that turn capability into a livelihood.",
    bullets: [
      "Skills training and certification",
      "Inclusive employer partnerships",
      "Workplace accessibility audits",
    ],
    barrier: {
      stat: "2×",
      body: "people with disabilities are roughly twice as likely to be unemployed — a gap driven by barriers in hiring and workplaces, not by ability.",
      source: "World Health Organization",
    },
    whatWeDo: [
      {
        title: "Skills training and certification",
        body: "We run training that ends in a recognised certification, not just a certificate of attendance. Programs are shaped by what employers are actually hiring for, so training leads to offers rather than to another course.",
      },
      {
        title: "Inclusive employer partnerships",
        body: "We build long-term relationships with employers who commit to inclusive hiring pipelines — and we hold them to measurable outcomes. A pilot in Toronto that redesigned a logistics hiring process is the model we scale.",
      },
      {
        title: "Workplace accessibility audits",
        body: "A job offer is meaningless if the workplace excludes the person on day one. We audit physical spaces, tools, and processes, then help employers fix what we find — before the first shift, not after the first complaint.",
      },
    ],
    stat: {
      value: "2×",
      label:
        "the unemployment rate for people with disabilities in many economies, driven by barriers rather than ability.",
      source: "World Health Organization",
    },
    relatedStorySlug: "ananya",
    cta: {
      kind: "partner",
      label: "Build a hiring pipeline",
      href: "/partnerships#corporate",
    },
    accent: "teal",
    image: {
      src: "/images/program-employment.jpg",
      alt: "A diverse team collaborating in an inclusive, accessible open-plan workplace.",
    },
  },
  {
    slug: "digital-ai-accessibility",
    number: "06",
    label: "Digital & AI Accessibility",
    tagline: "Interfaces that adapt to people",
    summary:
      "The web was not built for everyone, so we rebuild it. Our technology reads, describes, translates, and scans — turning one accessible interface into a service that reaches millions.",
    bullets: [
      "AI document reader and image describer",
      "Speech and language translation",
      "Accessibility scanning for partner websites",
    ],
    barrier: {
      stat: "285M",
      body: "people are visually impaired and 39 million are blind — for them, most of the digital world is still built as if they were not there.",
      source: "World Health Organization",
    },
    whatWeDo: [
      {
        title: "AI document reader and image describer",
        body: "Our assistant reads documents aloud, describes images, and conveys not just words but intent. Built to respect how people actually read and listen, it turns inaccessible PDFs and images into something usable in seconds.",
      },
      {
        title: "Speech and language translation",
        body: "Real-time translation of language and intent removes two barriers at once — disability and distance. It lets a service designed in one place work for someone in another, in their own words.",
      },
      {
        title: "Accessibility scanning for partner websites",
        body: "We scan partner websites against WCAG standards, flag what fails, and help teams fix it. Access designed in from the first draft is cheaper and better than access bolted on after the complaints start.",
      },
    ],
    stat: {
      value: "285M",
      label: "people are visually impaired worldwide, and 39 million are blind.",
      source: "World Health Organization",
    },
    relatedStorySlug: "chidi",
    cta: {
      kind: "partner",
      label: "Scan your product",
      href: "/partnerships#corporate",
    },
    accent: "teal",
    image: {
      src: "/images/program-digital.jpg",
      alt: "Close-up of hands on a refreshable braille display beside a laptop running a screen reader.",
    },
  },
  {
    slug: "policy-research",
    number: "07",
    label: "Policy & Research",
    tagline: "From goodwill to law",
    summary:
      "Goodwill fades; law endures. We turn evidence into standards, advisory, and legislation, so inclusion outlasts any single program or budget cycle.",
    bullets: [
      "Independent research and impact studies",
      "Government and public-sector advisory",
      "Accessibility standards and certification",
    ],
    barrier: {
      stat: "Policy",
      body: "is where inclusion becomes permanent. Without standards and law, every gain depends on the next well-meaning budget — and every barrier can quietly return.",
      source: "WeEnable",
    },
    whatWeDo: [
      {
        title: "Independent research and impact studies",
        body: "We publish research with a clear method and honest findings — including what did not work. Credible evidence is what lets a government adopt a model with confidence rather than hope.",
      },
      {
        title: "Government and public-sector advisory",
        body: "We advise national agencies on aging and disability inclusion, helping translate policy intent into services people can actually use. A clause on tactile paving adopted in Jakarta is the kind of durable change we aim for.",
      },
      {
        title: "Accessibility standards and certification",
        body: "We help set and certify accessibility standards so that inclusion is measurable and enforceable, not aspirational. A standard that can be audited is a standard that changes behaviour.",
      },
    ],
    stat: {
      value: "1",
      label:
        "clause, well-written, can protect access for an entire city — the multiplier that policy gives every other program.",
      source: "WeEnable",
    },
    relatedStorySlug: "jakarta-tactile-paving",
    cta: {
      kind: "partner",
      label: "Partner on policy",
      href: "/partnerships#government",
    },
    accent: "teal",
    image: {
      src: "/images/program-policy.jpg",
      alt: "A policy roundtable in session, people in discussion around a table with documents.",
    },
  },
  {
    slug: "arts",
    number: "08",
    label: "Arts by Specially-Abled People",
    tagline: "Talent, not tragedy",
    summary:
      "Disabled artists are artists. We represent, exhibit, and sell their work on its merits — replacing the charity frame with a market that takes talent seriously.",
    bullets: [
      "Curated exhibitions and performance showcases",
      "Artist representation and sales support",
      "Studio space and materials access",
    ],
    barrier: {
      stat: "Framing",
      body: "is the barrier here. Work by disabled artists is too often received as inspiration rather than as art — praised, then priced at nothing.",
      source: "WeEnable",
    },
    whatWeDo: [
      {
        title: "Curated exhibitions and performance showcases",
        body: "We curate exhibitions and performances held to the standards of any serious cultural programme. Audiences come for the work, and the artist's story is context, not the whole pitch.",
      },
      {
        title: "Artist representation and sales support",
        body: "We represent artists commercially — pricing, sales, contracts, and rights — so their income reflects their talent. Recognition without a market is a hobby dressed as a career.",
      },
      {
        title: "Studio space and materials access",
        body: "Accessible studio space and materials are often the missing precondition. We provide both, so making the work is never the hardest part of being an artist.",
      },
    ],
    stat: {
      value: "100%",
      label:
        "of sales proceeds are structured to reach the artist — talent paid as talent, not as charity.",
      source: "WeEnable program design",
    },
    relatedStorySlug: "priya",
    cta: {
      kind: "donate",
      label: "Support a studio",
      href: "/donate?program=arts",
    },
    accent: "coral",
    image: {
      src: "/images/program-arts.jpg",
      alt: "An artist at work in a studio, mid-brushstroke on a large canvas.",
    },
  },
];

export function getProgram(slug: string) {
  return programs.find((p) => p.slug === slug);
}

export const programSlugs = programs.map((p) => p.slug);
