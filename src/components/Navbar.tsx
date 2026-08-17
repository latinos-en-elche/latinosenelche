import { Button } from "@/components/ui/button";
import { Menu, X, Users } from "lucide-react";
import { useState } from "react";
import { Link } from "@/lib/router-compat";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Vivir en Elche", href: "/vivir-elche" },
    { name: "Trámites", href: "/tramites" },
    { name: "Empleo", href: "/empleo" },
    { name: "Comunidad", href: "/comunidad" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">Latinos en Elche</span>
          </Link>

          <div className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
            <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
              <a 
                href="https://www.facebook.com/groups/167509320309197" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Users className="mr-2 h-4 w-4" />
                Grupo Facebook
              </a>
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm font-medium transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                <a 
                  href="https://www.facebook.com/groups/167509320309197" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                >
                  <Users className="mr-2 h-4 w-4" />
                  Grupo Facebook Oficial
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
