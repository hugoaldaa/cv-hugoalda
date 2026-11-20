import { Card, CardContent, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Github } from "lucide-react";
import jarvisImg from "../img/jarvis.png";
import sospedraImg from "../img/sospedra.png";
import minecraftImg from "../img/minecraft.png";
import { useLanguage } from "../context/LanguageContext";

const projects = [
  {
    image: minecraftImg,
    liveUrl: "https://minecraft-local-server-app.vercel.app",
    githubUrl: "https://github.com/hugoaldaa/minecraft-local-server-app"
  },
  {
    image: sospedraImg,
    liveUrl: "https://sospedra.vercel.app/",
    githubUrl: "https://github.com/hugoaldaa/sospedra"
  },
  {
    image: jarvisImg,
    liveUrl: "#",
    githubUrl: "https://github.com/hugoaldaa/J.AR.V.I.S"
  }
];

export function Portfolio() {
  const { t } = useLanguage();

  return (
    <section id="portfolio" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-slate-900 mb-4">{t.portfolio.title}</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            {t.portfolio.subtitle}
          </p>
        </div>

        {/* Tres cards en línea horizontal, centradas */}
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-row justify-center gap-6 w-full">
            {projects.map((project, index) => {
              const copy = t.portfolio.projects[index];
              return (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col gap-0 w-full md:w-[340px] max-w-[340px]"
                >
                  <div className="relative h-48 bg-slate-100">
                    <ImageWithFallback
                      src={project.image}
                      alt={copy.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="pt-6 pb-6 px-6 flex-1 flex flex-col">
                    <CardTitle className="text-slate-900 mb-4 text-lg font-bold">{copy.title}</CardTitle>
                    <p className="text-slate-600 mb-4 text-sm leading-relaxed flex-1">
                      {copy.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {copy.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      {project.liveUrl && project.liveUrl !== "#" && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1"
                          asChild
                        >
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            {copy.liveLabel}
                          </a>
                        </Button>
                      )}
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        asChild
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          {copy.codeLabel}
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
