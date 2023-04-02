import { Stack, Grid, Box, List, ListItemText, ListItemButton, ListItemIcon, Typography } from "@mui/material";
import { StyledButton } from "../../components/UI/StyledComponents";
import { useNavigation } from "../../utils/useNavigation";
import { useDeviceMetadata } from "../../utils/useDeviceMetadata";
import { CUSTOMIZED_PRODUCTS } from '../../asset/customizedProduct';
import { useBusinessPagesTranslation } from "../../i18n/useTranslations";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Pagination, Navigation } from "swiper";
import { useRef } from "react";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const ELABORATED_PRODUCTS = ['Whole fish', "Drawn fish", "Dressed fish", "Fish fillets", "Fish sticks", "Shucked and cooked shellfish meat", "Fish roll"];

const ProductMasonryImageList = (props) => {
    return (
        <Box sx={{ width: '100%', height: '100%', overflowY: 'scroll' }}>
            <Swiper
                ref={props.swiperRef}
                effect={"flip"}
                grabCursor={true}
                pagination={true}
                navigation={true}
                modules={[EffectFlip, Pagination, Navigation]}
            >
                {CUSTOMIZED_PRODUCTS.map((item, index) => (
                    <SwiperSlide key={item.img + index}>
                        <Box
                            width='100%'
                            component='img'
                            src={item.img}
                            srcSet={item.img}
                            alt={item.title}
                            loading="lazy"
                            draggable={true}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

const ElaboratedProductIntroPage = () => {
    const { navigationHandler } = useNavigation();
    const { isMobileView } = useDeviceMetadata();
    const { t } = useBusinessPagesTranslation();
    const swiperRef = useRef(null);

    const swipeHandler = (index) => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideTo(index);
        }
    };



    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' minHeight='100vh' spacing={isMobileView ? 5 : 10} mt={'50px'}>
            <Grid item xs={11} sm={10} md={5}>
                <Stack spacing={5}>
                    <Stack spacing={3}>
                        <Typography variant="h3" color="initial" fontSize='28px'>
                            {t('elaboratedProduct.resume')}
                        </Typography>
                        <Typography variant="body1" color="initial">
                            {t('elaboratedProduct.description')}
                        </Typography>
                    </Stack>
                    <Stack>
                        <Typography variant="h3" color="initial" fontSize='28px'>
                            {t('elaboratedProduct.subTitle')}
                        </Typography>
                        <List>
                            {ELABORATED_PRODUCTS.map((elaboratedProduct, index) => (
                                <ListItemButton key={index} onClick={() => {
                                    swipeHandler(index);
                                }}>
                                    <ListItemIcon>
                                        <ArrowRightIcon />
                                    </ListItemIcon>
                                    <ListItemText variant="text">
                                        {t(`elaboratedProduct.products.product${index + 1}`)}
                                    </ListItemText>
                                </ListItemButton>
                            ))}
                        </List>
                    </Stack>
                    {!isMobileView && <StyledButton variant="contained" sx={{ alignSelf: 'center' }} onClick={() => navigationHandler('/')}>{t('redirect')}</StyledButton>}
                </Stack>
            </Grid>

            <Grid item xs={12} sm={10} md={5}>
                <ProductMasonryImageList swiperRef={swiperRef} />
            </Grid>

            {isMobileView &&
                <Grid xs={12} mb={5} item display='flex' justifyContent='center' alignItems='center'>
                    <StyledButton variant="contained" onClick={() => navigationHandler('/')}>
                        {t('redirect')}
                    </StyledButton>
                </Grid>
            }
        </Grid>
    );
};

export default ElaboratedProductIntroPage;



