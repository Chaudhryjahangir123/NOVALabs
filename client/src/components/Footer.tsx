import { Rocket } from "lucide-react";

export function Footer() {
  return (
    // FIX: Removed bg-[#02000e], now transparent with a soft stone border
    <footer className="bg-transparent border-t border-stone-200 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Logo Section */}
          <div className="flex items-center gap-2 group">
            {/* Rocket Icon: Dark Charcoal */}
            <Rocket className="w-5 h-5 text-[#1C1917] group-hover:-translate-y-1 transition-transform duration-300" />
            <span className="text-xl font-bold font-serif text-[#1C1917]">
              NOVA<span className="text-[#D4C4A8]">LABS</span>
            </span>
          </div>
          
          {/* Copyright Text: Soft Stone Grey */}
          <div className="text-stone-500 text-sm font-light tracking-wide">
            &copy; {new Date().getFullYear()} Nova Labs. Est. 2024.
          </div>
          
          {/* Links: Darken on hover */}
          <div className="flex gap-6">
            <a href="#" className="text-stone-400 hover:text-[#1C1917] transition-colors text-sm font-medium">Privacy</a>
            <a href="#" className="text-stone-400 hover:text-[#1C1917] transition-colors text-sm font-medium">Terms</a>
            <a href="#" className="text-stone-400 hover:text-[#1C1917] transition-colors text-sm font-medium">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}