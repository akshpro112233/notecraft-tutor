
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import ProblemSection from "@/components/ProblemSection";
import ProductDemoSection from "@/components/ProductDemoSection";
import UserFlowSection from "@/components/UserFlowSection";
import PricingSection from "@/components/PricingSection";
import TestimonialSection from "@/components/TestimonialSection";
import MetricsSection from "@/components/MetricsSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-richBlack antialiased">
      <Navigation />
      <HeroSection />
      <TrustSection />
      <ProblemSection />
      <ProductDemoSection />
      <UserFlowSection />
      <PricingSection />
      <TestimonialSection />
      <MetricsSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
