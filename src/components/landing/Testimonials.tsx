
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "@BlazeRP#4021",
    text: "The VortexBytes team delivered exactly what we needed — the EMS system is clean, easy to use, and our players love it.",
    initials: "BR",
    stars: 5
  },
  {
    name: "@CodeJay#1987",
    text: "Professional, fast, and always willing to make tweaks. Our MLO now feels like part of the original game.",
    initials: "CJ",
    stars: 5
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardContent className="pt-6 pb-4">
                <div className="flex mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="italic mb-4">"{testimonial.text}"</p>
              </CardContent>
              <CardFooter className="flex items-center gap-3 pt-0">
                <Avatar>
                  <AvatarFallback>{testimonial.initials}</AvatarFallback>
                </Avatar>
                <div className="font-medium">{testimonial.name}</div>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <p className="text-center mt-8 text-muted-foreground italic">
          We're proud of our work — and even prouder when clients return for more.
        </p>
      </div>
    </section>
  );
}
