import HeroBanner1 from '../../asset/images/heroBanner1.jpg';
import HeroBanner2 from '../../asset/images/heroBanner2.jpg';
import HeroBanner3 from '../../asset/images/heroBanner3.jpg';
import HeroBanner4 from '../../asset/images/heroBanner4.jpg';
import HeroBanner5 from '../../asset/images/heroBanner5.jpg';

import React, { useState } from "react";
import { Stack, Typography } from "@mui/material";
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
    { title: 'heroBanner1', img: HeroBanner1 },
    { title: 'heroBanner2', img: HeroBanner2 },
    { title: 'heroBanner3', img: HeroBanner3 },
    { title: 'heroBanner4', img: HeroBanner4 },
    { title: 'heroBanner5', img: HeroBanner5 }
];

const zoomAnimation = keyframes`
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 0.85;
  }
`;

export const HeroBanner = () => {
    const [isActiveIndex, setActiveIndex] = useState(0);
    const { t } = useHomePageTranslation();
    const theme = useTheme();
    const zoomHandler = (e) => setActiveIndex(e.activeIndex);
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
            onInit={zoomHandler}
            className="mySwiper"
        >
            {
                HEROBANNERS.map((heroBanner, index) => (
                    <SwiperSlide key={heroBanner.title}>
                        <Stack
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
                                backgroundColor: 'rgba(0, 0, 0, .2)',
                                backgroundSize: { xs: 'cover', md: 'cover' },
                                backgroundRepeated: false,
                                backgroundPosition: 'top',
                                opacity: 0.85,
                                animation: isActiveIndex === index ? `${zoomAnimation} 3000ms ${theme.transitions.easing.easeOut}` : ''
                            }}>
                            <Typography
                                fontSize={{ xs: '70px', md: '150px' }}
                                color='common.white' variant="h1"
                                className="animate__animated animate__zoomIn"
                                sx={{ textShadow: 'rgb(0, 0, 0) 1px 10px 10px' }}
                                lineHeight={0.8}
                            >
                                {t('company')}
                            </Typography>
                            <Typography
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
