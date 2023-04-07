import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        detection: {
            order: ['navigator']
        },
        debug: true,
        interpolation: {
            alwaysFormat: false,
        },
        load: 'all',
        backend: {
            loadPath: (lngs, namespaces) => `/locales/${lngs[0]}/${namespaces[0]}.json`
        }
    });

export default i18n;
