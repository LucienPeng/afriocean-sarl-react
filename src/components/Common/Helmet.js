import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useHomePageTranslation } from '../../i18n/useTranslations';

export const HelmetTags = ({ children }) => {
    const { t } = useHomePageTranslation();

    return (
        <HelmetProvider>
            <Helmet>
                <title>{t('tags.title')}</title>
                <meta name="description" content={t('tags.description')} />
            </Helmet>
            {children}
        </HelmetProvider>
    );
};
