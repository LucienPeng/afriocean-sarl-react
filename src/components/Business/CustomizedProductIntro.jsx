import { Stack, Grid, Box, List, ListItemText, Typography, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import { StyledButton } from "../UI/StyledComponents";
import { useNavigation } from "../../utils/useNavigation";
import { useDeviceMetadata } from "../../utils/useDeviceMetadata";
import { CUSTOMIZED_PRODUCTS } from '../../asset/customizedProduct';

const ProductMasonryImageList = () => {
    const { isMobileView } = useDeviceMetadata();
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
                        <ImageListItemBar position="below" title={item.title} sx={{ textAlign: 'center' }} />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
};

export const CustomizedProductIntro = () => {
    const { navigationHandler } = useNavigation();
    const { isMobileView } = useDeviceMetadata();

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' minHeight='100vh' spacing={10} mt={isMobileView && '50px'}>
            <Grid item xs={11} sm={6} md={5}>
                <Stack spacing={5}>

                    <Stack spacing={3}>
                        <Typography variant="h1" color="initial" fontSize='28px'>
                            Frozen Fish & Seafood Processing
                        </Typography>
                        <Typography variant="body1" color="initial">
                            Our factory is qualified with European standards hygienic control. In order to ensure the hygiene and the quality, HACCP is also applied and complied to the daily routine. On top of that we build up a highly qualified and well-trained worker team for fish processing.
                        </Typography>
                    </Stack>
                    <Stack spacing={2}>
                        <Typography variant="h1" color="initial" fontSize='28px'>
                            What We Provide
                        </Typography>
                        <List>
                            <ListItemText>Whole fish</ListItemText>
                            <ListItemText>Gutted whole fish (Drawn fish)</ListItemText>
                            <ListItemText>Scaled, gutted and ready-to-cook fish (Dressed fish)</ListItemText>
                            <ListItemText>Fish fillets / Butterfly fillets / Steaks / Loins</ListItemText>
                            <ListItemText>Fish sticks</ListItemText>
                            <ListItemText>Shucked and cooked shellfish meat</ListItemText>
                            <ListItemText>Fish roe</ListItemText>
                        </List>
                    </Stack>

                    <StyledButton variant="contained" sx={{ alignSelf: 'center' }} onClick={() => navigationHandler('/')}>Back to home page</StyledButton>
                </Stack>

            </Grid>

            <Grid item xs={11} sm={8} md={5}>
                <ProductMasonryImageList />
            </Grid>
        </Grid>


    );
}


