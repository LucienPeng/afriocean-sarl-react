import { Drawer, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Box } from '@mui/material';
import { MobileNavItems } from './MobileNavItems';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import FirstPageIcon from '@mui/icons-material/FirstPage';

export const MobileNavBar = (props) => {
    const { NAV_ITEMS, isToggle, setIsToggle } = props;
    const navigate = useNavigate();
    const [navList, setNavList] = useState(NAV_ITEMS);

    const subMenuHandler = (menu) => setNavList(menu);

    const toggleDrawer = (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        toggleHandler();
    };

    const toggleHandler = () => {
        setNavList(NAV_ITEMS);
        setIsToggle(!isToggle);
    };

    const backToMainPageHandler = () => {
        navigate('/');
        toggleHandler();
    };

    return (
        <Drawer
            anchor='left'
            open={isToggle}
            onClose={toggleDrawer}
        >
            <Box
                width={250}
                role="presentation"
                onKeyDown={toggleDrawer}
            >
                <List>
                    {navList.map((item, index) => (
                        <MobileNavItems
                            key={index}
                            index={index}
                            item={item}
                            subMenuHandler={subMenuHandler}
                            toggleHandler={toggleHandler}
                        />
                    ))}

                    <ListItem sx={{ mt: '50%' }}>
                        <ListItemButton onClick={backToMainPageHandler} >
                            <ListItemIcon>
                                <FirstPageIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Back to homepage'} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box >
        </Drawer>
    );
};
