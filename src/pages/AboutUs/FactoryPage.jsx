import { Typography, Grid, Stack, CardMedia, List, ListItemIcon, ListItem } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper";
import { useDeviceMetadata } from "../../utils/useDeviceMetadata";
import { useAboutUsPageTranslation } from "../../i18n/useTranslations";
import { StyledListItemText } from '../../components/UI/StyledComponents';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const EQUIPMENTS = [
    'https://www.afriocean.com/images/equipment/1.jpg',
    'https://www.afriocean.com/images/equipment/2.jpg',
    'https://www.afriocean.com/images/equipment/3.jpg',
    'https://www.afriocean.com/images/equipment/4.jpg',
    'https://www.afriocean.com/images/equipment/5.jpg',
    'https://www.afriocean.com/images/equipment/6.jpg',
    'https://www.afriocean.com/images/equipment/7.jpg'
];

const LIGNES = [
    'https://www.afriocean.com/images/ligne de production/1.jpg',
    'https://www.afriocean.com/images/ligne de production/2.jpg',
    'https://www.afriocean.com/images/ligne de production/3.jpg',
    'https://www.afriocean.com/images/ligne de production/4.jpg',
    'https://www.afriocean.com/images/ligne de production/5.jpg',
    'https://www.afriocean.com/images/ligne de production/6.jpg'
];

const LOCAUX = [
    'https://www.afriocean.com/images/locaux/locaux1.jpg',
    'https://www.afriocean.com/images/locaux/locaux2.jpeg',
    'https://www.afriocean.com/images/locaux/locaux3.jpeg',
    'https://www.afriocean.com/images/locaux/locaux4.jpeg',
    'https://www.afriocean.com/images/locaux/locaux5.jpeg',
];

const FactoryPage = () => {
    const { isMobileView } = useDeviceMetadata();
    const { t } = useAboutUsPageTranslation();

    return (
        <Stack bgcolor='#E5E5E5' spacing={5} py={10}>
            <Grid container rowGap={3} spacing={5} data-aos="fade-up" justifyContent='center' alignItems='center' direction='row'>
                <Grid item xs={11} md={5} justifyContent='center'>
                    <Typography variant="h2" lineHeight={2} fontWeight={700} letterSpacing={0} color="text.primary">
                        {t('factory.subTitle1')}
                    </Typography>
                    <Typography variant="body1" color="text.primary">
                        {t('factory.description1')}
                    </Typography>
                </Grid>
                <Grid item xs={11} md={5} justifyContent='center'>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <ArrowRightIcon />
                            </ListItemIcon>
                            <StyledListItemText>
                                <StyledListItemText>{t('factory.section1.paragraph1')}</StyledListItemText>
                            </StyledListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <ArrowRightIcon />
                            </ListItemIcon>
                            <StyledListItemText>
                                <StyledListItemText>{t('factory.section1.paragraph2')}</StyledListItemText>
                            </StyledListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <ArrowRightIcon />
                            </ListItemIcon>
                            <StyledListItemText>
                                <StyledListItemText>{t('factory.section1.paragraph3')}</StyledListItemText>
                                <StyledListItemText>{t('factory.section1.paragraph4')}</StyledListItemText>
                                <StyledListItemText>{t('factory.section1.paragraph5')}</StyledListItemText>
                            </StyledListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <ArrowRightIcon />
                            </ListItemIcon>
                            <StyledListItemText>
                                <StyledListItemText>{t('factory.section1.paragraph6')}</StyledListItemText>
                            </StyledListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <ArrowRightIcon />
                            </ListItemIcon>
                            <StyledListItemText>
                                <StyledListItemText>{t('factory.section1.paragraph7')}</StyledListItemText>
                            </StyledListItemText>
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
                        <Typography variant="h2" fontSize='22px' fontWeight={700} letterSpacing={0} color="text.primary">
                            {t('factory.subTitle2')}
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowRightIcon />
                                </ListItemIcon>
                                <StyledListItemText>
                                    <StyledListItemText>{t('factory.section2.paragraph1')}</StyledListItemText>
                                </StyledListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowRightIcon />
                                </ListItemIcon>
                                <StyledListItemText>
                                    <StyledListItemText>{t('factory.section2.paragraph2')}</StyledListItemText>
                                </StyledListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowRightIcon />
                                </ListItemIcon>
                                <StyledListItemText>
                                    <StyledListItemText>{t('factory.section2.paragraph3')}</StyledListItemText>
                                    <StyledListItemText>{t('factory.section2.paragraph4')}</StyledListItemText>
                                    <StyledListItemText>{t('factory.section2.paragraph5')}</StyledListItemText>
                                </StyledListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowRightIcon />
                                </ListItemIcon>
                                <StyledListItemText>
                                    <StyledListItemText>{t('factory.section2.paragraph6')}</StyledListItemText>
                                    <StyledListItemText>{t('factory.section2.paragraph7')}</StyledListItemText>
                                </StyledListItemText>
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
                <Typography mt={10} variant="h2" fontSize='22px' fontWeight={700} letterSpacing={0} color="text.primary">
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
