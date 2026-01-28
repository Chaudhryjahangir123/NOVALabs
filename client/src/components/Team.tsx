import { motion } from "framer-motion";
import { Linkedin, Github } from "lucide-react"; // Removed Twitter

const team = [
  {
    name: "Chaudhry Jahangir",
    role: "CEO & Founder",
    image: "/me.png", // CHANGED to .jpg (Make sure file is me.jpg in public folder)
    socials: [
      { platform: "linkedin", url: "https://www.linkedin.com/in/muhammad-jahangir-undefined-b210723a9/" }
    ]
  },
  {
    name: "M Hassan Riaz",
    role: "Lead Developer",
    image: "/h.png", // Make sure this file is inside 'public' folder
    socials: [
      { platform: "linkedin", url: "https://pk.linkedin.com/in/muhammad-hassan-riaz-8b5277262" }
    ]
  },
  {
    name: "Moin Ul Haq",
    role: "Lead Developer",
    image: "/m.png", // Make sure this file is inside 'public' folder
    socials: [
      { platform: "linkedin", url: "https://www.linkedin.com/in/moin-ul-haq-86840b355/" }
    ]
  },
  {
    name: "Areeba Shahzad",
    role: "UI/UX Designer",
    image: "/g.png", // Make sure this file is inside 'public' folder
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
                  
                  {/* ZOOM OUT FIX: Added padding (p-3) and extra rounding */}
<img 
  src={member.image} 
  alt={member.name} 
  // Add 'p-3 rounded-2xl' to the classes below
  className="w-full h-full object-cover p-4 rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-500" 
/>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-[#00F0FF] text-sm font-medium mb-4">{member.role}</p>
                  
                  <div className="flex gap-3 text-gray-400">
                    {member.socials.map((social, index) => (
                      <a 
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-white transition-colors"
                      >
                        {social.platform === 'linkedin' && <Linkedin className="w-5 h-5" />}
                        {social.platform === 'github' && <Github className="w-5 h-5" />}
                      </a>
                    ))}
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