import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { ChevronRight } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const MobileNavItems = (props) => {
    const { item, subMenuHandler, toggleHandler } = props;
    const { i18n } = useTranslation();
    const navigate = useNavigate();
    const isSubMenu = item.subNavItems ? true : false;

    const clickHandler = (lngCode) => {
        if (isSubMenu) {
            subMenuHandler(item.subNavItems);
        } else {
            item.url ? navigate(item.url) : i18n.changeLanguage(lngCode);
            toggleHandler();
        }
    };

    return (

        <ListItem>
            <ListItemButton onClick={clickHandler.bind(this, item.lang)}>
                <ListItemIcon>
                    {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
                {isSubMenu && <ChevronRight />}
            </ListItemButton>
        </ListItem >
    );
};
