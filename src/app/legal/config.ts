import { TermsAndConditionsConfig, PrivacyPolicyConfig } from "@/types";

export const privacyPolicyConfig: PrivacyPolicyConfig = {
  heroSection: {
    title: { text: "Privacy Policy" },
    subtitle: {
      text: "Flourish & Flow Wellness Center is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us in any way.",
    },
    lastUpdated: { text: "Last Updated: 07/10/2024" },
    imagePath: "/presentation.svg",
  },
  sections: [
    {
      title: { text: "1. Information We Collect" },
      content: [
        {
          text: "(a) Personal Information such as name, email address, phone number, and other information you provide.",
        },
        {
          text: "(b) Non-Personal Information such as IP address, browser type, domain names, and other anonymous statistical data.",
        },
      ],
    },
    {
      title: { text: "2. How We Use Your Information" },
      content: [
        {
          text: "We use your information to provide and improve our services, communicate with you about our services, promotions, and events, process payments, personalize your experience, and comply with legal obligations.",
        },
      ],
    },
    {
      title: { text: "3. Information Sharing and Disclosure" },
      content: [
        {
          text: "We may share your information with service providers who assist in our operations, legal and regulatory authorities when required by law, and potential buyers in the event of a sale or merger of our business. We do not sell your personal information to third parties.",
        },
      ],
    },
    {
      title: { text: "4. Data Security" },
      content: [
        {
          text: "We implement reasonable security measures to protect your information. However, no method of transmission over the Internet or electronic storage is 100% secure.",
        },
      ],
    },
    {
      title: { text: "5. Your Rights" },
      content: [
        {
          text: "You have the right to access your personal information, correct any inaccuracies, request the deletion of your information, and opt-out of certain data sharing practices.",
        },
      ],
    },
    {
      title: { text: "6. Changes to This Privacy Policy" },
      content: [
        {
          text: "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.",
        },
      ],
    },
  ],
};

export const termsAndConditionsConfig: TermsAndConditionsConfig = {
  heroSection: {
    title: { text: "Terms and Conditions" },
    subtitle: {
      text: "By accessing or using the services provided by Flourish & Flow Wellness Center (we, our, or us), you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.",
    },
    lastUpdated: { text: "Last Updated: 07/10/2024" },
    imagePath: "/taking-notes.svg",
  },
  sections: [
    {
      title: { text: "1. Services" },
      content: [
        {
          text: "We offer various wellness services, including but not limited to yoga classes, massage therapy, nutritional counseling, and personal training. All services are subject to availability and may change without notice.",
        },
      ],
    },
    {
      title: { text: "2. User Responsibilities" },
      content: [
        {
          text: "(1) Health Conditions: You are responsible for disclosing any health conditions or limitations that may affect your ability to safely participate in our services.",
        },
        {
          text: "(2) Conduct: You agree to behave in a respectful manner towards our staff and other clients. We reserve the right to refuse service to anyone for any reason.",
        },
      ],
    },
    {
      title: { text: "3. Payments and Refunds" },
      content: [
        {
          text: "(1) Fees: Fees for our services are as posted on our website or at our facility. We reserve the right to change our fees at any time.",
        },
        {
          text: "(2) Refunds: Refund policies vary by service. Please refer to the specific service agreement or contact our customer service for details.",
        },
      ],
    },
    {
      title: { text: "4. Cancellation Policy" },
      content: [
        {
          text: "Cancellation policies vary by service. Please refer to the specific service agreement or contact our customer service for details.",
        },
      ],
    },
    {
      title: { text: "5. Limitation of Liability" },
      content: [
        {
          text: "To the fullest extent permitted by law, Flourish & Flow Wellness Center shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.",
        },
      ],
    },
    {
      title: { text: "6. Intellectual Property" },
      content: [
        {
          text: "All content on our website and materials provided during services are the property of Flourish & Flow Wellness Center and protected by copyright laws.",
        },
      ],
    },
    {
      title: { text: "7. Modifications to Terms" },
      content: [
        {
          text: "We reserve the right to modify these Terms and Conditions at any time. Continued use of our services after any such changes shall constitute your consent to such changes.",
        },
      ],
    },
    {
      title: { text: "8. Governing Law" },
      content: [
        {
          text: "These Terms and Conditions are governed by and construed in accordance with the laws of Victoria, without regard to its conflict of law principles.",
        },
      ],
    },
  ],
};
