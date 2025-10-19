import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, Heart, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

const Comunidad = () => {
  const associations = [
    {
      name: "Asociación de Latinoamericanos en Elche",
      description: "Apoyo, eventos culturales y asesoramiento para la comunidad latina",
      activities: ["Eventos culturales", "Asesoramiento legal", "Clases de español"]
    },
    {
      name: "Centro de Acogida de Inmigrantes",
      description: "Ayuda con trámites, traducción de documentos y orientación laboral",
      activities: ["Trámites", "Traducción", "Orientación laboral"]
    },
    {
      name: "Cáritas Diocesana Elche",
      description: "Apoyo social, alimentación y ayuda en situaciones de emergencia",
      activities: ["Ayuda alimentaria", "Apoyo económico", "Asesoramiento"]
    }
  ];

  const events = [
    {
      name: "Fiestas Patrias",
      frequency: "Anual",
      description: "Celebraciones de independencia de países latinoamericanos"
    },
    {
      name: "Encuentros Culturales Latinos",
      frequency: "Mensual",
      description: "Música, gastronomía y baile de diferentes países de América Latina"
    },
    {
      name: "Ferias Gastronómicas",
      frequency: "Trimestral",
      description: "Comida típica y productos latinos"
    }
  ];

  const onlineGroups = [
    {
      platform: "Facebook",
      name: "Latinos en Elche (Oficial)",
      members: "2,308",
      description: "Grupo oficial y principal para conectar, compartir información y ayudarse mutuamente",
      url: "https://www.facebook.com/groups/167509320309197",
      isOfficial: true
    },
    {
      platform: "WhatsApp",
      name: "Comunidad Latina Elche",
      members: "1,000+",
      description: "Ofertas de trabajo, vivienda y avisos importantes",
      isOfficial: false
    },
    {
      platform: "Facebook",
      name: "Venezolanos en Elche",
      members: "2,000+",
      description: "Comunidad específica venezolana",
      isOfficial: false
    },
    {
      platform: "Facebook",
      name: "Colombianos en Alicante y Elche",
      members: "3,000+",
      description: "Comunidad colombiana en la provincia",
      isOfficial: false
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Latinos en Elche - Comunidad",
    "description": "Comunidad latina en Elche: asociaciones, eventos culturales y grupos de apoyo",
    "url": "https://latinosenelche.es/comunidad",
    "sameAs": [
      "https://www.facebook.com/groups/167509320309197"
    ]
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Comunidad Latina en Elche"
        description="Conecta con la comunidad latina en Elche: asociaciones, eventos culturales, grupos de Facebook y WhatsApp. Más de 2,300 latinos compartiendo experiencias y ayudándose."
        canonical="https://latinosenelche.es/comunidad"
        structuredData={structuredData}
      />
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: "Comunidad Latina" }]} />
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Comunidad Latina en Elche
            </h1>
            <p className="text-xl text-muted-foreground">
              Conecta con otros latinos, encuentra apoyo y participa en eventos culturales
            </p>
          </div>

          {/* Intro */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-6 w-6 text-primary" />
                Una comunidad acogedora
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Elche cuenta con una creciente y vibrante comunidad latina que representa 
                aproximadamente el 8% de la población. Encontrarás personas de Venezuela, Colombia, 
                Ecuador, Argentina, Perú y muchos otros países que están dispuestos a ayudarte 
                en tu proceso de adaptación.
              </p>
              <p className="text-muted-foreground">
                La comunidad latina en Elche se caracteriza por su solidaridad y apoyo mutuo. 
                Hay numerosas asociaciones, grupos y eventos que te permitirán conectar con 
                personas de tu país y de toda Latinoamérica.
              </p>
            </CardContent>
          </Card>

          {/* Asociaciones */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Users className="h-7 w-7 text-primary" />
              Asociaciones y Organizaciones
            </h2>
            <div className="grid gap-4">
              {associations.map((assoc, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{assoc.name}</CardTitle>
                    <CardDescription>{assoc.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {assoc.activities.map((activity, i) => (
                        <Badge key={i} variant="secondary">{activity}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Eventos */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-6 w-6 text-primary" />
                Eventos y Celebraciones
              </CardTitle>
              <CardDescription>
                La comunidad latina en Elche organiza diversos eventos durante todo el año
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {events.map((event, index) => (
                  <div key={index} className="flex items-start justify-between gap-4 pb-4 border-b last:border-0">
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{event.name}</h4>
                      <p className="text-sm text-muted-foreground">{event.description}</p>
                    </div>
                    <Badge variant="outline">{event.frequency}</Badge>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                <p className="text-sm">
                  <strong>💃 Consejo:</strong> Sigue las páginas de Facebook de la comunidad latina 
                  para estar al día de todos los eventos. ¡Son una excelente forma de hacer amigos 
                  y sentirte como en casa!
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Grupos online */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Globe className="h-7 w-7 text-primary" />
              Grupos Online
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {onlineGroups.map((group, index) => (
                <Card 
                  key={index} 
                  className={`hover:shadow-lg transition-shadow ${
                    group.isOfficial ? 'border-blue-500 border-2 bg-blue-50/50 dark:bg-blue-950/20' : ''
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline">{group.platform}</Badge>
                          {group.isOfficial && (
                            <Badge className="bg-blue-600 hover:bg-blue-700 text-white">
                              ⭐ Oficial
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="text-lg">{group.name}</CardTitle>
                        <CardDescription className="mt-1">{group.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        👥 {group.members} miembros
                      </div>
                      {group.url && (
                        <a
                          href={group.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                          Unirme →
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="mt-4 bg-muted/30">
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground">
                  <strong>📱 Cómo unirte:</strong> Busca estos nombres en Facebook o WhatsApp. 
                  Los administradores suelen ser muy receptivos con nuevos miembros. Preséntate 
                  y cuenta un poco sobre ti cuando te unas.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Recursos adicionales */}
          <Card>
            <CardHeader>
              <CardTitle>Recursos de Apoyo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Restaurantes latinos en Elche</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Encuentra comida de tu país y un ambiente familiar:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Restaurantes venezolanos en el centro</li>
                    <li>• Locales colombianos cerca del Mercado Central</li>
                    <li>• Tiendas de productos latinos en Carrús</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Servicios de traducción</h4>
                  <p className="text-sm text-muted-foreground">
                    Varias asociaciones ofrecen servicios gratuitos de traducción de documentos 
                    y acompañamiento a citas médicas o legales.
                  </p>
                </div>

                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <p className="text-sm">
                    <strong>⚖️ Asesoría legal:</strong> Si necesitas ayuda profesional con trámites 
                    legales o de extranjería, el{" "}
                    <a 
                      href="https://masanet.es" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-semibold"
                    >
                      Estudio Jurídico Masanet
                    </a>
                    {" "}lleva más de 20 años ayudando a la comunidad latina en Elche con casos de 
                    arraigo, reagrupación familiar y nacionalidad.
                  </p>
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

export default Comunidad;
