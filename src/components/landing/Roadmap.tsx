
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
  return (
    <section id="roadmap" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Coming Soon to VortexBytes</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>
        
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-xl text-center">Development Roadmap</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="font-semibold text-center border-b pb-2">Feature</div>
              <div className="font-semibold text-center border-b pb-2">ETA</div>
              
              {roadmapItems.map((item, index) => (
                <>
                  <div key={`feature-${index}`} className="py-3 px-2">
                    {item.feature}
                  </div>
                  <div key={`eta-${index}`} className="py-3 px-2 text-center">
                    <Badge variant={item.eta === "TBD" ? "outline" : "default"}>
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
