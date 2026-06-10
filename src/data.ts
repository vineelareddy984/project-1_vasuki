import { ServiceItem, CollectionItem, PortfolioItem, TestimonialItem, FAQItem, StatItem, GalleryPhoto } from './types';

// Let's import our high-end generated assets so Vite bundles them properly
import heroImage from './assets/images/fashion_hero_1781080191173.png';
import menShowcaseImage from './assets/images/vasuki_men_1781080210793.png';
import womenShowcaseImage from './assets/images/vasuki_women_1781080224455.png';

export const ASSETS = {
  hero: heroImage,
  menShowcase: menShowcaseImage,
  womenShowcase: womenShowcaseImage,
};

export const SERVICES: ServiceItem[] = [
  {
    id: 's1',
    title: 'Custom Clothing Design',
    description: 'Personalized fashion solutions tailored precisely to your measurements, posture, and personality for an impeccable bespoke fit.',
    iconName: 'Shirt',
  },
  {
    id: 's2',
    title: 'Bulk Clothing Orders',
    description: 'Premium corporate apparel and specialized institutional uniforms crafted with high-durability fabrics and impeccable branding.',
    iconName: 'Briefcase',
  },
  {
    id: 's3',
    title: 'Fashion Consultation',
    description: 'Professional style guidance from expert couturiers to help curate custom seasonal looks, colors, and accessories for any occasion.',
    iconName: 'Sparkles',
  },
  {
    id: 's4',
    title: 'Seasonal Collections',
    description: 'Exclusive, limited-run seasonal trends fusing contemporary, artistic aesthetics with functional daily comfort.',
    iconName: 'CalendarDays',
  },
  {
    id: 's5',
    title: 'Premium Fabric Selection',
    description: 'Uncompromising material sourcing featuring the finest GOTS-certified organic cotton, pure Italian silks, cashmeres, and high-grade linens.',
    iconName: 'Scissors',
  },
  {
    id: 's6',
    title: 'Brand Merchandise',
    description: 'Elevated style-aligned custom apparel lines, accessories, and wear crafted to elevate your business presence.',
    iconName: 'Award',
  },
];

