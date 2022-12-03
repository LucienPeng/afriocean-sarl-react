import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { ChevronRight } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


export const MobileNavItems = (props) => {
    const { index, item, subMenuHandler, toggleHandler } = props;
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
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={item.title} />
                {isSubMenu && <ChevronRight />}
            </ListItemButton>
        </ListItem >
    );
};
