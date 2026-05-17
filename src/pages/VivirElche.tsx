import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Euro, Home, Palmtree } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

const VivirElche = () => {
  const neighborhoods = [
    {
      name: "Centro",
      price: "600-900€",
      description: "Perfecto para quien busca vida urbana y servicios cercanos",
      pros: ["Transporte público", "Comercios y servicios", "Vida cultural"],
      recommended: true
    },
    {
      name: "Altabix",
      price: "500-700€",
      description: "Zona residencial tranquila con buenas escuelas",
      pros: ["Familiar", "Colegios cercanos", "Bien comunicado"],
      recommended: true
    },
    {
      name: "Carrús",
      price: "400-600€",
      description: "Barrio multicultural con muchos latinos",
      pros: ["Económico", "Comunidad latina", "Comercio variado"],
      recommended: true
    },
    {
      name: "Toscar",
      price: "500-700€",
      description: "Zona residencial y tranquila cerca del centro",
      pros: ["Bien comunicado", "Zona segura", "Servicios cercanos"],
      recommended: true
    },
    {
      name: "Sector V",
      price: "550-750€",
      description: "Barrio moderno y bien planificado con servicios completos",
      pros: ["Moderno", "Parques infantiles", "Supermercados cercanos"],
      recommended: true
    },
    {
      name: "El Pla",
      price: "450-650€",
      description: "Zona moderna en expansión",
      pros: ["Pisos nuevos", "Espacios verdes", "Bien conectado"],
      recommended: false
    }
  ];

  const costOfLiving = [
    { item: "Alquiler piso 2 hab", cost: "500-800€/mes" },
    { item: "Compra mensual (2 personas)", cost: "200-300€/mes" },
    { item: "Transporte público", cost: "40€/mes" },
    { item: "Luz y agua", cost: "80-120€/mes" },
    { item: "Internet", cost: "30-50€/mes" },
    { item: "Comida fuera (menú del día)", cost: "10-15€" }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cuánto cuesta vivir en Elche?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El coste de vida mensual en Elche para una persona ronda entre 800-1,200€, incluyendo alquiler (500-800€), compra (200-300€), transporte (40€), servicios (80-120€) e internet (30-50€)."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuáles son los mejores barrios para vivir en Elche?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Los barrios más recomendados para latinos son: Centro (vida urbana), Altabix (familiar con buenas escuelas), Carrús (económico con mucha comunidad latina), Toscar (residencial y tranquilo), y Sector V (moderno con servicios completos)."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Vivir en Elche: Barrios y Precios 2025"
        description="Mejores barrios para vivir en Elche: Centro, Altabix, Carrús. Alquileres desde 400€. Guía completa con precios, servicios y consejos para latinos."
        canonical="https://latinosenelche.es/vivir-elche"
        structuredData={structuredData}
      />
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: "Vivir en Elche" }]} />
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Vivir en Elche: Guía Completa 2025
            </h1>
            <p className="text-xl text-muted-foreground">
              Descubre los mejores barrios, coste de vida y todo lo que necesitas saber 
              para instalarte en la ciudad de las palmeras
            </p>
          </div>

          {/* Por qué Elche */}
          <h2 className="sr-only">¿Por qué elegir Elche?</h2>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palmtree className="h-6 w-6 text-primary" />
                ¿Por qué elegir Elche?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Elche es la tercera ciudad más grande de la Comunidad Valenciana y una de las mejores 
                opciones para latinos que buscan establecerse en España. Con más de 242.000 habitantes, 
                cuenta con una comunidad latina establecida y acogedora.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-2 mt-1">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Clima mediterráneo</h4>
                    <p className="text-sm text-muted-foreground">Más de 300 días de sol al año</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-2 mt-1">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Coste de vida accesible</h4>
                    <p className="text-sm text-muted-foreground">Más económico que Madrid o Barcelona</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-2 mt-1">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Oportunidades laborales</h4>
                    <p className="text-sm text-muted-foreground">Industria del calzado y servicios</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-2 mt-1">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Patrimonio UNESCO</h4>
                    <p className="text-sm text-muted-foreground">El Palmeral y el Misteri d'Elx</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mejores barrios */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <MapPin className="h-7 w-7 text-primary" />
              Mejores barrios para vivir
            </h2>
            <div className="grid gap-4">
              {neighborhoods.map((neighborhood, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{neighborhood.name}</CardTitle>
                        <CardDescription className="mt-2">{neighborhood.description}</CardDescription>
                      </div>
                      {neighborhood.recommended && (
                        <Badge variant="default">Recomendado</Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 mb-3">
                      <Euro className="h-4 w-4 text-muted-foreground" />
                      <span className="font-semibold">{neighborhood.price}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {neighborhood.pros.map((pro, i) => (
                        <Badge key={i} variant="outline">{pro}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Coste de vida */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Euro className="h-7 w-7 text-primary" />
              Coste de vida en Elche
            </h2>
            <Card>
              <CardHeader>
                <CardDescription>
                  Presupuesto mensual aproximado para una persona o familia pequeña
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {costOfLiving.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b last:border-0">
                      <span className="text-muted-foreground">{item.item}</span>
                      <span className="font-semibold">{item.cost}</span>
                    </div>
                  ))}
                  <div className="pt-4 border-t-2">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-lg">Total aproximado</span>
                      <span className="font-bold text-lg text-primary">800-1,200€/mes</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      *Sin incluir entretenimiento ni gastos extras
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Cómo alquilar */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Home className="h-6 w-6 text-primary" />
                Cómo alquilar un piso en Elche
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Documentos necesarios:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>NIE o pasaporte</li>
                  <li>Contrato de trabajo o nóminas (últimas 3)</li>
                  <li>Aval bancario o depósito (1-2 meses de fianza)</li>
                  <li>Referencias anteriores (si es posible)</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Portales recomendados:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Idealista.com</li>
                  <li>Fotocasa.es</li>
                  <li>Milanuncios.com</li>
                  <li>
                    <a 
                      href="https://www.facebook.com/groups/167509320309197" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-primary hover:underline font-medium"
                    >
                      Nuestro grupo oficial de Facebook
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
                <p className="text-sm">
                  <strong>💡 Consejo:</strong> Si no tienes NIE todavía, algunos propietarios aceptan 
                  pasaporte y carta de tu empleador. Para trámites legales relacionados con vivienda, 
                  puedes consultar con{" "}
                  <a href="https://masanet.es" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">
                    profesionales especializados en extranjería
                  </a>.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default VivirElche;
