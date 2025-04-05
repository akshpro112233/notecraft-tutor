
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "NoteCraft transformed how I study for my biology exams. I upload my lecture notes and can instantly get explanations on complex concepts. My grades have improved significantly!",
      name: "Alex Johnson",
      designation: "Pre-Med Student",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop"
    },
    {
      quote: "As someone with ADHD, staying focused while studying has always been challenging. This AI tutor helps me break down information in a way that actually makes sense to me.",
      name: "Taylor Williams",
      designation: "Computer Science Major",
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop"
    },
    {
      quote: "The interactive Q&A feature is like having a personal tutor available 24/7. I can ask any question about my notes and get clear, helpful explanations.",
      name: "Jamie Rivera",
      designation: "Engineering Student",
      src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-grain pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h2 className="section-title">Made by <span className="gradient-text">students</span>, for <span className="gradient-text">students</span></h2>
          <p className="section-subtitle">
            Hear from students who've transformed their studying experience with NoteCraft
          </p>
        </div>

        <AnimatedTestimonials
          testimonials={testimonials}
          autoplay={true}
          className="mt-8"
        />

        <div className="text-center mt-12">
          <a href="#" className="text-vibrantYellow hover:underline text-lg">Read more student success stories →</a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
