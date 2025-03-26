
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${
        isScrolled ? "glass py-3" : "bg-transparent py-5"
      } transition-all duration-300 ease-in-out`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#home" className="focus:outline-none">
              <span className="font-display text-2xl font-bold text-primary">Social<span className="text-primary/50">Pro</span></span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-foreground/80 hover:text-foreground smooth-transition hover:scale-105"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="button-primary">
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="rounded-md p-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden glass mt-2 rounded-lg p-4 animate-fade-in-down">
            <div className="flex flex-col space-y-4 pt-2 pb-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-secondary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="button-primary mt-2"
                onClick={() => setIsOpen(false)}
              >
                Get in Touch
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
