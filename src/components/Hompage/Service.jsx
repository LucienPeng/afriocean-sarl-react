import { Stack, Typography, Box, Grid } from "@mui/material";
import intro1 from '../../asset/images/intro/intro1.jpg';
import intro2 from '../../asset/images/intro/intro2.jpg';
import intro3 from '../../asset/images/intro/intro3.jpg';

const SERVICES = [
    { id: 1, service: 'Produit congelé', description: 'Test-Test-Test', photo: intro1 },
    { id: 2, service: 'Produit cuit / elaboré', description: 'Test-Test-Test', photo: intro2 },
    { id: 3, service: 'Produit personnalisé', description: 'Test-Test-Test', photo: intro3 }
];

export const Service = () => {





    return (
        <Stack mb={10} minHeight='50vh' justifyContent='center' alignItems='center'>
            <Typography my={10} variant="h2" fontWeight={700} color="text.primary">What we do</Typography>
            <Grid width="90%" container spacing={10} justifyContent='center' alignItems='center' direction="row" >
                {SERVICES.map((service) => (
                    <Grid item key={service.id} md={4}  >
                        <Grid container
                            direction="row"
                            spacing={5}
                        >
                            <Grid item md={7}>
                                <Box
                                    component='img'
                                    width='100%'
                                    height='100%'
                                    src={service.photo}
                                    borderRadius={2}
                                    sx={{ opacity: 0.85 }}
                                />
                            </Grid>
                            <Grid item md={5}>
                                <Typography fontSize={18} letterSpacing={0} variant="h2" fontWeight={700} color="text.primary">{service.service}</Typography>
                                <Typography lineHeight={2} variant="body1" color="text.primary">{service.description}</Typography>
                            </Grid>

                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Stack>
    );
};

