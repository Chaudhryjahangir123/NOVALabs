import { useMutation } from "@tanstack/react-query";
import { api, type InsertContactSubmission } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useSubmitContact() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      const validated = api.contact.submit.input.parse(data);
      const res = await fetch(api.contact.submit.path, {
        method: api.contact.submit.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.contact.submit.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        if (res.status === 500) {
          const error = api.contact.submit.responses[500].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error('Failed to submit message');
      }

      return api.contact.submit.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Transmission Received",
        description: "Your message has been logged in our secure terminals.",
        variant: "default",
        className: "bg-[#030014] border-[#00F0FF] text-[#00F0FF]",
      });
    },
    onError: (error) => {
      toast({
        title: "Transmission Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
