
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

const projects = [
  {
    icon: "🚑",
    title: "Custom EMS System",
    description: "Fully interactive medic system with stretcher deploy, revival animations, and billing menu.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    tags: ["Lua", "JavaScript", "UI"]
  },
  {
    icon: "🗺️",
    title: "Grove Street MLO",
    description: "A redesigned version of Grove Street's interiors, complete with custom lighting and roleplay props.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tags: ["3D", "Mapping", "Design"]
  },
  {
    icon: "💼",
    title: "Job Creator Tool",
    description: "A UI-driven tool for admins to create and configure new jobs without touching code.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    tags: ["Admin", "Tool", "JavaScript"]
  },
  {
    icon: "📦",
    title: "Coming Soon: Inventory UI Revamp",
    description: "A fresh new drag-and-drop inventory UI with item logic and animations.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    tags: ["Coming Soon", "Q3 2025"]
  }
];

export function Portfolio() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <section id="portfolio" className="py-20 gta-section">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="text-center mb-12">
          <h2 className={cn(
            "text-3xl font-bold mb-4 text-gradient text-shadow-md",
            inView ? "animate-fade-in" : "opacity-0"
          )}>
            Our Work
          </h2>
          <div className={cn(
            "w-20 h-1 bg-primary mx-auto mb-8",
            inView ? "animate-scale-in animation-delay-100" : "opacity-0"
          )}></div>
          <p className={cn(
            "max-w-3xl mx-auto text-lg mb-10 text-gray-200",
            inView ? "animate-fade-in animation-delay-200" : "opacity-0"
          )}>
            Here's a look at some of the projects we've worked on — from custom-coded scripts to immersive maps and modded UIs. 
            Quality, performance, and uniqueness are at the core of every build.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={cn(
                "overflow-hidden gta-card hover:shadow-[0_0_15px_rgba(66,153,225,0.3)]",
                inView ? `animate-fade-in animation-delay-${(index % 2 + 3) * 100}` : "opacity-0"
              )}
            >
              <div className="h-64 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
                <div className="absolute top-2 left-2">
                  <span className="text-2xl bg-background/80 backdrop-blur-sm rounded-full p-2 shadow-lg">
                    {project.icon}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-shadow-sm">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200">{project.description}</p>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2 border-t border-white/10 pt-4">
                {project.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary" className="bg-white/10 hover:bg-primary/20 text-gray-200">{tag}</Badge>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
