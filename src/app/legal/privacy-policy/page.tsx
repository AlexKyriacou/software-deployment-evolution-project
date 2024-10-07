"use client";
import { HeroSection } from "@/app/legal/components/hero-section";
import { privacyPolicyConfig } from "../config";
import { ContentSection } from "@/components/common/content-section";
import Subtitle from "@/components/common/subtitle";

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto mb-10 max-w-7xl px-10">
      <HeroSection config={privacyPolicyConfig} />
      <ContentSection sections={privacyPolicyConfig.sections} />
      <Subtitle className="mt-3">
        {privacyPolicyConfig.heroSection.lastUpdated?.text}
      </Subtitle>
    </div>
  );
}
