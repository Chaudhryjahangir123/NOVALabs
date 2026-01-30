// client/src/hooks/use-contact.ts
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { InsertContactSubmission } from "@shared/schema";

export function useSubmitContact() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      const res = await apiRequest("POST", "/api/contact", data);
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Transmission Complete",
        description: "Your signal has been received. We will establish contact shortly.",
      });
    },
    onError: (error) => {
      toast({
        title: "Transmission Failed",
        description: "Signal lost. Please retry transmission.",
        variant: "destructive",
      });
    },
  });
}