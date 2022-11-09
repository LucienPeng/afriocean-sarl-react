import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const language = i18n.language || 'en';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'fr',
        debug: true,
        interpolation: {
            alwaysFormat: false,
        },
        load: 'currentOnly',
        lng: language,
        backend: {
            loadPath: (lngs, namespaces) => `/locales/${lngs[0]}/${namespaces[0]}.json`
        }
    });

export default i18n;
