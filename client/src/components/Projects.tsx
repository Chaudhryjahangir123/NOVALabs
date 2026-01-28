import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";

const projects = [
  {
    title: "Project Alpha",
    category: "FinTech Platform",
    image: "https://images.unsplash.com/photo-1642132652859-3ef5a92903ae?q=80&w=1600&auto=format&fit=crop",
    color: "#00F0FF"
  },
  {
    title: "SmartGuide",
    category: "AI Travel Assistant",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop",
    color: "#7000FF"
  },
  {
    title: "Velox Commerce",
    category: "E-Commerce System",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop",
    color: "#FF00AA"
  },
  {
    title: "Neon Health",
    category: "Medical Dashboard",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1600&auto=format&fit=crop",
    color: "#00FF99"
  },
  {
    title: "Cyber Security",
    category: "Network Defense",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1600&auto=format&fit=crop",
    color: "#FF3333"
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
        className="w-full h-full relative rounded-2xl overflow-hidden cursor-pointer group bg-[#080224] border border-white/5"
      >
        {/* Image Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 z-10 transition-colors duration-500" />
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
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="work" className="py-32 relative overflow-hidden bg-[#030014]">
      <div className="container mx-auto px-4 mb-16">
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold font-display text-white text-right"
        >
          Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#7000FF]">Works</span>
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
          animate={{ x: ["0%", "-50%"] }} // Move halfway (because list is doubled)
          transition={{ 
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40, // Adjust speed: Higher number = Slower
              ease: "linear",
            },
            playState: isPaused ? "paused" : "running" // Note: playState isn't directly supported in transition, used css override below
          }}
          style={{ width: "fit-content" }}
        >
          {/* We map the doubled list to create the loop */}
          {sliderProjects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </motion.div>

        {/* Gradient Fade on Edges for smooth look */}
        <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-[#030014] to-transparent z-10" />
        <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-[#030014] to-transparent z-10" />
      </div>

      {/* Force Pause on Hover using Style Tag (Framer doesn't support pause easily otherwise) */}
      <style>{`
        div:hover > div {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}