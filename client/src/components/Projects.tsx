import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useState } from "react";

// FIX: Updated colors to "Old Money" Palette (Gold, Stone, Sand)
const projects = [
  {
    title: "Project Alpha",
    category: "FinTech Platform",
    image: "https://images.unsplash.com/photo-1642132652859-3ef5a92903ae?q=80&w=1600&auto=format&fit=crop",
    color: "#D4C4A8" // Gold
  },
  {
    title: "SmartGuide",
    category: "AI Travel Assistant",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop",
    color: "#E5E0D8" // Stone
  },
  {
    title: "Velox Commerce",
    category: "E-Commerce System",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop",
    color: "#C2B280" // Sand Dark
  },
  {
    title: "Neon Health",
    category: "Medical Dashboard",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1600&auto=format&fit=crop",
    color: "#B8A383" // Bronze
  },
  {
    title: "Cyber Security",
    category: "Network Defense",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1600&auto=format&fit=crop",
    color: "#D4C4A8" // Gold
  }
];

// Duplicate the array to create the seamless loop effect
const sliderProjects = [...projects, ...projects];

function ProjectCard({ project }: { project: typeof projects[0] }) {
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
    <motion.div className="perspective-1000 w-[350px] md:w-[450px] h-[500px] flex-shrink-0 mx-4">
      <motion.div
        onMouseMove={onMouseMove}
        onMouseLeave={() => { x.set(0); y.set(0); }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        // FIX: Card bg is now Charcoal (#1C1917) to match Services
        className="w-full h-full relative rounded-md overflow-hidden cursor-pointer group bg-[#1C1917] border border-stone-800 shadow-2xl"
      >
        {/* Image Background */}
        <div className="absolute inset-0">
          {/* Darker overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 z-10 transition-colors duration-500" />
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 saturate-0 group-hover:saturate-100" 
          />
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end transform translate-z-20">
          <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <span 
              className="text-xs font-bold tracking-[0.2em] uppercase mb-3 block"
              style={{ color: project.color }}
            >
              {project.category}
            </span>
            {/* Title is White because it sits on a dark image */}
            <h3 className="text-3xl font-serif font-medium text-[#FDFBF7] mb-4">{project.title}</h3>
            <div className="h-[1px] w-0 group-hover:w-full bg-[#D4C4A8] transition-all duration-700 delay-100" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    // FIX: Removed black bg, now transparent to show Cream body bg
    <section id="work" className="py-32 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-4 mb-16">
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-medium font-serif text-foreground text-right"
        >
          Selected <span className="italic text-foreground/70">Works</span>
        </motion.h2>
      </div>

      {/* Slider Container */}
      <div 
        className="relative w-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div 
          className="flex"
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ 
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40, 
              ease: "linear",
            },
            // Note: Framer Motion doesn't support playState directly in transition prop easily,
            // so we rely on the CSS hover override below for pausing.
          }}
          style={{ width: "fit-content" }}
        >
          {sliderProjects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </motion.div>

        {/* FIX: Side Fades are now Cream (#FDFBF7) to match the background */}
        <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-[#FDFBF7] to-transparent z-10" />
        <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-[#FDFBF7] to-transparent z-10" />
      </div>

      {/* Force Pause on Hover */}
      <style>{`
        div:hover > div {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}