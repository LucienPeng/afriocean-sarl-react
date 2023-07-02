import React, { useState } from "react";
import { Stack, Typography, Box } from "@mui/material";
import { keyframes } from "@emotion/react";
import { useTheme } from "@mui/material/styles";
import { useHomePageTranslation } from "../../i18n/useTranslations";
import SwiperCore, { Autoplay, Pagination, EffectFade, Zoom } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";

const HEROBANNERS = [
    { title: 'heroBanner1', img: 'https://www.afriocean.com/images/hero-banners/heroBanner1.jpg' },
    { title: 'heroBanner2', img: 'https://www.afriocean.com/images/hero-banners/heroBanner2.jpg' },
    { title: 'heroBanner3', img: 'https://www.afriocean.com/images/hero-banners/heroBanner3.jpg' },
    { title: 'heroBanner4', img: 'https://www.afriocean.com/images/hero-banners/heroBanner4.jpg' },
    { title: 'heroBanner5', img: 'https://www.afriocean.com/images/hero-banners/heroBanner5.jpg' }
];

const ZOOM_ANIMATION = keyframes`
  0% {
    opacity: 0.8;
    scale: 1;
  }
  100% {
    opacity: 0.9;
    scale: 1.1;
  }
`;

const ANIMATION_DURATION = '4500ms';

export const HeroBanner = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const { t } = useHomePageTranslation();
    const theme = useTheme();
    const zoomHandler = (e) => setActiveIndex(e.realIndex);
    SwiperCore.use([EffectFade]);

    return (
        <Swiper
            style={{ overflow: 'hidden', maxHeight: '100vh', width: '100%' }}
            centeredSlides={true}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false
            }}
            pagination={{
                clickable: true
            }}
            loop={true}
            fadeEffect={{ crossFade: true }}
            effect={"fade"}
            draggable={true}
            modules={[Autoplay, Pagination, EffectFade, Zoom]}
            allowTouchMove={true}
            onActiveIndexChange={zoomHandler}
            className="hero-banner-swiper"
        >
            {
                HEROBANNERS.map((heroBanner, index) => (
                    <SwiperSlide key={heroBanner.title} style={{ position: 'relative' }}>
                        <Box
                            textAlign='center'
                            direction='column'
                            alignItems='center'
                            justifyContent='center'
                            spacing={1}
                            sx={{
                                minHeight: '100vh',
                                height: '100%',
                                backgroundBlendMode: 'multiply',
                                backgroundImage: `url(${heroBanner.img})`,
                                backgroundColor: 'rgba(0, 0, 0, .1)',
                                backgroundSize: { xs: 'cover', md: 'cover' },
                                backgroundRepeated: false,
                                backgroundPosition: 'top',
                                opacity: activeIndex !== index + 1 ? 0.9 : 1,
                                scale: activeIndex === index + 1 ? 1.1 : 1,
                                animation: activeIndex === index ? `${ZOOM_ANIMATION} ${ANIMATION_DURATION} ${theme.transitions.easing.easeOut}` : ''
                            }}>
                        </Box>
                        <Stack sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            textAlign: 'center',
                        }}>
                            <Typography
                                fontSize={{ xs: '70px', md: '150px' }}
                                color='common.white'
                                variant="h1"
                                className="animate__animated animate__zoomIn"
                                sx={{ textShadow: 'rgb(0, 0, 0) 1px 10px 10px', wordBreak: 'keep-all' }}
                            >
                                {t('company')}
                            </Typography>
                            <Typography
                                sx={{ wordBreak: 'keep-all' }}
                                color='common.white'
                                fontSize={{ xs: '16px', md: '28px' }}
                                variant="h2"
                                className="animate__animated animate__slideInUp">
                                {t('subIntro')}
                            </Typography>
                        </Stack>
                    </SwiperSlide>
                ))
            };
        </Swiper >
    );
};
