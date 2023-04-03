import { Typography, Grid, Stack, CardMedia, List, ListItemText, ListItemIcon, ListItem } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper";
import { useDeviceMetadata } from "../../utils/useDeviceMetadata";
import { useAboutUsPageTranslation } from "../../i18n/useTranslations";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import equipmemt1 from '../../asset/images/equipment/1.jpg';
import equipmemt2 from '../../asset/images/equipment/2.jpg';
import equipmemt3 from '../../asset/images/equipment/3.jpg';
import equipmemt4 from '../../asset/images/equipment/4.jpg';
import equipmemt5 from '../../asset/images/equipment/5.jpg';
import equipmemt6 from '../../asset/images/equipment/6.jpg';
import equipmemt7 from '../../asset/images/equipment/7.jpg';
import locaux1 from '../../asset/images/locaux/locaux1.jpg';
import locaux2 from '../../asset/images/locaux/locaux2.jpeg';
import locaux3 from '../../asset/images/locaux/locaux3.jpeg';
import locaux4 from '../../asset/images/locaux/locaux4.jpeg';
import locaux5 from '../../asset/images/locaux/locaux5.jpeg';
import ligne1 from '../../asset/images/ligne de production/1.jpg';
import ligne2 from '../../asset/images/ligne de production/2.jpg';
import ligne3 from '../../asset/images/ligne de production/3.jpg';
import ligne4 from '../../asset/images/ligne de production/4.jpg';
import ligne5 from '../../asset/images/ligne de production/5.jpg';
import ligne6 from '../../asset/images/ligne de production/6.jpg';


const EQUIPMENTS = [equipmemt1, equipmemt2, equipmemt3, equipmemt4, equipmemt5, equipmemt6, equipmemt7];
const LIGNES = [ligne1, ligne2, ligne3, ligne4, ligne5, ligne6];
const LOCAUX = [locaux1, locaux2, locaux3, locaux4, locaux5];

const FactoryPage = () => {
    const { isMobileView } = useDeviceMetadata();
    const { t } = useAboutUsPageTranslation();

    return (
        <Stack bgcolor='#E5E5E5' spacing={5} py={10} alignItems='center' justifyContent='center'>
            <Grid container rowGap={3} spacing={5} data-aos="fade-up" justifyContent='center' alignItems='center' direction='row'>
                <Grid item xs={11} md={5} justifyContent='center'>
                    <Typography variant="h2" lineHeight={2} fontWeight={700} letterSpacing={0} color="primary.primary">
                        {t('factory.subTitle1')}
                    </Typography>
                    <Typography variant="body1" color="text.dark">
                        {t('factory.description1')}
                    </Typography>
                </Grid>
                <Grid item xs={11} md={5} justifyContent='center'>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <ArrowRightIcon />
                            </ListItemIcon>
                            <ListItemText>
                                <ListItemText>{t('factory.section1.paragraph1')}</ListItemText>
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <ArrowRightIcon />
                            </ListItemIcon>
                            <ListItemText>
                                <ListItemText>{t('factory.section1.paragraph2')}</ListItemText>
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <ArrowRightIcon />
                            </ListItemIcon>
                            <ListItemText>
                                <ListItemText>{t('factory.section1.paragraph3')}</ListItemText>
                                <ListItemText>{t('factory.section1.paragraph4')}</ListItemText>
                                <ListItemText>{t('factory.section1.paragraph5')}</ListItemText>
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <ArrowRightIcon />
                            </ListItemIcon>
                            <ListItemText>
                                <ListItemText>{t('factory.section1.paragraph6')}</ListItemText>
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <ArrowRightIcon />
                            </ListItemIcon>
                            <ListItemText>
                                <ListItemText>{t('factory.section1.paragraph7')}</ListItemText>
                            </ListItemText>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>

            <Grid container justifyContent='center' alignItems="stretch" >
                <Grid item xs={12} data-aos="fade-up" justifyContent='center' alignItems='center'>
                    <Swiper
                        slidesPerView={isMobileView ? 1 : 3}
                        spaceBetween={30}
                        navigation={true}
                        grabCursor={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                    >
                        {EQUIPMENTS.map((equipment, index) => (
                            <SwiperSlide key={index}>
                                <CardMedia
                                    sx={{ borderRadius: isMobileView ? 0 : 1, minHeight: 400, backgroundPosition: 'top', opacity: 0.95 }}
                                    image={equipment}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Grid>
            </Grid>

            <Grid container display="flex" rowGap={10} data-aos="fade-up" direction='row' justifyContent='center' alignItems='center'>
                <Grid item md={5}>
                    <Stack spacing={2} alignItems='center'>
                        <Typography variant="h2" fontSize='22px' fontWeight={700} letterSpacing={0} color="primary.primary">
                            {t('factory.subTitle2')}
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowRightIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    <ListItemText>{t('factory.section2.paragraph1')}</ListItemText>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowRightIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    <ListItemText>{t('factory.section2.paragraph2')}</ListItemText>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowRightIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    <ListItemText>{t('factory.section2.paragraph3')}</ListItemText>
                                    <ListItemText>{t('factory.section2.paragraph4')}</ListItemText>
                                    <ListItemText>{t('factory.section2.paragraph5')}</ListItemText>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowRightIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    <ListItemText>{t('factory.section2.paragraph6')}</ListItemText>
                                    <ListItemText>{t('factory.section2.paragraph7')}</ListItemText>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Stack>
                </Grid>
                <Grid item md={4} xs={12}>
                    <Swiper
                        navigation={true}
                        grabCursor={true}
                        pagination={true}
                        loop={true}
                        modules={[Pagination]}
                    >
                        {LOCAUX.map((local, index) => (
                            <SwiperSlide key={index} >
                                <CardMedia
                                    sx={{ minHeight: 400, borderRadius: isMobileView ? 0 : 1, backgroundPosition: 'top' }}
                                    image={local}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Grid>
            </Grid>

            <Grid width='100%' container rowGap={10} data-aos="fade-up" direction='row' justifyContent='center' alignItems='center'>
                <Typography mt={10} variant="h2" fontSize='22px' fontWeight={700} letterSpacing={0} color="primary.primary">
                    {t('factory.subTitle3')}
                </Typography>
                <Swiper
                    loop={true}
                    effect={"coverflow"}
                    slidesPerView={'auto'}
                    grabCursor={true}
                    pagination={true}
                    centeredSlides={true}
                    modules={[EffectCoverflow, Pagination]}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 10,
                        depth: 50,
                        modifier: 1,
                        slideShadows: true,
                    }}
                >
                    {LIGNES.map((ligne, index) => (
                        <SwiperSlide key={index} style={{ height: 400, width: 400 }} >
                            <CardMedia
                                sx={{ height: '100%', width: '100%', borderRadius: isMobileView ? 0 : 1, backgroundPosition: 'top' }}
                                image={ligne}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Grid>

        </Stack>
    );
};

export default FactoryPage;
