"use client";
import { HeroSection } from "@/app/legal/components/hero-section";
import { termsAndConditionsConfig } from "../config";
import { ContentSection } from "@/components/common/content-section";
import Subtitle from "@/components/common/subtitle";

export default function TermsAndConditionsPage() {
  return (
    <div className="mx-auto mb-10 max-w-7xl px-10">
      <HeroSection config={termsAndConditionsConfig} />
      <ContentSection sections={termsAndConditionsConfig.sections} />
      <Subtitle className="mt-3">
        {termsAndConditionsConfig.heroSection.lastUpdated?.text}
      </Subtitle>
    </div>
  );
}
