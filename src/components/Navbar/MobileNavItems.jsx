import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { ChevronRight } from '@mui/icons-material';
import { useNavigation } from '../../utils/useNavigation';
import { useTranslation } from 'react-i18next';


export const MobileNavItems = (props) => {
    const { item, subMenuHandler, drawerToggleHandler } = props;
    const { navigationHandler } = useNavigation();
    const { i18n } = useTranslation();
    const isSubMenu = item.subNavItems ? true : false;

    const clickHandler = (item) => {
        if (isSubMenu) {
            subMenuHandler(item.subNavItems);
        } else {
            switch (true) {
                case item.id === 'contact': {
                    navigationHandler(item.url);
                    break;
                }
                case item.url === 'history': {
                    navigationHandler('./about/history');
                    break;
                }
                case item.url === 'factory': {
                    navigationHandler('./about/factory');
                    break;
                }
                case item.url === 'vision': {
                    navigationHandler('./about/vision');
                    break;
                }
                case item.url === 'quality': {
                    navigationHandler('./about/quality');
                    break;
                }
                case item.url === 'fish': {
                    navigationHandler('./product/fish');
                    break;
                }
                case item.url === 'seafood': {
                    navigationHandler('./product/seafood');
                    break;
                }
                case item.url === 'frozen-product': {
                    navigationHandler('./service/frozen-product');
                    break;
                }
                case item.url === 'elaborated-product': {
                    navigationHandler('./service/elaborated-product');
                    break;
                }
                case item.url === 'customizedProduct': {
                    navigationHandler('./contact');
                    break;
                }
                case item.lang === 'en' || item.lang === 'fr' || item.lang === 'zh-TW': {
                    i18n.changeLanguage(item.lang);
                    break;
                }
                default: {
                    console.log(item);
                    break;
                }
            }
            drawerToggleHandler();
        }
    };

    return (
        <ListItem>
            <ListItemButton onClick={() => clickHandler(item)}>
                <ListItemIcon>
                    {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
                {isSubMenu && <ChevronRight />}
            </ListItemButton>
        </ListItem >
    );
};
