import { motion } from "framer-motion";

const technologies = [
  "React", "TypeScript", "Node.js", "Python", "Flutter", "AWS", "Docker", "Kubernetes", "Next.js", "TailwindCSS", "GraphQL", "PostgreSQL"
];

export function TechStack() {
  return (
    // FIX: Changed bg-black to bg-transparent and border to soft stone
    <section className="py-12 bg-transparent border-y border-stone-200 relative overflow-hidden">
      
      {/* Side Fades: Changed from Black to Cream (#FDFBF7) to match body */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FDFBF7] via-transparent to-[#FDFBF7] z-10 pointer-events-none" />
      
      <div className="flex overflow-hidden">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="flex whitespace-nowrap gap-16 items-center"
        >
          {[...technologies, ...technologies, ...technologies].map((tech, i) => (
            <span 
              key={i} 
              // FIX: Text is now Stone Grey with Serif font (Old Money style)
              className="text-3xl md:text-5xl font-serif font-medium text-stone-300 uppercase tracking-widest select-none"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}