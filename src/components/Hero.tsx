import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { ArrowDown, Mail, Github, Linkedin, Download } from "lucide-react";
import foto from "../img/Foto.jpg";
import { useLanguage } from "../context/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  const scrollToEducation = () => {
    const element = document.querySelector("#educacion");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.querySelector("#portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
    <section id="inicio" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-6xl w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-4 tracking-tight leading-tight">
              {t.hero.greeting} <span className="text-blue-600">Hugo Alda Cárdenas</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-slate-600 mb-6 font-medium">
              {t.hero.role}
            </h2>
            <p className="text-slate-600 mb-8 max-w-2xl leading-relaxed">
              {t.hero.about}
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <Button size="lg" onClick={descargarCV}>
                <Download className="w-4 h-4 mr-2" />
                {t.hero.downloadCV}
              </Button>
              <Button size="lg" variant="outline" onClick={scrollToContact}>
                <Mail className="w-4 h-4 mr-2" />
                {t.hero.contact}
              </Button>
              <Button size="lg" variant="outline" onClick={scrollToPortfolio}>
                {t.hero.portfolio}
              </Button>
            </div>

            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://github.com/hugoaldaa"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                <Github className="w-5 h-5 text-slate-700" />
              </a>
              <a
                href="https://www.linkedin.com/in/hugo-alda-c%C3%A1rdenas-a769ab294/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-slate-700" />
              </a>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
              <ImageWithFallback
                src={foto}
                alt={t.hero.profilePhoto}
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-8 border-white shadow-2xl"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16 animate-bounce">
          <button
            onClick={scrollToEducation}
            className="p-2 rounded-full bg-slate-100 hover:bg-blue-600 hover:text-white transition-all"
          >
            <ArrowDown className="w-6 h-6 text-slate-600 hover:text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
