import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Send, User, Mail, MessageSquare } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { m as motion } from "./providers/MotionProvider";

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
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          className="relative group"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg blur-lg group-hover:blur-xl transition-all duration-300" />
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              <User className="h-5 w-5" />
            </div>
            <Input
              name="from_name"
              type="text"
              placeholder="Your Name"
              required
              className="w-full bg-background/80 backdrop-blur-sm pl-10 py-6 rounded-lg border-primary/20 focus:border-primary transition-colors"
            />
          </div>
        </motion.div>

        <motion.div
          className="relative group"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg blur-lg group-hover:blur-xl transition-all duration-300" />
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              <Mail className="h-5 w-5" />
            </div>
            <Input
              name="reply_to"
              type="email"
              placeholder="Your Email"
              required
              className="w-full bg-background/80 backdrop-blur-sm pl-10 py-6 rounded-lg border-primary/20 focus:border-primary transition-colors"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="relative group"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg blur-lg group-hover:blur-xl transition-all duration-300" />
        <div className="relative">
          <div className="absolute left-3 top-[22px] text-muted-foreground">
            <MessageSquare className="h-5 w-5" />
          </div>
          <Input
            name="subject"
            type="text"
            placeholder="Subject"
            required
            className="w-full bg-background/80 backdrop-blur-sm pl-10 py-6 rounded-lg border-primary/20 focus:border-primary transition-colors"
          />
        </div>
      </motion.div>

      <motion.div
        className="relative group"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg blur-lg group-hover:blur-xl transition-all duration-300" />
        <div className="relative">
          <Textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full min-h-[200px] bg-background/80 backdrop-blur-sm rounded-lg border-primary/20 focus:border-primary transition-colors resize-none"
          />
        </div>
      </motion.div>

      <input type="hidden" name="to_name" value="Zenen" />

      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        <Button
          className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground py-6 text-lg font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          size="lg"
          disabled={isLoading}
        >
          <Send className="mr-2 h-5 w-5" />
          {isLoading ? "Sending..." : "Send Message"}
        </Button>
      </motion.div>
    </motion.form>
  );
};

export default ContactForm;
