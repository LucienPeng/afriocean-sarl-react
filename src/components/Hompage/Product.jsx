import { Stack, Typography, Card, CardMedia, CardContent } from "@mui/material";
import { StyledButton } from '../UI/StyledComponents';
import { useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';

const PRODUCTS_SECTIONS = [
    {
        name: "Liche",
        img: "https://i.imgur.com/VOtkI8c.png",
        url: 'Liche',
        scientificName: "(Lichia amia)",
        description: "Le terme de Liche désigne plusieurs espèces de poissons marins de bonne qualité gustative, appréciés également pour la pêche sportive, de la famille des Carangidae, fréquentant notamment les côtes françaises et méditerranéennes ; le mot vient du provençal lico, liche ou leiche. Ces poissons sont appelés leccia en Italie.",
    },
    {
        name: "Thon-Ravil",
        img: "https://i.imgur.com/dWb6yO9.png",
        url: 'Thon-Ravil',
        scientificName: "(Euthynnus allettaratus)",
        description: "Ce poisson mesure entre 60 et 122 cm de long, pour une moyenne de 80 centimètres. Le poids maximal est de 16,5 kg. Le dos (quart arrière-supérieur) porte des bandes obliques sombres sur un fond métallisé. Entre les nageoires pelvienne et anale, on compte également 3 à 7 taches sombres",
    },
    {
        name: "Chinchard-Blanc",
        img: "https://i.imgur.com/o4Nuq9P.png",
        url: 'Chinchard-Blanc',
        scientificName: "(Trachurus trachurus)",
        description: "Le Chinchard est une espèce de poissons de la famille des Carangidae qui se rencontre dans l'Atlantique est et en Méditerranée et qui mesure jusqu'à 70 cm pour un poids maximal publié de 2 kg1. Son corps est fusiforme et de couleur verdâtre sur le dos.",
    },
];

export const Product = (props) => {
    const navigate = useNavigate();
    let { productRef } = props;

    const redirectHandler = (url) => navigate(`/product/${url}`);
    const redirectProductPageHandler = () => navigate(`/product`);


    return (
        <Stack component='div' ref={productRef} minHeight="100vh" justifyContent='center' alignItems='center'>
            <Typography my={5} variant="h2" fontWeight={700} color="text.primary">Products</Typography>
            <Grid container spacing={10} my={5} justifyContent='center'>
                {PRODUCTS_SECTIONS.map((product, index) => (
                    <Grid key={index} item xs={10} md={3}>
                        <Card component='div' elevation={0}
>
                            <CardContent data-aos="zoom-in-up">
                                <CardMedia component="img" image={product.img}
                                    sx={{ cursor: 'pointer', "&:hover": { transform: 'scale(1.1)', transition: '0.5s all ease-out' } }}
                                    onClick={redirectHandler.bind(this, product.url)} />
                                <Typography variant="h6" textAlign='center' fontWeight={700} color="text.primary">{product.name}
                                    <Typography component='span' variant="h6" color="text.primary"> {product.scientificName}</Typography>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <StyledButton onClick={redirectProductPageHandler} sx={{ my: 5 }} variant="contained" color="primary">See more</StyledButton>
        </Stack >
    );
};
