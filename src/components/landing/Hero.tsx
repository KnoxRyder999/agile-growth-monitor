
import { Button } from "@/components/ui/button";
import { MessagesSquare } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-black text-white py-20 md:py-32">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Custom FiveM Scripts, Mods & Server Setups
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-200">
            High-performance, roleplay-ready resources — built for immersive GTA experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Button size="lg" className="w-full sm:w-auto">
              Browse Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto flex items-center gap-2"
            >
              <MessagesSquare className="h-5 w-5" />
              <span>Join Our Discord</span>
            </Button>
          </div>
          
          <p className="text-sm mt-8 opacity-75">
            Trusted by serious RP communities since 202X.
          </p>
        </div>
      </div>
    </section>
  );
}
