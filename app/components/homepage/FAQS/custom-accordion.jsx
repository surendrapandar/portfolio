"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

function AccordionItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 mb-4">
      <button
        onClick={onToggle}
        className="w-full text-left px-6 py-6 flex justify-between items-center text-black hover:text-gray-600 transition-colors duration-200"
      >
        <span className="text-lg font-medium pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-200 flex-shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 pt-2 text-gray-600 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}

export function CustomAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}
