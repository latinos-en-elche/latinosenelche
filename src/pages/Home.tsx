import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, FileText, Briefcase, Users, PartyPopper } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import elchePanorama from "@/assets/elche-panorama.webp";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: Home,
      title: "Vivir en Elche",
      description: "Encuentra tu hogar perfecto y conoce los mejores barrios de la ciudad.",
      href: "/vivir-elche"
    },
    {
      icon: FileText,
      title: "Trámites y Documentación",
      description: "Guías paso a paso para NIE, arraigo social, reagrupación familiar y más.",
      href: "/tramites"
    },
    {
      icon: Briefcase,
      title: "Empleo",
      description: "Oportunidades laborales y consejos para trabajar en España.",
      href: "/empleo"
    },
    {
      icon: Users,
      title: "Comunidad Latina",
      description: "Conecta con otros latinos, asociaciones y eventos culturales.",
      href: "/comunidad"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Latinos en Elche",
    "description": "Guía completa para latinos en Elche: información sobre barrios, trámites de extranjería, empleo y comunidad latina",
    "url": "https://latinosenelche.es",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://latinosenelche.es/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Guía Completa para Latinos 2025"
        description="Descubre cómo vivir, trabajar y prosperar en Elche. Información sobre barrios, trámites, empleo y comunidad latina. +2,300 miembros te esperan."
        canonical="https://latinosenelche.es/"
        structuredData={structuredData}
      />
      <Navbar />
      
      <main>
        {/* Hero Section with Parallax */}
        <section className="relative h-[600px] md:h-[700px] overflow-hidden">
          {/* Parallax Background */}
          <div 
            className="absolute inset-0 w-full h-full"
            style={{
              transform: `translateY(${scrollY * 0.5}px)`,
              willChange: 'transform'
            }}
          >
            <img 
              src={elchePanorama} 
              alt="Panorámica de Elche - Basílica de Santa María y palmeral"
              className="w-full h-[calc(100%+200px)] object-cover"
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          </div>

          {/* Hero Content */}
          <div className="relative h-full flex items-center justify-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-2xl">
                  Bienvenido a tu nueva vida en Elche
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-lg">
                  La guía completa para latinos que quieren vivir, trabajar y prosperar en Elche, España
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="text-lg shadow-xl">
                    <Link to="/tramites">Comenzar con trámites</Link>
                  </Button>
                  <Button asChild size="lg" variant="secondary" className="text-lg shadow-xl bg-white/90 hover:bg-white text-primary">
                    <Link to="/comunidad">Unirte a la comunidad</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Todo lo que necesitas saber
              </h2>
              <p className="text-lg text-muted-foreground">
                Información práctica y actualizada para facilitar tu adaptación
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Link key={index} to={feature.href}>
                    <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                      <CardHeader>
                        <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                        <CardDescription className="text-base">
                          {feature.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Facebook Group CTA */}
        <section className="bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100 dark:from-blue-950/30 dark:via-blue-900/30 dark:to-indigo-900/30 py-16 border-y">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-6 inline-flex p-4 rounded-full bg-blue-500/10">
                <Users className="h-12 w-12 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Únete a nuestra comunidad oficial en Facebook
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Más de <strong>2,300 latinos</strong> compartiendo información, ofertas de trabajo, vivienda 
                y ayudándose mutuamente. ¡No estás solo en esta aventura!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-lg bg-blue-600 hover:bg-blue-700 text-white">
                  <a 
                    href="https://www.facebook.com/groups/167509320309197" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <PartyPopper className="mr-2 h-5 w-5" />
                    Unirme al grupo oficial
                  </a>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                👥 Comunidad activa • 📢 Avisos diarios • 🤝 Apoyo mutuo
              </p>
            </div>
          </div>
        </section>

        {/* Legal CTA Section */}
        <section className="bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                ¿Necesitas asesoría legal profesional?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Si necesitas ayuda con tus trámites de extranjería, te recomendamos contactar con el{" "}
                <strong>Estudio Jurídico Masanet</strong>. Con más de 20 años de experiencia ayudando a la 
                comunidad latina en Elche, son expertos en NIE, arraigo social, reagrupación familiar y nacionalidad española.
              </p>
              <Button asChild size="lg" variant="default">
                <a href="https://masanet.es" target="_blank" rel="noopener noreferrer">
                  Contactar con Masanet →
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">245.557</div>
                <div className="text-muted-foreground">Habitantes en Elche</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">15%</div>
                <div className="text-muted-foreground">Población extranjera</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">300+</div>
                <div className="text-muted-foreground">Días de sol al año</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
