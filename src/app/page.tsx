import MainSection from "@/components/common/main-section";
import MainSectionBody from "@/components/common/main-section-body";
import Subtitle from "@/components/common/subtitle";
import Testimonials from "@/app/about-us/components/testmonials";
import Image from "next/image";
import Title from "@/components/common/title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMapMarkerAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="mx-auto mb-10 max-w-7xl px-10">
      <MainSection>
        <MainSectionBody className="space-y-5">
          <Image
            className="dark:invert m-10"
            src="/logo.png"
            alt="Flourish & Flow"
            width={300}
            height={38}
            priority
          />
          <Subtitle>
            Welcome to Flourish & Flow Wellness Center, a sanctuary of healing
            and rejuvenation nestled in the heart of Melbourne. Our mission is
            to empower individuals to flourish in their daily lives and flow
            seamlessly through life&apos;s challenges, nurturing the mind, body,
            and spirit of our community members.
          </Subtitle>
        </MainSectionBody>
      </MainSection>
      <Testimonials />
      <Card>
        <MainSectionBody className="space-y-5">
          <Title>Find Us</Title>
          <div className="text-left w-full space-y-3">
            <div className="flex space-x-2 items-center">
              <FontAwesomeIcon icon={faPhone} className="text-xl" />
              <Subtitle>Phone: (123) 456-7890</Subtitle>
            </div>
            <div className="flex space-x-2 items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl" />
              <Subtitle>
                Address: 123 Wellness Way, Melbourne, VIC 3000
              </Subtitle>
            </div>
            <div className="space-y-2">
              <div className="flex space-x-2 items-center">
                <FontAwesomeIcon icon={faClock} className="text-xl" />
                <Subtitle>Opening Hours</Subtitle>
              </div>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </MainSectionBody>
      </Card>
      <div className="mt-10 text-md text-purple-500 text-center">
        <p>
          Disclaimer: This is a fictitious clinic created for the purpose of
          demonstration for a university deployment unit.{" "}
        </p>
        <p>
          All content has either been AI generated or referenced. In the case of
          YouTube videos and blogs, URLs have been provided.
        </p>
      </div>
    </div>
  );
}
