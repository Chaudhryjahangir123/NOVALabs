import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Team } from "@/components/Team";
import { TechStack } from "@/components/TechStack";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030014] text-white selection:bg-[#00F0FF] selection:text-[#030014]">
      <Navbar />
      <Hero />
      <TechStack />
      <About />
      <Services />
      <Projects />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}
