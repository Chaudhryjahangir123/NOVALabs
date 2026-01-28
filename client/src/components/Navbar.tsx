import { useState, useEffect } from "react";
import { Menu, X, Rocket } from "lucide-react"; // Added 'Rocket' back
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#030014]/90 backdrop-blur-lg border-b border-white/10 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center relative">
        {/* Logo Section */}
        <div 
          className="flex items-center gap-2 group cursor-pointer z-50 relative" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-[#00F0FF] blur-md opacity-50 group-hover:opacity-100 transition-opacity" />
            
            {/* ORIGINAL ROCKET ICON RESTORED */}
            <Rocket className="w-8 h-8 text-[#00F0FF] relative z-10" />
          </div>
          
          <span className="text-2xl font-bold font-display tracking-tighter text-white">
            NOVA<span className="text-[#00F0FF]">LABS</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-medium text-gray-300 hover:text-[#00F0FF] transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00F0FF] transition-all group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className="px-6 py-2 rounded-full border border-[#00F0FF]/30 text-[#00F0FF] hover:bg-[#00F0FF] hover:text-[#030014] transition-all duration-300 font-semibold shadow-[0_0_10px_rgba(0,240,255,0.2)] hover:shadow-[0_0_20px_rgba(0,240,255,0.6)]"
          >
            Start Project
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-white hover:text-[#00F0FF] transition-colors z-50 relative p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-[#030014] border-b border-white/10 shadow-2xl md:hidden block"
          >
            <div className="flex flex-col p-6 space-y-4 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-xl font-medium text-gray-300 hover:text-[#00F0FF] py-3 w-full text-center border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "#contact")}
                className="mt-4 px-8 py-3 w-full text-center rounded-full bg-[#00F0FF] text-[#030014] font-bold"
              >
                Start Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}