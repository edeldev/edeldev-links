"use client";
import { Accordion, AccordionItem } from "@heroui/react";
import { QUESTIONS } from "../utils/Faq";

export const FAQ = () => {
  return (
    <div className="mt-6">
      <h2 className="text-gradient text-2xl font-bold">FAQ</h2>
      <Accordion>
        {QUESTIONS.map((question) => (
          <AccordionItem
            key={question.id}
            aria-label={question.label}
            title={question.question}
          >
            <p className="text-primary whitespace-pre-line">
              {question.answer}
            </p>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
