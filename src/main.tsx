import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { getTranslations } from './translations';
import { TranslationProvider } from './translations/TranslationContext';

async function main() {
    const translations = await getTranslations();

    createRoot(document.getElementById('root')!).render(
        <StrictMode>
            <TranslationProvider translations={translations}>
                <App />
            </TranslationProvider>
        </StrictMode>
    );
}

main().catch((err) => {
    console.error('Error during app initialization:', err);
});
