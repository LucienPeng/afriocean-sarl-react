import { Box, Menu, Button, MenuItem, Typography } from '@mui/material';
import { NestedMenuItem } from 'mui-nested-menu';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';



export const NavItems = (props) => {
    const { navItem, scrollToHandle, activeLink } = props;
    const { i18n } = useTranslation();
    const [isLinkActive, setLinkActive] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const { pathname } = useLocation();

    const open = Boolean(anchorEl);


    const handleClick = (event, ref, url) => {
        setAnchorEl(event.currentTarget);
        if (ref) scrollToHandle(event, ref, url);
    };

    const handleClose = () => setAnchorEl(null);

    // const menuHandler = (lngCode) => {
    //     switch (true) {
    //         case lngCode !== undefined: {
    //             i18n.changeLanguage(lngCode);
    //             break;
    //         }
    //         default: {
    //             console.log(lngCode);
    //             break;
    //         }
    //     }
    // };

    useEffect(() => {
        if (pathname === navItem.url || navItem.ref === activeLink) {
            setLinkActive(true);
        } else {
            setLinkActive(false);
        }
    }, [activeLink, navItem, pathname]);

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
                    sx={{ fontWeight: isLinkActive ? 700 : 400, color: { xs: 'primary.dark', md: isLinkActive ? 'secondary.light' : 'common.white' } }}>
                    {navItem.title}
                </Typography>
            </Button>

            {
                navItem.subNavItems &&
                <Menu
                    onClick={handleClose}
                    anchorEl={anchorEl}
                //open={open}
                >
                    {/* {navItem.subNavItems.map((subNavItem) => (
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
                    ))} */}
                </Menu >
            }
        </Box >
    );
};
