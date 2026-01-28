import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#7000FF] rounded-full blur-[120px] opacity-20 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#00F0FF] rounded-full blur-[150px] opacity-10" />
      </div>

      <div className="container relative z-10 px-4 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
        >
          <span className="text-[#00F0FF] text-sm font-semibold tracking-wider uppercase">
            Next Gen Digital Solutions
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight leading-[1.1] mb-8 text-white"
        >
          Architecting the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#7000FF] text-glow">
            Future of Digital
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 font-light"
        >
          Nova Labs builds high-performance software for the world's most ambitious brands. Speed, precision, and aesthetics aligned.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button 
            onClick={scrollToContact}
            className="group relative px-8 py-4 bg-[#00F0FF] text-[#030014] font-bold rounded-lg overflow-hidden transition-all hover:scale-105"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative flex items-center gap-2">
              Start a Project <ArrowRight className="w-5 h-5" />
            </span>
          </button>
          
          <button 
            onClick={scrollToWork}
            className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white/20 backdrop-blur-sm transition-all hover:scale-105"
          >
            View Our Work
          </button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
}
