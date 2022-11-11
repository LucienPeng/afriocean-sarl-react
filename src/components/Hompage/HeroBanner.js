import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { keyframes } from "@emotion/react";
import { useTheme } from "@mui/material/styles";
import { useHomepageTranslation } from "../../i18n/useTranslations";
import SwiperCore, { Autoplay, Pagination, EffectFade, Zoom } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";

const HEROBANNERS = [
    { title: 'af1', img: 'https://images.pexels.com/photos/11381249/pexels-photo-11381249.jpeg' },
    { title: 'af2', img: 'https://images.pexels.com/photos/891118/pexels-photo-891118.jpeg' },
    { title: 'af3', img: 'https://images.pexels.com/photos/2131967/pexels-photo-2131967.jpeg' }
];

const zoomAnimation = keyframes`
  0% {
    opacity: 0.6;
    transform: scale(1);
  }
  100% {
    opacity: 0.85;
    transform: scale(1.05);
  }
`;

export const HeroBanner = () => {
    const [isActiveIndex, setActiveIndex] = useState(0);
    const { t } = useHomepageTranslation();
    const theme = useTheme();
    const zoomHandler = (e) => setActiveIndex(e.activeIndex);


    SwiperCore.use([EffectFade]);

    return (
        <Swiper
            style={{ overflow: 'hidden', maxHeight: '100vh' }}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false
            }}
            pagination={{
                clickable: true
            }}
            fadeEffect={{ crossFade: true }}
            effect={"fade"}
            modules={[Autoplay, Pagination, EffectFade, Zoom]}
            grabCursor={true}
            onActiveIndexChange={zoomHandler}
            onInit={zoomHandler}
            className="mySwiper"
        >
            {
                HEROBANNERS.map((heroBanner, index) => (
                    <SwiperSlide key={heroBanner.title}>
                        <Box
                            textAlign='center'
                            display='flex'
                            flexDirection='column'
                            alignItems='center'
                            justifyContent='center'
                            sx={{
                                minHeight: '100vh',
                                backgroundImage: `url(${heroBanner.img})`,
                                backgroundSize: 'cover',
                                backgroundRepeated: false,
                                backgroundPosition: 'top',
                                backgroundAttachment: 'fixed',
                                opacity: 0.85,
                                animation: isActiveIndex === index ? `${zoomAnimation} 4000ms ${theme.transitions.easing.easeOut}` : ''
                            }}>
                            <Typography color='common.white' variant="h1" className="animate__animated animate__zoomIn">
                                {t('company')}
                            </Typography>
                            <Typography color='common.white' variant="h6" className="animate__animated animate__slideInUp">
                                — Produits Halieutiques De La Qualité —
                            </Typography>
                        </Box>
                    </SwiperSlide>
                ))
            };

        </Swiper >
    );
};
