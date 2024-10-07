import MainSection from "@/components/common/main-section";
import MainSectionBody from "@/components/common/main-section-body";
import Image from "next/image";
import Title from "@/components/common/title";
import Subtitle from "@/components/common/subtitle";
import { PrivacyPolicyConfig, TermsAndConditionsConfig } from "@/types";

type HeroSectionProps = TermsAndConditionsConfig | PrivacyPolicyConfig;

export const HeroSection = ({ config }: { config: HeroSectionProps }) => {
  return (
    <MainSection>
      <MainSectionBody className="space-y-6">
        <Title>{config.heroSection.title.text}</Title>
        <Image
          src={config.heroSection.imagePath}
          alt={config.heroSection.title.text}
          width={300}
          height={300}
          className="dark:rounded-full dark:bg-foreground"
        />
        <Subtitle>{config.heroSection.subtitle?.text}</Subtitle>
      </MainSectionBody>
    </MainSection>
  );
};
