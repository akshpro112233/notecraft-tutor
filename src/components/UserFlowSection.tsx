
const UserFlowSection = () => {
  const steps = [
    {
      number: "01",
      title: "Upload Your Notes",
      description: "Take a photo or upload your handwritten or digital notes"
    },
    {
      number: "02",
      title: "AI Processes Content",
      description: "Our AI analyzes and structures information from your materials"
    },
    {
      number: "03",
      title: "Personalized Tutor Created",
      description: "Ask questions, get explanations, and test your knowledge"
    },
    {
      number: "04",
      title: "Study Smarter",
      description: "Learn more efficiently with tailored content and insights"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-grain pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">How NoteCraft <span className="gradient-text">Works</span></h2>
          <p className="section-subtitle">
            A simple four-step process to transform your study experience
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-24 left-[50px] md:left-[70px] h-[calc(100%-96px)] w-1 bg-gradient-to-b from-vibrantYellow to-softAmber hidden md:block"></div>
            
            {/* Steps */}
            <div className="space-y-12 relative">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-shrink-0 w-24 h-24 md:w-36 md:h-36 rounded-full bg-darkCharcoal flex items-center justify-center border-2 border-vibrantYellow relative z-10">
                    <span className="text-2xl md:text-4xl font-bold text-vibrantYellow">{step.number}</span>
                  </div>
                  <div className="pt-4 md:pt-0">
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">{step.title}</h3>
                    <p className="text-lightGray text-lg">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserFlowSection;
