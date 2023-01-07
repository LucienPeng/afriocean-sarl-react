import { useHomepageTranslation } from "../../i18n/useTranslations";
import TranslateIcon from '@mui/icons-material/Translate';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import SetMealIcon from '@mui/icons-material/SetMeal';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

export const useNavConfig = () => {
    const { t } = useHomepageTranslation();

    const LANGUAGE_NAV_ITEMS = [
        { title: '中文', lang: 'zh-TW' },
        { title: 'English', lang: 'en' },
        { title: 'Français', lang: 'fr' },
    ];

    const NAV_MENU = (aboutRef, productRef, contactRef) => [
        { title: t('nav.intro'), url: '/about', ref: aboutRef, icon: <TipsAndUpdatesIcon /> },
        { title: t('nav.product'), url: '/product', ref: productRef, icon: <SetMealIcon /> },
        { title: t('nav.contact'), url: '/contact', ref: contactRef, icon: <ContactMailIcon /> },
        { title: t('nav.language'), url: '#', subNavItems: LANGUAGE_NAV_ITEMS, ref: null, icon: <TranslateIcon /> },
    ];

    return { NAV_MENU, LANGUAGE_NAV_ITEMS };
};
