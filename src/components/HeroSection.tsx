import React from "react";
import { m as motion } from "./providers/MotionProvider";

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
    <section className="min-h-screen w-full flex items-center justify-center bg-background relative px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, hsl(var(--primary)/0.15) 0%, transparent 50%)",
          }}
        />
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

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto py-16 sm:py-24 lg:py-32"
      >
        <motion.div variants={itemVariants} className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-primary/0 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-75 group-hover:opacity-100" />
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-primary/20 relative">
            <img
              src="/profile.png"
              alt="Profile"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </motion.div>

        <div className="text-center md:text-left max-w-2xl">
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60">
              {name}
            </span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8"
          >
            {role}
          </motion.h2>

          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
              Software developer specialized in creating modern and responsive
              web experiences. Passionate about clean code and user-centered
              design.
            </p>
            <motion.div
              variants={itemVariants}
              className="flex justify-center md:justify-start gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <a
                  href="/ZenenContreras-CV.pdf"
                  download
                  className="relative inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download CV
                </a>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <button
                  onClick={() => {
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="relative inline-flex items-center px-6 py-3 rounded-lg bg-background/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 text-foreground transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Contact Me
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary/20 rounded-full p-1">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-2 h-2 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
