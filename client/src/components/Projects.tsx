import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React from "react";

const projects = [
  {
    title: "Project Alpha",
    category: "FinTech Platform",
    image: "https://images.unsplash.com/photo-1642132652859-3ef5a92903ae?q=80&w=1600&auto=format&fit=crop", // abstract digital finance
    color: "#00F0FF"
  },
  {
    title: "SmartGuide",
    category: "AI Travel Assistant",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop", // AI tech visualization
    color: "#7000FF"
  },
  {
    title: "Velox Commerce",
    category: "E-Commerce System",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop", // Cyberpunk city
    color: "#FF00AA"
  }
];

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set(clientX - left - width / 2);
    y.set(clientY - top - height / 2);
  }

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="perspective-1000 w-full h-[400px]"
    >
      <motion.div
        onMouseMove={onMouseMove}
        onMouseLeave={() => { x.set(0); y.set(0); }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="w-full h-full relative rounded-2xl overflow-hidden cursor-pointer group bg-[#080224] border border-white/5"
      >
        {/* Image Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 z-10 transition-colors duration-500" />
          {/* Descriptive comment for Unsplash image */}
          {/* Using project-specific abstract tech images */}
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          />
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end transform translate-z-20">
          <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <span 
              className="text-sm font-bold tracking-widest uppercase mb-2 block"
              style={{ color: project.color }}
            >
              {project.category}
            </span>
            <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
            <div className="h-0.5 w-0 group-hover:w-full bg-white transition-all duration-500 delay-100" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="work" className="py-32 relative">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold font-display text-white mb-20 text-right"
        >
          Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#7000FF]">Works</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
