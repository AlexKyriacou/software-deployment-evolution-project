import { TermsAndConditionsSection, TextWithMarkup } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Typography from "@/components/ui/typography";
import { Key } from "react";
import Image from "next/image";

interface SectionCardProps {
  section: TermsAndConditionsSection;
}

export const SectionCard: React.FC<SectionCardProps> = ({ section }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{section.title.text}</CardTitle>
      </CardHeader>
      <CardContent>
        {section.content.map(
          (paragraph: TextWithMarkup, paragraphIndex: Key) => (
            <Typography key={paragraphIndex} variant="p">
              {paragraph.text}
            </Typography>
          )
        )}
      </CardContent>
      {section.imagePath && (
        <Image
          alt={section.title.text}
          src={section.imagePath}
          width={300}
          height={300}
        />
      )}
    </Card>
  );
};
