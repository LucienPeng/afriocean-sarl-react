import { Stack, Typography, Box, Grid } from "@mui/material";
import { useNavigation } from '../../utils/useNavigation';
import { useHomePageTranslation } from "../../i18n/useTranslations";
import intro1 from '../../asset/images/intro/intro1.jpg';
import intro2 from '../../asset/images/intro/intro2.jpg';
import intro3 from '../../asset/images/intro/intro3.jpg';

const SERVICES = [
    { id: 1, service: 'Frozen product', photo: intro1, pathname: '/service/frozen-product' },
    { id: 2, service: 'Elaborated Product', photo: intro2, pathname: '/service/customized-product' },
    { id: 3, service: 'Customized Product', photo: intro3, pathname: '/contact' }
];

export const Business = () => {
    const { navigationHandler } = useNavigation();
    const { t } = useHomePageTranslation();

    return (
        <Stack mb={10} minHeight='50vh' justifyContent='center' alignItems='center'>
            <Typography my={10} variant="h2" fontWeight={700} color="text.primary">{t('business.title')}</Typography>
            <Grid width="90%" container spacing={10} justifyContent='center' alignItems='center' direction="row" >
                {SERVICES.map((service, index) => (
                    <Grid item key={service.id} md={4} data-aos="zoom-in-down">
                        <Grid container alignItems='center' justifyContent='center' >
                            <Stack width='100%' alignItems='center' justifyContent='center' direction="column" spacing={5}>
                                <Grid item xs={12} sm={4} md={10}>
                                    <Box
                                        component='img'
                                        width='100%'
                                        height='100%'
                                        src={service.photo}
                                        borderRadius={2}
                                        sx={{ opacity: 0.9, "&:hover": { cursor: 'pointer', transform: 'scale(1.1)', transition: '0.5s all ease-out' } }}
                                        onClick={() => navigationHandler(service.pathname)}
                                    />
                                </Grid>
                                <Grid item xs={6} sm={6} md={5}>
                                    <Typography fontSize={18} textAlign='center' letterSpacing={0} variant="h2" fontWeight={700} color="text.primary">{t(`business.services.service${index + 1}`)}</Typography>
                                </Grid>
                            </Stack>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Stack >
    );
};

