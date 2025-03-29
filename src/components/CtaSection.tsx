
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-20 bg-darkCharcoal relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-grain pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-0 left-[10%] w-72 h-72 bg-vibrantYellow rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-0 right-[10%] w-72 h-72 bg-softAmber rounded-full filter blur-[100px]"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title">Boost Your Learning Efficiency <span className="gradient-text">Today</span></h2>
          <p className="text-lg text-lightGray mb-10 max-w-2xl mx-auto">
            Join thousands of students who are studying smarter, not harder. Turn your notes into your personal AI tutor and see the difference in your grades and confidence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="text-lg bg-vibrantYellow text-darkCharcoal hover:bg-softAmber px-8 py-6">
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white/10 px-8 py-6">
              Schedule Demo
            </Button>
          </div>
          <p className="mt-6 text-lightGray text-sm">No credit card required • 14-day free trial • Cancel anytime</p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
