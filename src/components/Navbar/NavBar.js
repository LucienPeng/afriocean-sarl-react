import { Box, Stack } from '@mui/material';
import React, { useState, useRef, useEffect } from 'react';
import { ABOUT_NAV_ITEMS, SERVICE_NAV_ITEMS, PRODUCTS_NAV_ITEMS, LANGUAGE_NAV_ITEMS } from './NavConfigs';
import { NavItems } from './NavItems';

export const NavBar = (props) => {
    const { homeRef, aboutRef, serviceRef, productRef, contactRef } = props;

    const NAV_ITEMS = [
        { title: '工廠介紹', url: '/about', subNavItems: ABOUT_NAV_ITEMS, ref: aboutRef },
        { title: '服務介紹', url: '/service', subNavItems: SERVICE_NAV_ITEMS, ref: serviceRef },
        { title: '產品介紹', url: '/products', subNavItems: PRODUCTS_NAV_ITEMS, ref: productRef },
        { title: '聯絡我們', url: '/contact', ref: contactRef },
        { title: '語言', url: '#', subNavItems: LANGUAGE_NAV_ITEMS, ref: null },
    ];

    const togglerDown = useRef('');
    const nav = useRef('');

    const [isScrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState();

    const toggleHandle = () => {
        if (togglerDown.current.classList.contains('triangleActive')) {
            togglerDown.current.classList.remove('triangleActive');
            togglerDown.current.classList.add('triangleDisactive');
            nav.current.classList.remove('bg-dark');
        } else {
            togglerDown.current.classList.add('triangleActive');
            togglerDown.current.classList.remove('triangleDisactive');
            nav.current.classList.add('bg-dark');
        }
    };

    const listenScrollEvent = () => {
        if (window.scrollY > 10) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    const scrollToHandle = (event, ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: 'smooth',
        });
        setActiveLink(ref);
    };

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
    }, [isScrolled]);


    return (
        <Stack component='nav'
            height={80} justifyContent='center' alignItems='center'
            className={`navbar fixed-top ${isScrolled ? 'bg-dark' : ''} navbar-expand-lg navbar-light`}
            ref={nav}
        >
            <Stack ref={homeRef} component='div' direction='row' spacing={10} justifyContent='center' alignItems='center'>

                <Box
                    component='img'
                    src='https://i.imgur.com/1UpdxEV.png'
                    alt='logo'
                    height={50}
                    onClick={(event) => scrollToHandle(event, homeRef)}
                    sx={{ cursor: 'pointer' }}
                />

                <Box className='toggler ' onClick={toggleHandle}>
                    <Box
                        component='img'
                        id='logo-toggler'
                        className='d-lg-none'
                        src='https://i.imgur.com/1UpdxEV.png'
                        alt=''
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarSupportedContent'
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    />
                    <i
                        ref={togglerDown}
                        className='bi bi-caret-up-fill d-lg-none text-white'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarSupportedContent'
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    ></i>
                </Box>

                <Box className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <Stack direction='row' spacing={20} width='100%' height='100%'>
                        {NAV_ITEMS.map((navItem, index) => (
                            <NavItems key={index} navItem={navItem} scrollToHandle={scrollToHandle} />
                        ))}
                    </Stack>
                </Box>
            </Stack >
        </Stack >

    );
};
