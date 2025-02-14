import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.currentTarget;
    try {
      await emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      toast.success("Message sent successfully!");
      form.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Input
            name="from_name"
            type="text"
            placeholder="Your Name"
            required
            className="w-full bg-background/50"
          />
        </div>
        <div className="space-y-2">
          <Input
            name="reply_to"
            type="email"
            placeholder="Your Email"
            required
            className="w-full bg-background/50"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Input
          name="subject"
          type="text"
          placeholder="Subject"
          required
          className="w-full bg-background/50"
        />
      </div>

      <div className="space-y-2">
        <Textarea
          name="message"
          placeholder="Your Message"
          required
          className="w-full min-h-[200px] bg-background/50"
        />
      </div>

      <input type="hidden" name="to_name" value="Zenen" />

      <Button className="w-full" size="lg" disabled={isLoading}>
        <Send className="mr-2 h-5 w-5" />
        {isLoading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
