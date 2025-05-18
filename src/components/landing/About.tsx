
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

export function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <section id="about" className="py-20 bg-black gta-section">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="text-center mb-12">
          <h2 className={cn(
            "text-3xl font-bold mb-4 text-gradient text-shadow-md",
            inView ? "animate-fade-in" : "opacity-0"
          )}>
            About VortexBytes
          </h2>
          <div className={cn(
            "w-20 h-1 bg-primary mx-auto mb-8",
            inView ? "animate-scale-in animation-delay-100" : "opacity-0"
          )}></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className={cn(
            "gta-card",
            inView ? "animate-fade-in animation-delay-200" : "opacity-0"
          )}>
            <CardContent className="p-8">
              <p className="mb-4 text-lg text-gray-200">
                <strong className="text-white">VortexBytes</strong> is a specialized FiveM development brand led by <em>AxelKnight</em> — a modder, coder, and community builder with years of experience in GTA RP. Born from a love for immersive gameplay and optimized server performance, VortexBytes delivers custom-crafted scripts, mods, and full server setups designed to meet the unique needs of roleplay communities.
              </p>
              <p className="mb-6 text-lg text-gray-200">
                Whether you're starting a new server or enhancing an existing one, our focus is on <strong className="text-white">quality, efficiency, and creativity</strong> — built by a developer who plays the game too.
              </p>
              
              <blockquote className="border-l-4 border-primary pl-4 italic text-lg text-gray-300">
                "We don't just build scripts. We build experiences."
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
