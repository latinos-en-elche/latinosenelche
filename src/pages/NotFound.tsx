import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Página no encontrada - 404"
        description="La página que buscas no existe. Vuelve al inicio para encontrar información sobre vivir en Elche."
        canonical={`https://latinosenelche.es${location.pathname}`}
      />
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Página no encontrada
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Lo sentimos, la página que buscas no existe o ha sido movida. 
              Te invitamos a explorar nuestras secciones principales.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/">
                <Home className="mr-2 h-5 w-5" />
                Volver al inicio
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/comunidad">
                <Search className="mr-2 h-5 w-5" />
                Explorar comunidad
              </Link>
            </Button>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-4 text-left">
            <div className="p-4 border rounded-lg hover:border-primary transition-colors">
              <h3 className="font-semibold mb-2">
                <Link to="/vivir-elche" className="hover:text-primary">
                  Vivir en Elche →
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">
                Información sobre barrios y coste de vida
              </p>
            </div>
            <div className="p-4 border rounded-lg hover:border-primary transition-colors">
              <h3 className="font-semibold mb-2">
                <Link to="/tramites" className="hover:text-primary">
                  Trámites →
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">
                NIE, arraigo social y más
              </p>
            </div>
            <div className="p-4 border rounded-lg hover:border-primary transition-colors">
              <h3 className="font-semibold mb-2">
                <Link to="/empleo" className="hover:text-primary">
                  Empleo →
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">
                Oportunidades laborales en Elche
              </p>
            </div>
            <div className="p-4 border rounded-lg hover:border-primary transition-colors">
              <h3 className="font-semibold mb-2">
                <Link to="/comunidad" className="hover:text-primary">
                  Comunidad →
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">
                Conecta con otros latinos
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
