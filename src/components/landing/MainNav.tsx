
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { MessagesSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MainNav() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-fade-in",
        scrolled 
          ? "bg-black/80 backdrop-blur-md shadow-md" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link to="/" className="text-xl md:text-2xl font-bold text-white hover:text-primary transition-colors">
              VortexBytes
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-1">
            <Button 
              variant="ghost" 
              className="text-gray-300 hover:text-white hover:bg-white/10"
              onClick={() => scrollToSection("about")}
            >
              About
            </Button>
            <Button 
              variant="ghost" 
              className="text-gray-300 hover:text-white hover:bg-white/10"
              onClick={() => scrollToSection("services")}
            >
              Services
            </Button>
            <Button 
              variant="ghost" 
              className="text-gray-300 hover:text-white hover:bg-white/10"
              onClick={() => scrollToSection("portfolio")}
            >
              Our Work
            </Button>
            <Button 
              variant="ghost" 
              className="text-gray-300 hover:text-white hover:bg-white/10"
              onClick={() => scrollToSection("roadmap")}
            >
              Roadmap
            </Button>
            <Button 
              variant="ghost" 
              className="text-gray-300 hover:text-white hover:bg-white/10"
              onClick={() => scrollToSection("faq")}
            >
              FAQ
            </Button>
            <Button 
              variant="ghost" 
              className="text-gray-300 hover:text-white hover:bg-white/10"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </Button>
            <Button 
              variant="outline" 
              className="ml-2 flex items-center gap-2 border-gray-700 hover:bg-white/20 hover:text-white hover:border-white transition-all"
            >
              <MessagesSquare className="h-4 w-4" />
              <span>Join Discord</span>
            </Button>
          </nav>
          
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm"
              className="text-white"
              onClick={() => {
                // Will be implemented with a mobile menu
              }}
            >
              Menu
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
