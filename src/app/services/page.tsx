"use client";
import { HeroSection } from "@/app/legal/components/hero-section";
import { servicesConfig } from "./config";
import { ContentSection } from "@/components/common/content-section";

export default function ServicesPage() {
  return (
    <div className="mx-auto mb-10 max-w-7xl px-10">
      <HeroSection config={servicesConfig} />
      <ContentSection
        sections={servicesConfig.sections}
        defaultOpen={[
          "item-0",
          "item-1",
          "item-2",
          "item-3",
          "item-4",
          "item-5",
        ]}
      />
    </div>
  );
}
