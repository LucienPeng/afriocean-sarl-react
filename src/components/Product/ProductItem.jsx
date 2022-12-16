import { Box, Typography, Stack, Grid } from '@mui/material';
import React from 'react';
import _ from 'lodash';

export const ProductItem = (props) => {
    const { item } = props;

    const rows = [
        "En. name", ">Fr. name", "Sp. name", "Sn. name", "Cn. name", "Scientific Name", "Origin", "Season", "FAO",
        "Production Method", "Frozen", "Glaze", "Packing", "Allergens", "Calibrage", "Tags"
    ];
    const arr = _.values(item);
    console.log(arr);

    return (
        <Stack minHeight='100vh' direction='row' justifyContent='center' alignItems='center'>
            <Grid container justifyContent='center' alignItems='center' spacing={5} maxWidth='100%'>
                <Grid item xs={6} md={8}>
                    <Box
                        component='img'
                        src={item.img}
                        alt={item.En}
                        className='animate__animated animate__rubberBand'
                        width='100%'
                    >
                    </Box>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Stack direction='row' justifyContent='center' alignItems='center' spacing={5}>
                        <Typography variant="h6" color="initial">
                            En. name
                        </Typography>
                        <Typography variant="h6" color="initial">
                            {item.en}
                        </Typography>
                    </Stack>
                </Grid>

            </Grid>


        </Stack >
    );
};
