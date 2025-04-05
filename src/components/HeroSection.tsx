
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-32 pb-16 bg-gradient-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-grain pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transform your notes into your <span className="text-vibrantYellow">AI Tutor</span>
            </h1>
            <p className="text-lightGray text-lg md:text-xl max-w-3xl mx-auto mb-10">
              Upload your study materials and let our AI analyze, organize, and transform them into an interactive tutor that helps you learn faster and retain more information.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button size="lg" className="text-lg bg-vibrantYellow text-darkCharcoal hover:bg-softAmber px-8 py-6">
                Get Started Free
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white/10 px-8 py-6">
                Watch Demo
              </Button>
            </div>
          </div>

          <div className="relative w-full max-w-4xl mx-auto animate-scale-in">
            <div className="bg-darkCharcoal rounded-2xl shadow-2xl overflow-hidden border border-white/10">
              <div className="px-4 py-3 bg-darkGray border-b border-white/10 flex items-center">
                <div className="flex gap-2 mr-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-sm text-white/70 truncate">NoteCraft Tutor - AI Study Assistant</div>
              </div>
              
              <div className="relative aspect-video w-full bg-richBlack flex flex-col items-center justify-center p-8">
                <div className="absolute inset-0 bg-gradient-to-tr from-vibrantYellow/5 to-softAmber/5"></div>
                <div className="relative z-10 flex flex-col items-center">
                  <PlayCircle className="w-20 h-20 text-vibrantYellow mb-4 animate-pulse" />
                  <p className="text-white text-lg font-medium">See how NoteCraft works</p>
                  <p className="text-white/60 text-sm mt-2">Watch our 2-minute demo video</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-vibrantYellow/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-softAmber/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
