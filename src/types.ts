export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // Used to dynamically map Lucide icons
}

export type CategoryType = 'Mens' | 'Womens' | 'Seasonal' | 'All';

export interface CollectionItem {
  id: string;
  title: string;
  price: string;
  category: CategoryType;
  subCategory: string; // e.g. "Formal Wear", "Casual Wear", "Dresses", "Summer Collection"
  image: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Men\'s Fashion' | 'Women\'s Fashion' | 'Casual Wear' | 'Formal Wear' | 'Seasonal Collection';
  image: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  photo: string;
  rating: number;
  review: string;
  role: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  numericLimit: number; // for running simulation animation
}

export interface GalleryPhoto {
  id: string;
  image: string;
  tag: string;
}
