import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";

export function useTranslation() {
  const { language } = useLanguage();
  return translations[language];
}

