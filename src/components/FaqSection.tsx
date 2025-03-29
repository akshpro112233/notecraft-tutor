
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "How does NoteCraft turn my notes into an AI tutor?",
      answer: "NoteCraft uses advanced natural language processing to analyze your notes, understand the content, and create a personalized AI tutor that can answer questions, explain concepts, and quiz you on the material. The more notes you upload, the smarter your AI tutor becomes."
    },
    {
      question: "What types of notes can I upload?",
      answer: "You can upload handwritten notes (via photo), typed notes (PDF, Word, etc.), textbook pages, lecture slides, and even audio recordings of lectures. Our system can process multiple formats to create your comprehensive AI tutor."
    },
    {
      question: "Is my data secure and private?",
      answer: "Absolutely. We use end-to-end encryption for all uploaded content, and your notes are only accessible to you. We never share your data with third parties, and you can delete your content at any time."
    },
    {
      question: "How accurate is the AI tutor?",
      answer: "Our AI tutor aims for high accuracy based on your notes and trusted academic resources. However, we recommend verifying important information, especially for advanced subjects. The quality of answers also depends on the quality and completeness of the notes you provide."
    },
    {
      question: "Can I use NoteCraft for any subject?",
      answer: "Yes! NoteCraft works across virtually all academic subjects from high school through graduate-level education. This includes sciences, humanities, mathematics, engineering, medicine, law, and more."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-grain pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">Popular <span className="gradient-text">Questions</span></h2>
          <p className="section-subtitle">
            Everything you need to know about NoteCraft Tutor
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/10">
                <AccordionTrigger className="text-white text-lg font-medium py-4 hover:text-vibrantYellow hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-lightGray">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-lightGray">
            Have more questions? <a href="#" className="text-vibrantYellow hover:underline">Contact our support team</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
