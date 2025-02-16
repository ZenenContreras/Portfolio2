import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  technologies?: string[];
}

const ProjectCard = ({
  title = "Project Title",
  description = "A brief description of the project and its key features. This is a default placeholder description.",
  imageUrl = "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  demoUrl = "https://example.com",
  githubUrl = "https://github.com",
  technologies = ["React", "TypeScript", "Tailwind CSS"],
}: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col bg-background/40 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-all duration-300 shadow-lg hover:shadow-xl">
      <div className="relative aspect-video overflow-hidden group/image">
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 z-10" />
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <CardHeader>
        <CardTitle className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
          {title}
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          {technologies.map((tech, index) => (
            <span key={tech} className="inline-flex items-center">
              {tech}
              {index < technologies.length - 1 && (
                <span className="mx-2 text-primary/40">•</span>
              )}
            </span>
          ))}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="text-sm text-foreground/80 leading-relaxed">
          {description}
        </p>
      </CardContent>

      <CardFooter className="flex gap-3">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative group/button"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg blur-lg opacity-0 group-hover/button:opacity-100 transition-opacity duration-300" />
          <Button
            variant="outline"
            size="sm"
            className="relative flex items-center gap-2 border-primary/20 hover:border-primary/40 transition-colors duration-300"
            asChild
          >
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              Code
            </a>
          </Button>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative group/button"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg blur-lg opacity-0 group-hover/button:opacity-100 transition-opacity duration-300" />
          <Button
            size="sm"
            className="relative flex items-center gap-2 bg-primary/90 hover:bg-primary transition-colors duration-300"
            asChild
          >
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          </Button>
        </motion.div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
