import { Drawer, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Box } from '@mui/material';
import { MobileNavItems } from './MobileNavItems';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import { useNavigation } from '../../utils/useNavigation';

export const MobileNavBar = (props) => {
    const { isToggle, drawerToggleHandler, mobileNavList, setMobileNavList } = props;
    const { navigationHandler } = useNavigation();

    const subMenuHandler = (menu) => setMobileNavList(menu);

    const backToMainPageHandler = () => {
        navigationHandler('/');
        drawerToggleHandler();
    };

    return (
        <Drawer
            anchor='left'
            open={isToggle}
            onClose={drawerToggleHandler}
        >
            <Box width={250}>
                <List>
                    {mobileNavList.map((item, index) => (
                        <MobileNavItems
                            key={index}
                            index={index + item.title}
                            item={item}
                            subMenuHandler={subMenuHandler}
                            drawerToggleHandler={drawerToggleHandler}
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
