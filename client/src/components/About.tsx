import { motion } from "framer-motion";

export function About() {
  return (
    // FIX: Removed bg-[#030014], now uses transparent to show the Beige background
    <section id="about" className="py-24 relative overflow-hidden">
      
      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-medium mb-8 text-foreground leading-tight">
            We bridge the gap between <br />
            {/* Changed Neon colors to Charcoal and Gold */}
            <span className="text-foreground/90">Business</span> and{" "}
            <span className="text-primary-400 italic font-serif">Engineering</span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            In a digital-first world, your software is your brand. We don't just write code; 
            we craft digital experiences that define market leaders.
          </p>
        </motion.div>
      </div>
    </section>
  );
}