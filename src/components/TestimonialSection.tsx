
import { Card } from "@/components/ui/card";

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "NoteCraft transformed how I study for my biology exams. I upload my lecture notes and can instantly get explanations on complex concepts. My grades have improved significantly!",
      name: "Alex Johnson",
      role: "Pre-Med Student",
      avatar: "student1.jpg"
    },
    {
      quote: "As someone with ADHD, staying focused while studying has always been challenging. This AI tutor helps me break down information in a way that actually makes sense to me.",
      name: "Taylor Williams",
      role: "Computer Science Major",
      avatar: "student2.jpg"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-grain pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">Made by <span className="gradient-text">students</span>, for <span className="gradient-text">students</span></h2>
          <p className="section-subtitle">
            Hear from students who've transformed their studying experience with NoteCraft
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-darkCharcoal border-white/10 p-6 card-hover">
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <svg className="text-vibrantYellow h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-lightGray mb-6 flex-grow">{testimonial.quote}</p>
                <div className="flex items-center mt-4">
                  <div className="w-12 h-12 rounded-full bg-vibrantYellow/20 flex items-center justify-center text-xl font-bold text-vibrantYellow">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-lightGray text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="#" className="text-vibrantYellow hover:underline text-lg">Read more student success stories →</a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
