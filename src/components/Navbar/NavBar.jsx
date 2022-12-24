import React, { useState, useRef, useEffect } from 'react';
import { Box, Stack, AppBar, Toolbar, IconButton } from '@mui/material';
import { NavItems } from './NavItems';
import { useNavConfig } from './NavConfigs';
import { useLocation, useNavigate } from 'react-router-dom';
import { MobileNavBar } from './MobileNavBar';
import { useToggle } from '../../utils/useToggle';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import MenuIcon from '@mui/icons-material/Menu';


export const NavBar = (props) => {
    const { NAV_MENU } = useNavConfig();
    const { pathname } = useLocation();
    const { isToggle, setIsToggle, toggleHandler } = useToggle();
    const { homeRef, aboutRef, serviceRef, productRef, contactRef } = props;
    const isHomePage = pathname === '/';
    const NAV_ITEMS = NAV_MENU(aboutRef, serviceRef, productRef, contactRef);
    const navigate = useNavigate();
    const nav = useRef('');

    const [isScrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState();

    const scrollToHandle = (event, ref, url) => {
        if (isHomePage) {
            window.scrollTo({
                top: ref.current.offsetTop - 100,
                behavior: 'smooth',
            });
            setActiveLink(ref);
        } else {
            setActiveLink();
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

    return (
        <AppBar ref={nav} component='nav' position="fixed" className='animate__animated animate__fadeInDown'
            sx={{ height: 80, bgcolor: isHomePage ? isScrolled ? 'rgba(34, 67, 103, 0.9)' : 'transparent' : 'rgba(34, 67, 103, 0.9)', boxShadow: isScrolled ? 'inset' : 'none', transition: 'ease-out 0.3s all', justifyContent: 'center' }}>
            <Toolbar>
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={toggleHandler}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <MobileNavBar
                        NAV_ITEMS={NAV_ITEMS}
                        isToggle={isToggle}
                        setIsToggle={setIsToggle}
                        toggleHandler={toggleHandler}
                    />
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
    );
};
