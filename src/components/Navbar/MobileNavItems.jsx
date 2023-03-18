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
                case item.id === 'about' || item.id === 'contact': {
                    navigationHandler(item.url);
                    drawerToggleHandler();
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
                case item.url === 'elaborate': {
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
