import { Box } from "@mui/material";
import { useLocation } from 'react-router-dom';
import { useMemo } from "react";
import bannerUrl1 from '../../asset/images/banner1.jpg';
import bannerUrl2 from '../../asset/images/banner2.jpg';

export const Banner = () => {
    const { pathname } = useLocation();
    const bannerUrl = useMemo(() => {
        if (pathname === '/about') {
            return bannerUrl1;
        } else {
            return bannerUrl2;
        }
    }, [pathname]);

    return (
        <Box
            sx={{
                width: '100%',
                minHeight: '50vh',
                backgroundImage: `url(${bannerUrl})`,
                backgroundSize: 'cover',
                backgroundRepeated: false,
                backgroundPosition: 'center',
            }}
            component='img'
        />
    );
};
