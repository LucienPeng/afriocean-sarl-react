import { Box } from "@mui/material";
import { useLocation } from 'react-router-dom';
import { useMemo } from "react";
import aboutBanner from '../../asset/images/banner2.jpg';
import productBanner from '../../asset/images/banner3.jpg';
import serviceBanner from '../../asset/images/banner1.jpg';


export const Banner = () => {
    const { pathname } = useLocation();
    const banner = useMemo(() => {
        if (pathname.includes('/about')) {
            return { url: aboutBanner, position: 'top' };
        } else if (pathname.includes('/service')) {
            return { url: serviceBanner, position: 'center' };
        } else if (pathname.includes('/product')) {
            return { url: productBanner, position: 'center' };
        }
    }, [pathname]);

    return (
        <Box
            sx={{
                width: '100%',
                minHeight: '35vh',
                backgroundColor: 'rgba(0, 0, 0, .3)',
                backgroundBlendMode: 'multiply',
                backgroundImage: `url(${banner.url})`,
                backgroundSize: 'cover',
                backgroundRepeated: false,
                backgroundPosition: `${banner.position}`,

            }}
            component='img'
        />
    );
};
