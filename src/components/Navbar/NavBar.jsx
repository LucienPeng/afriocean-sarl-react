import React, { useState, useRef, useEffect } from 'react';
import { Box, Stack, AppBar, Toolbar, IconButton, Menu } from '@mui/material';
import { NavItems } from './NavItems';
import { ScrollTop } from './ScrollToTop';
import { useNavConfig } from './NavConfigs';
import { useLocation, useNavigate } from 'react-router-dom';
import { useHomepageTranslation } from "../../i18n/useTranslations";
import useScrollTrigger from '@mui/material/useScrollTrigger';
import MenuIcon from '@mui/icons-material/Menu';



export const NavBar = (props) => {
    const { ABOUT_NAV_ITEMS, SERVICE_NAV_ITEMS, PRODUCTS_NAV_ITEMS, LANGUAGE_NAV_ITEMS } = useNavConfig();
    const { homeRef, aboutRef, serviceRef, productRef, contactRef } = props;
    const { t } = useHomepageTranslation();
    const { pathname } = useLocation();
    const navigate = useNavigate();


    const NAV_ITEMS = [
        { title: t('nav.intro'), url: '/about', subNavItems: ABOUT_NAV_ITEMS, ref: aboutRef },
        { title: t('nav.service'), url: '/service', subNavItems: SERVICE_NAV_ITEMS, ref: serviceRef },
        { title: t('nav.product'), url: '/product', subNavItems: PRODUCTS_NAV_ITEMS, ref: productRef },
        { title: t('nav.contact'), url: '/contact', ref: contactRef },
        { title: t('nav.language'), url: '#', subNavItems: LANGUAGE_NAV_ITEMS, ref: null },
    ];

    const nav = useRef('');

    const [isScrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState();
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const scrollToHandle = (event, ref, url) => {
        if (pathname === '/') {
            window.scrollTo({
                top: ref.current.offsetTop,
                behavior: 'smooth',
            });
            setActiveLink(ref);
        } else {
            navigate(url);
        }
    };

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 10,
    });

    useEffect(() => {
        if (window.scrollY > 10) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }, [trigger]);

    const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
    const handleCloseNavMenu = () => setAnchorElNav(null);



    return (
        <>
            <AppBar ref={nav} component='nav' position="fixed"
                sx={{ height: 80, bgcolor: isScrolled ? 'primary.dark' : 'transparent', boxShadow: isScrolled ? 'inset' : 'none', transition: 'ease-out 0.3s all', justifyContent: 'center' }}>
                <Toolbar>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {NAV_ITEMS.map((navItem, index) => (
                                <NavItems key={index} navItem={navItem} activeLink={activeLink} scrollToHandle={scrollToHandle} />
                            ))}
                        </Menu>
                    </Box>

                    <Stack sx={{ display: { xs: 'none', md: 'flex' } }} mx={5} width='100%' ref={homeRef} component='div' direction='row' spacing={10} alignItems='center' justifyContent='space-between'>
                        <Box
                            component='img'
                            src='https://i.imgur.com/1UpdxEV.png'
                            alt='logo'
                            height={50}
                            onClick={(event) => scrollToHandle(event, homeRef, '/')}
                            sx={{ cursor: 'pointer', flexGrow: 0, display: { xs: 'none', sm: 'block' } }}
                        />
                        <Stack direction='row' alignItems='center' justifyContent='center' spacing={5}>
                            {NAV_ITEMS.map((navItem, index) => (
                                <NavItems key={index} navItem={navItem} activeLink={activeLink} scrollToHandle={scrollToHandle} />
                            ))}
                        </Stack>

                    </Stack >
                </Toolbar >
            </AppBar>
            <ScrollTop homeRef={homeRef} />
        </>
    );
};
