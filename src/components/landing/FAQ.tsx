
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Do you offer full server setups from scratch?",
    answer: "Yes — we can create a complete FiveM server, configured to your specs and ready to deploy."
  },
  {
    question: "Can you modify or improve existing scripts?",
    answer: "Absolutely. We can audit, optimize, or expand your current resources."
  },
  {
    question: "What's your turnaround time?",
    answer: "Depends on the project — small jobs can be done in 3–5 days, while full setups take 2–4 weeks."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
