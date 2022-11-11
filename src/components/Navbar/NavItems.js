import { Box, Menu, Button, MenuItem } from '@mui/material';
import { NestedMenuItem } from 'mui-nested-menu';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';


export const NavItems = (props) => {
    const { navItem, scrollToHandle } = props;
    const { i18n } = useTranslation();

    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event, ref, url) => {
        setAnchorEl(event.currentTarget);
        scrollToHandle(event, ref, url);
    };

    const handleClose = () => {
        setAnchorEl(null);
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

    return (
        <Box key={navItem.title}>
            <Button
                id={navItem.title}
                variant='text'
                onClick={(event) => handleClick(event, navItem.ref, navItem.url)}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                sx={{ color: 'common.white' }}
            >
                {navItem.title}
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
                            <MenuItem key={subNavItem.title} onClick={() => menuHandler(subNavItem.lang)}>{subNavItem.title}</MenuItem>
                            : <NestedMenuItem
                                key={subNavItem.title}
                                label={subNavItem.title}
                                parentMenuOpen={open}
                            >
                                {subNavItem.descNavItems.map((descNavItem) => (
                                    <MenuItem key={descNavItem.title} onClick={handleClose}>
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
