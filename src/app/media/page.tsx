"use client";

import { useState } from "react";
import MainSection from "@/components/common/main-section";
import MainSectionBody from "@/components/common/main-section-body";
import Title from "@/components/common/title";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { mediaConfig } from "./config";

export default function MediaPage() {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);

  return (
    <div className="mx-auto mb-10 max-w-7xl">
      <MainSection>
        <MainSectionBody>
          <Title>Media</Title>
          <Image
            src="/man-on-laptop-youtube.svg"
            alt="About us"
            width={400}
            height={400}
            className="dark:rounded-full dark:bg-foreground"
          />
        </MainSectionBody>
      </MainSection>
      <Card className="mt-5 w-full">
        <CardHeader>
          <CardTitle className="text-xl">Useful Videos</CardTitle>
        </CardHeader>
        <div className="flex flex-col items-start py-4 md:flex-row">
          <CardContent className="md:w-1/3">
            {mediaConfig.videos.map((video, index) => (
              <div
                key={video.id}
                className={`cursor-pointer p-5 ${
                  selectedVideoIndex === index ? "bg-secondary" : ""
                }`}
                onClick={() => setSelectedVideoIndex(index)}
              >
                <p className="font-medium leading-none">{video.title}</p>
              </div>
            ))}
          </CardContent>
          <CardContent className="md:w-2/3" style={{ margin: 0 }}>
            {selectedVideoIndex !== null &&
              mediaConfig.videos[selectedVideoIndex] && (
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    className="size-full"
                    style={{ aspectRatio: "16/9" }}
                    src={mediaConfig.videos[selectedVideoIndex].src}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
