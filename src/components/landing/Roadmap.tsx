
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

const roadmapItems = [
  {
    feature: "Inventory UI 2.0",
    eta: "Q3 2025"
  },
  {
    feature: "Gang Turf War System",
    eta: "Q4 2025"
  },
  {
    feature: "Mobile Dispatch App",
    eta: "TBD"
  }
];

export function Roadmap() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <section id="roadmap" className="py-20 gta-section">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="text-center mb-12">
          <h2 className={cn(
            "text-3xl font-bold mb-4 text-gradient text-shadow-md",
            inView ? "animate-fade-in" : "opacity-0"
          )}>
            Coming Soon to VortexBytes
          </h2>
          <div className={cn(
            "w-20 h-1 bg-primary mx-auto mb-8",
            inView ? "animate-scale-in animation-delay-100" : "opacity-0"
          )}></div>
        </div>
        
        <Card className={cn(
          "max-w-2xl mx-auto gta-card",
          inView ? "animate-fade-in animation-delay-200" : "opacity-0"
        )}>
          <CardHeader className="border-b border-white/10">
            <CardTitle className="text-xl text-center text-shadow-sm">Development Roadmap</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="font-semibold text-center border-b border-white/10 pb-2">Feature</div>
              <div className="font-semibold text-center border-b border-white/10 pb-2">ETA</div>
              
              {roadmapItems.map((item, index) => (
                <>
                  <div key={`feature-${index}`} className="py-3 px-2 text-gray-200">
                    {item.feature}
                  </div>
                  <div key={`eta-${index}`} className="py-3 px-2 text-center">
                    <Badge 
                      variant={item.eta === "TBD" ? "outline" : "default"}
                      className={item.eta === "TBD" ? "border-white/30 text-gray-400" : "bg-primary/80 hover:bg-primary"}
                    >
                      {item.eta}
                    </Badge>
                  </div>
                </>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
