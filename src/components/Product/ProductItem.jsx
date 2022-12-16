import { Box, Typography, Stack, Grid, Table, TableRow, TableCell } from '@mui/material';
import React from 'react';
import banner from '../../asset/images/banner.jpg';

export const ProductItem = (props) => {
    const { item } = props;

    return (
        <Stack minHeight='100vh' width='100%' justifyContent='space-between' alignItems='center' direction='column' spacing={5} mb={5} >
            <Box
                sx={{
                    width: '100%',
                    height: '35vh',
                    backgroundImage: `url(${banner})`,
                    backgroundSize: 'cover',
                    backgroundRepeated: false,
                    backgroundPosition: 'center',
                }}
                width='100%'
                component='img'

            />
            <Stack direction='row' justifyContent='center' alignItems='center'>

                <Grid container justifyContent='center' alignItems='center' spacing={{ xs: 0, md: 5 }} maxWidth='100%'>
                    <Grid item xs={12} sm={6} md={7}>
                        <Box
                            component='img'
                            src={item.img}
                            alt={item.En}
                            className='animate__animated animate__rubberBand'
                            width='100%'
                        />
                    </Grid>
                    <Grid item xs={10} sm={6} md={5}>
                        <Stack direction={{ xs: 'column', md: 'row' }} alignItems='center' justifyContent='center' spacing={{ xs: 0, md: 5 }} mb={5}>
                            <Typography variant="h2" letterSpacing={0} fontWeight={700} color="primary.dark">
                                {item.en}
                            </Typography>
                            <Typography variant="h2" letterSpacing={0} color="text.primary" fontSize='16px'>
                                {item.scientificName}
                            </Typography>
                        </Stack>
                        <Table size="small">
                            <TableRow>
                                <TableCell>
                                    <Typography variant="body1" letterSpacing={0} fontWeight={700} color="primary.dark">
                                        En. name
                                    </Typography>
                                </TableCell>
                                <TableCell align="left">
                                    <Typography variant="body1" color="text.primary">
                                        {item.en}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="body1" letterSpacing={0} fontWeight={700} color="primary.dark">
                                        Fr. name
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography align="left" variant="body1" color="text.primary">
                                        {item.fr}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="body1" letterSpacing={0} fontWeight={700} color="primary.dark">
                                        Sp. name
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography align="left" variant="body1" color="text.primary">
                                        {item.sp}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="body1" letterSpacing={0} fontWeight={700} color="primary.dark">
                                        Sn. name
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography align="left" variant="body1" color="text.primary">
                                        {item.sn}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="body1" letterSpacing={0} fontWeight={700} color="primary.dark">
                                        Cn. name
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography align="left" variant="body1" color="text.primary">
                                        {item.cn}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="body1" letterSpacing={0} fontWeight={700} color="primary.dark">
                                        Origin
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography align="left" variant="body1" color="text.primary">
                                        {item.origin}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="body1" letterSpacing={0} fontWeight={700} color="primary.dark">
                                        Production Method
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography align="left" variant="body1" color="text.primary">
                                        {item.productionMethod}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="body1" letterSpacing={0} fontWeight={700} color="primary.dark">
                                        Season
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography align="left" variant="body1" color="text.primary">
                                        {item.season}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="body1" letterSpacing={0} fontWeight={700} color="primary.dark">
                                        FAO
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography align="left" variant="body1" color="text.primary">
                                        {item.fao}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="body1" letterSpacing={0} fontWeight={700} color="primary.dark">
                                        Glaze
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography align="left" variant="body1" color="text.primary">
                                        {item.glaze}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="body1" letterSpacing={0} fontWeight={700} color="primary.dark">
                                        Packing
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography align="left" variant="body1" color="text.primary">
                                        {item.packing}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="body1" letterSpacing={0} fontWeight={700} color="primary.dark">
                                        Allergens
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography align="left" variant="body1" color="text.primary">
                                        {item.allergens}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="body1" letterSpacing={0} fontWeight={700} color="primary.dark">
                                        Calibrage
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography align="left" variant="body1" color="text.primary">
                                        {item.calibrage}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="body1" letterSpacing={0} fontWeight={700} color="primary.dark">
                                        Tags
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography align="left" variant="body1" color="text.primary">
                                        {item.tag}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </Table>
                    </Grid>

                </Grid>


            </Stack >
        </Stack>

    );
};
