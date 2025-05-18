
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">About VortexBytes</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <p className="mb-4 text-lg">
                <strong>VortexBytes</strong> is a specialized FiveM development brand led by <em>AxelKnight</em> — a modder, coder, and community builder with years of experience in GTA RP. Born from a love for immersive gameplay and optimized server performance, VortexBytes delivers custom-crafted scripts, mods, and full server setups designed to meet the unique needs of roleplay communities.
              </p>
              <p className="mb-6 text-lg">
                Whether you're starting a new server or enhancing an existing one, our focus is on <strong>quality, efficiency, and creativity</strong> — built by a developer who plays the game too.
              </p>
              
              <blockquote className="border-l-4 border-primary pl-4 italic text-lg">
                "We don't just build scripts. We build experiences."
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
