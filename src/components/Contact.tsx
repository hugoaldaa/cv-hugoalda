import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, Phone, Linkedin, Github, Copy, Check, Download } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Contact() {
  const { t } = useLanguage();
  const [copiado, setCopiado] = useState<string | null>(null);

  const contactInfo = [
    {
      icon: Mail,
      label: t.contact.labels.email,
      value: "hugoa1204@gmail.com",
      href: undefined as string | undefined,
    },
    {
      icon: Phone,
      label: t.contact.labels.phone,
      value: "+34 615 44 93 59",
      href: undefined as string | undefined,
    },
    {
      icon: Linkedin,
      label: t.contact.labels.linkedin,
      value: "linkedin.com/in/hugo-alda/",
      href: "https://www.linkedin.com/in/hugo-alda-c%C3%A1rdenas-a769ab294/",
    },
    {
      icon: Github,
      label: t.contact.labels.github,
      value: "github.com/hugoaldaa",
      href: "https://github.com/hugoaldaa",
    },
  ];

  const copiar = (texto: string) => {
    navigator.clipboard.writeText(texto);
    setCopiado(texto);
    setTimeout(() => setCopiado(null), 1500);
  };

  const descargarCV = () => {
    const link = document.createElement("a");
    link.href = "/cv/CV%20-%20HUGO%20ALDA.pdf";
    link.download = "CV - HUGO ALDA.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contacto" className="py-20 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-slate-900 mb-4">{t.contact.title}</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-slate-600 mt-4">
            {t.contact.subtitle}
          </p>
        </div>

        <Card>
          <CardContent className="pt-6">
            {/* Tarjetas de contacto en grid: 2 columnas en desktop, 1 en mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                const isCopiable = !contact.href;

                return (
                  <div
                    key={index}
                    className="flex items-center justify-between p-6 rounded-lg border border-slate-200 hover:bg-slate-100 transition-colors"
                  >
                    <a
                      href={contact.href}
                      target={contact.href ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 flex-1"
                    >
                      <div className="p-3 bg-blue-100 rounded-xl">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">{contact.label}</p>
                        <p className="text-slate-700 font-medium break-all">{contact.value}</p>
                      </div>
                    </a>

                    {isCopiable && (
                      <button
                        onClick={() => copiar(contact.value)}
                        className="p-2 rounded-md text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition"
                        title={t.contact.copy}
                        aria-label={t.contact.copy}
                      >
                        {copiado === contact.value ? (
                          <Check className="w-5 h-5 text-green-600" />
                        ) : (
                          <Copy className="w-5 h-5" />
                        )}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Botón descargar CV centrado debajo */}
            <div className="flex justify-center pt-6 border-t border-slate-200">
              <Button size="lg" onClick={descargarCV}>
                <Download className="w-4 h-4 mr-2" />
                {t.contact.downloadCV}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
