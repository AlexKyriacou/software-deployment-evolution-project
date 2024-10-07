"use client";
import * as React from "react";
import { TermsAndConditionsSection } from "@/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ContentSectionProps {
  sections: TermsAndConditionsSection[];
}

export const ContentSection: React.FC<ContentSectionProps> = ({ sections }) => {
  return (
    <Accordion type="single" collapsible className="mt-5">
      {sections.map((section, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left">
            {section.title.text}
          </AccordionTrigger>
          <AccordionContent>
            {section.content.map((paragraph, paragraphIndex) => (
              <p key={paragraphIndex} className="mb-4">
                {paragraph.text}
              </p>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
