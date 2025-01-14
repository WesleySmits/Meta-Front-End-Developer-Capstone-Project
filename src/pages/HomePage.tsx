import { Helmet } from 'react-helmet-async';
import styles from './HomePage.module.css';
import { ButtonVariant } from '../components/base/button/Button.types';
import ButtonLink from '../components/base/button/ButtonLink';
import { useTranslations } from '../translations/TranslationContext';

const HomePage = () => {
    const translations = useTranslations();

    return (
        <>
            <Helmet>
                <title>{translations.homepageMetaTitle}</title>
                <meta name="description" content={translations.homepageMetaDescription} />
            </Helmet>

            <section className={`container ${styles.innerContainer}`}>
                <div>
                    <h1>{translations.homepageTitle}</h1>
                    <h2>{translations.homepageSubtitle}</h2>
                    <p>{translations.homepageParagraph}</p>
                    <p>{translations.homepageParagraph2}</p>

                    <ButtonLink
                        className={styles.ctaButton}
                        href="/reserve"
                        variant={ButtonVariant.Secondary}
                        label={translations.reserveATable}
                    />
                </div>

                <img src="/recipe.jpg" alt={translations.deliciousRecipe} width="507" height="338" />
            </section>
        </>
    );
};

export default HomePage;
