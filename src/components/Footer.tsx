const Footer = () => {
  return (
    <footer className="bg-background/80 backdrop-blur-md border-t py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="text-center md:text-left space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-2 text-muted-foreground">
              <p className="hover:text-primary transition-colors">
                Bogotá, Colombia
              </p>
              <p>
                <a
                  href="mailto:zenencontreras1@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  zenencontreras1@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/zenencontreras"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  github.com/zenencontreras
                </a>
              </p>
            </div>
          </div>
          <div className="text-center md:text-right self-end">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Zenen Contreras.
              <br />
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
