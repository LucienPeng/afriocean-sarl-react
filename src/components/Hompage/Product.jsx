import { Stack, Typography, Card, CardMedia, CardContent, Grid } from "@mui/material";
import { StyledButton } from '../UI/StyledComponents';

import roundSardinella from '../../asset/images/fish/roundSardinella.png';
import maseiranSardinella from '../../asset/images/fish/maseiranSardinella.png';
import commonMackerel from '../../asset/images/fish/commonMackerel.png';
import atlanticBumper from '../../asset/images/fish/atlanticBumper.png';
import cuneneHorseMackerel from '../../asset/images/fish/cuneneHorseMackerel.png';
import atlanticHorseMackerel from '../../asset/images/fish/atlanticHorseMackerel.png';
import { useNavigation } from "../../utils/useNavigation";

const PRODUCTS_SECTIONS = [
    {
        en: "Round Sardinella",
        scientificName: "Sardinella Aurita",
        img: roundSardinella,
        url: "round-sardinella"
    },
    {
        en: "Cunene Horse Mackerel",
        scientificName: "Trachurus Trecae",
        img: cuneneHorseMackerel,
        url: "cunene-horse-mackerel"
    },
    {
        en: "Atlantic Bumper",
        scientificName: "Chloroscombrus Chrysurus",
        img: atlanticBumper,
        url: "atlantic-bumper"
    },

    {
        en: "Maseiran Sardinella",
        scientificName: "Sardinella Maderensis",
        img: maseiranSardinella,
        url: "maseiran-sardinella"
    },
    {
        en: "Atlantic Horse Mackerel",
        scientificName: "Decaprterus Rhonchus",
        img: atlanticHorseMackerel,
        url: "atlantic-horse-mackerel"
    },
    {
        en: "Common Mackerel",
        scientificName: "Scomber Japonicus",
        img: commonMackerel,
        url: "mackerel"
    },

];

export const Product = (props) => {
    const { navigationHandler } = useNavigation();
    let { productRef } = props;

    const redirectHandler = (url) => navigationHandler(`/product/fish/${url}`);
    const redirectProductPageHandler = () => navigationHandler(`/product`);


    return (
        <Stack ref={productRef} minHeight='70vh' justifyContent='center' alignItems='center'>
            <Typography mt={10} variant="h2" fontWeight={700} color="text.primary">Products</Typography>
            <Grid width='80%' container spacing={5} my={5} justifyContent='center' alignItems='center'>
                {PRODUCTS_SECTIONS.map((product, index) => (
                    <Grid key={index} item xs={10} md={4}>
                        <Card elevation={0} data-aos="zoom-in-up">
                            <CardContent>
                                <CardMedia component="img" image={product.img}
                                    sx={{ cursor: 'pointer', "&:hover": { transform: 'scale(1.1)', transition: '0.5s all ease-out' } }}
                                    onClick={redirectHandler.bind(this, product.url)} />
                                <Typography variant="h6" textAlign='center' fontWeight={700} color="text.primary">{product.en}
                                    <Typography component='span' variant="h6" color="text.primary" ml={1}>
                                        {`(${product.scientificName})`}
                                    </Typography>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <StyledButton onClick={redirectProductPageHandler} sx={{ my: 5 }} variant="contained" color="secondary">See more</StyledButton>
        </Stack >
    );
};
