import { useHomepageTranslation } from "../../i18n/useTranslations";

export const useNavConfig = () => {

    const { t } = useHomepageTranslation();

    const ABOUT_NAV_ITEMS = [
        { title: '工廠介紹', url: '/introduction' },
        { title: '歷史沿革', url: '/history' },
        { title: '願景及使命', url: '/vision' },
        { title: '團隊介紹', url: '/team' },
        { title: '競爭優勢', url: '/advantage' },
        { title: '產品理念', url: '/idea' },
    ];

    const LANGUAGE_NAV_ITEMS = [
        { title: '中文', url: '/cattlefish', lang: 'zh-TW' },
        { title: 'English', url: '/octupus', lang: 'en' },
        { title: 'Français', url: '/shell', lang: 'fr' },
    ];

    const SERVICE_NAV_ITEMS = [
        { title: '冷凍水產品', url: '/about' },
        { title: '冷凍及蒸煮食品加工', url: '/history' },
        { title: '儲存服務', url: '/vision' },
    ];

    const SEAFOOD_NAV_ITEMS = [
        { title: '花枝', url: '/cattlefish' },
        { title: '章魚', url: '/octupus' },
        { title: '螺肉', url: '/shell' },
    ];

    const FISH_NAV_ITEMS = [
        { title: '沙丁全魚', url: '/cattlefish' },
        { title: '鯖魚全魚', url: '/octupus' },
        { title: '鯖魚對切', url: '/shell' },
        { title: '竹莢全魚', url: '/shell' },
        { title: '竹莢對切', url: '/shell' },
        { title: '白帶魚全魚', url: '/shell' },
        { title: '白帶魚去頭尾', url: '/shell' },
        { title: '比目魚全魚', url: '/shell' },
        { title: '比目魚切片', url: '/shell' },
        { title: '鯛魚全魚', url: '/shell' },
        { title: '鯛魚去內臟', url: '/shell' },
        { title: '石鱸全魚', url: '/shell' },
        { title: '石鱸去內臟', url: '/shell' },
        { title: '樹葉鯧', url: '/shell' },
    ];

    const PRODUCTS_NAV_ITEMS = [
        { title: '魚', url: '/fish', descNavItems: FISH_NAV_ITEMS },
        { title: '海鮮', url: '/seafood', descNavItems: SEAFOOD_NAV_ITEMS },
    ];

    return { ABOUT_NAV_ITEMS, LANGUAGE_NAV_ITEMS, SERVICE_NAV_ITEMS, FISH_NAV_ITEMS, PRODUCTS_NAV_ITEMS };

};
