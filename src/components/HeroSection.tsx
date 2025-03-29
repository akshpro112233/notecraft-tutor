
import { Button } from "@/components/ui/button";

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
              <div className="grid md:grid-cols-2 gap-4 p-6">
                <div className="bg-darkGray rounded-lg p-4 animate-float">
                  <h3 className="text-vibrantYellow font-medium mb-2">Your Notes</h3>
                  <div className="h-52 overflow-hidden rounded bg-richBlack p-3">
                    <div className="text-sm text-left text-white/80">
                      <p className="mb-1">The mitochondria is the powerhouse of the cell.</p>
                      <p className="mb-1">It generates most of the cell's supply of adenosine triphosphate (ATP).</p>
                      <p className="mb-1">ATP is used as a source of chemical energy.</p>
                      <p className="mb-1">The number of mitochondria in a cell varies depending on the cell type.</p>
                      <p className="mb-1">Mitochondria are surrounded by a double membrane.</p>
                      <p>The inner membrane is folded into cristae.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-darkGray rounded-lg p-4 animate-float" style={{ animationDelay: "0.2s" }}>
                  <h3 className="text-vibrantYellow font-medium mb-2">Your AI Tutor</h3>
                  <div className="h-52 overflow-hidden rounded bg-richBlack p-3">
                    <div className="flex flex-col gap-2 text-sm text-left">
                      <div className="text-white/80">
                        <p>Ask anything about mitochondria...</p>
                      </div>
                      <div className="bg-vibrantYellow/10 p-2 rounded-lg border-l-2 border-vibrantYellow">
                        <p className="text-white">What are the key functions of mitochondria?</p>
                      </div>
                      <div className="bg-darkCharcoal p-2 rounded-lg">
                        <p className="text-white/80">Mitochondria have several key functions:</p>
                        <ul className="list-disc pl-4 text-white/80">
                          <li>Generate ATP through cellular respiration</li>
                          <li>Regulate cellular metabolism</li>
                          <li>Control cell growth and cell cycle</li>
                          <li>Involved in apoptosis (programmed cell death)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
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
