import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
// 1. Import the new component
import { LuxuryParticles } from "./LuxuryParticles";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects Container */}
      <div className="absolute inset-0 z-0">
        
        {/* 2. ADD THE PARTICLES HERE - They will sit behind everything */}
        <LuxuryParticles />
        
        {/* Your existing subtle glows remain, but are now behind the particles */}
        {/* Soft Gold/Sand Glow - Top Left */}
        <div className="absolute top-0 left-1/4 w-[800px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-40 animate-pulse-slow" />
        {/* Soft Warm Glow - Bottom Right */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-100/40 rounded-full blur-[150px] opacity-30" />
      </div>

      <div className="container relative z-10 px-4 text-center max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-block mb-8 px-5 py-2 rounded-full border border-primary/20 bg-white/40 backdrop-blur-md shadow-sm"
        >
          <span className="text-foreground/80 text-xs md:text-sm font-medium tracking-widest uppercase">
            Est. 2024 • Digital Atelier
          </span>
        </motion.div>

        {/* Main Title - Serif Font for Elegance */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight leading-[1.1] mb-8 text-foreground"
        >
          Architecting the <br />
          <span className="italic text-foreground/80">
            Future of Digital
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          Nova Labs builds high-performance software for the world's most ambitious brands. Precision, speed, and timeless aesthetics aligned.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          {/* Primary Button: Dark Charcoal */}
          <button 
            onClick={scrollToContact}
            className="group relative px-8 py-4 bg-[#1C1917] text-[#FDFBF7] font-medium rounded-md overflow-hidden transition-all hover:shadow-lg hover:shadow-black/5 hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative flex items-center gap-2">
              Start a Project <ArrowRight className="w-4 h-4" />
            </span>
          </button>
          
          {/* Secondary Button: Outline */}
          <button 
            onClick={scrollToWork}
            className="px-8 py-4 bg-transparent border border-foreground/10 text-foreground font-medium rounded-md hover:bg-white/50 hover:border-foreground/30 transition-all hover:-translate-y-1"
          >
            View Our Work
          </button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-foreground/20 animate-bounce"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}