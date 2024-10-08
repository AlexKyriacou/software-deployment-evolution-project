"use client";

import MainSection from "@/components/common/main-section";
import MainSectionBody from "@/components/common/main-section-body";
import React from "react";
import Title from "@/components/common/title";
import Image from "next/image";
import Subtitle from "@/components/common/subtitle";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { aboutUsConfig } from "./config";
import Autoplay from "embla-carousel-autoplay";

const AboutUsPage: React.FC = () => {
  const plugin = React.useRef(Autoplay({ delay: 3000 }));
  return (
    <div>
      <MainSection>
        <MainSectionBody>
          <Title className="text-center">About Us</Title>
          <Image
            src="/shaking-hands.svg"
            alt="About us"
            width={400}
            height={300}
            className="dark:rounded-full dark:bg-foreground"
          />
          <Subtitle>
            Flourish & Flow Wellness Center, established in 2020, is a sanctuary
            of healing and rejuvenation nestled in the heart of Melbourne. Our
            mission is to empower individuals to flourish in their daily lives
            and flow seamlessly through life&apos;s challenges, nurturing the
            mind, body, and spirit of our community members.
          </Subtitle>
        </MainSectionBody>
      </MainSection>
      <MainSection className="bg-gray-100 dark:bg-purple-900">
        <MainSectionBody>
          <Title className="text-center">Our Story</Title>
          <Subtitle>
            Founded by Dr. Emma Larsson, a naturopathic physician with over 20
            years of experience, Flourish & Flow was born from a vision to
            create a space where traditional and modern healing practices could
            coexist harmoniously. Dr. Larsson journey began in her native
            Sweden, where she was introduced to the concept of lagom - the art
            of balanced living. This philosophy, combined with the ideas of
            flourishing and flowing, became the cornerstone of our center.
          </Subtitle>
        </MainSectionBody>
      </MainSection>
      <MainSection>
        <MainSectionBody>
          <Title className="text-center">Our Philosophy</Title>
          <Subtitle>
            At Flourish & Flow, we believe that true wellness stems from a
            balance between physical health, mental clarity, and spiritual
            peace. We recognize that each individual path to wellness is unique,
            which is why we offer a diverse range of services and personalized
            treatment plans. Our goal is to help you flourish in all aspects of
            your life and flow effortlessly through your daily routines and
            challenges.
          </Subtitle>
        </MainSectionBody>
      </MainSection>
      <MainSection className="bg-gray-100 dark:bg-purple-900">
        <MainSectionBody>
          <div className="flex flex-col space-y-5">
            <Title className="text-center">Our Team</Title>
            <Subtitle>
              Our center boasts a team of over 30 highly qualified
              professionals, including:
            </Subtitle>
            <ul className="text-foreground list-disc list-inside">
              <li>Naturopathic Doctors</li>
              <li>Registered Massage Therapists</li>
              <li>Certified Yoga and Meditation Instructors</li>
              <li>Licensed Nutritionists</li>
              <li>Acupuncturists</li>
              <li>Personal Trainers</li>
              <li>Mental Health Counselors</li>
              <li>Hydrotherapy Specialists</li>
            </ul>
            <Subtitle>
              Each member of our team is not only an expert in their field but
              also shares our commitment to holistic, client-centered care,
              helping you flourish and flow.
            </Subtitle>
          </div>
        </MainSectionBody>
      </MainSection>
      <MainSection>
        <MainSectionBody>
          <div className="flex flex-col md:flex-row md:space-x-5">
            <div className="flex flex-col space-y-5">
              <Title className="text-center">Our Facility</Title>
              <Subtitle>
                Spanning 15,000 square feet, our state-of-the-art facility
                includes:
              </Subtitle>
              <ul className="text-foreground list-disc list-inside">
                <li>5 fully-equipped yoga and meditation studios</li>
                <li>10 private treatment rooms</li>
                <li>
                  A hydrotherapy center featuring hot and cold plunge pools
                </li>
                <li>A fully-equipped gym with the latest fitness technology</li>
                <li>
                  A health food café serving organic, locally-sourced meals and
                  smoothies
                </li>
                <li>
                  A retail space offering carefully curated wellness products
                </li>
              </ul>
            </div>
            <Carousel
              plugins={[plugin.current]}
              onMouseEnter={() => plugin.current.stop()}
              onMouseLeave={() => plugin.current.play()}
              className="w-full max-w-xs md:max-w-7xl"
              opts={{ align: "start", loop: true }}
            >
              <CarouselContent>
                {aboutUsConfig.carousels.map((carousel, index) => (
                  <CarouselItem key={index}>
                    <Image
                      src={carousel.src}
                      alt={carousel.alt}
                      width={800}
                      height={600}
                      className="mx-auto mt-5 object-cover dark:bg-foreground lg:w-2/3 "
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </MainSectionBody>
      </MainSection>
    </div>
  );
};

export default AboutUsPage;
