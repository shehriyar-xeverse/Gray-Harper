// Image assets from local build and curated high-quality Unsplash CDN for dark-moody floral elegance
import andreaImg from './assets/images/andrea_founder_1781885603321.jpg';
import premiumLogoImg from './assets/images/gray_harper_pink_logo_1781888373716.jpg';
import heroBgImg from './assets/images/hero_bg_1781885649428.jpg';
import seaIslandRetreatImg from './assets/images/sea_island_retreat_1781887040313.jpg';
import destinationEventFloralsImg from './assets/images/destination_event_florals_1781887062011.jpg';
import coastalGothicFloralsImg from './assets/images/coastal_gothic_florals_1781887084223.jpg';

export const ASSETS = {
  andrea: andreaImg,
  monogram: premiumLogoImg,
  heroBg: heroBgImg,
};

export interface PortfolioItem {
  id: string;
  title: string;
  location: string;
  coverImage: string;
  gallery: string[];
  description: string;
  style: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price?: string;
  details: string[];
  image: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
  location: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  tags: string[];
}

// 1. Portfolio Data (10 real-world projects with locations and high-end imagery)
export const PORTFOLIO: PortfolioItem[] = [
  {
    id: "samantha-cade",
    title: "Samantha & Cade Wedding",
    location: "MSP-705, Savannah Ga",
    coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200",
    description: "An ethereal and romantic affair under standard glass conservatory windows, styled with rich lavender delphiniums, sweet peas, white anemones, and soft dusty rose garden roses, framing the historic architectural brick details.",
    style: "Dark Romantic & Fine Art",
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "the-retreat",
    title: "The Retreat - Sea Island",
    location: "Sea Island, Ga",
    coverImage: seaIslandRetreatImg,
    description: "Dramatic beachfront floral structures featuring deep plum orchids and heavy hanging moss, bringing the raw mystery of the marsh to a luxurious, high-end tent celebration in the late evening.",
    style: "Artistic Coastal Gothic",
    gallery: [
      seaIslandRetreatImg,
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "lindsey-jonah",
    title: "Lindsey & Jonah Wedding",
    location: "Jekyll Island, Ga",
    coverImage: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=1200",
    description: "A gorgeous modern outdoor ceremony positioned beautifully with wild ranunculus, sweet bay branches, white poppies, and deep silver eucalyptus arrangements catching the ocean breeze.",
    style: "Modern Organic & Romantic",
    gallery: [
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1546842931-886c185b4c8c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1487070183336-b863922373d4?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "crane-cottage",
    title: "Crane Cottage - Jekyll Island Club",
    location: "Jekyll Island Club, Ga",
    coverImage: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=1200",
    description: "Over-the-top botanical tablescapes inside the Italianate villa courtyard, utilizing dramatic overhead vine suspensions, deep velvet plum rose runners, and glass cylinder candles for candlelit elegance.",
    style: "European Imperial Editorial",
    gallery: [
      "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1507504038482-762618d23dd5?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "gracie-byrd-jones",
    title: "Gracie Byrd Jones Wedding",
    location: "Historic Savannah District",
    coverImage: "https://images.unsplash.com/photo-1487070183336-b863922373d4?auto=format&fit=crop&q=80&w=1200",
    description: "Deep burgundy garden roses paired with charcoal ferns and structure ivy. Designed with a poetic, painterly composition highlighting moodiness and striking classical profiles.",
    style: "Deep Baroque Moody",
    gallery: [
      "https://images.unsplash.com/photo-1487070183336-b863922373d4?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "ships-of-the-sea",
    title: "Ships of the Sea Maritime Museum",
    location: "Savannah, Ga",
    coverImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200",
    description: "Gigantic installation on the open museum scaffolds, covering the ceiling in hundreds of cascading white wisterias and deep silver mosses, with striking modern dark velvet tablecloth styling.",
    style: "Symmetrical Botanical Architecture",
    gallery: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "ford-field-river",
    title: "Ford Field + River Club",
    location: "Richmond Hill, Ga",
    coverImage: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=1200",
    description: "Artfully curated tablescapes highlighting the classic southern oaks. Features gorgeous dark purple sweet peas, structural plum calla lilies, and deep forest-toned tableware details under glowing glass fixtures.",
    style: "Luxury Southern Editorial",
    gallery: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "jekyll-island-wedding",
    title: "Jekyll Island Wedding",
    location: "Villa Ospo, Ga",
    coverImage: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=1200",
    description: "An elegant, tailored wedding ceremony featuring custom floral arches layered in deep purple, soft mauves, and bright whites, contrasting beautifully with Spanish-style arches and natural moss trees.",
    style: "Mediterranean High-End Romantic",
    gallery: [
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "forbes-farm",
    title: "Forbes Farm",
    location: "St. Simons Island, Ga",
    coverImage: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=1200",
    description: "Artistic farm landscapes blended with structural installations of deep mulberry, dark elderberry branches, and pristine white gardenias, bringing rich sculptural form to a sleek black barn.",
    style: "Brutalist Pastoral",
    gallery: [
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1487070183336-b863922373d4?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1546842931-886c185b4c8c?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "savannah-yacht-club",
    title: "Savannah Yacht Club",
    location: "Savannah, Ga",
    coverImage: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&q=80&w=1200",
    description: "Sleek tables featuring clean crystal vases, floating sweet peas, and custom monochromatic white floral designs juxtaposed with midnight blue tablecloth accents.",
    style: "Modern Nautical Noir",
    gallery: [
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1507504038482-762618d23dd5?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800"
    ]
  }
];

// 2. Services Data (Main Service plus 4 additional premium services)
export const SERVICES: ServiceItem[] = [
  {
    id: "full-service-wedding-event",
    title: "Full Service Wedding & Event Floral Design",
    description: "Complete artistic direction, custom curation, sourcing, transport, and on-site meticulous installation. We manage every single stem, table layer, and structural hanging to construct breathtaking atmospheric transformations.",
    price: "$125 per person starting budget",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
    details: [
      "Bespoke floral architecture designed specifically for your venue dimensions",
      "Personalized table layouts, table settings, linen coordination, and candle mapping",
      "Exclusive sourcing from premium local, Italian, and Dutch specialty growers",
      "On-site installation led personally by Andrea Harper and our senior technicians",
      "Complete end-of-event tear-down, recovery, and bouquet gifting setups"
    ]
  },
  {
    id: "custom-floral-installations",
    title: "Custom Floral Installations",
    description: "Aesthetic botanical sculpture. Over-the-top installations, column wraps, floating clouds, and stairwell takeovers built as temporal gallery pieces in fine-art formats.",
    price: "Custom architectural scope",
    image: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=800",
    details: [
      "Ceiling moss and hanging vine cloud matrices",
      "Live structural arches and floral column cascades",
      "Spatial pop-ups and photographic backdrops",
      "Secure custom engineering for delicate historic plaster/venues"
    ]
  },
  {
    id: "destination-event-florals",
    title: "Destination Event Florals",
    description: "Bringing our artistic custom flora style to gorgeous architectural sites worldwide. We pack our premium design systems to craft luxury settings anywhere.",
    price: "Portfolio travel required",
    image: destinationEventFloralsImg,
    details: [
      "Remote floral farm reservation & global grower importing",
      "Full logistics, shipping, customs clearances management",
      "Sourcing unique indigenous botanics corresponding to local biomes",
      "Complete assembly and custom installation worldwide"
    ]
  },
  {
    id: "luxury-table-styling",
    title: "Luxury Table Styling",
    description: "Curated tabletop design where flora interfaces with porcelain, premium cutlery, glassware, candles, and bespoke calligraphy.",
    price: "$35 per seat setup fee",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800",
    details: [
      "Handmade silk runners, linen, custom velvet drapery",
      "Designer taper candle matching & secure glass cylinders",
      "Precision layouts coordinating florist design with meal course structure",
      "Custom menus, place cards, luxury paper texture reviews"
    ]
  },
  {
    id: "corporate-event-floral-design",
    title: "Corporate Event Floral Design",
    description: "Sleek, brand-aligned modern botanical designs for luxury galas, galleries, brand launches, and premium editorial releases.",
    price: "Aesthetic retainer scope",
    image: "https://images.unsplash.com/photo-1487070183336-b863922373d4?auto=format&fit=crop&q=80&w=800",
    details: [
      "Color theory matching directly to brand identity guidelines",
      "Streamlined modern structural motifs for high-end galleries",
      "Quick professional setup and cleanup around active business hours",
      "Lobby and VIP lounge custom arrangements"
    ]
  }
];

// 3. Testimonials Data (Bride, planner, etc., with real roles)
export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "testimonial-1",
    name: "Eleanor Vance",
    role: "Mother of the Bride",
    quote: "Andrea is one of the most creative floral designers I have ever seen. She took our loose, vague colors and shaped it into a dark romantic canvas of orchids, sweet peas, and deep plum velvet that literally stopped our 200 guests in their tracks. It felt like walking through a private artistic botanical museum.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
    location: "Crane Cottage"
  },
  {
    id: "testimonial-2",
    name: "Marcella Thorne",
    role: "Lead Event Architect, Thorne Events",
    quote: "Working with Gray Harper is a planner’s dream. Andrea's SCAD arts background transforms basic floristry into structural installation engineering. Every single custom arch is exceptionally balanced and beautiful. Guests were completely transfixed by the towering wisteria ceiling cascades.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    location: "Savannah Yacht Club"
  },
  {
    id: "testimonial-3",
    name: "Clara & Joshua",
    role: "Bride & Groom",
    quote: "The tablescapes were absolute poetry. The combination of plum ranunculus, dark charcoal ferns, and glass cylinders created a warm, candlelit moody fantasy. It was perfectly dramatic, elegant, and entirely us. Our photos look like museum oil paintings.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200",
    location: "Sea Island Resort"
  },
  {
    id: "testimonial-4",
    name: "Genevieve Dubois",
    role: "Director, Savannah Modern Art Center",
    quote: "We commissioned Gray Harper for our annual winter solstice gala. Andrea designed an installation of dark velvet moss walls and hanging charcoal pine branches that was incredibly bold and modern. It broke every boring floral convention in the best possible way.",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=200",
    location: "Ships of the Sea"
  }
];

// 4. Blog Data (Minimum 8 posts with rich floral insights)
export const BLOG_POSTS: BlogPost[] = [
  {
    id: "moody-florals-winter-palette",
    title: "The Art of Moody Florals: Navigating Darker Seasonal Palettes",
    excerpt: "Ditch the boring traditional brights. Deep velvet, plum violet, dark forest greenery, and charcoal rose stems compose a luxury atmosphere.",
    content: "When designing for high-end events, many clients believe they must stick to safe pastel color fields. We challenge this. Moody dark color palettes offer a deeply poetic complexity. Selecting deep burgundy garden roses (such as the Black Baccara), pairing them with trailing structural velvet ribbons, cascading slate eucalyptus, and deep plum ranunculus creates a romantic painterly dimension. By using theatrical spotlights rather than flat fluorescent room lighting, every petal casts dramatic shadows, echoing classical Renaissance oil paintings. To execute this safely, keep shadows high and use bright white anemones or sweet peas as contrasting points without resorting to yellow or gold tones.",
    category: "Design Advice",
    date: "November 14, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1487070183336-b863922373d4?auto=format&fit=crop&q=80&w=800",
    author: "Andrea Harper",
    tags: ["Color Styling", "Moody Design", "Floral Sourcing"]
  },
  {
    id: "installations-crane-cottage-guide",
    title: "Courtyard Column takeovers at Crane Cottage - Architectural Planning",
    excerpt: "How we engineered a live cascading overhead vine matrix within Jekyll Island’s classical Italianate villa.",
    content: "Crane Cottage is a gem of Venetian-inspired classical architecture. Standard floral stands get completely lost in its grandeur. Instead, we planned a structural column wrapper made of live southern oak branches, wild jasmine, and trailing dark ivy. Sourcing vines up to fifteen feet long allowed us to build seamless growth patterns flowing from the courtyard stone floor up into the wooden ceiling vaults. We avoided physical damage to the historic plaster by installing custom counterweight timber structures behind the leaf layers, making the installation look floating and magical while protecting the historic site.",
    category: "Case Study",
    date: "October 3, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=800",
    author: "Andrea Harper",
    tags: ["Jekyll Island", "Sizing & Scale", "Event Architecture"]
  },
  {
    id: "custom-tabletop-candle-mapping",
    title: "Tabletop Layering: Siting Candles, Linen texturing, Flowers",
    excerpt: "Sleek tabletop layout guidelines to ensure your floral centerpieces coordinate flawlessly with tableware and menus.",
    content: "Table styling is where fine art meets physical hospitality. We treat every table as a structural grid. Placing flowers is only twenty percent of the effort; the other eighty is organizing linens, glassware, custom velvet draperies, corporate stationery, and candle clusters. We recommend layered velvet runners in charcoal gray, customized hand-dyed silk ribbons on select napkins, of-the-earth custom silverware, and glass cylinders housing plum taper candles at fluctuating heights. This keeps the eyes scanning across the tabletop and prevents flat angles.",
    category: "Table Styling",
    date: "September 24, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800",
    author: "Andrea Harper",
    tags: ["Table Layouts", "Candlelight", "Textile Matching"]
  },
  {
    id: "coastal-gothic-floral-curation",
    title: "Coastal Gothic: Embracing the Wild Mystique of Coastal Georgia",
    excerpt: "Blending Sea Island spanish moss, dry cypress, dark purple orchids, and calla lilies.",
    content: "The lowcountry has a highly specific botanical poetry—moss draped over standard ancient oaks, water reflecting light, deep marsh greens. To capture this wild nature without feeling rustic, we curate Coastal Gothic. We blend exotic imported dark blooms (deep grape hydrangeas, purple calathea leaves, dark plum calla lilies) directly with raw textured branches of dry coastal cypress and grey hanging moss. It integrates the atmospheric coastal Georgia surroundings into a modern high-fashion aesthetic.",
    category: "Inspiration",
    date: "August 12, 2025",
    readTime: "6 min read",
    image: coastalGothicFloralsImg,
    author: "Andrea Harper",
    tags: ["Georgia Lowcountry", "Fine Art", "Moodboard"]
  },
  {
    id: "sourcing-fine-art-blooms-world",
    title: "The Sourcing Diary: Where and How We Secure Our Stems",
    excerpt: "A look into private Dutch auctions, Japanese flower growers, and South America specialties.",
    content: "In building bespoke floral events, quality is absolute. This post details our premium global supply line. Every Monday, we place orders with Dutch cooperatives for unique black parrot tulips, Italian farms for delicate ranunculus, and local Georgia farms for organic gardenias and live oak limbs. This ensures maximum fresh blooms that hold their structural integrity through multiday beach events.",
    category: "Sourcing Diary",
    date: "July 29, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=800",
    author: "Andrea Harper",
    tags: ["Supply Chain", "Stem Selection", "Behind The Scenes"]
  },
  {
    id: "anemone-modern-minimalism",
    title: "The Modern Power of the White Anemone in Dark Design",
    excerpt: "How the striking black center of the white anemone defines contrast in contemporary florist layouts.",
    content: "Minimalism is not about empty space; it is about stark, powerful contrasts. We love white anemones for their distinct, ink-black centers. Placed against charcoal leaves and plum sweet peas, they act as focal visual anchors. We discuss clean design configurations avoiding gold or brass accents to let the pure botanical colors speak for themselves.",
    category: "Aesthetic",
    date: "June 15, 2025",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=800",
    author: "Andrea Harper",
    tags: ["Anemones", "Minimalism", "High Contrast"]
  },
  {
    id: "planning-large-scale-installations",
    title: "Planning Large-Scale Floral Installations for Historic Sites",
    excerpt: "Engineering beautiful botanical monuments within protected national historic landmarks.",
    content: "Historic sites like Ships of the Sea Museum or Savannah Yacht Club require absolute structural safety. We run rigorous dimensional scaling and wind testing. Read our process for planning high-wire floral arrays utilizing structural steel pipe, specialized foam matrices, and non-damaging architectural clippers to guarantee safety.",
    category: "Engineering",
    date: "April 18, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
    author: "Andrea Harper",
    tags: ["Historic Structures", "Rigging Safety", "Technical Designs"]
  },
  {
    id: "the-psychology-of-botanical-scent",
    title: "The Olfactory Layer: Curating Scent Narratives for Events",
    excerpt: "Blending sweet jasmine, spicy eucalyptus, and dark chocolate roses to create memorable olfactory scores.",
    content: "Scent bypasses conscious thought, triggering nostalgia and raw emotion. We construct distinct olfactory scores for our luxury receptions. Coupling heavy romantic blooms with resinous cedar and herbaceous rosemary crafts a thick scent experience without overpowering dining areas. Here is a curated guide of fragrance mappings for wedding receptions.",
    category: "Event Experience",
    date: "March 2, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    author: "Andrea Harper",
    tags: ["Olfactory Design", "Sensory Layouts", "Aromatics"]
  }
];
