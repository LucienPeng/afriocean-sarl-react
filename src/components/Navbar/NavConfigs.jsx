import { useHomePageTranslation } from "../../i18n/useTranslations";
import TranslateIcon from '@mui/icons-material/Translate';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import CallIcon from '@mui/icons-material/Call';
import PhishingIcon from '@mui/icons-material/Phishing';
export const useNavConfig = () => {
    const { t } = useHomePageTranslation();

    const SERVICE_NAV_ITEMS = [
        { title: t('nav.serviceNavs.frozenProduct'), url: 'frozen-product' },
        { title: t('nav.serviceNavs.elaboratedProduct'), url: 'elaborated-product' },
        { title: t('nav.serviceNavs.customizedProduct'), url: 'customizedProduct' },
    ];

    const PRODUCT_NAV_ITEMS = [
        { title: t('nav.productNavs.fish'), url: 'fish' },
        { title: t('nav.productNavs.seafood'), url: 'seafood' },
        { title: t('nav.productNavs.elaborate'), url: 'elaborate' },
    ];

    const INTRO_NAV_ITEMS = [
        { title: t('nav.introNavs.history'), url: 'history' },
        { title: t('nav.introNavs.vision'), url: 'vision' },
        { title: t('nav.introNavs.factory'), url: 'factory' },
        { title: t('nav.introNavs.quality'), url: 'quality' },
    ];

    const LANGUAGE_NAV_ITEMS = [
        { title: '繁體中文', lang: 'zh-TW' },
        { title: 'English', lang: 'en' },
        { title: 'Français', lang: 'fr' },
    ];

    const NAV_MENU = (aboutRef, productRef, contactRef, serviceRef) => [
        { title: t('nav.intro'), url: '#', subNavItems: INTRO_NAV_ITEMS, ref: aboutRef, icon: <TipsAndUpdatesIcon />, id: 'about' },
        { title: t('nav.service'), url: '#', subNavItems: SERVICE_NAV_ITEMS, ref: serviceRef, icon: <LocalShippingIcon />, id: 'service' },
        { title: t('nav.product'), url: '#', subNavItems: PRODUCT_NAV_ITEMS, ref: productRef, icon: <PhishingIcon />, id: 'product' },
        { title: t('nav.contact'), url: '/contact', ref: contactRef, icon: <CallIcon />, id: 'contact' },
        { title: t('nav.language'), url: '#', subNavItems: LANGUAGE_NAV_ITEMS, ref: null, icon: <TranslateIcon />, id: 'language' },
    ];

    return { NAV_MENU, LANGUAGE_NAV_ITEMS };
};
