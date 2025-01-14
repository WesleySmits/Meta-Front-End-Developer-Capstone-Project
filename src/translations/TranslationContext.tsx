import React, { createContext, useContext } from 'react';
import enTranslations from './locales/en.json';

type Translations = Record<string, string>;

const TranslationContext = createContext<Translations>(enTranslations);

export const TranslationProvider: React.FC<{ translations: Translations | null; children: React.ReactNode }> = ({
    translations,
    children,
}) => {
    const value = translations ?? enTranslations;
    return <TranslationContext.Provider value={value}>{children}</TranslationContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTranslations = () => useContext(TranslationContext);
