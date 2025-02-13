import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { SEO } from "./SEO";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroSection from "./HeroSection";
import WorkGrid from "./WorkGrid";
import SkillsSection from "./SkillsSection";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";
import { Send } from "lucide-react";

const HomePage = () => {
  const { section } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - 80; // 80px offset for navbar

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  }, [section]);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO />
      <motion.div
        style={{ opacity }}
        className="fixed inset-0 pointer-events-none bg-gradient-to-b from-background to-transparent"
      />
      <Navbar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div id="hero">
          <HeroSection name="Zenen Contreras" role="Software Engineer" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        id="projects"
      >
        <WorkGrid />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        id="technologies"
      >
        <SkillsSection />
      </motion.div>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        id="contact"
        className="py-24 px-4 bg-background/50 backdrop-blur-sm"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
              Let's Connect
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your ideas to life? I'm here to help transform your
              vision into reality.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Card className="backdrop-blur-md bg-background/50 border-primary/10">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Input
                        type="text"
                        placeholder="Your Name"
                        className="w-full bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Input
                        type="email"
                        placeholder="Your Email"
                        className="w-full bg-background/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Input
                      type="text"
                      placeholder="Subject"
                      className="w-full bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Textarea
                      placeholder="Your Message"
                      className="w-full min-h-[200px] bg-background/50"
                    />
                  </div>

                  <Button className="w-full" size="lg">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>
      <Footer />
    </div>
  );
};

export default HomePage;
