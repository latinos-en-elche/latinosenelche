import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, TrendingUp, Building2, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

const Empleo = () => {
  const sectors = [
    {
      name: "Industria del Calzado",
      demand: "Alta",
      description: "Elche es capital del calzado español. Hay oportunidades en fábricas y diseño.",
      positions: ["Operario de producción", "Diseñador de calzado", "Patronista", "Control de calidad"]
    },
    {
      name: "Hostelería y Turismo",
      demand: "Alta",
      description: "Hoteles, restaurantes y servicios turísticos siempre buscan personal.",
      positions: ["Camarero/a", "Cocinero/a", "Recepcionista", "Personal de limpieza"]
    },
    {
      name: "Comercio y Retail",
      demand: "Media",
      description: "Tiendas, supermercados y centros comerciales.",
      positions: ["Dependiente", "Cajero/a", "Reponedor/a", "Encargado/a"]
    },
    {
      name: "Construcción",
      demand: "Media",
      description: "Obras y reformas en constante crecimiento.",
      positions: ["Albañil", "Electricista", "Fontanero", "Pintor"]
    },
    {
      name: "Cuidados y Servicios",
      demand: "Alta",
      description: "Alta demanda de cuidadores y personal doméstico.",
      positions: ["Cuidador/a de mayores", "Empleado/a del hogar", "Niñera", "Auxiliar de ayuda a domicilio"]
    }
  ];

  const jobPortals = [
    { name: "InfoJobs", url: "https://www.infojobs.net", description: "El portal más usado en España" },
    { name: "Indeed", url: "https://es.indeed.com", description: "Búsqueda agregada de ofertas" },
    { name: "LinkedIn", url: "https://www.linkedin.com", description: "Red profesional y ofertas" },
    { name: "Milanuncios", url: "https://www.milanuncios.com", description: "Ofertas locales variadas" }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Trabajar en Elche siendo extranjero - Guía 2025",
    "description": "Sectores con más demanda laboral, requisitos para trabajar y portales de empleo en Elche",
    "author": {
      "@type": "Organization",
      "name": "Latinos en Elche"
    }
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Trabajo en Elche para Extranjeros 2025"
        description="Ofertas de empleo en Elche: calzado, hostelería, construcción. Requisitos, portales de trabajo y sectores con alta demanda para latinos."
        canonical="https://latinosenelche.es/empleo"
        structuredData={structuredData}
      />
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: "Empleo" }]} />
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Trabajar en Elche siendo extranjero
            </h1>
            <p className="text-xl text-muted-foreground">
              Guía completa sobre empleo, sectores con demanda y cómo conseguir trabajo en Elche
            </p>
          </div>

          {/* Requisitos básicos */}
          <Card className="mb-8 border-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-6 w-6 text-primary" />
                Requisitos para trabajar en España
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Documentos imprescindibles:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1 mt-1">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <div>
                      <strong>NIE (Número de Identificación de Extranjero)</strong>
                      <p className="text-sm text-muted-foreground">Obligatorio para cualquier trabajo legal</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1 mt-1">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <div>
                      <strong>Autorización de trabajo</strong>
                      <p className="text-sm text-muted-foreground">Permiso de residencia y trabajo, arraigo social, etc.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1 mt-1">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <div>
                      <strong>Afiliación a la Seguridad Social</strong>
                      <p className="text-sm text-muted-foreground">Tu empleador la gestiona con tu NIE</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
                <p className="text-sm">
                  <strong>⚠️ Importante:</strong> Si no tienes permiso de trabajo, puedes solicitar arraigo social 
                  tras 3 años en España. Para estos trámites, te recomendamos consultar con{" "}
                  <a href="https://masanet.es" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">
                    un abogado especializado
                  </a>{" "}para maximizar tus posibilidades de éxito.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Sectores con demanda */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <TrendingUp className="h-7 w-7 text-primary" />
              Sectores con más oportunidades
            </h2>
            <div className="grid gap-4">
              {sectors.map((sector, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl flex items-center gap-2">
                          <Building2 className="h-5 w-5 text-primary" />
                          {sector.name}
                        </CardTitle>
                        <CardDescription className="mt-2">{sector.description}</CardDescription>
                      </div>
                      <Badge variant={sector.demand === "Alta" ? "default" : "secondary"}>
                        Demanda {sector.demand}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="text-sm font-semibold mb-2">Puestos típicos:</h4>
                    <div className="flex flex-wrap gap-2">
                      {sector.positions.map((position, i) => (
                        <Badge key={i} variant="outline">{position}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Portales de empleo */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6 text-primary" />
                Dónde buscar empleo
              </CardTitle>
              <CardDescription>
                Portales de empleo más efectivos en España
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {jobPortals.map((portal, index) => (
                  <a
                    key={index}
                    href={portal.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors"
                  >
                    <h4 className="font-semibold mb-1">{portal.name}</h4>
                    <p className="text-sm text-muted-foreground">{portal.description}</p>
                  </a>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold mb-2">💡 Otros recursos útiles:</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>
                    •{" "}
                    <a 
                      href="https://www.facebook.com/groups/167509320309197" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-primary hover:underline font-medium"
                    >
                      Nuestro grupo oficial de Facebook
                    </a>
                  </li>
                  <li>• Grupos de WhatsApp de la comunidad latina</li>
                  <li>• Oficina de Empleo del Ayuntamiento de Elche (PROP)</li>
                  <li>• ETTs (Empresas de Trabajo Temporal) locales</li>
                  <li>
                    •{" "}
                    <a 
                      href="https://masanet.es" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-primary hover:underline font-medium"
                    >
                      Abogado de extranjería
                    </a>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Consejos */}
          <Card>
            <CardHeader>
              <CardTitle>Consejos para conseguir trabajo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1.5 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Prepara un buen CV</h4>
                    <p className="text-sm text-muted-foreground">
                      Formato europeo, foto profesional, sin faltas de ortografía
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1.5 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Networking es clave</h4>
                    <p className="text-sm text-muted-foreground">
                      Muchas ofertas no se publican. Conecta con otros latinos y asiste a eventos
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1.5 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Aprende el idioma</h4>
                    <p className="text-sm text-muted-foreground">
                      El español fluido abre muchas más puertas. Considera clases gratuitas municipales
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1.5 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Homologa tus títulos</h4>
                    <p className="text-sm text-muted-foreground">
                      Si tienes estudios superiores, homológalos para acceder a mejores puestos
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Empleo;
