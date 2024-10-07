export interface PrivacyPolicyConfig {
  heroSection: HeroSectionConfig;
  sections: Section[];
}

export interface TermsAndConditionsConfig {
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

export interface ServicesConfig {
  heroSection: HeroSectionConfig;
  sections: Section[];
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
