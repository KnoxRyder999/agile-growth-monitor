
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

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
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <section id="faq" className="py-20 gta-section-alt">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="text-center mb-12">
          <h2 className={cn(
            "text-3xl font-bold mb-4 text-gradient text-shadow-md",
            inView ? "animate-fade-in" : "opacity-0"
          )}>
            Frequently Asked Questions
          </h2>
          <div className={cn(
            "w-20 h-1 bg-primary mx-auto mb-8",
            inView ? "animate-scale-in animation-delay-100" : "opacity-0"
          )}></div>
        </div>
        
        <div className={cn(
          "max-w-3xl mx-auto gta-card p-6",
          inView ? "animate-fade-in animation-delay-200" : "opacity-0"
        )}>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-white/10 last:border-b-0"
              >
                <AccordionTrigger className="text-left text-white hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
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
