import { Box } from "@mui/material";
import { useLocation } from 'react-router-dom';
import { useMemo } from "react";
import bannerUrl1 from '../../asset/images/banner1.jpg';
import bannerUrl2 from '../../asset/images/banner2.jpg';

export const Banner = () => {
    const { pathname } = useLocation();
    const bannerUrl = useMemo(() => {
        if (pathname.includes('/about')) {
            return bannerUrl1;
        } else {
            return bannerUrl2;
        }
    }, [pathname]);

    return (
        <Box
            sx={{
                width: '100%',
                minHeight: '35vh',
                backgroundColor: 'rgba(0, 0, 0, .5)',
                backgroundBlendMode: 'multiply',
                backgroundImage: `url(${bannerUrl})`,
                backgroundSize: 'cover',
                backgroundRepeated: false,
                backgroundPosition: 'center',

            }}
            component='img'
        />
    );
};
