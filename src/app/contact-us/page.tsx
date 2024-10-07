"use client";

import { useState } from "react";
import MainSection from "@/components/common/main-section";
import MainSectionBody from "@/components/common/main-section-body";
import Title from "@/components/common/title";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

export default function ContactUsPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function submit() {
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    toast({ title: "Success", description: "Message sent successfully" });
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div className="mx-auto mb-10 max-w-7xl px-10">
      <MainSection>
        <MainSectionBody>
          <Title>Contact Us</Title>
          <Image
            src="/customer-support.svg"
            alt="About us"
            width={400}
            height={400}
            className="dark:rounded-full dark:bg-foreground"
          />
        </MainSectionBody>
      </MainSection>
      <Card className="mt-5 w-full">
        <CardHeader>
          <CardTitle className="text-xl">Get in Touch</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-1 pb-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="space-y-1 pb-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-1 pb-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="flex justify-end pt-2">
            <Button onClick={submit}>Submit</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
