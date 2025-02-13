import { Button } from "./ui/button";
import { Github, Mail, Menu, Code2 } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { m } from "./providers/MotionProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const currentSection = pathname.slice(1) || "home";

  const navItems = [
    { href: "projects", label: "Projects" },
    { href: "technologies", label: "Technologies" },
    { href: "contact", label: "Contact" },
  ];

  const handleNavigation = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    navigate(`/${href}`);
  };

  return (
    <m.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <m.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a
            href="#"
            onClick={(e) => handleNavigation("hero", e)}
            className="text-xl font-bold hover:text-primary transition-colors flex items-center gap-2"
          >
            <Code2 className="h-6 w-6" />
            Portfolio Dev
          </a>
        </m.div>

        <div className="flex items-center gap-4 sm:gap-8">
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <m.div
                key={item.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={`#${item.href}`}
                  onClick={(e) => handleNavigation(item.href, e)}
                  className={`text-sm font-medium transition-colors ${
                    currentSection === item.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                </a>
              </m.div>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <m.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="icon"
                className="hidden sm:inline-flex"
                asChild
              >
                <a
                  href="https://github.com/zenencontreras"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </m.div>

            <m.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="icon"
                className="hidden sm:inline-flex"
                asChild
              >
                <a href="mailto:zenencontreras1@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </m.div>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <m.div
                      key={item.href}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <a
                        href={`#${item.href}`}
                        onClick={(e) => handleNavigation(item.href, e)}
                        className={`text-lg font-medium transition-colors py-2 ${
                          currentSection === item.href
                            ? "text-primary"
                            : "text-muted-foreground hover:text-primary"
                        }`}
                      >
                        {item.label}
                      </a>
                    </m.div>
                  ))}
                  <div className="flex gap-4 mt-4">
                    <m.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button variant="ghost" size="icon" asChild>
                        <a
                          href="https://github.com/zenencontreras"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      </Button>
                    </m.div>
                    <m.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button variant="ghost" size="icon" asChild>
                        <a href="mailto:zenencontreras1@gmail.com">
                          <Mail className="h-5 w-5" />
                        </a>
                      </Button>
                    </m.div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </m.nav>
  );
};

export default Navbar;
