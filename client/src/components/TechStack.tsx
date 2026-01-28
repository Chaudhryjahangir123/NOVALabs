import { motion } from "framer-motion";

const technologies = [
  "React", "TypeScript", "Node.js", "Python", "Flutter", "AWS", "Docker", "Kubernetes", "Next.js", "TailwindCSS", "GraphQL", "PostgreSQL"
];

export function TechStack() {
  return (
    <section className="py-12 bg-black border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#030014] via-transparent to-[#030014] z-10 pointer-events-none" />
      
      <div className="flex overflow-hidden">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex whitespace-nowrap gap-12 items-center"
        >
          {[...technologies, ...technologies, ...technologies].map((tech, i) => (
            <span 
              key={i} 
              className="text-2xl md:text-4xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 uppercase tracking-widest"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
