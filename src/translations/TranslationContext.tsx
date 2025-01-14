import React, { createContext, useContext } from 'react';
import enTranslations from './en.json';

type Translations = Record<string, string>;

const TranslationContext = createContext<Translations>(enTranslations);

export const TranslationProvider: React.FC<{ translations: Translations; children: React.ReactNode }> = ({
    translations,
    children,
}) => {
    return <TranslationContext.Provider value={translations}>{children}</TranslationContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTranslations = () => useContext(TranslationContext);
