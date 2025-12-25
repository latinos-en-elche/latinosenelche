import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Sección principal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Latinos en Elche</h3>
            <p className="text-sm text-muted-foreground">
              Tu guía completa para vivir, trabajar y prosperar en Elche, España.
            </p>
          </div>

          {/* Enlaces de información */}
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
                  Trámites de Extranjería
                </Link>
              </li>
              <li>
                <Link to="/empleo" className="text-muted-foreground hover:text-primary">
                  Ofertas de Empleo
                </Link>
              </li>
              <li>
                <Link to="/comunidad" className="text-muted-foreground hover:text-primary">
                  Comunidad Latina
                </Link>
              </li>
            </ul>
          </div>

          {/* Asesoría Legal destacada */}
          <div>
            <h4 className="font-semibold mb-4">Asesoría Legal en Elche</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Más de 20 años ayudando a extranjeros en Elche con empadronamiento, arraigo social, nacionalidad y reagrupación familiar.
            </p>
            <a
              href="https://masanet.es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary hover:underline"
            >
              Visitar masanet.es →
            </a>
          </div>

          {/* Otros recursos útiles */}
          <div>
            <h4 className="font-semibold mb-4">Otros recursos útiles</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://omacelche.es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  OMAC Elche - Oficina de Atención al Ciudadano
                </a>
              </li>
              <li>
                <a
                  href="https://www.elche.es/gobierno-abierto/administracion/registro-civil/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  Registro Civil de Elche
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/groups/167509320309197"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  Grupo Facebook Latinos
                </a>
              </li>
            </ul>
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
