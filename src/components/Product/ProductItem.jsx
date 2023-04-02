import { Box, Typography, Stack, Grid, Table, TableRow, TableCell, TableBody, Link } from '@mui/material';
import { StyledButton } from '../UI/StyledComponents';
import { useNavigation } from '../../utils/useNavigation';

export const ProductItem = (props) => {
    const { item } = props;
    const { navigationHandler } = useNavigation();
    const redirectHandler = () => navigationHandler(`/product/${item.allergens.toLowerCase()}`);
    return (
        <Stack minHeight='100vh' width='100%' direction='column' justifyContent='center' alignItems='center' mt={'60px'}>
            <Stack py={5} direction='row' justifyContent='center' alignItems='center'>
                <Grid container justifyContent='center' alignItems='center' spacing={{ xs: 0, md: 5 }}>
                    <Grid item xs={12} sm={10} md={6}>
                        <Box
                            component='img'
                            src={item.img}
                            alt={item.En}
                            className='animate__animated animate__rubberBand'
                            width='100%'
                        />
                    </Grid>
                    <Grid item xs={10} sm={10} md={5}>
                        <Stack direction={{ xs: 'column', md: 'row' }} alignItems='center' justifyContent='center' spacing={{ xs: 0, md: 5 }} mb={5}>
                            <Typography variant="h2" letterSpacing={0} fontWeight={700} color="primary.dark">
                                {item.en}
                            </Typography>
                            <Typography variant="h2" letterSpacing={0} color="text.primary" fontSize='16px'>
                                {item.scientificName}
                            </Typography>
                        </Stack>
                        <Table size="small">
                            <TableBody>
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
                                        {item.tags.map((tag) => (
                                            <Link onClick={() => navigationHandler(`/product/${item.allergens.toLowerCase()}/?category=${tag}`)} key={tag} color='secondary' sx={{ '&:hover': { cursor: 'pointer' } }} align="left" variant="body1" mr={1}>
                                                {tag}
                                            </Link>
                                        ))}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Grid>
                </Grid>
            </Stack >
            <StyledButton onClick={redirectHandler} sx={{ mb: 3 }} alignself='center' variant="contained" color="secondary">Back To List</StyledButton>
        </Stack >
    );
};
