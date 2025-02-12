import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

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
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform built with React and Node.js, featuring real-time inventory management and secure payment processing.",
    imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c",
    demoUrl: "https://example.com/ecommerce",
    githubUrl: "https://github.com/example/ecommerce",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Weather Dashboard",
    description:
      "Real-time weather tracking application with interactive maps and detailed forecasts using weather API integration.",
    imageUrl: "https://images.unsplash.com/photo-1592210454359-9043f067919b",
    demoUrl: "https://example.com/weather",
    githubUrl: "https://github.com/example/weather",
    technologies: ["React", "TypeScript", "OpenWeather API"],
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
      transition={{ duration: 0.5 }}
      className="bg-background w-full py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WorkGrid;
