
import { Meteors } from "@/components/ui/meteors";

const ProblemSection = () => {
  const painPoints = [
    {
      icon: "📚",
      title: "Information Overload",
      description: "Students struggle to process and retain large volumes of study materials"
    },
    {
      icon: "⏰",
      title: "Time-Consuming Review",
      description: "Reviewing notes and creating study guides takes hours away from actual learning"
    },
    {
      icon: "❓",
      title: "Questions Left Unanswered",
      description: "Limited access to personalized help when stuck on difficult concepts"
    }
  ];

  return (
    <section id="problems" className="bg-gradient-dark py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="gradient-text">70%</span> of students struggle with inefficient study habits
          </h2>
          <p className="section-subtitle">
            Traditional note-taking methods aren't equipped for today's complex learning environments
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <div 
              key={index} 
              className="bg-darkCharcoal rounded-xl p-8 border border-white/5 card-hover"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-4xl mb-4">{point.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-vibrantYellow">{point.title}</h3>
              <p className="text-lightGray">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Added Meteors component for visual effect */}
      <Meteors number={30} className="text-vibrantYellow" />
    </section>
  );
};

export default ProblemSection;
