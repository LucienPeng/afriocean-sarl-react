import { Stack, Grid, Box, List, Typography, ListItemIcon, ListItem } from "@mui/material";
import { StyledButton, StyledListItemText } from "../../components/UI/StyledComponents";
import { useNavigation } from "../../utils/useNavigation";
import { useDeviceMetadata } from "../../utils/useDeviceMetadata";
import { useBusinessPagesTranslation } from "../../i18n/useTranslations";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const FROZEN_PRODUCTS = ['Wild Fish', "Cephalopods", "Cymbium", "Baits", "Processed Products"];

const FrozenProductIntroPage = () => {
    const { navigationHandler } = useNavigation();
    const { isMobileView } = useDeviceMetadata();
    const { t } = useBusinessPagesTranslation();
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' my={25} gap={10}>
            <Grid item xs={11} sm={10} md={6}>
                <Stack spacing={5}>
                    <Box>
                        <Stack spacing={5}>
                            <Typography variant="h3" color="initial" fontSize='28px'>
                                {t('frozenProduct.resume')}
                            </Typography>
                            <Typography variant="body1" color="initial" fontWeight={400}>
                                {t('frozenProduct.description')}
                            </Typography>
                        </Stack>
                        <List>
                            {FROZEN_PRODUCTS.map((frozenProduct, index) => (
                                <ListItem key={index}>
                                    <ListItemIcon>
                                        <ArrowRightIcon />
                                    </ListItemIcon>
                                    <StyledListItemText>
                                        {t(`frozenProduct.products.product${index + 1}`)}
                                    </StyledListItemText>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                    <StyledButton variant="contained" sx={{ alignSelf: 'center' }} onClick={() => navigationHandler('/')}>{t('redirect')}</StyledButton>
                </Stack>

            </Grid>

            <Grid item xs={12} sm={12} md={5}>
                <Box
                    component='img'
                    width='100%'
                    height='100%'
                    src='https://www.afriocean.com/images/intro/intro4.jpg'
                    borderRadius={!isMobileView && 2}
                    sx={{ opacity: 0.9 }}
                />
            </Grid>
        </Grid>


    );
};

export default FrozenProductIntroPage;

