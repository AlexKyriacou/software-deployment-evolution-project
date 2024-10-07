import { FaqConfig } from "@/types";

export const faqConfig: FaqConfig = {
  heroSection: {
    title: { text: "Frequently Asked Questions" },
    subtitle: {
      text: "Here are some common questions about our services. If you have any other questions, feel free to contact us.",
    },
    imagePath: "/question-mark.svg",
  },
  sections: [
    {
      title: { text: "1. What is Flourish & Flow Wellness Center?" },
      content: [
        {
          text: "Flourish & Flow Wellness Center is a holistic wellness center that offers a range of services to help you achieve optimal health and well-being. Our services include yoga classes, meditation sessions, massage therapy, and nutrition counseling.",
        },
      ],
    },
    {
      title: { text: "2. How can I book a service?" },
      content: [
        {
          text: "You can book a service by visiting our website and selecting the service you would like to book. You can also call us at (123) 456-7890 to book a service over the phone.",
        },
      ],
    },
    {
      title: { text: "3. What are your hours of operation?" },
      content: [
        {
          text: "Our hours of operation are Monday to Friday from 9:00 am to 6:00 pm and Saturday from 10:00 am to 4:00 pm. We are closed on Sundays and public holidays.",
        },
      ],
    },
    {
      title: { text: "4. Do you offer gift cards?" },
      content: [
        {
          text: "Yes, we offer gift cards for all of our services. You can purchase a gift card online or at our facility.",
        },
      ],
    },
  ],
};
