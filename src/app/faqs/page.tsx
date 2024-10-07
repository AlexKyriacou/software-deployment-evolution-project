"use client";
import { HeroSection } from "@/app/legal/components/hero-section";
import { faqConfig } from "./config";
import { ContentSection } from "@/components/common/content-section";
import Subtitle from "@/components/common/subtitle";

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto mb-10 max-w-7xl px-10">
      <HeroSection config={faqConfig} />
      <ContentSection sections={faqConfig.sections} defaultOpen={["item-0"]} />
      <Subtitle className="mt-3">
        {faqConfig.heroSection.lastUpdated?.text}
      </Subtitle>
    </div>
  );
}
