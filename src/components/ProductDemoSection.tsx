
import { Button } from "@/components/ui/button";

const ProductDemoSection = () => {
  const demoItems = [
    {
      title: "Instant Note Analysis",
      description: "Upload your handwritten or typed notes and watch as our AI analyzes and organizes the content",
      image: "note-analysis.png"
    },
    {
      title: "Interactive AI Conversations",
      description: "Ask questions about your notes and receive detailed explanations tailored to your learning style",
      image: "ai-conversation.png"
    },
    {
      title: "Smart Study Guides",
      description: "AI automatically generates study guides, flashcards, and practice questions from your notes",
      image: "study-guide.png"
    },
    {
      title: "Cross-Reference Learning",
      description: "Connect concepts across different subjects and identify knowledge gaps to focus your studying",
      image: "cross-reference.png"
    }
  ];

  return (
    <section id="features" className="py-20 bg-darkCharcoal relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-grain pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">Transform how you <span className="gradient-text">study</span></h2>
          <p className="section-subtitle">
            Our AI-powered system turns passive notes into active learning experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {demoItems.map((item, index) => (
            <div key={index} className="relative group">
              <div className="bg-richBlack rounded-xl overflow-hidden border border-white/10 aspect-video mb-6 group-hover:shadow-[0_0_25px_rgba(255,209,0,0.15)] transition-all duration-500">
                <div className="h-full flex items-center justify-center p-6 bg-darkGray">
                  <div className="text-center text-lightGray">
                    {/* Here we would display actual screenshots, using a placeholder for now */}
                    <div className="text-xl mb-3">[Demo Screenshot {index + 1}]</div>
                    <div className="text-vibrantYellow font-medium">{item.title}</div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-vibrantYellow transition-colors">
                {item.title}
              </h3>
              <p className="text-lightGray">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button className="bg-vibrantYellow text-darkCharcoal hover:bg-softAmber text-lg py-6 px-8">
            See All Features
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductDemoSection;
