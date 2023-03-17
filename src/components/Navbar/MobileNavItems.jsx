import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { ChevronRight } from '@mui/icons-material';
import { useNavigation } from '../../utils/useNavigation';
import { useLanguage } from '../../utils/useLanguage';

export const MobileNavItems = (props) => {
    const { item, subMenuHandler, toggleHandler } = props;
    // const { i18n } = useTranslation();
    const { navigationHandler } = useNavigation();
    const { setSearchParams } = useLanguage();
    const isSubMenu = item.subNavItems ? true : false;

    const clickHandler = (lngCode, item) => {
        if (isSubMenu) {
            subMenuHandler(item.subNavItems);
        } else {
            switch (true) {
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
                // case item.lang.length !== 0: {
                //     item.url && navigationHandler(item.url);

                //     break;
                // }
                default: {
                    setSearchParams({ lang: lngCode });
                    break;
                }
            }

            toggleHandler();
        }
    };

    return (

        <ListItem>
            <ListItemButton onClick={clickHandler.bind(this, item.lang, item)}>
                <ListItemIcon>
                    {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
                {isSubMenu && <ChevronRight />}
            </ListItemButton>
        </ListItem >
    );
};
