import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import type { Language } from "../i18n/translations";

const navKeys = [
  { key: "inicio", href: "#inicio" },
  { key: "educacion", href: "#educacion" },
  { key: "experiencia", href: "#experiencia" },
  { key: "habilidades", href: "#habilidades" },
  { key: "portfolio", href: "#portfolio" },
  { key: "contacto", href: "#contacto" },
] as const;

function LanguageSwitcher({
  className = "",
}: {
  className?: string;
}) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.common.language}
      className={`inline-flex items-center rounded-full border border-slate-200 p-0.5 ${className}`}
    >
      {(["es", "en"] as Language[]).map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => setLanguage(lang)}
          aria-pressed={language === lang}
          className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
            language === lang
              ? "bg-blue-600 text-white"
              : "text-slate-500 hover:text-slate-900"
          }`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export function Navigation() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#inicio");
            }}
            className="text-slate-900 cursor-pointer hover:text-slate-600 transition-colors"
          >
            Hugo Alda Cárdenas
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navKeys.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
              >
                {t.nav[item.key]}
              </a>
            ))}
            <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
              <Globe className="w-4 h-4 text-slate-400" aria-hidden="true" />
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 bg-white">
            {navKeys.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="block py-2 text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
              >
                {t.nav[item.key]}
              </a>
            ))}
            <div className="flex items-center gap-2 pt-4 mt-2 border-t border-slate-200">
              <Globe className="w-4 h-4 text-slate-400" aria-hidden="true" />
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
