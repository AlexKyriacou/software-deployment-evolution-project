interface Carousel {
  src: string;
  alt: string;
  href: string;
}

export interface AboutUsConfig {
  carousels: Carousel[];
  testimonials: {
    name: string;
    content: string;
  }[];
}

export interface PrivacyPolicyConfig {
  heroSection: HeroSectionConfig;
  sections: Section[];
}

export interface TermsAndConditionsConfig {
  heroSection: HeroSectionConfig;
  sections: Section[];
}

export interface ServicesConfig {
  heroSection: HeroSectionConfig;
  sections: Section[];
}

export interface FaqConfig {
  heroSection: HeroSectionConfig;
  sections: Section[];
}

export interface Section {
  title: TextWithMarkup;
  content: TextWithMarkup[];
  imagePath?: string;
  subSections?: {
    title: TextWithMarkup;
    content: TextWithMarkup[];
  }[];
}

type MarkupElement = {
  type: string;
  text: string;
  className?: string;
};

export type TextWithMarkup = {
  text: string;
  markup?: MarkupElement[];
};

export interface HeroSectionConfig {
  title: TextWithMarkup;
  subtitle?: TextWithMarkup;
  lastUpdated?: TextWithMarkup;
  imagePath: string;
}

interface Video {
  id: number;
  title: string;
  src: string;
}

interface Blog {
  id: number;
  title: string;
  src: string;
  image: string;
}

export interface MediaConfig {
  videos: Video[];
  blogs: Blog[];
}
