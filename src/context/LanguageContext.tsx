import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  translations,
  type Language,
  type Translations,
} from "../i18n/translations";

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "cv-language";

function getInitialLanguage(): Language {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "es" || stored === "en" ? stored : "es";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    const copy = translations[language];

    document.documentElement.lang = language;
    window.localStorage.setItem(STORAGE_KEY, language);
    document.title = copy.meta.title;

    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute("content", copy.meta.description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    ogTitle?.setAttribute("content", copy.meta.ogTitle);

    const ogDescription = document.querySelector(
      'meta[property="og:description"]',
    );
    ogDescription?.setAttribute("content", copy.meta.ogDescription);
  }, [language]);

  const toggleLanguage = () =>
    setLanguage((current) => (current === "es" ? "en" : "es"));

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
