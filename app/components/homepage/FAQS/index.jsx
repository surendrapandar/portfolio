"use client";

import { CustomAccordion } from "./custom-accordion";

export default function FaqSection() {
  const faqs = [
    {
      question: "What is an MVP and why do I need one?",
      answer:
        "An MVP (Minimum Viable Product) is a version of your product with just enough features to satisfy early customers and provide feedback for future development. Building an MVP helps you validate your idea, test market fit, and attract investors while minimizing development costs and time to market.",
    },
    {
      question: "How long does it take to build an MVP?",
      answer:
        "The timeline for building an MVP typically ranges from 2-4 weeks, depending on the complexity of your product and the features required. We work closely with you to define the core features and create a realistic timeline that balances speed to market with quality development.",
    },
    {
      question: "What technologies do you use for development?",
      answer:
        "We use modern, scalable technologies including React, Next.js, Node.js, React native, Docker, MongoDB, Figma, Tailwind css, Prisma, Python, and cloud platforms like AWS and Vercel. Our tech stack is chosen based on your specific requirements, ensuring optimal performance, security, and future scalability of your product.",
    },
    {
      question: "Do you provide support after the MVP is launched?",
      answer:
        "Yes, we offer comprehensive post-launch support including bug fixes, performance monitoring, feature enhancements, and scaling assistance. We provide different support packages to match your needs and help ensure your MVP's continued success in the market.",
    },
    {
      question: "How much does it cost to develop an MVP?",
      answer:
        "MVP development costs vary based on complexity, features, and timeline. We offer flexible pricing models including fixed-price projects and hourly rates. After understanding your requirements, we provide a detailed quote with transparent pricing and no hidden costs.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 py-16 px-4 mt-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked <span className="text-[#16f2b3]">Questions</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Have questions about our MVP development process? Find answers to
            common questions below.
          </p>
        </div>

        <div className="bg-slate-800/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm border border-slate-700">
          <CustomAccordion items={faqs} />
        </div>
      </div>
    </div>
  );
}
