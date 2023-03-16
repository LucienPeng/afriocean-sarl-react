import { Stack, Grid, Box, List, ListItemText, Typography } from "@mui/material";
import { StyledButton } from "../UI/StyledComponents";
import { useNavigation } from "../../utils/navigation";
import { useDeviceMetadata } from "../../utils/useDeviceMetadata";
import placeHoderImage from '../../asset/images/intro/intro4.jpg';

export const FrozenProductIntro = () => {
    const { navigationHandler } = useNavigation();
    const { isMobileView } = useDeviceMetadata();

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' minHeight='100vh' spacing={10} mt={isMobileView && '50px'}>
            <Grid item xs={11} sm={6} md={5}>
                <Stack spacing={5}>
                    <Box>
                        <Stack spacing={5}>
                            <Typography variant="h1" color="initial" fontSize='28px'>
                                <Typography variant="h1" fontSize='32px' color="initial" component='span'>AFRIOCEAN’s </Typography>
                                location is in one of the world’s most important fishing ports so that allows us to offer a wide variety of products.
                            </Typography>
                            <Typography variant="body1" color="initial">
                                To provide the highest quality, a consistent and optimal product flow from capture to freezing is what we are committed to.
                                We supply various kinds of frozen fish and seafood
                            </Typography>
                        </Stack>
                        <List>
                            <ListItemText>Wild Fish (White Fish / Blue Fish)</ListItemText>
                            <ListItemText>Cephalopods</ListItemText>
                            <ListItemText>Cymbium</ListItemText>
                            <ListItemText>Baits</ListItemText>
                            <ListItemText>Processed Products</ListItemText>
                        </List>
                    </Box>
                    <StyledButton variant="contained" sx={{ alignSelf: 'center' }} onClick={() => navigationHandler('/')}>Back to home page</StyledButton>
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


