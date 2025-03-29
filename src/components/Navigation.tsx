
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-darkCharcoal/95 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-white">
            Note<span className="text-vibrantYellow">Craft</span>
          </a>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-lightGray hover:text-vibrantYellow transition-colors">Features</a>
          <a href="#how-it-works" className="text-lightGray hover:text-vibrantYellow transition-colors">How It Works</a>
          <a href="#pricing" className="text-lightGray hover:text-vibrantYellow transition-colors">Pricing</a>
          <a href="#testimonials" className="text-lightGray hover:text-vibrantYellow transition-colors">Testimonials</a>
          <a href="#faq" className="text-lightGray hover:text-vibrantYellow transition-colors">FAQ</a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="border-vibrantYellow text-vibrantYellow hover:bg-vibrantYellow hover:text-darkCharcoal">
            Log In
          </Button>
          <Button className="bg-vibrantYellow text-darkCharcoal hover:bg-softAmber">
            Get Started
          </Button>
        </div>

        <button className="md:hidden text-white" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-darkCharcoal absolute top-full left-0 right-0 p-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <a href="#features" className="text-lightGray hover:text-vibrantYellow transition-colors" onClick={() => setMobileMenuOpen(false)}>Features</a>
            <a href="#how-it-works" className="text-lightGray hover:text-vibrantYellow transition-colors" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
            <a href="#pricing" className="text-lightGray hover:text-vibrantYellow transition-colors" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
            <a href="#testimonials" className="text-lightGray hover:text-vibrantYellow transition-colors" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
            <a href="#faq" className="text-lightGray hover:text-vibrantYellow transition-colors" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" className="border-vibrantYellow text-vibrantYellow hover:bg-vibrantYellow hover:text-darkCharcoal w-full">
                Log In
              </Button>
              <Button className="bg-vibrantYellow text-darkCharcoal hover:bg-softAmber w-full">
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
