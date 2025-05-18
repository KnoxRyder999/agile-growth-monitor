
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Discord, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Let's Build Something Great</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg mb-10">
            Looking for a custom FiveM script, full server build, or modding help? We'd love to hear about your project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Contact Options</CardTitle>
              <CardDescription>Reach out through your preferred channel</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="flex items-center gap-4">
                <Button variant="outline" className="h-12 w-12 p-0">
                  <Discord className="h-6 w-6" />
                </Button>
                <div>
                  <h3 className="font-medium">Join Our Discord</h3>
                  <p className="text-sm text-muted-foreground">For community and quick responses</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Button variant="outline" className="h-12 w-12 p-0">
                  <Mail className="h-6 w-6" />
                </Button>
                <div>
                  <h3 className="font-medium">Email Us</h3>
                  <p className="text-sm text-muted-foreground">hello@vortexbytes.dev</p>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mt-4">
                We typically respond within 24–48 hours.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Commission Form</CardTitle>
              <CardDescription>Tell us about your project</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="contact">Email / Discord Tag</Label>
                  <Input id="contact" placeholder="How we can reach you" />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="project">What do you need?</Label>
                  <Textarea id="project" placeholder="Describe your project..." className="min-h-28" />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="timeline">Timeline or Budget (optional)</Label>
                  <Input id="timeline" placeholder="Any constraints or budget ranges?" />
                </div>
                
                <Button type="submit" className="mt-2">Submit Request</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
