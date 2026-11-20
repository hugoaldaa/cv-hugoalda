import { useLanguage } from "../context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-slate-400 text-sm mt-2">
          © {new Date().getFullYear()} Hugo Alda Cárdenas. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
