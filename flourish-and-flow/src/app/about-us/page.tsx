import MainSection from "@/components/common/main-section";
import MainSectionBody from "@/components/common/main-section-body";
import React from "react";
import Title from "@/components/common/title";
import Image from "next/image";
import Subtitle from "@/components/common/subtitle";

const AboutUsPage: React.FC = () => {
  return (
    <div>
      <MainSection>
        <MainSectionBody>
          <Image
            src="/shaking-hands.svg"
            alt="About us"
            width={400}
            height={300}
            className="dark:rounded-full dark:bg-foreground"
          />
          <div className="flex flex-col space-y-5">
            <Title className="text-center">About Us</Title>
            <Subtitle className="text-lg">
              Flourish & Flow Wellness Center, established in 2020, is a
              sanctuary of healing and rejuvenation nestled in the heart of
              Melbourne. Our mission is to empower individuals to flourish in
              their daily lives and flow seamlessly through life's challenges,
              nurturing the mind, body, and spirit of our community members.
            </Subtitle>
          </div>
        </MainSectionBody>
      </MainSection>
    </div>
  );
};

export default AboutUsPage;
