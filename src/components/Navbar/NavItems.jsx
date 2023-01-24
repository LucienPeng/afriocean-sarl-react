import { Box, Button, Typography, MenuItem, Menu } from '@mui/material';
import { NestedMenuItem } from 'mui-nested-menu';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';



export const NavItems = (props) => {
    const { navItem, scrollToHandler, activeLink, setActiveLink } = props;
    const { i18n } = useTranslation();
    const { pathname } = useLocation();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClose = () => setAnchorEl(null);
    const handleClick = (event, ref, url) => {
        setAnchorEl(event.currentTarget);
        scrollToHandler(event, ref, url);
    };

    const menuHandler = (lngCode) => {
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
                <Typography variant="h1" fontSize={18}
                    sx={{ fontWeight: activeLink === navItem.ref ? 700 : 400, color: { xs: 'primary.dark', md: activeLink === navItem.ref ? 'secondary.light' : 'common.white' } }}>
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
                    {navItem.subNavItems.map((subNavItem) => (
                        !subNavItem.descNavItems ?
                            <MenuItem sx={{ fontSize: '16px' }} key={subNavItem.title} onClick={menuHandler.bind(this, subNavItem.lang)}>{subNavItem.title}</MenuItem>
                            : <NestedMenuItem
                                key={subNavItem.title}
                                label={subNavItem.title}
                                parentMenuOpen={open}
                                sx={{ fontSize: '16px' }}
                            >
                                {subNavItem.descNavItems.map((descNavItem) => (
                                    <MenuItem sx={{ fontSize: '16px' }} key={descNavItem.title} onClick={handleClose}>
                                        {descNavItem.title}
                                    </MenuItem>
                                ))}
                            </NestedMenuItem>
                    ))}
                </Menu >
            }
        </Box >
    );
};
