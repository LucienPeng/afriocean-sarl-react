import { Stack, Typography, Card, CardMedia, CardContent, Grid } from "@mui/material";
import { StyledButton } from '../UI/StyledComponents';
import { useNavigation } from "../../utils/useNavigation";
import { useHomePageTranslation } from "../../i18n/useTranslations";

const PRODUCTS_SECTIONS = [
    {
        en: "Round Sardinella",
        scientificName: "Sardinella Aurita",
        img: 'https://www.afriocean.com/images/fish/roundSardinella.png',
        url: "round-sardinella"
    },
    {
        en: "Cunene Horse Mackerel",
        scientificName: "Trachurus Trecae",
        img: 'https://www.afriocean.com/images/fish/cuneneHorseMackerel.png',
        url: "cunene-horse-mackerel"
    },
    {
        en: "Atlantic Bumper",
        scientificName: "Chloroscombrus Chrysurus",
        img: 'https://www.afriocean.com/images/fish/atlanticBumper.png',
        url: "atlantic-bumper"
    },

    {
        en: "Maseiran Sardinella",
        scientificName: "Sardinella Maderensis",
        img: 'https://www.afriocean.com/images/fish/maseiranSardinella.png',
        url: "maseiran-sardinella"
    },
    {
        en: "Atlantic Horse Mackerel",
        scientificName: "Decaprterus Rhonchus",
        img: 'https://www.afriocean.com/images/fish/atlanticHorseMackerel.png',
        url: "atlantic-horse-mackerel"
    },
    {
        en: "Common Mackerel",
        scientificName: "Scomber Japonicus",
        img: 'https://www.afriocean.com/images/fish/commonMackerel.png',
        url: "mackerel"
    },

];

export const Product = (props) => {
    const { navigationHandler } = useNavigation();
    const { productRef } = props;
    const { t } = useHomePageTranslation();
    const redirectHandler = (url) => navigationHandler(`/product/fish/${url}`);
    const redirectProductPageHandler = () => navigationHandler(`/product/fish`);

    return (
        <Stack ref={productRef} minHeight='70vh' width='100%' justifyContent='center' alignItems='center'>
            <Typography mt={10} variant="h2" fontWeight={700} color="text.primary">{t('products.title')}</Typography>
            <Grid width='80%' container spacing={5} my={5} justifyContent='center' alignItems='center'>
                {PRODUCTS_SECTIONS.map((product, index) => (
                    <Grid key={index} item xs={10} md={4}>
                        <Card elevation={0}>
                            <CardContent>
                                <CardMedia component="img" image={product.img}
                                    sx={{ cursor: 'pointer', "&:hover": { transform: 'scale(1.1)', transition: '0.5s all ease-out' } }}
                                    onClick={redirectHandler.bind(this, product.url)} />
                                <Stack direction='column' justifyContent='center' alignItems='center'>
                                    <Typography variant="h6" textAlign='center' fontWeight={700} color="text.primary">
                                        {t(`products.productList.product${index + 1}`)}
                                    </Typography>
                                    <Typography variant="body1" color="text.primary" ml={1}>
                                        {`(${product.scientificName})`}
                                    </Typography>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <StyledButton onClick={redirectProductPageHandler} sx={{ my: 5 }} variant="contained" color="secondary">{t('actionButtons.seeMore')}</StyledButton>
        </Stack >
    );
};
