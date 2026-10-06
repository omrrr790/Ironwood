// ============================================================
// IRONWOOD — centralized content & data
// ============================================================

const u = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=80&w=${w}`;

export const brand = {
  name: "Ironwood",
  fullName: "Ironwood Carpentry & Construction",
  legalName: "Raza Group of Construction Pty Ltd",
  tagline: "Carpentry & Construction",
  region: "Sydney's Western Suburbs",
  phone: "0432 771 154",
  phoneHref: "tel:0432771154",
  email: "aetzazgondal@gmail.com",
  emailHref: "mailto:aetzazgondal@gmail.com",
  address: "20A Winsome Ave, Plumpton NSW 2761",
  addressLine: "20A Winsome Ave",
  suburb: "Plumpton NSW 2761",
  regionFull: "Servicing Sydney's Western Suburbs",
  hours: "Mon – Sat · 7:00am – 5:00pm",
  abn: "83 701 114 614",
  abnFormatted: "ABN 83 701 114 614",
  entityType: "Australian Private Company",
  activity: "Carpentry (ANZSIC 32420)",
  director: "Wasif Raza",
  directorRole: "Director, Public Officer & Shareholder",
  logo: "/images/logo.png",
  emblem: "/images/emblem.png",
  icon: "/images/icon.png",
};

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Insights", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

// ---------------- Images ----------------
export const images = {
  hero: "/images/hero.webp",
  home: "/images/home.webp",
  interior: "/images/interior.webp",
  detail: "/images/detail.webp",
  timber: "/images/timber.webp",
  outdoor: "/images/outdoor.webp",
  // remote
  exteriorModern: u("photo-1600585154340-be6161a56a0c"),
  exteriorLuxury: u("photo-1600596542815-ffad4c1539a9"),
  living: u("photo-1600607687939-ce8a6c25118c"),
  living2: u("photo-1600607687920-4e2a09cf159d"),
  interior3: u("photo-1600566753190-17f0baa2a6c3"),
  interior4: u("photo-1600210492486-724fe5c67fb0"),
  kitchen: u("photo-1556911220-bff31c812dba"),
  kitchen2: u("photo-1556909114-f6e7ad7d3136"),
  kitchen3: u("photo-1556912167-f556f1f39fdf"),
  bedroom: u("photo-1505693416388-ac5ce068fe85"),
  bedroom2: u("photo-1505691938895-1758d7feb511"),
  bathroom: u("photo-1600566753086-00f18fb6b3ea"),
  bathroom2: u("photo-1584622650111-993a426fbf0a"),
  exteriorDusk: u("photo-1564013799919-ab600027ffc6"),
  exteriorPool: u("photo-1512917774080-9991f1c4c750"),
  exteriorModern2: u("photo-1576941089067-2de3c901e126"),
  blueprint: u("photo-1503387762-592deb58ef4e"),
  site: u("photo-1504307651254-35680f356dfd"),
  saw: u("photo-1541888946425-d81bb19240f5"),
  worker: u("photo-1503328427499-d92d1ac3d174"),
  engineer: u("photo-1581094794329-c8112a89af12"),
  welder: u("photo-1581092160562-40aa08e78837"),
  timberPlanks: u("photo-1590496793929-36417d3117de"),
  interior5: u("photo-1615529182904-14819c35db37"),
  interior6: u("photo-1616486338812-3dadae4b4ace"),
  interior7: u("photo-1616137466211-f939a420be84"),
  interior8: u("photo-1616594039964-ae9021a400a0"),
  exteriorAward: u("photo-1613490493576-7fde63acd811"),
  architecture: u("photo-1493397212122-2b85dda8106b"),
  houseField: u("photo-1449844908441-8829872d2607"),
  framing: u("photo-1510627498534-cf7e9002facc"),
  woodwork: u("photo-1416879595882-3373a0480b5b"),
  // portraits
  p1: u("photo-1560250097-0b93528c311a", 700),
  p2: u("photo-1573496359142-b8d87734a5a2", 700),
  p3: u("photo-1507003211169-0a1dd7228f2d", 700),
  p4: u("photo-1494790108377-be9c29b29330", 700),
  p5: u("photo-1500648767791-00dcc994a43e", 700),
  p6: u("photo-1438761681033-6461ffad8d80", 700),
  p7: u("photo-1472099645785-5658abf4ff4e", 700),
  p8: u("photo-1544005313-94ddf0286df2", 700),
};

// ---------------- Services ----------------
export type Service = {
  slug: string;
  index: string;
  title: string;
  short: string;
  description: string;
  image: string;
  points: string[];
  icon: string;
};

export const services: Service[] = [
  {
    slug: "new-home-builds",
    index: "01",
    title: "New Home Builds",
    short: "Custom homes designed and built from the slab up, tailored to your block and your life.",
    description:
      "From knockdown-rebuilds to first homes on a fresh block, we manage the entire build — engineering, approvals, structure and finishes — with one accountable team and one transparent contract.",
    image: images.exteriorModern,
    points: ["Knockdown rebuilds", "Design & construct", "Fixed-price contracts", "Site management"],
    icon: "Home",
  },
  {
    slug: "renovations-extensions",
    index: "02",
    title: "Renovations & Extensions",
    short: "Transform dated homes into spaces that work harder and feel effortless.",
    description:
      "Second storeys, ground-floor extensions and whole-home makeovers. We blend new work so seamlessly with existing structure that it feels like it was always meant to be there.",
    image: images.living,
    points: ["Second storeys", "Kitchen & bath remodels", "Structural alterations", "Open-plan reconfigurations"],
    icon: "Layers",
  },
  {
    slug: "carpentry-timber",
    index: "03",
    title: "Carpentry & Timber Works",
    short: "Structural framing and fine joinery executed by qualified master carpenters.",
    description:
      "Hardwood framing, exposed trusses, staircases, flooring and architectural timber detailing. We source responsibly and finish to a standard you can run your hand across.",
    image: images.timberPlanks,
    points: ["Structural framing", "Exposed timber detailing", "Staircases", "Timber flooring"],
    icon: "Hammer",
  },
  {
    slug: "decks-outdoor",
    index: "04",
    title: "Decks, Pergolas & Outdoor",
    short: "Outdoor living that extends your home into the landscape.",
    description:
      "Merbau, spotted gum and composite decks, insulated pergolas, alfresco kitchens and pool-side structures engineered for the Australian climate and council compliance.",
    image: images.exteriorPool,
    points: ["Hardwood decks", "Insulated pergolas", "Alfresco & outdoor kitchens", "Pool structures"],
    icon: "Trees",
  },
  {
    slug: "roofing-flooring",
    index: "05",
    title: "Roofing & Flooring",
    short: "The surfaces that hold everything together, installed without shortcuts.",
    description:
      "Re-roofing, roof restorations, insulation, subfloor and finished flooring across timber, engineered boards and hybrid systems — done right the first time.",
    image: images.bathroom,
    points: ["Re-roofing & restorations", "Sarking & insulation", "Engineered flooring", "Subfloor repairs"],
    icon: "Home",
  },
  {
    slug: "custom-joinery",
    index: "06",
    title: "Custom Joinery & Cabinetry",
    short: "Made-to-measure cabinetry and furniture built in our own workshop.",
    description:
      "Kitchens, wardrobes, vanities, shelving and bespoke furniture, designed and fabricated in-house so the fit, finish and hardware are exactly to specification.",
    image: images.kitchen,
    points: ["Kitchens & vanities", "Built-in wardrobes", "Bespoke furniture", "In-house fabrication"],
    icon: "PenTool",
  },
];

// ---------------- Process ----------------
export const process = [
  {
    index: "01",
    title: "Discover & Brief",
    description:
      "We start on site, not on paper. We walk your property, listen to how you live, and define the brief, budget and constraints together.",
    icon: "Compass",
  },
  {
    index: "02",
    title: "Design & Approvals",
    description:
      "Working with architects and certifiers, we shape the plans, engineering and council documentation until every detail is resolved.",
    icon: "PencilRuler",
  },
  {
    index: "03",
    title: "Estimate & Contract",
    description:
      "A fixed, itemised price with no surprises. We sign a clear contract and lock in a realistic programme before a single nail is driven.",
    icon: "FileSignature",
  },
  {
    index: "04",
    title: "Construction",
    description:
      "Our own qualified carpenters and trusted trades build to plan, with weekly updates, daily site clean-ups and photos at every milestone.",
    icon: "Hammer",
  },
  {
    index: "05",
    title: "Quality & Finishing",
    description:
      "A multi-point defect inspection, meticulous detailing and a deep clean. We don't hand over until it meets our own standard.",
    icon: "BadgeCheck",
  },
  {
    index: "06",
    title: "Handover & Warranty",
    description:
      "Keys, manuals, certificates and a structured 7-year structural warranty, plus a team that still answers the phone a decade later.",
    icon: "KeyRound",
  },
];

// ---------------- Projects / Case studies ----------------
export type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  duration: string;
  client: string;
  summary: string;
  image: string;
  gallery: string[];
  stats: { value: string; label: string }[];
  challenge: string;
  solution: string;
  result: string;
  quote: { text: string; name: string; role: string };
};

export const projects: Project[] = [
  {
    slug: "cattai-homestead",
    title: "The Cattai Homestead",
    category: "New Build",
    location: "Cattai, NSW",
    year: "2024",
    duration: "11 months",
    client: "The Nguyen Family",
    summary:
      "A five-bedroom country homestead on a sloping 2.4-hectare block, wrapped in recycled hardwood and oriented around a central courtyard.",
    image: images.exteriorModern,
    gallery: [images.exteriorModern, images.living, images.kitchen2, images.timberPlanks],
    stats: [
      { value: "520m²", label: "Gross floor area" },
      { value: "2.4ha", label: "Site size" },
      { value: "11 mo", label: "On-time delivery" },
    ],
    challenge:
      "A steep, reactive clay site with a 9-metre fall and strict rural fire (BAL-40) requirements demanded engineered foundations and a considered material palette from day one.",
    solution:
      "We cut and benched the site to minimise excavation, designed a split-level layout that follows the natural contour, and framed the home in a hybrid of steel and recycled ironbark timber for both structure and character.",
    result:
      "A warm, fire-rated family home that sits lightly in the landscape, delivered two weeks ahead of programme and under budget.",
    quote: {
      text: "Ironwood turned a difficult block into the home we'd been dreaming about for fifteen years. The craftsmanship is visible in every corner.",
      name: "Minh Nguyen",
      role: "Homeowner",
    },
  },
  {
    slug: "harbour-view-extension",
    title: "Harbour View Extension",
    category: "Extension",
    location: "Drummoyne, NSW",
    year: "2023",
    duration: "7 months",
    client: "Private Client",
    summary:
      "A full-width rear extension with floor-to-ceiling glass, opening a 1950s brick home to the harbour and a new open-plan living zone.",
    image: images.exteriorPool,
    gallery: [images.exteriorPool, images.living2, images.kitchen, images.bathroom],
    stats: [
      { value: "+86m²", label: "Living space added" },
      { value: "7 mo", label: "Lived in during build" },
      { value: "32%", label: "Value uplift" },
    ],
    challenge:
      "The owners wanted to stay living in the house throughout the build while completely restructuring the rear of the property — a sequencing and dust-control puzzle.",
    solution:
      "We staged the works in four phases, installed a temporary kitchen and weatherproofed each zone as we went, keeping the family in place with minimal disruption for seven months.",
    result:
      "A seamless indoor-outdoor living area that doubled natural light and added a third of a million dollars in value, with the family never moving out.",
    quote: {
      text: "Living through a build should be stressful. It wasn't. Ironwood's staging and communication were flawless.",
      name: "Sarah Whitfield",
      role: "Homeowner",
    },
  },
  {
    slug: "ironwood-pavilion",
    title: "The Ironwood Pavilion",
    category: "Timber Structure",
    location: "Kurrajong, NSW",
    year: "2023",
    duration: "5 months",
    client: "The Carter Estate",
    summary:
      "A fully-exposed, post-and-beam pavilion and deck built from recycled Australian hardwoods as the centrepiece of a rural estate.",
    image: images.framing,
    gallery: [images.framing, images.timberPlanks, images.woodwork, images.outdoor],
    stats: [
      { value: "18t", label: "Recycled hardwood" },
      { value: "140m²", label: "Covered pavilion" },
      { value: "0", label: "Visible fasteners" },
    ],
    challenge:
      "The client wanted a vast, unbroken timber roof with no visible steel and no exposed fixings — an ambitious ask for a 12-metre clear span.",
    solution:
      "Our joinery team fabricated concealed steel-and-timber connections off-site, then raised the frame with a crane in a single day using traditional mortise-and-tenon detailing.",
    result:
      "A cathedral-like outdoor room with clean, uninterrupted timber lines that has become the estate's signature entertaining space.",
    quote: {
      text: "The pavilion is a work of art. Guests stand under it and just look up. Nothing else on the property comes close.",
      name: "Robert Carter",
      role: "Property Owner",
    },
  },
  {
    slug: "federation-restoration",
    title: "Federation Restoration",
    category: "Heritage",
    location: "Parramatta, NSW",
    year: "2022",
    duration: "9 months",
    client: "Heritage Trust",
    summary:
      "A faithful restoration of a 1901 Federation residence, preserving original detailing while bringing services and comfort into this century.",
    image: images.exteriorDusk,
    gallery: [images.exteriorDusk, images.detail, images.interior3, images.bedroom],
    stats: [
      { value: "1901", label: "Original build year" },
      { value: "74%", label: "Original timber retained" },
      { value: "9 mo", label: "Heritage-approved" },
    ],
    challenge:
      "Heritage listing protected nearly every original feature, from pressed-metal ceilings to cedar joinery, while the home needed complete rewiring, re-plumbing and structural repairs.",
    solution:
      "We catalogued, removed, restored and reinstated over 400 original components, laser-scanned the cornices for exact reproduction, and carefully concealed all modern services.",
    result:
      "A historically sensitive restoration that earned a Master Builders Heritage Award and preserved the home for another century.",
    quote: {
      text: "Ironwood treated this house like a museum piece while making it liveable again. Extraordinary attention to detail.",
      name: "Margaret Hensley",
      role: "Heritage Consultant",
    },
  },
  {
    slug: "hillside-retreat",
    title: "Hillside Retreat",
    category: "Custom Build",
    location: "Springwood, NSW",
    year: "2022",
    duration: "10 months",
    client: "The Osei Family",
    summary:
      "A cantilevered, three-level retreat stepping down a Blue Mountains hillside, clad in charred timber and corten steel.",
    image: images.exteriorModern2,
    gallery: [images.exteriorModern2, images.bedroom2, images.bathroom2, images.interior4],
    stats: [
      { value: "3", label: "Levels on a slope" },
      { value: "9.5m", label: "Cantilever span" },
      { value: "100%", label: "Off-grid ready" },
    ],
    challenge:
      "A near-vertical block with no road access for large machinery required a build that could be delivered in components and assembled on the steep site.",
    solution:
      "We prefabricated wall and roof cassettes in the workshop, craned them up the slope, and assembled the retreat as a series of modular bays — minimising time and waste on site.",
    result:
      "A dramatic, off-grid-capable family retreat that appears to float above the tree canopy, built with 30% less site time than a traditional approach.",
    quote: {
      text: "They said the block was unbuildable. Ironwood built us a home that feels like it grew out of the mountain.",
      name: "Kwame Osei",
      role: "Homeowner",
    },
  },
  {
    slug: "inner-west-terrace",
    title: "Inner-West Terrace Reno",
    category: "Renovation",
    location: "Newtown, NSW",
    year: "2021",
    duration: "6 months",
    client: "Private Client",
    summary:
      "A gutsy remodel of a narrow Victorian terrace, inserting a light well, custom joinery and a rooftop garden into a 4-metre-wide footprint.",
    image: images.interior5,
    gallery: [images.interior5, images.kitchen3, images.interior6, images.interior7],
    stats: [
      { value: "4m", label: "Footprint width" },
      { value: "+70%", label: "Natural light" },
      { value: "22", label: "Custom joinery pieces" },
    ],
    challenge:
      "A 4-metre-wide, double-storey terrace with no side access and a dark, disconnected ground floor needed to feel spacious and bright on a tight urban block.",
    solution:
      "We removed a central stair core and replaced it with an open timber staircase under a new double-height light well, then lined every wall with bespoke built-in storage.",
    result:
      "A light-filled, hard-working home that squeezes three bedrooms, two baths and a rooftop garden out of one of Sydney's narrowest blocks.",
    quote: {
      text: "Every millimetre was designed. It's the smartest, most beautiful small home I've ever been in — and it's ours.",
      name: "Alex & Dana Kim",
      role: "Homeowners",
    },
  },
];

// ---------------- Testimonials ----------------
export type Testimonial = {
  name: string;
  role: string;
  location: string;
  quote: string;
  image: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Minh Nguyen",
    role: "New Home Build",
    location: "Cattai",
    quote:
      "Ironwood turned a difficult block into the home we'd been dreaming about for fifteen years. The craftsmanship is visible in every corner.",
    image: images.p1,
    rating: 5,
  },
  {
    name: "Sarah Whitfield",
    role: "Rear Extension",
    location: "Drummoyne",
    quote:
      "Living through a build should be stressful. It wasn't. Their staging, communication and site tidiness were absolutely flawless.",
    image: images.p2,
    rating: 5,
  },
  {
    name: "Robert Carter",
    role: "Timber Pavilion",
    location: "Kurrajong",
    quote:
      "The pavilion is a work of art. Guests stand under it and just look up. Nothing else on the property comes close.",
    image: images.p3,
    rating: 5,
  },
  {
    name: "Margaret Hensley",
    role: "Heritage Restoration",
    location: "Parramatta",
    quote:
      "They treated our Federation house like a museum piece while making it liveable again. Extraordinary attention to detail.",
    image: images.p4,
    rating: 5,
  },
  {
    name: "Kwame Osei",
    role: "Custom Build",
    location: "Springwood",
    quote:
      "Everyone said the block was unbuildable. Ironwood built us a home that feels like it grew out of the mountain.",
    image: images.p5,
    rating: 5,
  },
  {
    name: "Alex & Dana Kim",
    role: "Terrace Renovation",
    location: "Newtown",
    quote:
      "Every millimetre was designed. It's the smartest, most beautiful small home I've ever been in — and it's ours.",
    image: images.p6,
    rating: 5,
  },
];

// ---------------- Team ----------------
export const team = [
  {
    name: "Wasif Raza",
    role: "Founder & Director",
    bio: "Director of Raza Group of Construction and the hands behind Ironwood. Carpentry runs in the family — and it shows in every frame we cut.",
    image: images.p7,
  },
  {
    name: "Priya Sharma",
    role: "Head of Design",
    bio: "Architect-turned-designer who translates how families live into plans that feel inevitable once you see them.",
    image: images.p8,
  },
  {
    name: "Marcus Chen",
    role: "Site Manager",
    bio: "Runs every site like it's his own home — early starts, clean yards, and zero tolerance for shortcuts.",
    image: images.p1,
  },
  {
    name: "Tomas Kowalski",
    role: "Master Carpenter",
    bio: "Twenty-five years at the bench. If it's timber and it matters, Tomas has probably already built one.",
    image: images.p3,
  },
  {
    name: "Elena Vasquez",
    role: "Estimator & Contracts",
    bio: "Turns drawings into honest numbers. Fixed-price means fixed-price when Elena has done the maths.",
    image: images.p2,
  },
  {
    name: "James O'Connor",
    role: "Carpenter & Foreman",
    bio: "Leads the framing crew and mentors every apprentice. The standard-bearer for Ironwood's joinery.",
    image: images.p5,
  },
];

// ---------------- Stats ----------------
export const stats = [
  { value: 100, suffix: "%", prefix: "", label: "Australian owned & operated", decimals: 0 },
  { value: 240, suffix: "+", prefix: "", label: "Projects delivered", decimals: 0 },
  { value: 98, suffix: "%", prefix: "", label: "Client satisfaction", decimals: 0 },
  { value: 42, suffix: "", prefix: "", label: "Craftsmen & trades", decimals: 0 },
  { value: 12, suffix: "", prefix: "", label: "Industry awards", decimals: 0 },
  { value: 7, suffix: "-yr", prefix: "", label: "Structural warranty", decimals: 0 },
];

// ---------------- Values ----------------
export const values = [
  {
    title: "Craftsmanship",
    description:
      "We measure quality in the details you'll never notice and the ones you'll admire every day. If it's not good enough for our own homes, it doesn't leave the site.",
    icon: "Hammer",
  },
  {
    title: "Integrity",
    description:
      "Fixed prices, honest timelines and no surprises. We tell you what you need to hear, not what's easiest to say.",
    icon: "ShieldCheck",
  },
  {
    title: "Transparency",
    description:
      "Weekly updates, open books and photos at every milestone. You'll never wonder what's happening on your build.",
    icon: "Eye",
  },
  {
    title: "Sustainability",
    description:
      "Recycled and responsibly sourced timber, low-waste prefabrication and designs built to perform for decades, not seasons.",
    icon: "Leaf",
  },
  {
    title: "Safety",
    description:
      "Every site runs to a documented safety system. Our people go home to their families every single night — that's the real bottom line.",
    icon: "HardHat",
  },
  {
    title: "Family",
    description:
      "We're a family business building for families. The relationships we form on a build outlast the warranty by a lifetime.",
    icon: "HeartHandshake",
  },
];

// ---------------- Timeline ----------------
export const timeline = [
  { year: "Registered", title: "Raza Group of Construction Pty Ltd", description: "A registered Australian private company — ABN 83 701 114 614, active with the Australian Business Register." },
  { year: "Licensed", title: "Licensed & fully insured", description: "Qualified NSW carpentry business with public liability and workers' cover on every site." },
  { year: "Craft", title: "Carpentry, done properly", description: "Specialising in carpentry on construction projects — framing, joinery, decks and finish work (ANZSIC 32420)." },
  { year: "Local", title: "Rooted in Western Sydney", description: "Based in Plumpton, serving homes and construction sites across Sydney's west." },
  { year: "Honest", title: "Fixed, itemised pricing", description: "Clear quotes and transparent communication before a single cut is made." },
  { year: "Guaranteed", title: "Built to be guaranteed", description: "Structural workmanship covered by statutory home building warranty." },
];

// ---------------- FAQs ----------------
export const faqs = [
  {
    q: "What areas do you service?",
    a: "We're based in Plumpton and build across Sydney's Western Suburbs — from Blacktown and Parramatta out to the Blue Mountains and the Hawkesbury. If you're on the fringe of that map, call us; we'll be straight with you about whether we're the right fit.",
  },
  {
    q: "Do you offer fixed-price contracts?",
    a: "Yes. After design and engineering are resolved, we provide a fully itemised, fixed-price contract. We only use provisional sums where the scope genuinely can't be known in advance (like unforeseen ground conditions), and we cap those transparently.",
  },
  {
    q: "How long does a typical new build take?",
    a: "A single-storey home typically runs 8–11 months from site start to handover; double-storey and complex sites run 10–14 months. Renovations and extensions range from 3–9 months depending on scope. You'll get a realistic programme before we start.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Fully. Raza Group of Construction Pty Ltd (ABN 83 701 114 614) is a registered Australian company with public liability insurance and workers' compensation on every site, plus statutory home building warranty cover on residential work.",
  },
  {
    q: "Do you handle council approvals?",
    a: "We manage the full approvals process — DA or CDC, engineering, certifiers and inspections — working with our network of architects and certifiers. You'll have one point of contact for the entire journey.",
  },
  {
    q: "Can we live in the house during a renovation?",
    a: "Often, yes. We sequence works in phases, install temporary kitchens and weatherproof each zone as we go. We'll tell you honestly at the start whether staying put is realistic for your particular project.",
  },
  {
    q: "What warranty do you provide?",
    a: "Every build is covered by a 7-year structural warranty in addition to statutory home warranty insurance. We also return for a 12-month defect inspection after handover — and we still answer the phone long after that.",
  },
  {
    q: "How do we get a quote?",
    a: "Start with a free, no-obligation site consultation. We walk the property, talk through your ideas, and provide a clear written estimate. Use the contact form, email or call us directly on 0432 771 154.",
  },
];

// ---------------- Blog ----------------
export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  authorRole: string;
  body: { heading: string; text: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "timber-vs-steel-framing",
    title: "Timber vs. Steel Framing: What's Right for Your Sydney Build",
    category: "Building Science",
    excerpt:
      "Both have their place. Here's how to choose between timber and steel framing based on your site, budget and timeline — without the sales spin.",
    date: "Feb 12, 2025",
    readTime: "7 min read",
    image: images.framing,
    author: "Wasif Raza",
    authorRole: "Director",
    body: [
      {
        heading: "The honest trade-off",
        text: "Timber is warm, forgiving, and — with a skilled crew — fast to erect and easy to modify on site. Steel is dimensionally stable, termite-proof and ideal for long spans, but it's less forgiving of last-minute changes and needs careful thermal detailing. Neither is universally 'better'; the right answer depends on your block, your design and how you'll live in the home.",
      },
      {
        heading: "Where timber wins",
        text: "For most single and double-storey homes in Western Sydney, engineered and treated hardwood framing is hard to beat. It's cost-effective, readily available, and our carpenters can adjust it on the fly. Exposed timber also gives you architectural character that steel simply can't.",
      },
      {
        heading: "Where steel earns its keep",
        text: "Steel comes into its own on reactive soils, in high wind or bushfire zones, and for dramatic cantilevers or open-plan spans. It's also worth considering if termite risk is high and you'd rather engineer the problem away entirely.",
      },
      {
        heading: "Our advice",
        text: "Don't choose a frame off a brochure. Let us assess your site and design together — the best decision is the one made with the soil report, engineering and your budget on the table at the same time.",
      },
    ],
  },
  {
    slug: "extension-cost-guide-2025",
    title: "The 2025 Home Extension Cost Guide for Western Sydney",
    category: "Costs & Budgeting",
    excerpt:
      "Real square-metre rates, what drives cost up and down, and how to get an extension price you can actually trust.",
    date: "Jan 28, 2025",
    readTime: "9 min read",
    image: images.exteriorPool,
    author: "Elena Vasquez",
    authorRole: "Estimator & Contracts",
    body: [
      {
        heading: "What an extension really costs",
        text: "Ground-floor extensions in Western Sydney currently sit between roughly $3,200 and $4,800 per square metre depending on finishes, access and structural complexity. A typical 60m² rear extension lands between $190k and $290k before landscaping. Second storeys cost more per square metre because of the extra engineering and access work.",
      },
      {
        heading: "The four biggest cost drivers",
        text: "Site access and fall, ground conditions, the level of finish, and whether you're moving wet areas (kitchens and bathrooms are disproportionately expensive to relocate). Understanding these four levers is the fastest way to control your budget.",
      },
      {
        heading: "Why 'fixed price' matters",
        text: "A fixed, itemised price protects you from scope creep and mid-build surprises. Be wary of quotes that are dramatically cheaper than the market — they almost always rely on allowances that blow out later.",
      },
      {
        heading: "Get a number that holds",
        text: "Bring us your plans or just a rough idea, and we'll give you a transparent, written estimate with the assumptions laid out line by line. No obligation, no pressure.",
      },
    ],
  },
  {
    slug: "how-to-choose-a-builder",
    title: "How to Choose a Builder You Can Actually Trust",
    category: "Guides",
    excerpt:
      "Five questions to ask any builder before you sign — and the red flags that should send you running.",
    date: "Jan 15, 2025",
    readTime: "6 min read",
    image: images.worker,
    author: "Wasif Raza",
    authorRole: "Director",
    body: [
      {
        heading: "It starts with the questions",
        text: "Ask to see their licence and insurance certificates, walk through a current site, and speak to two recent clients. A builder who hesitates on any of those three isn't hiding nothing — they're hiding something.",
      },
      {
        heading: "The red flags",
        text: "A price that's suspiciously low, a contract that's suspiciously thin, a deposit that's suspiciously large, and a timeline that sounds too good to be true. All four together is a pattern worth walking away from.",
      },
      {
        heading: "Trust the receipts",
        text: "A good builder has a paper trail: documented variations, milestone-based payment schedules and weekly written updates. If everything is verbal, it's worth getting it in writing before you go further.",
      },
      {
        heading: "Chemistry counts",
        text: "You'll be in close contact with your builder for months. Choose someone who communicates clearly, returns calls, and tells you the truth even when it's inconvenient. That's the builder you want on the hard days.",
      },
    ],
  },
  {
    slug: "renovation-roadmap",
    title: "Renovation Roadmap: From Brief to Handover in 12 Steps",
    category: "Guides",
    excerpt:
      "We break the whole renovation journey into a clear, realistic sequence so you always know what happens next.",
    date: "Dec 19, 2024",
    readTime: "8 min read",
    image: images.living,
    author: "Priya Sharma",
    authorRole: "Head of Design",
    body: [
      {
        heading: "The first six steps",
        text: "Brief and budget, measured survey, concept design, engineering, approvals and documentation, then a fixed-price contract. These early stages are where the big decisions get made — rushing them is the most expensive mistake you can make.",
      },
      {
        heading: "The build phase",
        text: "Demolition and protection, structural works, rough-ins, linings and finishes, then joinery and fit-out. At every milestone you'll get photos and a written update, so you're never guessing.",
      },
      {
        heading: "The final stretch",
        text: "Defect inspection, deep clean, handover of keys and manuals, then a 12-month return visit. A renovation shouldn't feel like a mystery — it should feel like a plan, executed.",
      },
      {
        heading: "Your roadmap starts here",
        text: "Download nothing, sign nothing — just book a free site consultation and we'll map your project out properly, in your kitchen, over a coffee.",
      },
    ],
  },
  {
    slug: "outdoor-living-value",
    title: "Outdoor Living: Decks & Pergolas That Add Real Value",
    category: "Outdoor",
    excerpt:
      "A well-built deck or pergola is one of the highest-return improvements you can make. Here's how to do it right.",
    date: "Nov 30, 2024",
    readTime: "6 min read",
    image: images.exteriorPool,
    author: "Tomas Kowalski",
    authorRole: "Master Carpenter",
    body: [
      {
        heading: "Why outdoor spaces pay off",
        text: "Australian buyers consistently rank outdoor living among their top priorities. A properly built hardwood deck can return $3 for every $1 spent, and an insulated pergola turns a dead patch of lawn into a year-round second living room.",
      },
      {
        heading: "Timber selection matters",
        text: "Merbau and spotted gum are our workhorses for decks — beautiful, durable and naturally termite-resistant. For structure, treated pine or ironbark. Cheap timber looks cheap in three years; good timber gets better.",
      },
      {
        heading: "Details that make the difference",
        text: "Concealed fixings, properly spaced boards, stainless hardware and a frame designed for drainage. These are the invisible decisions that decide whether a deck lasts five years or thirty.",
      },
      {
        heading: "Start with the structure",
        text: "A deck is only as good as what's underneath it. We'd rather spend your budget on a bomb-proof frame than a fancy handrail — and we'll tell you so.",
      },
    ],
  },
  {
    slug: "recycled-timber-done-right",
    title: "Sustainable Building: Recycled Timber Done Right",
    category: "Sustainability",
    excerpt:
      "Recycled hardwood is beautiful, but only if it's sourced and milled properly. What to look for — and what to avoid.",
    date: "Nov 12, 2024",
    readTime: "5 min read",
    image: images.timberPlanks,
    author: "Priya Sharma",
    authorRole: "Head of Design",
    body: [
      {
        heading: "The appeal of recycled timber",
        text: "Old-growth hardwood is dense, stable and carries a patina that new timber simply can't fake. Reusing it keeps remarkable material out of landfill and gives a home genuine character.",
      },
      {
        heading: "Sourcing it properly",
        text: "Buy from certified salvage yards with a documented chain of custody. Beware bargain timber that's been poorly de-nailed or kilned — hidden nails destroy planer blades, and wet timber will move after installation.",
      },
      {
        heading: "Designing with reclaimed material",
        text: "Recycled timber isn't uniform, and that's the point. Design with its variation in mind, allow extra waste factor, and pair it with clean, simple lines so the timber does the talking.",
      },
      {
        heading: "Our pledge",
        text: "Where a client is open to it, we now default to recycled or responsibly certified timber for feature elements. It's better for the planet, and honestly, it just looks better too.",
      },
    ],
  },
];

// ---------------- Tools / technology ----------------
export const tools = [
  "BuilderTrend",
  "SketchUp Pro",
  "Revit",
  "AutoCAD",
  "Procore",
  "Fusion 360",
  "Laser Scanning",
  "Dust Extraction",
  "CNC Fabrication",
];

// ---------------- Contact ----------------
export const contactChannels = [
  { label: "Call us", value: "0432 771 154", href: "tel:0432771154", hint: "Mon–Sat, 7am–5pm", icon: "Phone" },
  { label: "Email us", value: "aetzazgondal@gmail.com", href: "mailto:aetzazgondal@gmail.com", hint: "We reply within one business day", icon: "Mail" },
  { label: "Visit us", value: "20A Winsome Ave, Plumpton NSW 2761", href: undefined, hint: "By appointment", icon: "MapPin" },
];

export const gallery = [
  images.interior,
  images.outdoor,
  images.exteriorModern,
  images.kitchen2,
  images.timber,
  images.bedroom2,
  images.home,
  images.bathroom,
  images.exteriorDusk,
  images.detail,
];
