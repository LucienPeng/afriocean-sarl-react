import { Stack, Grid, Box, List, ListItemText, Typography, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import { StyledButton } from "../UI/StyledComponents";
import { useNavigation } from "../../utils/useNavigation";
import { useDeviceMetadata } from "../../utils/useDeviceMetadata";
import { CUSTOMIZED_PRODUCTS } from '../../asset/customizedProduct';
import { useBusinessPagesTranslation } from "../../i18n/useTranslations";

const ProductMasonryImageList = () => {
    const { isMobileView } = useDeviceMetadata();
    const { t } = useBusinessPagesTranslation();
    return (
        <Box sx={{ width: '100%', height: '100%', overflowY: 'scroll' }}>
            <ImageList variant="masonry" cols={isMobileView ? 2 : 4} gap={10}>
                {CUSTOMIZED_PRODUCTS.map((item, index) => (
                    <ImageListItem key={item.img + index}>
                        <Box
                            width='100%'
                            component='img'
                            src={item.img}
                            srcSet={item.img}
                            alt={item.title}
                            loading="lazy"
                            sx={{ opacity: 0.9, "&:hover": { transform: 'scale(1.1)', transition: '0.5s all ease-out' } }}
                        />
                        <ImageListItemBar position="below" title={t(`elaboratedProduct.products.product${index+1}`)} sx={{ textAlign: 'center' }} />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
};

export const CustomizedProductIntro = () => {
    const { navigationHandler } = useNavigation();
    const { isMobileView } = useDeviceMetadata();
    const { t } = useBusinessPagesTranslation();


    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' minHeight='100vh' spacing={10} mt={isMobileView && '50px'}>
            <Grid item xs={11} sm={6} md={5}>
                <Stack spacing={5}>

                    <Stack spacing={3}>
                        <Typography variant="h1" color="initial" fontSize='28px'>
                            {t('elaboratedProduct.resume')}
                        </Typography>
                        <Typography variant="body1" color="initial">
                            {t('elaboratedProduct.description')}
                        </Typography>
                    </Stack>
                    <Stack spacing={2}>
                        <Typography variant="h1" color="initial" fontSize='28px'>
                            {t('elaboratedProduct.subTitle')}
                        </Typography>
                        <List>
                            <ListItemText> {t('elaboratedProduct.products.product1')}</ListItemText>
                            <ListItemText> {t('elaboratedProduct.products.product2')}</ListItemText>
                            <ListItemText> {t('elaboratedProduct.products.product3')}</ListItemText>
                            <ListItemText> {t('elaboratedProduct.products.product4')}</ListItemText>
                            <ListItemText> {t('elaboratedProduct.products.product5')}</ListItemText>
                            <ListItemText> {t('elaboratedProduct.products.product6')}</ListItemText>
                            <ListItemText> {t('elaboratedProduct.products.product7')}</ListItemText>
                        </List>
                    </Stack>

                    <StyledButton variant="contained" sx={{ alignSelf: 'center' }} onClick={() => navigationHandler('/')}>{t('redirect')}</StyledButton>
                </Stack>

            </Grid>

            <Grid item xs={11} sm={8} md={5}>
                <ProductMasonryImageList />
            </Grid>
        </Grid>


    );
}


