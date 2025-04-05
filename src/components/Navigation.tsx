
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun, ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

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

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 dark:bg-darkCharcoal/95 backdrop-blur-md py-3 shadow-lg' : 'bg-white dark:bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <svg 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              className="mr-2 text-vibrantYellow"
            >
              <path 
                fill="currentColor" 
                d="M12 3L1 9l11 6l9-4.91V17h2V9L12 3z"
              />
            </svg>
            <span className="text-2xl font-bold text-black dark:text-white">
              Note<span className="text-vibrantYellow">Craft</span>
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-600 dark:text-lightGray hover:text-vibrantYellow transition-colors">Features</a>
          <a href="#pricing" className="text-gray-600 dark:text-lightGray hover:text-vibrantYellow transition-colors">Pricing</a>
          <a href="#blog" className="text-gray-600 dark:text-lightGray hover:text-vibrantYellow transition-colors">Blog</a>
          <a href="#affiliation" className="text-gray-600 dark:text-lightGray hover:text-vibrantYellow transition-colors">Affiliation</a>
          
          <div className="relative">
            <a href="#brainrot" className="flex items-center text-gray-600 dark:text-lightGray hover:text-vibrantYellow transition-colors">
              Brainrot
              <span className="ml-1 text-xs bg-purple-500 text-white px-1 rounded-sm">NEW</span>
            </a>
          </div>
        </nav>

        {/* Right Side Items */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full text-gray-600 dark:text-lightGray hover:bg-gray-200 dark:hover:bg-darkGray transition-colors"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          {/* Language Dropdown */}
          <div className="flex items-center text-gray-600 dark:text-lightGray hover:text-vibrantYellow transition-colors cursor-pointer">
            <span>EN</span>
            <ChevronDown size={16} className="ml-1" />
          </div>
          
          {/* CTA Button */}
          <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6">
            Get Started
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-3">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6">
            Get Started
          </Button>
          <button className="text-gray-600 dark:text-white p-2" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-darkCharcoal absolute top-full left-0 right-0 p-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <a href="#features" className="text-gray-600 dark:text-lightGray hover:text-vibrantYellow transition-colors" onClick={() => setMobileMenuOpen(false)}>Features</a>
            <a href="#pricing" className="text-gray-600 dark:text-lightGray hover:text-vibrantYellow transition-colors" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
            <a href="#blog" className="text-gray-600 dark:text-lightGray hover:text-vibrantYellow transition-colors" onClick={() => setMobileMenuOpen(false)}>Blog</a>
            <a href="#affiliation" className="text-gray-600 dark:text-lightGray hover:text-vibrantYellow transition-colors" onClick={() => setMobileMenuOpen(false)}>Affiliation</a>
            <a href="#brainrot" className="flex items-center text-gray-600 dark:text-lightGray hover:text-vibrantYellow transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Brainrot
              <span className="ml-1 text-xs bg-purple-500 text-white px-1 rounded-sm">NEW</span>
            </a>
            
            <div className="flex items-center justify-between pt-2 border-t border-gray-200 dark:border-gray-700">
              <button 
                onClick={toggleTheme} 
                className="p-2 rounded-full text-gray-600 dark:text-lightGray hover:bg-gray-200 dark:hover:bg-darkGray transition-colors"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              <div className="flex items-center text-gray-600 dark:text-lightGray hover:text-vibrantYellow transition-colors cursor-pointer">
                <span>EN</span>
                <ChevronDown size={16} className="ml-1" />
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
