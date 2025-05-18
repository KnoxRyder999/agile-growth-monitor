
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { Services } from "@/components/landing/Services";
import { Portfolio } from "@/components/landing/Portfolio";
import { Testimonials } from "@/components/landing/Testimonials";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";
import { Roadmap } from "@/components/landing/Roadmap";
import { FAQ } from "@/components/landing/FAQ";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Roadmap />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;
