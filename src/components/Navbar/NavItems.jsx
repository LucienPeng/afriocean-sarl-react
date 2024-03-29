import { Box, Button, Typography, MenuItem, Menu } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { useNavigation } from '../../utils/useNavigation';



export const NavItems = (props) => {
    const { navItem, navHandler, activeLink, setActiveLink } = props;
    const { pathname } = useLocation();
    const { navigationHandler } = useNavigation();
    const { i18n } = useTranslation();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClose = () => setAnchorEl(null);
    const handleClick = (event, ref, url) => {
        setAnchorEl(event.currentTarget);
        navHandler(ref, url);
    };

    const menuHandler = (id, lngCode, url) => {
        switch (true) {
            case id === 'service': {
                switch (true) {
                    case url === 'frozen-product': {
                        navigationHandler('./service/frozen-product');
                        break;
                    }
                    case url === 'elaborated-product': {
                        navigationHandler('./service/elaborated-product');
                        break;
                    }
                    case url === 'customizedProduct': {
                        navigationHandler('./contact');
                        break;
                    }
                    default: {
                        console.log("something went wrong with nav service");
                        break;
                    }
                }
                break;
            }
            case id === 'about': {
                switch (true) {
                    case url === 'history': {
                        navigationHandler('./about/history');
                        break;
                    }
                    case url === 'factory': {
                        navigationHandler('./about/factory');
                        break;
                    }
                    case url === 'vision': {
                        navigationHandler('./about/vision');
                        break;
                    }
                    case url === 'quality': {
                        navigationHandler('./about/quality');
                        break;
                    }
                    default: {
                        console.log("something went wrong with nav about");
                        break;
                    }
                }
                break;
            }
            case id === 'product': {
                switch (true) {
                    case url === 'fish': {
                        navigationHandler('./product/fish');
                        break;
                    }
                    case url === 'seafood': {
                        navigationHandler('./product/seafood');
                        break;
                    }
                    case url === 'elaborate': {
                        navigationHandler('./contact');
                        break;
                    }
                    default: {
                        console.log("something went wrong with nav product");
                        break;
                    }
                }
                break;
            }
            case id === 'language': {
                switch (true) {
                    case lngCode !== undefined: {
                        i18n.changeLanguage(lngCode);
                        break;
                    }
                    default: {
                        console.log(lngCode);
                        break;
                    }
                }
                break;
            }
            default: {
                console.log("something went wrong with language");
                break;
            }
        }
    };

    useEffect(() => {
        if (pathname === navItem.url) {
            setActiveLink(navItem.ref);
        }
    }, [navItem.ref, navItem.url, pathname, setActiveLink]);


    return (
        <Box id={navItem.title} key={navItem.title}>
            <Button
                id={navItem.title}
                height='100%'
                variant='text'
                onClick={(event) => handleClick(event, navItem.ref, navItem.url)}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                disableRipple
            >
                <Typography variant="h3" fontSize={18}
                    sx={{
                        fontWeight: activeLink === navItem.ref ? 700 : 400, color: { xs: 'primary.dark', md: activeLink === navItem.ref ? 'secondary.light' : 'common.white' },
                        "&:hover": { color: 'secondary.light' }
                    }}>
                    {navItem.title}
                </Typography>
            </Button>
            {
                navItem.subNavItems &&
                <Menu
                    onClick={handleClose}
                    anchorEl={anchorEl}
                    open={open}
                >
                    {navItem.subNavItems.map((subNavItem) =>
                        <MenuItem sx={{ fontSize: '16px' }} key={subNavItem.title} onClick={menuHandler.bind(this, navItem.id, subNavItem.lang, subNavItem.url)}>
                            {subNavItem.title}
                        </MenuItem>)
                    }
                </Menu >
            }
        </Box >
    );
};
