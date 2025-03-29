
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      description: "Get started with the essential features",
      features: [
        "Upload up to 50 pages of notes",
        "Basic AI responses",
        "Generate simple study guides",
        "Web access only",
        "Standard support",
      ],
      isPopular: false,
      buttonText: "Get Started Free",
      buttonVariant: "outline" as const
    },
    {
      name: "Premium",
      price: "$9.99",
      period: "/month",
      description: "Everything you need for serious studying",
      features: [
        "Unlimited note uploads",
        "Advanced AI tutoring",
        "Custom study plans & quizzes",
        "Mobile app access",
        "Priority support",
        "Export to PDF and flashcards"
      ],
      isPopular: true,
      buttonText: "Get Premium",
      buttonVariant: "default" as const
    },
    {
      name: "Teams",
      price: "$19.99",
      period: "/month",
      description: "Perfect for study groups and classes",
      features: [
        "Everything in Premium",
        "Collaborative notes",
        "Group study sessions",
        "Shared question bank",
        "Admin dashboard",
        "API access",
      ],
      isPopular: false,
      buttonText: "Start Team Plan",
      buttonVariant: "outline" as const
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-darkCharcoal relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-grain pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">Simple, Transparent <span className="gradient-text">Pricing</span></h2>
          <p className="section-subtitle">
            Choose the plan that fits your study needs, with no hidden fees
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-richBlack rounded-xl p-8 border transition-all duration-300 ${
                plan.isPopular 
                  ? "border-vibrantYellow shadow-[0_0_30px_rgba(255,209,0,0.2)] relative z-10 transform md:-translate-y-4" 
                  : "border-white/10 hover:border-white/30"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-0 right-0 -translate-y-4 text-center">
                  <span className="bg-vibrantYellow text-darkCharcoal text-sm font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                {plan.period && <span className="text-lightGray">{plan.period}</span>}
              </div>
              <p className="text-lightGray mb-6">{plan.description}</p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-vibrantYellow mr-2 mt-1"><Check size={16} /></span>
                    <span className="text-lightGray">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.buttonVariant}
                className={`w-full ${
                  plan.buttonVariant === "default" 
                    ? "bg-vibrantYellow text-darkCharcoal hover:bg-softAmber" 
                    : "border-vibrantYellow text-vibrantYellow hover:bg-vibrantYellow hover:text-darkCharcoal"
                }`}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 text-lightGray">
          <p>All plans include a 14-day money-back guarantee</p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
