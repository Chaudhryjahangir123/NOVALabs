import { motion } from "framer-motion";
import { Cpu, ShieldCheck, Zap } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Hyper Speed",
    desc: "Optimized for sub-second load times and silky smooth 60fps interactions.",
    color: "#00F0FF"
  },
  {
    icon: ShieldCheck,
    title: "Military Grade",
    desc: "Enterprise-level security architecture protecting your data at every layer.",
    color: "#7000FF"
  },
  {
    icon: Cpu,
    title: "Infinite Scale",
    desc: "Cloud-native foundations built to handle millions of concurrent users.",
    color: "#FF00AA"
  }
];

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-display mb-6 text-white"
          >
            We bridge the gap between <br />
            <span className="text-[#00F0FF]">Business</span> and <span className="text-[#7000FF]">Engineering</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            In a digital-first world, your software is your brand. We don't just write code; we craft digital experiences that define market leaders.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-2xl relative group overflow-hidden"
            >
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at center, ${feature.color}, transparent 70%)` }}
              />
              
              <div className="relative z-10">
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-white/5 border border-white/10"
                  style={{ color: feature.color }}
                >
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
              
              <div 
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-50"
                style={{ color: feature.color }} 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
