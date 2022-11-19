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
    opacity: 0.5;
  }
  100% {
    opacity: 0.85;
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
            centeredSlides={true}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false
            }}
            pagination={{
                clickable: true
            }}
            fadeEffect={{ crossFade: true }}
            effect={"fade"}
            modules={[Autoplay, Pagination, EffectFade, Zoom]}
            allowTouchMove={false}
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
                                height: '100%',
                                backgroundImage: `url(${heroBanner.img})`,
                                backgroundSize: { xs: 'cover', md: 'cover' },
                                backgroundRepeated: false,
                                backgroundPosition: 'top',
                                backgroundAttachment: { xs: 'local', md: 'fixed' },
                                opacity: 0.85,
                                animation: isActiveIndex === index ? `${zoomAnimation} 3000ms ${theme.transitions.easing.easeOut}` : ''
                            }}>
                            <Typography fontSize={{ xs: '70px', md: '150px' }} color='common.white' variant="h1" className="animate__animated animate__zoomIn">
                                {t('company')}
                            </Typography>
                            <Typography color='common.white' variant="h6" className="animate__animated animate__slideInUp">
                                {t('subIntro')}
                            </Typography>
                        </Box>
                    </SwiperSlide>
                ))
            };

        </Swiper >
    );
};
