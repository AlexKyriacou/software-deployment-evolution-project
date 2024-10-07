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
          <AccordionTrigger className="text-left text-xl font-extrabold">
            {section.title.text}
          </AccordionTrigger>
          <AccordionContent className="grid grid-cols-1 md:grid-cols-3">
            <div className={section.imagePath ? "md:col-span-2" : "col-span-1"}>
              {section.content.map((paragraph, paragraphIndex) => (
                <p key={paragraphIndex} className="mb-4">
                  {paragraph.text}
                </p>
              ))}
              {section.subSections && section.subSections.length > 0 && (
                <div>
                  {section.subSections.map((paragraph, paragraphIndex) => (
                    <div key={paragraphIndex}>
                      <h2 className="font-bold mb-2">{paragraph.title.text}</h2>
                      <ul
                        key={paragraphIndex}
                        className="list-disc list-inside space-y-2 mb-4"
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
            {section.imagePath && (
              <div className="flex justify-center mt-4 md:mt-0 md:col-span-1">
                <Image
                  src={section.imagePath}
                  alt={section.title.text}
                  width={250}
                  height={250}
                  className="dark:rounded-full dark:bg-foreground"
                />
              </div>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
