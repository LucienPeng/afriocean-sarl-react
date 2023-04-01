import { Stack, Grid, Box, List, ListItemText, Typography } from "@mui/material";
import { StyledButton } from "../UI/StyledComponents";
import { useNavigation } from "../../utils/useNavigation";
import { useDeviceMetadata } from "../../utils/useDeviceMetadata";
import { useBusinessPagesTranslation } from "../../i18n/useTranslations";
import placeHoderImage from '../../asset/images/intro/intro4.jpg';

export const FrozenProductIntro = () => {
    const { navigationHandler } = useNavigation();
    const { isMobileView } = useDeviceMetadata();
    const { t } = useBusinessPagesTranslation();
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' minHeight='100vh' spacing={10} mt={isMobileView && '50px'}>
            <Grid item xs={11} sm={6} md={5}>
                <Stack spacing={5}>
                    <Box>
                        <Stack spacing={5}>
                            <Typography variant="h1" color="initial" fontSize='28px'>
                                <Typography variant="h1" fontSize='32px' color="initial" component='span'>
                                    AFRIOCEAN’s
                                </Typography>
                                {t('frozenProduct.resume')}
                            </Typography>
                            <Typography variant="body1" color="initial" fontWeight={400}>
                                {t('frozenProduct.description')}
                            </Typography>
                        </Stack>
                        <List>
                            <ListItemText>{t('frozenProduct.products.product1')}</ListItemText>
                            <ListItemText>{t('frozenProduct.products.product2')}</ListItemText>
                            <ListItemText>{t('frozenProduct.products.product3')}</ListItemText>
                            <ListItemText>{t('frozenProduct.products.product4')}</ListItemText>
                            <ListItemText>{t('frozenProduct.products.product5')}</ListItemText>
                        </List>
                    </Box>
                    <StyledButton variant="contained" sx={{ alignSelf: 'center' }} onClick={() => navigationHandler('/')}>{t('redirect')}</StyledButton>
                </Stack>

            </Grid>

            <Grid item xs={12} sm={8} md={5}>
                <Box
                    component='img'
                    width='100%'
                    height='100%'
                    src={placeHoderImage}
                    borderRadius={!isMobileView && 2}
                    sx={{ opacity: 0.9 }}
                />
            </Grid>
        </Grid>


    );
}


