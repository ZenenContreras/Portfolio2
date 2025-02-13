import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { m } from "./providers/MotionProvider";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/zenencontreras",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/zenen-contreras-royero-726523259/",
      label: "LinkedIn",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:zenencontreras1@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-background/80 backdrop-blur-md border-t py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
              Zenen Contreras
            </h3>
            <p className="text-muted-foreground max-w-xs">
              Building modern web experiences with a focus on clean code and
              user-centered design.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-3 text-muted-foreground">
              <m.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <MapPin className="h-4 w-4" />
                <span>Bogotá, Colombia</span>
              </m.div>
              <m.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-2"
              >
                <a
                  href="mailto:zenencontreras1@gmail.com"
                  className="hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  zenencontreras1@gmail.com
                </a>
              </m.div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <m.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors text-primary"
                  title={link.label}
                >
                  {link.icon}
                </m.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary/10">
          <p className="text-sm text-center text-muted-foreground">
            © {currentYear} Zenen Contreras. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