export const COLLECTIONS: CollectionItem[] = [
  // Men's Wear
  {
    id: 'c1',
    title: 'Tailored Heritage Suit',
    price: '$799',
    category: 'Mens',
    subCategory: 'Formal Wear',
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'c2',
    title: 'The Clean Oxford Shirt',
    price: '$129',
    category: 'Mens',
    subCategory: 'Shirts',
    image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'c3',
    title: 'Classic Wool Trenchcoat',
    price: '$459',
    category: 'Mens',
    subCategory: 'Casual Wear',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'c4',
    title: 'Signature Pima Cotton Tee',
    price: '$69',
    category: 'Mens',
    subCategory: 'T-Shirts',
    image: 'https://images.unsplash.com/photo-1521903009074-d7ae1c60b15d?auto=format&fit=crop&w=600&q=80',
  },

  // Women's Wear
  {
    id: 'c5',
    title: 'Sienna Silk Flowing Gown',
    price: '$850',
    category: 'Womens',
    subCategory: 'Dresses',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'c6',
    title: 'The Structured Wool Blazer',
    price: '$349',
    category: 'Womens',
    subCategory: 'Office Wear',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'c7',
    title: 'Ethereal Velvet Ethnic Shrug',
    price: '$420',
    category: 'Womens',
    subCategory: 'Ethnic Wear',
    image: 'https://images.unsplash.com/photo-1583266751854-5ae3ada915e8?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'c8',
    title: 'Linen Wrapped Summer Skirt',
    price: '$180',
    category: 'Womens',
    subCategory: 'Western Wear',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80',
  },

  // Seasonal Collection
  {
    id: 'c9',
    title: 'Aurelia Festive Sherwani',
    price: '$1,200',
    category: 'Seasonal',
    subCategory: 'Festival Collection',
    image: 'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'c10',
    title: 'Cashmere Ribbed Turtleneck',
    price: '$280',
    category: 'Seasonal',
    subCategory: 'Winter Collection',
    image: 'https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'c11',
    title: 'Citrus Silk Slip Dress',
    price: '$320',
    category: 'Seasonal',
    subCategory: 'Summer Collection',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=600&q=80',
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Premium Quality Fabrics',
    description: 'We source only absolute tier-one GOTS certified organic fibers, luxury Italian silks, and cashmere.',
  },
  {
    title: 'Modern Fashion Designs',
    description: 'Bold, innovative patterns designed dynamically to encapsulate modern architectural silhouettes.',
  },
  {
    title: 'Affordable Luxuries',
    description: 'Direct-to-consumer value bypassing premium boutique markups for genuine luxury accessibility.',
  },
  {
    title: 'Skilled Craftsmanship',
    description: 'Expert hand-stitched details and high-density thread work done by master level couturiers.',
  },
  {
    title: 'Custom Orders Available',
    description: 'Extensive personalized patterns designed specifically to adapt to client-guided design preferences.',
  },
  {
    title: 'Excellent Customer Support',
    description: 'A 24/7 hyper-dedicated white-glove concierge styling team responsive to every sizing inquiry.',
  },
  {
    title: 'Express Insured Delivery',
    description: 'Nationwide expedited and premium air-courier transit fully insured to arrive pristine.',
  },
  {
    title: 'Uncompromised Guarantee',
    description: 'Risk-free return & tailored exchange assurance policy on every single modern garment order.',
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'Visual Symphony Collection',
    category: 'Casual Wear',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80',
    description: 'Capturing sunset movements with flowing premium silk and loose relaxed patterns.',
  },
  {
    id: 'p2',
    title: 'The Contemporary Gentleman',
    category: 'Men\'s Fashion',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    description: 'Italian double-breasted suit designs structured for modern day workspace leaders.',
  },
  {
    id: 'p3',
    title: 'Empowerment Power-Suiting',
    category: 'Women\'s Fashion',
    image: 'https://images.unsplash.com/photo-1548624149-f9c73335db0e?auto=format&fit=crop&w=800&q=80',
    description: 'Linen-wool corporate blend blazers featuring sharp modern shoulders and high-rise cuffs.',
  },
  {
    id: 'p4',
    title: 'The Solstice Knitwear',
    category: 'Seasonal Collection',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    description: 'Heavyweight organic wool textures crafted precisely for chilly autumn evening layers.',
  },
  {
    id: 'p5',
    title: 'Structure & Form',
    category: 'Formal Wear',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    description: 'Perfect, sharp formal styling emphasizing symmetry and peak lapel geometries.',
  },
  {
    id: 'p6',
    title: 'Ethereal Nomadic Dreams',
    category: 'Women\'s Fashion',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
    description: 'Earth-toned flowy dresses capturing high-contrast light reflections.',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Aishwarya Roy',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    review: 'Vasuki delivers outstanding luxury and stylish designs. The fabric quality and fit exceeded my expectations. The Custom Silk Dress hangs beautifully and draws compliments every single time.',
    role: 'Editorial Director, LuxeMag',
  },
  {
    id: 't2',
    name: 'Vikram Malhotra',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    review: 'Having custom suits tailormade can be stressful, but Vasuki concierge consultation made it incredibly sleek. The premium Italian wool and high density double stitches are breathtaking.',
    role: 'Managing Partner, Alpha Capital',
  },
  {
    id: 't3',
    name: 'Meera Deshmukh',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    review: 'The Linen custom selection is lightweight and pristine for the summers here. Sizing is precise, delivery was fast, and the packaging smelled incredible. Absolute favorite clothing brand!',
    role: 'Senior Architect',
  },
  {
    id: 't4',
    name: 'Rohan Sethi',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    review: 'Outstanding! The winter turtleneck knitwear cashmere blend feels as soft as silk yet keeps perfectly warm. The minimalist visual alignment of Vasuki resonates beautifully with true premium styling.',
    role: 'Co-Founder, TechAlign',
  },
  {
    id: 't5',
    name: 'Pooja Hegde',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    review: 'I ordered structured office-wear and casual dresses. The silhouette fits flawlessly right out of the box. Highly appreciate the focus on sustainable fabrics and transparent ethical sourcing.',
    role: 'Exhibitions Curator',
  },
  {
    id: 't6',
    name: 'Kabir Mehta',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    review: 'Their bulk order craftsmanship for our design agency launch was phenomenal. Every shirt felt premium rather than standard merch. Truly impressive custom embroidered emblems.',
    role: 'Creative Director, Studio Bloom',
  },
];

