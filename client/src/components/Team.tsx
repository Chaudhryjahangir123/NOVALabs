import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function Team() {
  return (
    <section id="team" className="py-32 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT: The "Lifestyle" Collage */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] w-full"
          >
            {/* Building (Stability/Structure) */}
            <div className="absolute top-0 left-0 w-3/4 h-5/6 rounded-lg overflow-hidden shadow-2xl z-0">
               <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
               <img 
                 src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop" 
                 alt="NYC Architecture" 
                 className="w-full h-full object-cover grayscale opacity-90"
               />
            </div>

            {/* Professional (Human Connection) */}
            <motion.div 
               initial={{ y: 20, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               transition={{ delay: 0.4, duration: 0.8 }}
               className="absolute bottom-0 right-4 w-2/3 h-4/6 rounded-lg overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10 border-8 border-[#1C1917]"
            >
               <img 
                 src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop" 
                 alt="Professional Partner" 
                 className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
               />
            </motion.div>
          </motion.div>

          {/* RIGHT: The "Trust" Message */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center pl-4 md:pl-0"
          >
            {/* Trust Badge */}
            <div className="mb-6 flex items-center gap-3">
               <div className="p-2 bg-[#D4C4A8]/10 rounded-full border border-[#D4C4A8]/30">
                  <ShieldCheck className="w-5 h-5 text-[#D4C4A8]" />
               </div>
               <span className="text-[#D4C4A8] text-sm font-bold tracking-widest uppercase">A Partnership Built on Trust</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-serif font-medium text-foreground mb-8 leading-tight">
              We Don't Just Build. <br />
              We <span className="italic text-stone-400">Safeguard</span> Your <br />
              Vision.
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-light">
              In an industry defined by rapid turnover, we offer stability. We function not as a vendor, but as your dedicated technical partner.
              <br /><br />
              From the first line of code to the final launch, we treat your business with the same care, discretion, and ambition as our own. Integrity is our baseline.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 pt-4">
               <div>
                  <h4 className="text-xl font-serif text-foreground mb-2">Transparency</h4>
                  <p className="text-sm text-stone-500">Open communication at every stage. No hidden complexities.</p>
               </div>
               <div>
                  <h4 className="text-xl font-serif text-foreground mb-2">Longevity</h4>
                  <p className="text-sm text-stone-500">Systems designed to scale with you for years, not months.</p>
               </div>
            </div>

            <div className="mt-10">
              <button className="group flex items-center gap-3 text-foreground font-medium text-lg hover:text-[#D4C4A8] transition-colors">
                Start a Conversation <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}