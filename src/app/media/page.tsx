"use client";

import { useState } from "react";
import MainSection from "@/components/common/main-section";
import MainSectionBody from "@/components/common/main-section-body";
import Title from "@/components/common/title";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { mediaConfig } from "./config";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import Link from "next/link";

export default function MediaPage() {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  const [selectedBlogIndex, setSelectedBlogIndex] = useState(0);
  const [videoTitle, setVideoTitle] = useState("");
  const [videoSrc, setVideoSrc] = useState("");
  const [blogTitle, setBlogTitle] = useState("");
  const [blogSrc, setBlogSrc] = useState("");
  const [blogImage, setBlogImage] = useState("");

  function addVideo() {
    console.log("Title:", videoTitle);
    console.log("Embedding URL:", videoSrc);
    toast({ title: "Success", description: "Video added successfully" });
    setVideoTitle("");
    setVideoSrc("");
    //TODO: Save Video to DB
  }

  function addBlog() {
    console.log("Title:", blogTitle);
    console.log("URL:", blogSrc);
    console.log("Image:", blogImage);
    toast({ title: "Success", description: "Blog added successfully" });
    setBlogTitle("");
    setBlogSrc("");
    setBlogImage("");
    //TODO: Save Blog to DB
  }

  return (
    <div className="mx-auto mb-10 max-w-7xl">
      <MainSection>
        <MainSectionBody>
          <Title>Media</Title>
          <Image
            src="/woman-on-laptop-google.svg"
            alt="About us"
            width={400}
            height={400}
            className="dark:rounded-full dark:bg-foreground"
          />
        </MainSectionBody>
      </MainSection>
      <Card className="m-5 p-5">
        <div className="flex flex-row items-center justify-between">
          <CardTitle className="text-xl">Useful Videos</CardTitle>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Add New Video</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Video</DialogTitle>
              </DialogHeader>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                type="text"
                value={videoTitle}
                onChange={(e) => setVideoTitle(e.target.value)}
              />
              <Label htmlFor="src">Embedding URL</Label>
              <Input
                id="src"
                type="text"
                value={videoSrc}
                onChange={(e) => setVideoSrc(e.target.value)}
              />
              <DialogFooter className="sm:justify-start">
                <DialogClose asChild>
                  <Button type="button" variant="secondary" onClick={addVideo}>
                    Submit
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
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
      <Card className="m-5 p-5">
        <div className="flex flex-row items-center justify-between">
          <CardTitle className="text-xl">Latest Blogs</CardTitle>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Add New Blog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Blog</DialogTitle>
              </DialogHeader>
              <Label htmlFor="blogTitle">Title</Label>
              <Input
                id="blogTitle"
                type="text"
                value={blogTitle}
                onChange={(e) => setBlogTitle(e.target.value)}
              />
              <Label htmlFor="blogSrc">URL</Label>
              <Input
                id="blogSrc"
                type="text"
                value={blogSrc}
                onChange={(e) => setBlogSrc(e.target.value)}
              />
              <Label htmlFor="blogImage">Image</Label>
              <Input
                id="blogImage"
                type="text"
                value={blogImage}
                onChange={(e) => setBlogImage(e.target.value)}
              />
              <DialogFooter className="sm:justify-start">
                <DialogClose asChild>
                  <Button type="button" variant="secondary" onClick={addBlog}>
                    Submit
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <div className="flex flex-col items-start py-4 md:flex-row">
          <CardContent className="md:w-1/3">
            {mediaConfig.blogs.map((blog, index) => (
              <div
                key={blog.id}
                className={`cursor-pointer p-5 ${
                  selectedBlogIndex === index ? "bg-secondary" : ""
                }`}
                onClick={() => setSelectedBlogIndex(index)}
              >
                <p className="font-medium leading-none">{blog.title}</p>
              </div>
            ))}
          </CardContent>
          <CardContent className="md:w-2/3" style={{ margin: 0 }}>
            {selectedBlogIndex !== null &&
              mediaConfig.blogs[selectedBlogIndex] && (
                <Link
                  href={mediaConfig.blogs[selectedBlogIndex].src}
                  target="_blank"
                >
                  <Image
                    src={mediaConfig.blogs[selectedBlogIndex].image}
                    alt={mediaConfig.blogs[selectedBlogIndex].title}
                    width={900}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </Link>
              )}
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
