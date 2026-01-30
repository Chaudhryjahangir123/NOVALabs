import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContactSubmission } from "@shared/schema";
import { motion } from "framer-motion";
import { Send, Loader2, Mail, CheckCircle, XCircle } from "lucide-react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: ""
    }
  });

  const onSubmit = async (data: InsertContactSubmission) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // YOUR URL IS NOW CONFIGURED HERE:
      const response = await fetch("https://formspree.io/f/maqjprdy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setSubmitStatus("success");
        form.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-transparent">
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4 text-primary-400"
          >
            <Mail className="w-5 h-5" />
            <span className="font-medium text-sm tracking-widest uppercase text-muted-foreground">Get in Touch</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-medium font-serif text-foreground mb-6">Start the Conversation</h2>
          <p className="text-muted-foreground text-lg font-light max-w-xl mx-auto">
            Ready to build something timeless? Send us a message and let's discuss your vision.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#1C1917] border border-stone-800 p-8 md:p-12 rounded-lg shadow-2xl relative"
        >
          {submitStatus === "success" ? (
            <div className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl text-[#FDFBF7] font-serif mb-2">Message Sent!</h3>
              <p className="text-stone-400">We will get back to you shortly.</p>
              <button 
                onClick={() => setSubmitStatus("idle")}
                className="mt-8 text-[#D4C4A8] hover:text-white underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
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

              <div className="space-y-2">
                <label className="text-xs font-bold text-[#D4C4A8] uppercase tracking-widest">Company (Optional)</label>
                <input
                  {...form.register("company")}
                  className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-[#FDFBF7] focus:outline-none focus:border-[#D4C4A8] focus:ring-1 focus:ring-[#D4C4A8] transition-all placeholder:text-stone-500"
                  placeholder="Your Company Ltd."
                />
              </div>

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

              {submitStatus === "error" && (
                 <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-4 rounded-md">
                    <XCircle className="w-5 h-5" />
                    <span className="text-sm">Transmission Failed. Please check your internet or try again later.</span>
                 </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#FDFBF7] text-[#1C1917] font-bold tracking-wide rounded-md hover:bg-[#D4C4A8] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                {isSubmitting ? (
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
          )}
        </motion.div>
      </div>
    </section>
  );
}