export const BUSINESS_STATS: StatItem[] = [
  { id: 'st1', value: '10,000+', label: 'Happy Customers', numericLimit: 10000 },
  { id: 'st2', value: '500+', label: 'Clothing Designs', numericLimit: 500 },
  { id: 'st3', value: '50+', label: 'Fashion Collections', numericLimit: 50 },
  { id: 'st4', value: '98%', label: 'Customer Satisfaction', numericLimit: 98 },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'f1',
    question: 'Do you offer custom clothing?',
    answer: 'Yes, Vasuki specializes in bespoke custom clothing solutions. You can easily schedule an online style consultation with our master couturiers, provide your unique body dimensions, and select premium Italian silks, cashmeres, or organic cotton fabrics to craft garments customized precisely for you.',
  },
  {
    id: 'f2',
    question: 'What sizes are available?',
    answer: 'We provide an inclusive range of standard sizes from XS to XXL for both Men and Women, detailed extensively with accurate bust, waist, and length guidelines in our digital sizing table. We also offer tailored customization if you require personalized dimensions outside our standard sizing tiers.',
  },
  {
    id: 'f3',
    question: 'Do you ship nationwide?',
    answer: 'Absolutely. Vasuki provides complimentary premium insured express shipping across India, as well as expedited international shipping to select countries. Each order is tracked with real-time digital transit notifications and beautifully packaged in our secure, eco-friendly luxury gift boxes.',
  },
  {
    id: 'f4',
    question: 'What is your return policy?',
    answer: 'For your absolute confidence, we offer a hassle-free 14-day exchange and return policy on all standard unworn, unwashed garments with tags intact. Bespoke custom clothing commands tailored adjustments; we offer complimentary refitting revisions to ensure your customized garment hangs perfectly.',
  },
  {
    id: 'f5',
    question: 'How can I place bulk orders?',
    answer: 'You can submit corporate uniform or personalized brand merchandise inquiries directly through our custom Contact Section on the website, or by emailing bulk@vasuki.com. An account manager will respond in under 24 hours with custom fabric swatches, pricing estimates, and design pre-render sketches.',
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'g1',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=400&q=80',
    tag: '#SiennaFlow',
  },
  {
    id: 'g2',
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=400&q=80',
    tag: '#HeritageWool',
  },
  {
    id: 'g3',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=400&q=80',
    tag: '#VibrantSolstice',
  },
  {
    id: 'g4',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=400&q=80',
    tag: '#ModernCoutur',
  },
  {
    id: 'g5',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    tag: '#MinimalChic',
  },
  {
    id: 'g6',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=400&q=80',
    tag: '#CasualConfidence',
  },
  {
    id: 'g7',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=400&q=80',
    tag: '#SignatureSilk',
  },
  {
    id: 'g8',
    image: 'https://images.unsplash.com/photo-1583266751854-5ae3ada915e8?auto=format&fit=crop&w=400&q=80',
    tag: '#EthosVelvet',
  },
  {
    id: 'g9',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=400&q=80',
    tag: '#Craftsmanship',
  },
  {
    id: 'g10',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=400&q=80',
    tag: '#StreetLuxe',
  },
  {
    id: 'g11',
    image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=400&q=80',
    tag: '#BespokeCrisp',
  },
  {
    id: 'g12',
    image: 'https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?auto=format&fit=crop&w=400&q=80',
    tag: '#WinterLine',
  },
];
