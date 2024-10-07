export interface PrivacyPolicyConfig {
  heroSection: HeroSectionConfig;
  sections: PrivacyPolicySection[];
}

export interface TermsAndConditionsConfig {
  heroSection: HeroSectionConfig;
  sections: TermsAndConditionsSection[];
}

export interface TermsAndConditionsSection {
  title: TextWithMarkup;
  content: TextWithMarkup[];
  imagePath?: string;
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
  subtitle: TextWithMarkup;
  lastUpdated: TextWithMarkup;
  imagePath: string;
}
