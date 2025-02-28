import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import fabioImage from "/fabiocanchila.png";
import colombiaexplorer from "/colombiaexplorer.png";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  demoUrl: string;
  githubUrl: string;
  technologies: string[];
}

interface WorkGridProps {
  projects?: Project[];
}

const defaultProjects: Project[] = [
  {
    title: "Colombia Explorer",
    description:
      "Colombia Explorer 🇨🇴 is an interactive web app built with React and TypeScript, featuring a responsive design with Tailwind CSS, interactive maps via Leaflet, and smooth animations using Framer Motion. It offers real-time search, category filtering, and utilizes Lucide Icons alongside Shadcn/UI components for a modern user experience.",
    imageUrl: colombiaexplorer,
    demoUrl: "https://colombia-explorer.vercel.app",
    githubUrl: "https://github.com/ZenenContreras/ColombiaExplorer",
    technologies: ["React", "TypeScript", "Tailwind CSS ", "Leaflet Maps"], 
  },
  {
    title: "Consulting Platform",
    description:
      "A web-based consulting platform built with React, Tailwind CSS, and Supabase, featuring user authentication, an intuitive admin dashboard for content management, and a streamlined consultation booking system.",
    imageUrl: fabioImage,
    demoUrl: "https://fabiocanchila.vercel.app",
    githubUrl: "https://github.com/ZenenContreras/FabioCanchila",
    technologies: ["React", "Tailwind CSS", "Supabase"],
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management tool with real-time updates and team collaboration features.",
    imageUrl: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91",
    demoUrl: "https://example.com/tasks",
    githubUrl: "https://github.com/example/tasks",
    technologies: ["React", "Firebase", "Material-UI"],
  },
];

const WorkGrid = ({ projects = defaultProjects }: WorkGridProps) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="relative bg-background w-full py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, hsl(var(--primary)/0.1) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore some of my recent work and personal projects
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 hover:cursor-pointer"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 " />
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WorkGrid;
