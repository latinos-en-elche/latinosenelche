import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Clock, AlertCircle, CheckCircle2, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

const Tramites = () => {
  const procedures = [
    {
      title: "Obtener el NIE",
      difficulty: "Media",
      time: "2-4 semanas",
      priority: "Alta",
      description: "Número de Identificación de Extranjero - imprescindible para trabajar y vivir en España",
      steps: [
        "Solicitar cita previa en la Comisaría de Policía",
        "Rellenar el formulario EX-15",
        "Reunir documentación (pasaporte, justificación, pago tasa)",
        "Acudir a la cita con todos los documentos",
        "Recoger el NIE (mismo día o posterior)"
      ],
      documents: ["Pasaporte vigente", "Formulario EX-15", "Justificación (contrato, matrícula, etc.)", "Tasa 012 (aprox. 10€)"]
    },
    {
      title: "Arraigo Social",
      difficulty: "Alta",
      time: "6-12 meses",
      priority: "Crítica",
      description: "Permiso de residencia para extranjeros que llevan 3 años en España sin papeles",
      steps: [
        "Demostrar permanencia en España de 3 años (empadronamiento)",
        "Conseguir contrato de trabajo de al menos 1 año",
        "Obtener informe de integración social",
        "Preparar documentación completa",
        "Presentar solicitud en Extranjería",
        "Esperar resolución (3-6 meses)"
      ],
      documents: [
        "Certificados de empadronamiento históricos",
        "Contrato de trabajo firmado",
        "Informe de integración social",
        "Antecedentes penales",
        "Certificado médico"
      ],
      needsLawyer: true
    },
    {
      title: "Reagrupación Familiar",
      difficulty: "Alta",
      time: "6-9 meses",
      priority: "Alta",
      description: "Traer a tu familia (cónyuge, hijos, padres) a vivir contigo en España",
      steps: [
        "Verificar requisitos (tener residencia legal de 1 año)",
        "Demostrar medios económicos suficientes",
        "Solicitar autorización de residencia para familiar",
        "El familiar solicita visado en país de origen",
        "Entrada en España y obtención de TIE"
      ],
      documents: [
        "Tu NIE y residencia en vigor",
        "Nóminas o declaración de la renta",
        "Vivienda adecuada (contrato + certificado)",
        "Documentos del familiar (partidas, certificados)",
        "Seguro médico"
      ],
      needsLawyer: true
    },
    {
      title: "Nacionalidad Española",
      difficulty: "Media",
      time: "1-2 años",
      priority: "Media",
      description: "Obtener la ciudadanía española tras 10 años de residencia legal (2 años para latinoamericanos)",
      steps: [
        "Acreditar residencia legal continuada",
        "Pasar examen DELE A2 y CCSE",
        "Reunir documentación requerida",
        "Solicitar certificados de antecedentes",
        "Presentar solicitud en Registro Civil",
        "Esperar resolución (12-24 meses)"
      ],
      documents: [
        "Certificado de nacimiento",
        "Certificados de antecedentes penales",
        "Certificado de empadronamiento",
        "DELE A2 y CCSE aprobados",
        "Certificado de residencia"
      ]
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Cómo hacer trámites de extranjería en Elche",
    "description": "Guía completa para obtener NIE, arraigo social, reagrupación familiar y nacionalidad española en Elche",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Obtener el NIE",
        "text": "Solicitar cita previa, rellenar formulario EX-15, reunir documentación y acudir a Comisaría"
      },
      {
        "@type": "HowToStep",
        "name": "Tramitar Arraigo Social",
        "text": "Demostrar 3 años en España, conseguir contrato de trabajo, obtener informe de integración y presentar solicitud"
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="NIE y Trámites de Extranjería 2025"
        description="Cómo obtener NIE, arraigo social y reagrupación familiar en Elche. Guía con documentos, plazos y pasos detallados para extranjeros."
        canonical="https://latinosenelche.es/tramites"
        structuredData={structuredData}
      />
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: "Trámites y Documentación" }]} />
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Guía de Trámites para Extranjeros en Elche
            </h1>
            <p className="text-xl text-muted-foreground">
              Todo lo que necesitas saber para regularizar tu situación en España de forma legal y segura
            </p>
          </div>

          {/* Advertencia importante */}
          <h2 className="sr-only">Información importante</h2>
          <Card className="mb-8 border-accent">
            <CardHeader>
              <div className="flex items-start gap-3">
                <AlertCircle className="h-6 w-6 text-accent mt-1" />
                <div>
                  <CardTitle className="text-accent">Información importante</CardTitle>
                  <CardDescription className="mt-2">
                    Esta guía es orientativa. Los trámites de extranjería son complejos y las leyes cambian. 
                    Para asegurar el éxito de tu solicitud, te recomendamos consultar con un{" "}
                    <a 
                      href="https://masanet.es" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary font-semibold hover:underline"
                    >
                      abogado especializado en extranjería
                    </a>
                    {" "}como el Estudio Jurídico Masanet, con más de 20 años de experiencia en Elche.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Trámites principales */}
          <h2 className="sr-only">Trámites principales</h2>
          <div className="space-y-6">
            {procedures.map((procedure, index) => (
              <Card key={index} className={procedure.needsLawyer ? "border-primary" : ""}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2 flex items-center gap-2">
                        <FileText className="h-6 w-6 text-primary" />
                        {procedure.title}
                      </CardTitle>
                      <CardDescription className="text-base">{procedure.description}</CardDescription>
                    </div>
                    <Badge variant={procedure.priority === "Crítica" ? "default" : "secondary"}>
                      {procedure.priority}
                    </Badge>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 mt-4">
                    <div className="flex items-center gap-1 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{procedure.time}</span>
                    </div>
                    <Badge variant="outline">Dificultad: {procedure.difficulty}</Badge>
                    {procedure.needsLawyer && (
                      <Badge variant="destructive" className="gap-1">
                        <AlertCircle className="h-3 w-3" />
                        Recomendado abogado
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      Pasos a seguir:
                    </h4>
                    <ol className="space-y-2">
                      {procedure.steps.map((step, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                            <CheckCircle2 className="h-3 w-3 text-primary" />
                          </div>
                          <span className="text-sm text-muted-foreground">{i + 1}. {step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Documentos necesarios:</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {procedure.documents.map((doc, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <div className="rounded-sm bg-muted p-1 mt-0.5">
                            <div className="h-1.5 w-1.5 rounded-full bg-foreground"></div>
                          </div>
                          <span className="text-muted-foreground">{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {procedure.needsLawyer && (
                    <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                      <p className="text-sm mb-3">
                        Este trámite es complejo y tiene alta tasa de denegación si no se presenta correctamente. 
                        Un error puede significar perder meses o años.
                      </p>
                      <Button asChild size="sm">
                        <a href="https://masanet.es" target="_blank" rel="noopener noreferrer">
                          Consultar con expertos
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Oficinas útiles */}
          <h2 className="sr-only">Oficinas útiles</h2>
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Oficinas y contactos útiles</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-destructive/10 p-4 rounded-lg border border-destructive/20 mb-4">
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-destructive mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-destructive mb-1">⚠️ Advertencia Importante</h4>
                    <p className="text-sm text-muted-foreground">
                      Si no tienes documentación en regla, <strong>NO vayas a la Comisaría de Policía Nacional</strong> sin 
                      antes consultar con un abogado. Podrías ser detenido y enfrentar un proceso de expulsión. 
                      Es fundamental que un profesional te asesore antes de cualquier gestión policial.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold">Oficina de Extranjería de Alicante</h4>
                <p className="text-sm text-muted-foreground">C. de la Ebanistería, 4, 03008 Alicante</p>
                <p className="text-sm text-muted-foreground">Tel: 965 93 17 00</p>
                <p className="text-sm text-accent mt-1">Para trámites de arraigo, reagrupación y autorizaciones</p>
              </div>

              <div>
                <h4 className="font-semibold">Empadronamiento - Oficinas OMAC</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Hay oficinas OMAC en casi todos los barrios de Elche donde puedes tramitar tu empadronamiento.
                </p>
                <a 
                  href="https://elche.es" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline font-medium"
                >
                  → Buscar oficina OMAC más cercana en elche.es
                </a>
              </div>

              <div className="bg-primary/5 p-4 rounded-lg border border-primary/20 mt-4">
                <p className="text-sm">
                  <strong>💡 Recomendación:</strong> Para cualquier trámite de extranjería, te recomendamos 
                  consultar primero con{" "}
                  <a 
                    href="https://masanet.es" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-semibold"
                  >
                    el Estudio Jurídico Masanet
                  </a>
                  . Ellos te orientarán sobre qué documentos necesitas y te acompañarán en todo el proceso 
                  para evitar problemas o rechazos.
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

export default Tramites;
