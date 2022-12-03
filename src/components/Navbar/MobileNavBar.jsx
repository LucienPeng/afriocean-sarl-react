import { Drawer, List, ListItem, ListItemButton, ListItemText, Box } from '@mui/material';
import { useState } from 'react';
import { MobileNavItems } from './MobileNavItems';
import { useNavigate } from 'react-router-dom';
import _ from 'lodash';

export const MobileNavBar = (props) => {
    const { NAV_ITEMS, isToggle, setIsToggle } = props;
    const navigate = useNavigate();
    const [navList, setNavList] = useState(NAV_ITEMS);

    const toggleHandler = () => {
        setIsToggle(!isToggle);
        setNavList(NAV_ITEMS);
    };

    const backHandler = () => _.isEqual(navList, NAV_ITEMS) ? toggleHandler() : setNavList(NAV_ITEMS);
    const subMenuHandler = (menu) => setNavList(menu);

    const toggleDrawer = (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        toggleHandler();
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
                    <ListItem>
                        <ListItemButton onClick={backHandler} >
                            <ListItemText sx={{ textAlign: 'center', fontWeight: 700 }} primary={'Back'} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton onClick={backToMainPageHandler} >
                            <ListItemText sx={{ textAlign: 'center', fontWeight: 700 }} primary={'Back to main page'} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box >
        </Drawer>
    );
};
