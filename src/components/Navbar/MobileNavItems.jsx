import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { ChevronRight } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const MobileNavItems = (props) => {
    const { item, subMenuHandler, toggleHandler } = props;
    const { i18n } = useTranslation();
    const navigate = useNavigate();
    const isSubMenu = item.subNavItems ? true : false;

    const clickHandler = (lngCode, item) => {
        if (isSubMenu) {
            subMenuHandler(item.subNavItems);
        } else {
            switch (true) {
                case item.url === 'fish': {
                    navigate('./product/fish');
                    break;
                }
                case item.url === 'seafood': {
                    navigate('./product/seafood');
                    break;
                }
                case item.url === 'elaborate': {
                    navigate('./contact');
                    break;
                }
                default: {
                    item.url ? navigate(item.url) : i18n.changeLanguage(lngCode);
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
