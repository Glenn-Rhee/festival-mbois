"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import id, { type Translations } from "./id";
import en from "./en";

type Language = "ID" | "EN";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const translations: Record<Language, Translations> = { ID: id, EN: en };

const LanguageContext = createContext<LanguageContextType>({
  language: "ID",
  setLanguage: () => {},
  t: id,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ID");

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t: translations[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
