"use client";
import * as React from "react";
import { Section } from "@/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

interface ContentSectionProps {
  sections: Section[];
  defaultOpen?: string[];
}

export const ContentSection: React.FC<ContentSectionProps> = ({
  sections,
  defaultOpen,
}) => {
  return (
    <Accordion type="multiple" defaultValue={defaultOpen} className="mt-5">
      {sections.map((section, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left text-lg">
            {section.title.text}
          </AccordionTrigger>
          <AccordionContent className="grid grid-cols-3">
            <div className="col-span-2">
              {section.content.map((paragraph, paragraphIndex) => (
                <p key={paragraphIndex} className="mb-4">
                  {paragraph.text}
                </p>
              ))}
              {section.subSections && section.subSections.length > 0 && (
                <div>
                  {section.subSections.map((paragraph, paragraphIndex) => (
                    <div>
                      <h2 className="font-bold mb-2">{paragraph.title.text}</h2>
                      <ul
                        key={paragraphIndex}
                        className="list-disc list-inside space-y-2 mb-2"
                      >
                        {paragraph.content.map((subParagraph, subIndex) => (
                          <li key={subIndex}>{subParagraph.text}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="flex col-span-1 justify-center">
              {section.imagePath && (
                <Image
                  src={section.imagePath}
                  alt={section.title.text}
                  width={250}
                  height={250}
                  className="mt-4"
                />
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
