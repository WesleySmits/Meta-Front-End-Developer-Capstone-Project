export function getLocale(): string {
    let userLocale = window.navigator.language;

    // if locale is a regionally specific locale, strip it down to the language
    if (userLocale.includes('-')) {
        userLocale = userLocale.split('-')[0];
    }

    return userLocale ?? 'en';
}

export async function getTranslations(requestedLocale?: string): Promise<Record<string, string>> {
    const locale = requestedLocale ?? getLocale();
    try {
        return (await import(`./${locale}.json`)).default;
    } catch (error) {
        console.warn(`Translations for locale "${locale}" not found. Falling back to English.`, error);
        return (await import('./en.json')).default;
    }
}
