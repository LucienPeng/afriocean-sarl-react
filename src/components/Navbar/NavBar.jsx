import React, { useState, useRef, useEffect } from 'react';
import { Box, Stack, AppBar, Toolbar, IconButton, Menu } from '@mui/material';
import { ABOUT_NAV_ITEMS, SERVICE_NAV_ITEMS, PRODUCTS_NAV_ITEMS, LANGUAGE_NAV_ITEMS } from './NavConfigs';
import { NavItems } from './NavItems';
import { ScrollTop } from './ScrollToTop';
import { useLocation, useNavigate } from 'react-router-dom';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import MenuIcon from '@mui/icons-material/Menu';



export const NavBar = (props) => {
    const { homeRef, aboutRef, serviceRef, productRef, contactRef } = props;
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const NAV_ITEMS = [
        { title: '工廠介紹', url: '/about', subNavItems: ABOUT_NAV_ITEMS, ref: aboutRef },
        { title: '服務介紹', url: '/service', subNavItems: SERVICE_NAV_ITEMS, ref: serviceRef },
        { title: '產品介紹', url: '/products', subNavItems: PRODUCTS_NAV_ITEMS, ref: productRef },
        { title: '聯絡我們', url: '/contact', ref: contactRef },
        { title: '語言', url: '#', subNavItems: LANGUAGE_NAV_ITEMS, ref: null },
    ];

    const nav = useRef('');

    const [isScrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState();

    const scrollToHandle = (event, ref, url) => {
        if (pathname === '/') {
            window.scrollTo({
                top: ref.current.offsetTop,
                behavior: 'smooth',
            });
            setActiveLink(event.target.id);
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

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
    const handleCloseNavMenu = () => setAnchorElNav(null);



    return (
        <>
            <AppBar ref={nav} component='nav' position="fixed"
                sx={{ bgcolor: isScrolled ? 'primary.main' : 'primary.dark', transition: 'ease-out 0.3s all' }}>
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
