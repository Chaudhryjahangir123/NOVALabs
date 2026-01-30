import { motion } from "framer-motion";
import { Zap, Shield, Cpu } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Hyper Speed",
    description: "Optimized for sub-second load times and silky smooth 60fps interactions."
  },
  {
    icon: Shield,
    title: "Military Grade",
    description: "Enterprise-level security architecture protecting your data at every layer."
  },
  {
    icon: Cpu,
    title: "Infinite Scale",
    description: "Cloud-native foundations built to handle millions of concurrent users."
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              // ADDED: 'group' class to trigger child hovers
              // Changed transition-colors to transition-all for smoother glow animations
              className="group p-8 rounded-lg bg-[#1C1917] border border-stone-800 hover:border-primary/40 transition-all duration-300 shadow-xl cursor-default"
            >
              {/* Icon Circle - Now glows on parent hover */}
              {/* Added: transition-all, group-hover:bg-primary/10, group-hover:shadow-[...] */}
              <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary/10 group-hover:shadow-[0_0_20px_rgba(212,196,168,0.3)]">
                
                {/* Icon - Now gets brighter and has a drop-shadow on hover */}
                {/* Added: transition-all, group-hover:text-primary-100, group-hover:drop-shadow-[...] */}
                <service.icon className="w-7 h-7 text-primary-300 transition-all duration-300 group-hover:text-primary-100 group-hover:drop-shadow-[0_0_8px_rgba(212,196,168,0.8)]" />
              </div>

              <h3 className="text-2xl font-serif font-medium mb-4 text-[#FDFBF7]">
                {service.title}
              </h3>
              
              <p className="text-stone-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}