import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold mb-4">Latinos en Elche</h3>
            <p className="text-sm text-muted-foreground">
              Tu guía completa para vivir, trabajar y prosperar en Elche, España.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Información</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/vivir-elche" className="text-muted-foreground hover:text-primary">
                  Vivir en Elche
                </Link>
              </li>
              <li>
                <Link to="/tramites" className="text-muted-foreground hover:text-primary">
                  Trámites
                </Link>
              </li>
              <li>
                <Link to="/empleo" className="text-muted-foreground hover:text-primary">
                  Empleo
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Comunidad</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/comunidad" className="text-muted-foreground hover:text-primary">
                  Comunidad Latina
                </Link>
              </li>
              <li>
                <a 
                  href="https://www.facebook.com/groups/167509320309197" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  Grupo Facebook
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Asesoría Legal</h4>
            <p className="text-sm text-muted-foreground mb-3">
              ¿Necesitas ayuda con trámites legales?
            </p>
            <a
              href="https://masanet.es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground hover:text-primary hover:underline"
            >
              Estudio Jurídico Masanet →
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Latinos en Elche. Toda la información es orientativa.</p>
          <p className="mt-2">
            Web diseñada por{" "}
            <a
              href="https://www.linkedin.com/in/backtester/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary hover:underline font-medium"
            >
              Víctor Ramón Pardilla Fernández
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
