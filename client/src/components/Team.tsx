import { motion } from "framer-motion";
import { Linkedin, Twitter, Github } from "lucide-react";

const team = [
  {
    name: "Jahangir",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop", // professional headshot
    socials: ["linkedin", "twitter"]
  },
  {
    name: "Sarah Chen",
    role: "Lead Operations",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop", // professional headshot
    socials: ["linkedin"]
  },
  {
    name: "Marcus Thorne",
    role: "Head of Engineering",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop", // professional headshot
    socials: ["github", "twitter"]
  }
];

export function Team() {
  return (
    <section id="team" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#080224] to-transparent -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">The Minds Behind Nova</h2>
            <p className="text-gray-400 max-w-xl">A collective of visionaries, engineers, and strategists dedicated to pushing the boundaries of what's possible.</p>
          </motion.div>
          <motion.button 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="hidden md:block px-6 py-2 border border-[#7000FF] text-[#7000FF] rounded-full hover:bg-[#7000FF] hover:text-white transition-all"
          >
            Join the Team
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00F0FF] to-[#7000FF] rounded-xl opacity-30 group-hover:opacity-100 blur transition duration-500" />
              <div className="relative h-full bg-[#030014] p-1 rounded-xl">
                <div className="relative h-[300px] overflow-hidden rounded-lg mb-4">
                  <div className="absolute inset-0 bg-[#7000FF]/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors" />
                  {/* Unsplash image for team member */}
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-[#00F0FF] text-sm font-medium mb-4">{member.role}</p>
                  <div className="flex gap-3 text-gray-400">
                    {member.socials.includes("linkedin") && <Linkedin className="w-5 h-5 hover:text-white cursor-pointer" />}
                    {member.socials.includes("twitter") && <Twitter className="w-5 h-5 hover:text-white cursor-pointer" />}
                    {member.socials.includes("github") && <Github className="w-5 h-5 hover:text-white cursor-pointer" />}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
