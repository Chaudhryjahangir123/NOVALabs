import { motion } from "framer-motion";
import { Linkedin, Github } from "lucide-react";

// 1. Define Types
interface Social {
  platform: string;
  url: string;
}

interface Member {
  name: string;
  role: string;
  image: string;
  socials: Social[];
}

interface TeamCardProps {
  member: Member;
  index: number;
  isCEO?: boolean;
}

// 2. DATA
const team: Member[] = [
  {
    name: "Chaudhry Jahangir",
    role: "CEO & Founder",
    image: "/me.png",
    socials: [
      { platform: "linkedin", url: "https://www.linkedin.com/in/muhammad-jahangir-undefined-b210723a9/" }
    ]
  },
  {
    name: "M Hassan Riaz",
    role: "Lead Developer",
    image: "/h.png",
    socials: [
      { platform: "linkedin", url: "https://pk.linkedin.com/in/muhammad-hassan-riaz-8b5277262" }
    ]
  },
  {
    name: "Moin Ul Haq",
    role: "Lead Developer",
    image: "/m.png",
    socials: [
      { platform: "linkedin", url: "https://www.linkedin.com/in/moin-ul-haq-86840b355/" }
    ]
  },
  {
    name: "Areeba Shahzad",
    role: "UI/UX Designer",
    image: "/g.jpeg",
    socials: [] 
  }
];

// 3. REUSABLE CARD COMPONENT
const TeamCard = ({ member, index, isCEO = false }: TeamCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className={`relative group ${isCEO ? 'w-full max-w-sm' : 'w-full'}`}
    >
      {/* Glow Effect: Changed from Neon to Soft Gold */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#D4C4A8] to-[#B8A383] rounded-xl opacity-20 group-hover:opacity-70 blur transition duration-700" />
      
      {/* Card Background: Dark Charcoal to match Services/Projects */}
      <div className="relative h-full bg-[#1C1917] p-1 rounded-xl border border-stone-800">
        
        {/* Image Container */}
        <div className="relative h-[300px] overflow-hidden rounded-lg mb-4">
          {/* Overlay: Subtle warm tint instead of purple */}
          <div className="absolute inset-0 bg-[#000000]/20 group-hover:bg-transparent transition-colors duration-500" />
          <img 
            src={member.image} 
            alt={member.name} 
            // Kept grayscale for that "Classic Portrait" look, colored on hover
            className="w-full h-full object-cover p-2 rounded-lg grayscale group-hover:grayscale-0 transition-all duration-700" 
          />
        </div>

        <div className="p-4 text-center md:text-left">
          {/* Name: Cream color, Serif Font */}
          <h3 className="text-2xl font-serif font-medium text-[#FDFBF7] mb-1">{member.name}</h3>
          
          {/* Role: Gold Color */}
          <p className="text-[#D4C4A8] text-xs font-bold tracking-widest uppercase mb-4">{member.role}</p>
          
          <div className="flex gap-3 text-stone-400 justify-center md:justify-start">
            {member.socials?.map((social, idx) => (
              <a 
                key={idx}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#D4C4A8] transition-colors"
              >
                {social.platform === 'linkedin' && <Linkedin className="w-5 h-5" />}
                {social.platform === 'github' && <Github className="w-5 h-5" />}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// 4. MAIN COMPONENT
export function Team() {
  const ceo = team[0];
  const members = team.slice(1);

  return (
    // FIX: Transparent background to show the Beige body
    <section id="team" className="py-24 relative overflow-hidden bg-transparent">
      
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
             initial={{ opacity: 0, y: -20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            {/* Dark Charcoal Text for Heading */}
            <h2 className="text-4xl md:text-5xl font-medium font-serif text-foreground mb-4">The Minds Behind Nova</h2>
            <p className="text-muted-foreground max-w-xl mx-auto font-light">A collective of visionaries, engineers, and strategists dedicated to pushing the boundaries of what's possible.</p>
          </motion.div>
        </div>

        {/* 1. CEO ROW (Centered) */}
        <div className="flex justify-center mb-12">
            <TeamCard member={ceo} index={0} isCEO={true} />
        </div>

        {/* 2. TEAM ROW (Grid of 3) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {members.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i + 1} />
          ))}
        </div>
        
        {/* Join Button */}
        <div className="flex justify-center mt-16">
            <motion.button 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                // Button: Dark Charcoal Border & Text
                className="px-8 py-3 border border-foreground text-foreground rounded-md hover:bg-foreground hover:text-[#FDFBF7] transition-all font-medium"
            >
                Join the Team
            </motion.button>
        </div>

      </div>
    </section>
  );
}