
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MessagesSquare } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-2xl font-bold mb-2">VortexBytes</h2>
          <p className="text-gray-400 mb-4">Custom FiveM Development</p>
          
          <div className="flex space-x-4 mb-6">
            <Button variant="outline" size="icon" className="rounded-full border-gray-700 text-gray-300 hover:text-white hover:border-gray-500">
              <MessagesSquare className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <Separator className="bg-gray-800 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 VortexBytes. All rights reserved.
            <br/>
            Built with pride by AxelKnight.
          </div>
          
          <div className="flex items-center gap-x-6 gap-y-2 flex-wrap">
            <Link to="/" className="text-gray-300 hover:text-white text-sm">Home</Link>
            <Link to="/#services" className="text-gray-300 hover:text-white text-sm">Services</Link>
            <Link to="/#portfolio" className="text-gray-300 hover:text-white text-sm">Our Work</Link>
            <Link to="/#contact" className="text-gray-300 hover:text-white text-sm">Contact</Link>
            <div className="hidden md:block text-gray-600">|</div>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <MessagesSquare className="h-4 w-4" />
              <span>Join Our Discord</span>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
