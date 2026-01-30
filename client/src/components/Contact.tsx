import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContactSubmission } from "@shared/schema";
import { useSubmitContact } from "@/hooks/use-contact";
import { motion } from "framer-motion";
import { Send, Loader2, Mail } from "lucide-react";

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
    // FIX: Transparent background to let the Beige body show through
    <section id="contact" className="py-24 relative overflow-hidden bg-transparent">
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4 text-primary-400"
          >
            {/* Changed Terminal icon to Mail for a classic feel */}
            <Mail className="w-5 h-5" />
            <span className="font-medium text-sm tracking-widest uppercase text-muted-foreground">Get in Touch</span>
          </motion.div>
          
          {/* Header: Dark Charcoal Text with Serif Font */}
          <h2 className="text-4xl md:text-6xl font-medium font-serif text-foreground mb-6">Start the Conversation</h2>
          <p className="text-muted-foreground text-lg font-light max-w-xl mx-auto">
            Ready to build something timeless? Send us a message and let's discuss your vision.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          // FIX: Card is now Dark Charcoal (#1C1917) to match Services/Team sections
          className="bg-[#1C1917] border border-stone-800 p-8 md:p-12 rounded-lg shadow-2xl relative"
        >
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Name Field */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#D4C4A8] uppercase tracking-widest">Full Name</label>
                <input
                  {...form.register("name")}
                  className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-[#FDFBF7] focus:outline-none focus:border-[#D4C4A8] focus:ring-1 focus:ring-[#D4C4A8] transition-all placeholder:text-stone-500"
                  placeholder="John Doe"
                />
                {form.formState.errors.name && (
                  <span className="text-red-400 text-xs">{form.formState.errors.name.message}</span>
                )}
              </div>
              
              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#D4C4A8] uppercase tracking-widest">Email Address</label>
                <input
                  {...form.register("email")}
                  className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-[#FDFBF7] focus:outline-none focus:border-[#D4C4A8] focus:ring-1 focus:ring-[#D4C4A8] transition-all placeholder:text-stone-500"
                  placeholder="john@company.com"
                />
                {form.formState.errors.email && (
                  <span className="text-red-400 text-xs">{form.formState.errors.email.message}</span>
                )}
              </div>
            </div>

            {/* Company Field */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#D4C4A8] uppercase tracking-widest">Company (Optional)</label>
              <input
                {...form.register("company")}
                className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-[#FDFBF7] focus:outline-none focus:border-[#D4C4A8] focus:ring-1 focus:ring-[#D4C4A8] transition-all placeholder:text-stone-500"
                placeholder="Your Company Ltd."
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#D4C4A8] uppercase tracking-widest">Message</label>
              <textarea
                {...form.register("message")}
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-[#FDFBF7] focus:outline-none focus:border-[#D4C4A8] focus:ring-1 focus:ring-[#D4C4A8] transition-all placeholder:text-stone-500 resize-none"
                placeholder="Tell us about your project..."
              />
              {form.formState.errors.message && (
                <span className="text-red-400 text-xs">{form.formState.errors.message.message}</span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={mutation.isPending}
              // FIX: Button is now White/Cream text on Dark, simple and elegant hover effect
              className="w-full py-4 bg-[#FDFBF7] text-[#1C1917] font-bold tracking-wide rounded-md hover:bg-[#D4C4A8] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {mutation.isPending ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" /> Send Message
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}