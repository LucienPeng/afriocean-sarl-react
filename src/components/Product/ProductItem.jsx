import { Box, Typography, Stack, Grid, Table, TableRow, TableCell, TableBody, Link } from '@mui/material';
import { StyledButton } from '../UI/StyledComponents';
import { useNavigation } from '../../utils/useNavigation';
import { useProductPageTranslation } from "../../i18n/useTranslations";
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';

export const ProductItem = (props) => {
    const { item } = props;
    const { navigationHandler } = useNavigation();
    const { t } = useProductPageTranslation();
    const { i18n } = useTranslation();
    const redirectHandler = () => navigationHandler(`/product/${item.allergens.toLowerCase()}`);
    const productName = useMemo(() => {
        if (i18n.language === 'zh-TW') {
            return item.cn;
        } else if (i18n.language === 'en') {
            return item.en;
        } else if (i18n.language === 'fr') {
            return item.fr;
        }
    }, [i18n.language, item.cn, item.en, item.fr]);

    return (
        <Stack minHeight='100vh' width='100%' direction='column' justifyContent='center' alignItems='center' mt={'30px'}>
            <Stack py={5} direction='row' justifyContent='center' alignItems='center'>
                <Grid container justifyContent='center' alignItems='center' spacing={{ xs: 0, md: 5 }}>
                    <Grid item xs={12} sm={10} md={6}>
                        <Box
                            component='img'
                            src={item.img}
                            alt={item.en}
                            className='animate__animated animate__rubberBand'
                            width='100%'
                        />
                    </Grid>
                    <Grid item xs={10} sm={10} md={5}>
                        <Stack direction='column' alignItems='center' justifyContent='center'>
                            <Typography noWrap variant="h2" letterSpacing={0} fontWeight={700} color="primary.dark">
                                {productName}
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
                                            {t('en')}
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
                                            {t('fr')}
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
                                            {t('sp')}
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
                                            {t('sn')}
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
                                            {t('cn')}
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
                                            {t('origin')}
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
                                            {t('method')}
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
                                            {t('season')}
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
                                            {t('FAO')}
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
                                            {t('glaze')}
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
                                            {t('packing')}
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
                                            {t('allergens')}
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
                                            {t('calibrage')}
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
                                            {t('tags')}
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
            <StyledButton onClick={redirectHandler} sx={{ mb: 3 }} alignself='center' variant="contained" color="secondary">{t('backToList')}</StyledButton>
        </Stack >
    );
};
