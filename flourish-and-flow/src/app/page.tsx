import MainSection from "@/components/common/main-section";
import MainSectionBody from "@/components/common/main-section-body";
import Subtitle from "@/components/common/subtitle";
import Image from "next/image";

export default function Home() {
  return (
    <MainSection>
      <MainSectionBody className="space-y-5">
        <Image
          className="dark:invert"
          src="/logo.png"
          alt="Flourish & Flow"
          width={300}
          height={38}
          priority
        />
        <Subtitle className="text-lg">
          Welcome to Flourish & Flow Wellness Center, a sanctuary of healing and
          rejuvenation nestled in the heart of Melbourne. Our mission is to
          empower individuals to flourish in their daily lives and flow
          seamlessly through life's challenges, nurturing the mind, body, and
          spirit of our community members.
        </Subtitle>
      </MainSectionBody>
    </MainSection>
  );
}
