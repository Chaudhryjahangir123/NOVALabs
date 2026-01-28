import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContactSubmission } from "@shared/schema";
import { useSubmitContact } from "@/hooks/use-contact";
import { motion } from "framer-motion";
import { Send, Loader2, Terminal } from "lucide-react";

export function Contact() {
  const mutation = useSubmitContact();
  
  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: ""
    }
  });

  const onSubmit = (data: InsertContactSubmission) => {
    mutation.mutate(data, {
      onSuccess: () => form.reset()
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* HUD Corners */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-[#00F0FF]/30 rounded-tl-3xl" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-[#7000FF]/30 rounded-br-3xl" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4 text-[#00F0FF]"
          >
            <Terminal className="w-6 h-6" />
            <span className="font-mono text-sm tracking-widest">SYSTEM.CONNECT</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold font-display text-white mb-6">Initialize Contact</h2>
          <p className="text-gray-400">Ready to build the future? Send us a signal.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-black/50 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl relative"
        >
          {/* Decorative scanner line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent opacity-50" />

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono text-[#00F0FF] uppercase tracking-wider">Identity // Name</label>
                <input
                  {...form.register("name")}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] transition-all placeholder:text-gray-600"
                  placeholder="Enter Name"
                />
                {form.formState.errors.name && (
                  <span className="text-red-500 text-xs">{form.formState.errors.name.message}</span>
                )}
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-mono text-[#00F0FF] uppercase tracking-wider">Comm-Link // Email</label>
                <input
                  {...form.register("email")}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] transition-all placeholder:text-gray-600"
                  placeholder="Enter Email"
                />
                {form.formState.errors.email && (
                  <span className="text-red-500 text-xs">{form.formState.errors.email.message}</span>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-[#00F0FF] uppercase tracking-wider">Affiliation // Company</label>
              <input
                {...form.register("company")}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] transition-all placeholder:text-gray-600"
                placeholder="Company Name (Optional)"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-[#00F0FF] uppercase tracking-wider">Data Payload // Message</label>
              <textarea
                {...form.register("message")}
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] transition-all placeholder:text-gray-600 resize-none"
                placeholder="Describe your mission..."
              />
              {form.formState.errors.message && (
                <span className="text-red-500 text-xs">{form.formState.errors.message.message}</span>
              )}
            </div>

            <button
              type="submit"
              disabled={mutation.isPending}
              className="w-full py-4 bg-gradient-to-r from-[#00F0FF] to-[#007FFF] text-[#030014] font-bold rounded-lg hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {mutation.isPending ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" /> Transmitting...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" /> Initiate Transmission
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
