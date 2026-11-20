import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Briefcase, Calendar } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Experience() {
  const { t } = useLanguage();
  const experiences = t.experience.items;

  return (
    <section id="experiencia" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-slate-900 mb-4">{t.experience.title}</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-slate-600 mt-4">{t.experience.subtitle}</p>
        </div>

        {/* Timeline horizontal de izquierda a derecha */}
        <div className="flex flex-col md:flex-row gap-3 items-stretch justify-center">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col w-full md:flex-1 md:min-w-0 xl:flex-none xl:w-[360px]">
              {/* Tarjeta */}
              <Card className="flex-1 mb-8 flex flex-col hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex-1 flex flex-col">
                  {/* Período + duración */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span className="text-sm font-semibold text-blue-600">{exp.period}</span>
                    </div>
                    <Badge variant="outline">
                      {exp.duration}
                    </Badge>
                  </div>

                  {/* Puesto */}
                  <h3 className="text-slate-900 mb-2 text-sm font-bold leading-snug min-h-[2.5rem]">
                    {exp.title}
                  </h3>

                  {/* Empresa */}
                  <div className="flex items-start gap-2 mb-4">
                    <Briefcase className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-600 text-xs font-medium">{exp.company}</p>
                  </div>

                  {/* Descripción */}
                  <p className="text-slate-500 text-xs leading-relaxed flex-1">
                    {exp.description}
                  </p>

                  {/* Tecnologías */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Conector vertical + nodo (solo desktop) */}
              <div className="hidden md:block">
                <div className="w-px h-6 bg-blue-300 mx-auto"></div>
                <div className="flex items-center w-[calc(100%+0.75rem)] mx-auto">
                  <div className={`h-px flex-1 bg-blue-300 ${index === 0 ? "invisible" : ""}`}></div>
                  <div className={`w-4 h-4 rounded-full border-4 border-white shadow flex-shrink-0 ${
                    index === experiences.length - 1 ? "bg-blue-600" : "bg-blue-400"
                  }`}></div>
                  <div className={`h-px flex-1 bg-blue-300 ${index === experiences.length - 1 ? "invisible" : ""}`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
