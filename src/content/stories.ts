export type Story = {
  slug: string;
  name: string;
  program: string;
  location: string;
  headline: string;
  excerpt: string;
  /** Full narrative paragraphs (featured stories have three). */
  body: string[];
  quote?: string;
  featured?: boolean;
  image: { src: string; alt: string };
};

export const stories: Story[] = [
  {
    slug: "ananya",
    name: "Ananya",
    program: "Employment & Livelihoods",
    location: "Bengaluru",
    headline: "The keyboard understood how she types. Her manager understood the rest.",
    excerpt:
      "Ananya never needed sympathy. She needed a workplace built around ability instead of around exceptions — and once she had it, the accommodation stopped being remarkable.",
    featured: true,
    quote:
      "I never needed anyone to feel sorry for me. I needed a keyboard that understood how I type, and a manager who understood the rest.",
    body: [
      "For years, the barrier between Ananya and a career was not her ability. It was a hiring process that treated her the moment she declared a disability as a problem to be managed, and a series of workplaces that offered pity where they should have offered a desk that worked. She had the skills. What she lacked was an employer willing to make three small, unremarkable changes.",
      "Through WeEnable's employment program, that changed. A workplace accessibility audit identified what she actually needed — an input device matched to how she types, flexible hours around her energy, and a manager briefed once so it never had to be explained again. None of it was expensive. All of it was ordinary. Within weeks the accommodation had disappeared into the background, which is exactly where a good accommodation belongs.",
      "Today Ananya is not a story about someone who overcame. She is a story about a system that finally did its job. Her output speaks for itself, her team forgot there was ever anything to adjust, and the only thing that changed was the shape of the tools around her. That is the whole model: not helping a person fit a broken workplace, but fixing the workplace so ability can simply do its work.",
    ],
    image: {
      src: "/images/story-ananya.jpg",
      alt: "Ananya working at a computer with an adaptive keyboard, focused on her screen.",
    },
  },
  {
    slug: "grace",
    name: "Grace",
    program: "Senior Citizens",
    location: "Nairobi",
    headline: "Every Sunday, a video call. That's the whole program, working.",
    excerpt:
      "A few weeks of patient digital literacy training turned a phone Grace was afraid of into the thing that keeps her family close.",
    quote:
      "My grandmother video-calls me every Sunday now. That's the whole program, working.",
    body: [
      "Grace's smartphone sat in a drawer for a year. The world had moved onto screens she was never shown how to use, and every unfamiliar tap felt like a chance to make an expensive mistake. Isolation crept in quietly, the way it does for millions of older adults living in a digital world designed without them in mind.",
      "WeEnable's senior digital literacy program does not start with features. It starts with confidence. A trainer sat with Grace, week after week, until a video call stopped being a risk and became a habit. They covered scam-safety in the same breath, because the skill and the danger live on the same screen.",
      "Now the phone is out of the drawer. Grace video-calls her grandchildren every Sunday, manages her own appointments, and spots a fraudulent message before it does any harm. Teaching a video call, it turns out, is teaching independence.",
    ],
    image: {
      src: "/images/story-grace.jpg",
      alt: "Grace smiling at a smartphone screen during a video call with family.",
    },
  },
  {
    slug: "marisa",
    name: "Marisa",
    program: "Caregivers",
    location: "São Paulo",
    headline: "Two hours a week that were finally her own.",
    excerpt:
      "Marisa cared for her mother full-time and unpaid. Respite coordination gave her back the smallest thing — time — and it changed everything.",
    quote:
      "Respite care gave me back two hours a week that were just mine.",
    body: [
      "Marisa's days had no edges. Caring for her mother was constant, invisible, and unpaid, and the strain of it — physical, financial, emotional — was the kind no one thinks to measure until the caregiver themselves gives out.",
      "WeEnable's caregiver program treats that strain as the problem it is. Trusted respite cover, a peer network of people carrying the same load, and access to counselling built around her real schedule gave Marisa something she had not had in years: a small, reliable pocket of time that belonged to her.",
      "Two hours a week does not sound like much. For Marisa it was the difference between sustainable care and collapse — proof that supporting the person who gives care is not a luxury, but the foundation the whole thing rests on.",
    ],
    image: {
      src: "/images/story-marisa.jpg",
      alt: "Marisa taking a quiet moment to herself by a window, resting.",
    },
  },
  {
    slug: "diego",
    name: "Diego",
    program: "Adaptive Sports",
    location: "Manila",
    headline: "Nobody asked whether he could compete. They asked how well.",
    excerpt:
      "A sport chair, a coach, and a league changed the only question that mattered — from whether Diego could play to how far he could go.",
    quote:
      "On the court, the chair is not a limitation. It is just the equipment. Everyone has some.",
    body: [
      "Diego grew up hearing what he could not do. Adaptive sport rewrote the sentence. Given a properly fitted sport chair and a coach trained in the game, the question stopped being whether he could compete and became how well — the same question every athlete answers.",
      "WeEnable's adaptive sports program, the founding work the whole organisation grew from, runs leagues and supplies the equipment that cost otherwise keeps out of reach. For Diego it meant a team, a training schedule, and a reason to push.",
      "The court gave him more than fitness. It gave him a public place to be excellent — visible proof, to himself and to everyone watching, that ability was never the thing in question.",
    ],
    image: {
      src: "/images/story-diego.jpg",
      alt: "Diego driving forward in a sport wheelchair during a competitive match.",
    },
  },
  {
    slug: "chidi",
    name: "Chidi",
    program: "Digital & AI Accessibility",
    location: "Lagos",
    headline: "The reader didn't just read. It respected how he reads.",
    excerpt:
      "For a blind software developer, most documents are walls. WeEnable's AI reader turned them into something he could actually work with.",
    quote:
      "It reads the way I need to read — structure first, then detail. Most tools never bothered to learn that.",
    body: [
      "Chidi is a developer who happens to be blind. The barrier in his work was never the code; it was everything around it — PDFs, diagrams, and images built as if no one would ever need to hear them. Each inaccessible document was an hour lost to workarounds.",
      "WeEnable's AI accessibility assistant was built by asking how people actually read with their ears, not just how to convert text to speech. It reads documents aloud with structure intact, describes images with intent, and adapts to the order Chidi wants information in.",
      "The result is not novelty. It is time given back — hours a week he now spends building instead of translating. When technology respects how people work, one accessible tool quietly becomes a service that reaches millions.",
    ],
    image: {
      src: "/images/story-chidi.jpg",
      alt: "Chidi listening through headphones while working across two keyboards and a braille display.",
    },
  },
  {
    slug: "jakarta-tactile-paving",
    name: "A clause in Jakarta",
    program: "Policy & Research",
    location: "Jakarta",
    headline: "One line of policy protected a whole city's footpaths.",
    excerpt:
      "Evidence, advisory, and a well-drafted clause turned tactile paving from a nice idea into a requirement — the kind of change that outlasts any budget.",
    body: [
      "For blind and low-vision residents, a footpath without tactile paving is a daily hazard. Individual fixes help a street; they do not protect a city. What protects a city is law.",
      "WeEnable's policy team brought independent research and public-sector advisory to the table, and helped shape a clause requiring tactile paving in Jakarta's pedestrian infrastructure. It is unglamorous work — evidence, drafting, review — and it is exactly the work that makes access permanent.",
      "A single well-written clause now shapes how an entire city builds its streets. That is the multiplier policy gives every other program: goodwill fades, but a standard that can be audited changes behaviour for good.",
    ],
    image: {
      src: "/images/story-jakarta.jpg",
      alt: "Bright yellow tactile paving guiding along a city footpath.",
    },
  },
  {
    slug: "toronto-logistics-hiring",
    name: "A hiring pilot in Toronto",
    program: "Corporate Partnership",
    location: "Toronto",
    headline: "A logistics employer redesigned hiring — and found the talent was always there.",
    excerpt:
      "A corporate partner rebuilt one hiring process around ability. The pipeline that opened became a model we now scale.",
    body: [
      "A logistics company came to WeEnable convinced it had a talent shortage. What it actually had was a hiring process quietly filtering out capable disabled candidates at every step — application, interview, and onboarding all assumed a single kind of body and mind.",
      "Working together, we redesigned the process: accessible applications, structured interviews focused on the actual job, and an onboarding path that fixed workplace barriers before day one rather than after the first complaint.",
      "The pipeline that opened up was not charity; it was overlooked talent. The pilot delivered measurable hiring outcomes and quarterly impact reporting the partner could stand behind — evidence, not a thank-you letter. It is now the template we bring to every corporate partner.",
    ],
    image: {
      src: "/images/story-toronto.jpg",
      alt: "Workers in a modern logistics facility collaborating on the floor.",
    },
  },
  {
    slug: "ravi",
    name: "Ravi",
    program: "Healthcare",
    location: "Pune",
    headline: "Navigating the health system stopped being a second full-time job.",
    excerpt:
      "For Ravi's family, the hardest part of care was the maze around it. Guidance through the system turned a labyrinth back into a path.",
    quote:
      "We had the diagnosis for months before anyone showed us how the system actually works.",
    body: [
      "A diagnosis is only the beginning. For Ravi's family, the real barrier was everything that came after — referrals, entitlements, appointments, and paperwork spread across offices that never spoke to each other. Care existed; the path to it did not.",
      "WeEnable's healthcare navigation support does the unglamorous work of connecting the dots: explaining entitlements, coordinating appointments, and making sure nothing falls through the gaps between systems built in isolation.",
      "With the maze mapped, Ravi's family could spend their energy on Ravi instead of on the bureaucracy around him. Access is not only about the treatment; it is about being shown the way in.",
    ],
    image: {
      src: "/images/story-ravi.jpg",
      alt: "Ravi and a family member reviewing paperwork with a support worker.",
    },
  },
  {
    slug: "priya",
    name: "Priya",
    program: "Education",
    location: "Delhi",
    headline: "The classroom changed shape, and a bright student stopped being invisible.",
    excerpt:
      "Priya was never behind. The classroom was. Inclusive design put her back where she always belonged — in the middle of the learning.",
    quote:
      "I was not a slow learner. I was a student in a room that was not built for me.",
    body: [
      "Priya was labelled early, the way many disabled children are — not because she could not learn, but because the classroom was not built for how she learns. Nine in ten children with disabilities in the developing world are out of school; many who are in school are quietly left at the edges of it.",
      "WeEnable worked with her school on inclusive design: accessible materials, teaching that assumed a range of learners, and technology that met her where she was. None of it lowered the bar. All of it removed the obstacles between Priya and the same lessons everyone else was getting.",
      "She was never the problem to be fixed. The environment was. Given a room built for her, Priya did what bright students do — she thrived, in plain sight.",
    ],
    image: {
      src: "/images/story-priya.jpg",
      alt: "Priya engaged in a lesson in an inclusive, well-lit classroom.",
    },
  },
];

export function getStory(slug: string) {
  return stories.find((s) => s.slug === slug);
}

export const featuredStory = stories.find((s) => s.featured)!;
