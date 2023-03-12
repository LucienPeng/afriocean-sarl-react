import { Stack, Typography, Box, Grid } from "@mui/material";
import intro1 from '../../asset/images/intro/intro1.jpg';
import intro2 from '../../asset/images/intro/intro2.jpg';
import intro3 from '../../asset/images/intro/intro3.jpg';

const SERVICES = [
    { id: 1, service: 'Frozen product', photo: intro1 },
    { id: 2, service: 'Elaborated Product', photo: intro2 },
    { id: 3, service: 'Customized Product', photo: intro3 }
];

export const Service = () => {

    return (
        <Stack mb={10} minHeight='50vh' justifyContent='center' alignItems='center'>
            <Typography my={10} variant="h2" fontWeight={700} color="text.primary">What we do</Typography>
            <Grid width="90%" container spacing={10} justifyContent='center' alignItems='center' direction="row" >
                {SERVICES.map((service) => (
                    <Grid item key={service.id} md={4} data-aos="zoom-in-down">
                        <Grid container alignItems='center' justifyContent='center' >
                            <Stack width='100%' alignItems='center' justifyContent='center' direction="row" spacing={5}>
                                <Grid item xs={6} md={7}>
                                    <Box
                                        component='img'
                                        width='100%'
                                        height='100%'
                                        src={service.photo}
                                        borderRadius={2}
                                        sx={{ opacity: 0.9 }}
                                    />
                                </Grid>
                                <Grid item xs={6} md={4}>
                                    <Typography fontSize={18} letterSpacing={0} variant="h2" fontWeight={700} color="text.primary">{service.service}</Typography>
                                </Grid>
                            </Stack>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Stack>
    );
};

