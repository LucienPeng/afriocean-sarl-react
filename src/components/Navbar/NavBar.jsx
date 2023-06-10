import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Box, Stack, AppBar, Toolbar, IconButton } from '@mui/material';
import { NavItems } from './NavItems';
import { MobileNavBar } from './MobileNavBar';
import { useNavConfig } from './NavConfigs';
import { useNavigation } from '../../utils/useNavigation';
import { useToggle } from '../../utils/useToggle';
import { useLocation, useSearchParams } from 'react-router-dom';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import MenuIcon from '@mui/icons-material/Menu';

export const NavBar = (props) => {
    const { NAV_MENU } = useNavConfig();
    const { isToggle, toggleHandler } = useToggle();
    const { navigationHandler } = useNavigation();
    const { homeRef, aboutRef, productRef, contactRef, serviceRef } = props;
    const NAV_ITEMS = NAV_MENU(aboutRef, productRef, contactRef, serviceRef);
    const nav = useRef('');
    const [searchParam] = useSearchParams();
    const [isScrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState();
    const [mobileNavList, setMobileNavList] = useState(NAV_ITEMS);
    const location = useLocation();
    const param = searchParam.get('category');
    const isProductPage = useMemo(() => (location.pathname.includes('fish') && !param) || (location.pathname.includes('seafood') || !param) ? true : false, [location.pathname, param]);

    const navHandler = (ref, url) => {
        if (ref) {
            setActiveLink(ref);
        }
        if (url !== '#') navigationHandler(url);
    };

    const drawerToggleHandler = () => {
        setMobileNavList(NAV_ITEMS);
        toggleHandler();
    };

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 150,
    });

    useEffect(() => {
        if (window.scrollY > 150) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }, [trigger]);

    return (
        <AppBar ref={nav} component='nav' position="fixed" className='animate__animated animate__fadeInDown'
            sx={{
                height: 80,
                bgcolor: (isScrolled || isProductPage) ? 'rgba(34, 67, 103)' : 'transparent',
                boxShadow: isScrolled ? 'inset' : 'none',
                transition: 'ease-out 0.3s all',
                justifyContent: 'center',
                "&:hover": { bgcolor: 'rgba(34, 67, 103)' }
            }}>
            <Toolbar>
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={drawerToggleHandler}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <MobileNavBar
                        mobileNavList={mobileNavList}
                        setMobileNavList={setMobileNavList}
                        isToggle={isToggle}
                        drawerToggleHandler={drawerToggleHandler}
                    />
                </Box>

                <Stack sx={{ display: { xs: 'none', md: 'flex' } }} mx={5} width='100%' ref={homeRef} component='div' direction='row' spacing={10} alignItems='center' justifyContent='space-between'>
                    <Box
                        component='img'
                        src='https://i.imgur.com/1UpdxEV.png'
                        alt='logo'
                        height={50}
                        onClick={() => navHandler(homeRef, '/')}
                        sx={{ cursor: 'pointer', flexGrow: 0, display: { xs: 'none', sm: 'block' } }}
                    />
                    <Stack direction='row' alignItems='center' justifyContent='center' spacing={5}>
                        {NAV_ITEMS.map((navItem, index) => (
                            <NavItems key={index} navItem={navItem} activeLink={activeLink} setActiveLink={setActiveLink} navHandler={navHandler} />
                        ))}
                    </Stack>
                </Stack >
            </Toolbar >
        </AppBar>
    );
};
