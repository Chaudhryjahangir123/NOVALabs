import { Rocket } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#02000e] border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Rocket className="w-6 h-6 text-[#00F0FF]" />
            <span className="text-xl font-bold font-display text-white">
              NOVA<span className="text-[#00F0FF]">LABS</span>
            </span>
          </div>
          
          <div className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Nova Labs. All systems operational.
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-[#00F0FF] transition-colors">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-[#00F0FF] transition-colors">Terms</a>
            <a href="#" className="text-gray-400 hover:text-[#00F0FF] transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
