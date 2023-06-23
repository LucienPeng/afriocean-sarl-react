import { Stack, Typography, Box, ImageList, ImageListItem, ImageListItemBar, IconButton } from "@mui/material";
import { useNavigation } from '../../utils/useNavigation';
import { useHomePageTranslation } from "../../i18n/useTranslations";
import { useDeviceMetadata } from "../../utils/useDeviceMetadata";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const SERVICES = [
    { id: 1, service: 'Frozen product', photo: 'https://www.afriocean.com/images/intro/intro1.jpg', pathname: '/service/frozen-product' },
    { id: 2, service: 'Elaborated Product', photo: 'https://www.afriocean.com/images/intro/intro2.jpg', pathname: '/service/elaborated-product' },
    { id: 3, service: 'Customized Product', photo: 'https://www.afriocean.com/images/intro/intro3.jpg', pathname: '/contact' }
];

export const Business = (props) => {
    const { serviceRef } = props;
    const { navigationHandler } = useNavigation();
    const { isMobileView } = useDeviceMetadata();
    const { t } = useHomePageTranslation();

    return (
        <Stack ref={serviceRef} mb={10} minHeight='50vh' width='100%' justifyContent='center' alignItems='center'>
            <Typography my={10} variant="h2" fontWeight={700} color="text.primary">
                {t('business.title')}
            </Typography>

            <ImageList sx={{ width: isMobileView ? '70%' : "90%", overflow: 'hidden' }} gap={isMobileView ? 30 : 10} cols={isMobileView ? 1 : 3} >
                {SERVICES.map((service, index) => (
                    <ImageListItem key={service.id} data-aos="zoom-in"
                        onClick={() => navigationHandler(service.pathname)}
                        sx={{ overflow: 'hidden' }}
                    >
                        <Box
                            loading="lazy"
                            component='img'
                            width='100%'
                            height='100%'
                            src={service.photo}
                            sx={{
                                opacity: 1,
                                "&:hover": { opacity: 0.9, cursor: 'pointer', transform: 'scale(1.1)', transition: '0.5s all ease-out' }
                            }}
                        />
                        <ImageListItemBar
                            title={t(`business.services.service${index + 1}`)}
                            actionIcon={
                                <IconButton sx={{ color: '#ffffff' }} >
                                    <KeyboardDoubleArrowRightIcon className="animate__animated animate__flash animate__slower animate__infinite" />
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}

            </ImageList>




            {/* <Grid width="90%" container spacing={10} justifyContent='center' alignItems='center' direction="row" >
                {SERVICES.map((service, index) => (
                    <Grid item key={service.id} md={4} data-aos="zoom-in-down">
                        <Grid container alignItems='center' justifyContent='center' >
                            <Stack width='100%' alignItems='center' justifyContent='center' direction="column" spacing={5}
                                sx={{ "&:hover": { cursor: 'pointer', transform: 'scale(1.1)', transition: '0.5s all ease-out' } }}
                            >
                                <Grid item xs={12} sm={4} md={12}>
                                    <Box
                                        component='img'
                                        width='100%'
                                        height='100%'
                                        src={service.photo}
                                        borderRadius={2}
                                        sx={{ opacity: 0.9 }}
                                        onClick={() => navigationHandler(service.pathname)}
                                    />
                                </Grid>
                                <Grid item xs={6} sm={6} md={12}>
                                    <Stack direction='row' alignItems='center' spacing={2} onClick={() => navigationHandler(service.pathname)}>
                                        <Typography fontSize={18} fontWeight={400} textAlign='center' letterSpacing={0} variant="h2" color="text.primary">
                                            {t(`business.services.service${index + 1}`)}
                                        </Typography>
                                        <KeyboardDoubleArrowRightIcon className="animate__animated animate__flash animate__slower animate__infinite" />
                                    </Stack>
                                </Grid>
                            </Stack>
                        </Grid>
                    </Grid>
                ))}
            </Grid> */}
        </Stack >
    );
};

