import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    id: 1,
    question: "Is it accessible?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    id: 2,
    question: "Is it responsive?",
    answer: "Yes. It is built with Tailwind CSS.",
  },
  {
    id: 3,
    question: "Is it production-ready?",
    answer: "Yes. It is built with Next.js.",
  },
];

export default function Faq() {
  return (
    <Accordion type="single" collapsible>
      {items.map((item) => (
        <AccordionItem key={item.id} value={`item-${item.id}`}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
