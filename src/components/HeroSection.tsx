import React from "react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  name?: string;
  role?: string;
}

const HeroSection = ({
  name = "Zenen Contreras",
  role = "Software Engineer",
}: HeroSectionProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-background relative px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto py-16 sm:py-24 lg:py-32"
      >
        <motion.div
          variants={itemVariants}
          className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/20 flex-shrink-0"
        >
          <img
            src="/profile.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="text-center md:text-left max-w-2xl">
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50"
          >
            {name}
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8"
          >
            {role}
          </motion.h2>

          <motion.div variants={itemVariants}>
            <p className="text-base sm:text-lg text-foreground/80">
              Software developer specialized in creating modern and responsive
              web experiences. Passionate about clean code and user-centered
              design.
            </p>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
