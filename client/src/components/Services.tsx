import { motion } from "framer-motion";
import { Globe, Smartphone, Palette, Database, Layers, Code2 } from "lucide-react";

const services = [
  { icon: Globe, title: "Web Development", desc: "Next.js & React applications with cutting-edge performance." },
  { icon: Smartphone, title: "Mobile Apps", desc: "Native-feel cross-platform apps for iOS and Android." },
  { icon: Palette, title: "UI/UX Design", desc: "Award-winning interfaces that users fall in love with." },
  { icon: Database, title: "Enterprise Solutions", desc: "Scalable backend architectures and microservices." },
  { icon: Layers, title: "Blockchain", desc: "Web3 integration and smart contract development." },
  { icon: Code2, title: "DevOps", desc: "Automated CI/CD pipelines and cloud infrastructure." },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-[#05011a]">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-[#7000FF] font-semibold tracking-wider uppercase mb-2 block">Our Capabilities</span>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white">Engineering Excellence</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group p-8 border border-white/5 bg-[#030014] hover:bg-[#080224] hover:border-[#00F0FF]/30 transition-all duration-300 rounded-xl"
            >
              <div className="mb-6 inline-flex p-3 rounded-lg bg-[#00F0FF]/10 text-[#00F0FF] group-hover:bg-[#00F0FF] group-hover:text-black transition-colors">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00F0FF] transition-colors">{service.title}</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
