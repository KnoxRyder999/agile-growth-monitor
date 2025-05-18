
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: "🔧",
    title: "Custom FiveM Scripts",
    description: "Need unique gameplay systems or custom-coded features? From jobs to UIs, we craft clean, optimized Lua/JS scripts for your RP server."
  },
  {
    icon: "🌍",
    title: "Full Server Setups",
    description: "Get a ready-to-run FiveM server complete with frameworks, resources, and configurations tailored to your vision."
  },
  {
    icon: "🏠",
    title: "MLOs & Interiors",
    description: "Custom interior mappings that transform basic GTA spaces into immersive RP environments."
  },
  {
    icon: "🚗",
    title: "Vehicle Mods & Chains",
    description: "Unique vehicle imports, custom skins, and realistic handling — plus MC chains or gang-themed rides."
  },
  {
    icon: "🎨",
    title: "Logo Design & MC Patches",
    description: "Clean branding that represents your server or RP group — from logos to motorcycle club patches."
  },
  {
    icon: "🤖",
    title: "Discord Bots & Automation",
    description: "Improve your server's workflow with custom bots, ticket systems, role menus, and integrated commands."
  }
];

export function Services() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <section id="services" className="py-20 gta-section-alt">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="text-center mb-12">
          <h2 className={cn(
            "text-3xl font-bold mb-4 text-gradient text-shadow-md",
            inView ? "animate-fade-in" : "opacity-0"
          )}>
            Services We Offer
          </h2>
          <div className={cn(
            "w-20 h-1 bg-primary mx-auto mb-8", 
            inView ? "animate-scale-in animation-delay-100" : "opacity-0"
          )}></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={cn(
                "h-full transition-all hover:shadow-lg gta-card border-primary/20 hover:border-primary/40",
                inView ? `animate-fade-in animation-delay-${(index % 3 + 2) * 100}` : "opacity-0"
              )}
            >
              <CardHeader className="pb-2">
                <div className="text-4xl mb-2">{service.icon}</div>
                <CardTitle className="text-shadow-sm">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-300">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
