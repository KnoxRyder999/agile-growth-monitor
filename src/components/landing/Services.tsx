
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Services We Offer</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="h-full transition-all hover:shadow-lg">
              <CardHeader className="pb-2">
                <div className="text-4xl mb-2">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
