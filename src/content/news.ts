export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string };

export type Article = {
  slug: string;
  category: string;
  title: string;
  dek: string;
  date: string; // ISO
  dateLabel: string;
  author: string;
  readingTime: string;
  featured?: boolean;
  body: Block[];
};

export const articles: Article[] = [
  {
    slug: "why-we-rebuilt-creating-abilities-into-weenable",
    category: "Movement",
    title: "Why we rebuilt Creating Abilities into WeEnable",
    dek: "The story behind the name, the mission, and what changes for the people we serve.",
    date: "2026-06-30",
    dateLabel: "30 June 2026",
    author: "WeEnable",
    readingTime: "5 min read",
    featured: true,
    body: [
      {
        type: "p",
        text: "We changed our name because our work had already changed. For years we were Creating Abilities, an organisation built to help individuals adapt to a world full of barriers. That work mattered, and it still does. But somewhere along the way the mission outgrew the name. We were no longer only helping people fit a broken world. We were starting to redesign the world so the barriers stopped existing.",
      },
      { type: "h2", text: "The reframe that changed everything" },
      {
        type: "p",
        text: "The single idea underneath this rebrand is simple: these aren't stories about people who can't. They're stories about systems that didn't. A person who uses a wheelchair is not the problem to be solved. The building with only stairs is. A blind developer is not less capable. The inaccessible document is the obstacle. Once you see exclusion as a design failure rather than a personal deficit, the entire theory of change flips. You stop asking the world to feel sorry. You start asking it to build better.",
      },
      {
        type: "p",
        text: "Creating Abilities carried, in its name, a hint of the old frame: the idea that ability is something to be conferred on someone. WeEnable says something different. Ability was already there. What was missing was access. Our job is to remove the barrier between the two.",
      },
      { type: "h2", text: "What actually changes" },
      {
        type: "p",
        text: "For the people in our programs, the change is one of scale and permanence. We are still delivering adaptive sport, employment support, digital access, and the rest. But we are now building each program to prove a model that governments, companies, and communities can adopt at scale. A single job placement helps one person. A hiring process redesigned around ability helps everyone who applies after. A clause in a city's building code protects a whole population of pedestrians. Technology turns one accessible tool into a service that reaches millions.",
      },
      {
        type: "quote",
        text: "We stopped asking the world to feel sorry. We started asking it to build better.",
      },
      { type: "h2", text: "What stays the same" },
      {
        type: "p",
        text: "The founding program remains. WeEnable grew out of adaptive sports — a playing field, not a clinic — and that work is now the founding program inside a larger movement. The dignity of the people we serve remains non-negotiable. And our standard for ourselves remains what it always was: measure honestly, report openly, and treat exclusion as a solvable problem rather than a fact of life.",
      },
      {
        type: "p",
        text: "The name is new. The people are the same. The ambition is larger. Welcome to WeEnable.",
      },
    ],
  },
  {
    slug: "what-makes-an-accessibility-standard-actually-work",
    category: "Research",
    title: "What makes an accessibility standard actually work",
    dek: "A standard that cannot be audited is a wish. Here is what separates the standards that change behaviour from the ones that gather dust.",
    date: "2026-06-12",
    dateLabel: "12 June 2026",
    author: "WeEnable Policy & Research",
    readingTime: "6 min read",
    body: [
      {
        type: "p",
        text: "Every year, new accessibility commitments are announced. Far fewer change anything on the ground. In our research across public and private programs, the difference rarely comes down to ambition. It comes down to whether the standard was written to be measured.",
      },
      { type: "h2", text: "Three properties of a standard that works" },
      {
        type: "p",
        text: "First, it is specific. \"Websites should be accessible\" is a value, not a standard. \"Text contrast must meet a 4.5:1 ratio; every control must be operable by keyboard\" is something an auditor can check and a team can fix. The global reference point here is the Web Content Accessibility Guidelines, which succeed precisely because they are testable.",
      },
      {
        type: "p",
        text: "Second, it is enforceable. A standard with no consequence for non-compliance is advice. The strongest standards attach to procurement, funding, or law — so that meeting them is a condition of doing the work, not a bonus for doing it well.",
      },
      {
        type: "p",
        text: "Third, it is owned. Someone must be accountable for the number. When responsibility is diffuse, compliance drifts. When a named team reports against the standard on a schedule, it holds.",
      },
      { type: "h2", text: "The evidence problem" },
      {
        type: "p",
        text: "Standards need evidence to earn adoption, and evidence is where good intentions most often fail. Self-reported success is not evidence. We publish method alongside findings, including what did not work, because a government adopting a model needs to trust the number more than it needs the number to be flattering.",
      },
      {
        type: "quote",
        text: "A standard that can be audited is a standard that changes behaviour.",
      },
      {
        type: "p",
        text: "The World Health Organization estimates that 1.3 billion people live with a significant disability. A standard that reaches even a fraction of them only matters if it is real on the ground. That is the entire test: not whether the standard is written, but whether, a year later, a person meets fewer barriers because of it.",
      },
    ],
  },
  {
    slug: "inside-a-bengaluru-workplace-built-around-ability",
    category: "Story",
    title: "Inside a Bengaluru workplace built around ability, not around exceptions",
    dek: "What a workplace looks like when accommodation is designed in from the start — and disappears into the ordinary.",
    date: "2026-05-28",
    dateLabel: "28 May 2026",
    author: "WeEnable",
    readingTime: "5 min read",
    body: [
      {
        type: "p",
        text: "The most striking thing about the office is how unremarkable the accessibility is. Nothing announces itself. The input devices are matched to how people type. The lighting and quiet zones are a matter of layout, not of special request. The onboarding briefs a manager once, and then no one talks about it again.",
      },
      {
        type: "p",
        text: "This is what we mean by access by default. In most workplaces, accommodation is a negotiation that begins the moment someone declares a disability — a series of exceptions granted, tracked, and quietly resented. Here, the exceptions were designed out of existence before anyone had to ask.",
      },
      { type: "h2", text: "The audit that started it" },
      {
        type: "p",
        text: "It began with a workplace accessibility audit: a walk through the physical space, the tools, and the hiring process, looking for the points where a capable person would be filtered out or slowed down. The findings were mostly cheap to fix. A different keyboard. Flexible hours. An application form that did not assume a single kind of applicant.",
      },
      {
        type: "quote",
        text: "I never needed anyone to feel sorry for me. I needed a keyboard that understood how I type, and a manager who understood the rest.",
      },
      {
        type: "p",
        text: "That line, from an employee named Ananya, is the whole philosophy in a sentence. The bar was never lowered. The obstacles were removed. Output speaks for itself, and the team has genuinely forgotten there was ever anything to adjust.",
      },
      {
        type: "p",
        text: "People with disabilities are roughly twice as likely to be unemployed, and almost none of that gap is about ability. It is about workplaces built for one kind of body and mind. Rebuild the workplace, and the talent was there the whole time.",
      },
    ],
  },
  {
    slug: "governments-and-a-shared-accessibility-standard",
    category: "Partnerships",
    title: "Three governments, one accessibility standard",
    dek: "When public agencies adopt the same testable standard, access stops being a local favour and becomes shared infrastructure.",
    date: "2026-05-10",
    dateLabel: "10 May 2026",
    author: "WeEnable Partnerships",
    readingTime: "5 min read",
    body: [
      {
        type: "p",
        text: "One of the quieter forms of progress is convergence: separate governments, working on the same problem, choosing to measure it the same way. When public agencies adopt a shared, testable accessibility standard, three things happen at once. Suppliers only have to build to one bar. Auditors can compare like with like. And a citizen who moves between systems meets the same baseline of access wherever they go.",
      },
      { type: "h2", text: "Why a shared standard beats three good ones" },
      {
        type: "p",
        text: "A single agency writing its own excellent standard still creates an island. Vendors treat it as a special case; the cost of compliance stays high; the lessons do not travel. A shared standard turns access into infrastructure — something built once and reused, rather than re-argued in every procurement.",
      },
      {
        type: "p",
        text: "Our role in this is deliberately unglamorous. We bring the evidence, help translate policy intent into language an auditor can check, and support independent monitoring so the standard is real rather than declared. We do not announce partnerships that are not confirmed, and we do not put a government's name to a claim it has not made.",
      },
      {
        type: "quote",
        text: "Access designed in from the first draft is cheaper, and better, than access bolted on after the complaints start.",
      },
      {
        type: "p",
        text: "The prize is durability. Programs depend on budgets, and budgets change. A standard adopted into procurement and law keeps working after the launch event is forgotten — which is exactly the point of doing policy work at all.",
      },
    ],
  },
  {
    slug: "building-an-ai-reader-that-respects-how-people-read",
    category: "Technology",
    title: "Building an AI reader that respects how people actually read",
    dek: "Text-to-speech is easy. Reading with structure, intent, and respect for the listener is the hard, human part.",
    date: "2026-04-22",
    dateLabel: "22 April 2026",
    author: "WeEnable Technology",
    readingTime: "6 min read",
    body: [
      {
        type: "p",
        text: "Converting text to speech is a solved problem. Reading well is not. The gap between the two is where most accessibility tools quietly fail the people who rely on them. A document is not a flat stream of words; it has structure, emphasis, and images that carry meaning. Read it as a monotone list and you have technically provided access while practically providing an ordeal.",
      },
      { type: "h2", text: "Structure first, then detail" },
      {
        type: "p",
        text: "We built our AI reader by asking blind and low-vision users how they actually navigate a document with their ears. The answer, again and again: structure first, then detail. Give me the shape of the thing — headings, sections, what kind of document this is — before you pour the paragraphs in. So that is how the reader works. It surfaces structure, lets the listener choose where to go deep, and never forces a linear march through content they did not ask for.",
      },
      {
        type: "quote",
        text: "It reads the way I need to read — structure first, then detail. Most tools never bothered to learn that.",
      },
      { type: "h2", text: "Describing images with intent" },
      {
        type: "p",
        text: "An image description that lists pixels is useless. One that conveys intent — what the image is for, in this context — is the difference between decoration and information. Our describer is tuned for intent, not inventory. For the 285 million people who are visually impaired and the 39 million who are blind, that distinction is the whole experience of the web.",
      },
      {
        type: "p",
        text: "The engineering lesson generalises. Technology is how one program becomes a million, but only if the technology respects the person using it. Build for how people actually work, and one accessible tool becomes a service at global scale.",
      },
    ],
  },
  {
    slug: "the-caregiver-burnout-numbers-nobody-talks-about",
    category: "Caregiving",
    title: "The caregiver burnout numbers nobody talks about",
    dek: "Unpaid caregivers hold up the entire care system. We keep failing to measure what it costs them.",
    date: "2026-04-03",
    dateLabel: "3 April 2026",
    author: "WeEnable",
    readingTime: "5 min read",
    body: [
      {
        type: "p",
        text: "There is a workforce holding up the global care system that appears on no payroll and in almost no statistics. Family caregivers — mostly unpaid, often invisible — absorb a physical, financial, and emotional load that we consistently fail to measure until the caregiver themselves gives out.",
      },
      { type: "h2", text: "The load we do not count" },
      {
        type: "p",
        text: "The strain shows up as lost income, interrupted careers, deferred healthcare, and a mental-health toll that carers rarely name out loud. Because the work is unpaid, it is treated as free. It is not free. The cost is simply moved onto one person and hidden from the ledger.",
      },
      {
        type: "quote",
        text: "Respite care gave me back two hours a week that were just mine.",
      },
      {
        type: "p",
        text: "That sentence, from a caregiver named Marisa, sounds modest until you understand what preceded it: days with no edges, and no reliable moment that belonged to her. Two hours of trusted respite cover a week was the difference between sustainable care and collapse.",
      },
      { type: "h2", text: "Treating carers as infrastructure" },
      {
        type: "p",
        text: "Our caregiver program is built on a blunt premise: a system that burns out its carers is not a care system. So we treat caregiver wellbeing as essential infrastructure — respite coordination, counselling built around real schedules, and peer networks where practical knowledge flows freely. Support the person who gives care, and the whole structure holds.",
      },
    ],
  },
  {
    slug: "teaching-a-video-call-is-teaching-independence",
    category: "Seniors",
    title: "Teaching a video call is teaching independence",
    dek: "For older adults in a digital world, a single skill can reopen the door to family, health, and safety.",
    date: "2026-03-18",
    dateLabel: "18 March 2026",
    author: "WeEnable",
    readingTime: "4 min read",
    body: [
      {
        type: "p",
        text: "It is easy to underestimate a video call. For a younger user it is a reflex. For an older adult who was never shown how, it can be the locked door between them and their own grandchildren — and, increasingly, between them and their doctor, their bank, and their government.",
      },
      {
        type: "p",
        text: "By 2030, one in six people worldwide will be aged 60 or over. Services have moved online faster than many of them were taught to follow. The result is a quiet epidemic of isolation, and a widening exposure to fraud that lives on the very same screens.",
      },
      { type: "h2", text: "Confidence before features" },
      {
        type: "p",
        text: "Our senior digital literacy program does not start with features. It starts with confidence. A trainer sits with a learner, week after week, until an unfamiliar tap stops feeling like a chance to make an expensive mistake. Scam-safety is taught in the same breath, because the skill and the danger share a screen.",
      },
      {
        type: "quote",
        text: "My grandmother video-calls me every Sunday now. That's the whole program, working.",
      },
      {
        type: "p",
        text: "One learner, Grace in Nairobi, kept her phone in a drawer for a year before the program reached her. Now she calls her grandchildren every Sunday, books her own appointments, and spots a fraudulent message before it does harm. A video call is not a small skill. It is a door back to the world.",
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export const featuredArticle = articles.find((a) => a.featured)!;
export const gridArticles = articles.filter((a) => !a.featured);

/**
 * SAMPLE press mentions — placeholders, no real publications invented.
 * See FICTIONAL-CONTENT.md; replace with real coverage before launch.
 */
export const pressItems = [
  {
    // PLACEHOLDER: replace with a real publication + link before launch.
    outlet: "Press coverage",
    title: "Media mentions of WeEnable will be listed here as coverage is published.",
    date: "2026",
  },
  {
    // PLACEHOLDER: replace with a real publication + link before launch.
    outlet: "Press coverage",
    title: "Interested in featuring the movement? Reach the team at press@weenable.org.",
    date: "2026",
  },
];
