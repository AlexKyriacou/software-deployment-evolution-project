import Title from "../../../components/common/title";
import MainSection from "../../../components/common/main-section";
import MainSectionBody from "../../../components/common/main-section-body";
import { aboutUsConfig } from "../config";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Testimonials() {
  return (
    <div className="mb-6">
      <MainSection>
        <MainSectionBody>
          <Title>Client Testimonials</Title>
        </MainSectionBody>
      </MainSection>
      <div className="flex flex-wrap gap-4">
        {aboutUsConfig.testimonials.map((testimonial) => (
          <Card key={testimonial.name} className="w-96">
            <CardHeader>
              <CardTitle>{testimonial.name}</CardTitle>
            </CardHeader>
            <CardContent>{testimonial.content}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
