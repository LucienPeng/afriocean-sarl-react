import { Typography, Grid, Stack, Card, CardMedia, List, ListItemIcon, ListItem } from "@mui/material";
import { useAboutUsPageTranslation } from "../../i18n/useTranslations";
import { StyledListItemText } from '../../components/UI/StyledComponents';
import personnel from '../../asset/images/intro/intro5.jpg';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


const HistoryPage = () => {
    const { t } = useAboutUsPageTranslation();
    return (
        <Grid mb={10} container spacing={10} display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
            <Grid mt={10} item xs={10} sm={12} md={10} data-aos="fade-up">
                <Grid container spacing={5} alignItems='center' justifyContent='center'>
                    <Grid item xs={12} sm={5} md={6} justifyContent='center' alignItems='center'>
                        <Card>
                            <CardMedia
                                sx={{ height: 500, width: '100%', backgroundPosition: 'top' }}
                                image={personnel}
                            />
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={5} md={6}>
                        <Stack spacing={2}>
                            <Typography variant="h2" fontWeight={700} letterSpacing={0} color="text.primary">
                                {t('history.subTitle1')}
                            </Typography>
                            <Typography variant="body1" color="text.primary">
                                {t('history.section1.paragraph1')}
                            </Typography>
                            <Typography variant="body1" color="text.primary">
                                {t('history.section1.paragraph2')}
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Grid >

            <Grid item xs={10} data-aos="fade-up" justifyContent='center' alignItems='center'>
                <Stack justifyContent='center' alignItems='center' spacing={2}>
                    <Typography variant="body1" color="text.primary">
                        {t('history.section1.paragraph3')}
                    </Typography>
                    <Typography variant="body1" color="text.primary" fontStyle='italic'>
                        {t('history.section1.paragraph4')}
                    </Typography>
                </Stack>
            </Grid>

            <Grid item xs={10} sm={12} md={10} data-aos="fade-up">
                <Grid container spacing={15} alignItems='center' justifyContent='center'>
                    <Grid item xs={12} sm={5} md={6} justifyContent='center' alignItems='center'>
                        <Stack spacing={2}>
                            <Typography variant="h2" letterSpacing={0} fontWeight={700} color="text.primary">{t('history.subTitle2')}</Typography>
                            <Typography variant="body1" color="text.primary">
                                {t('history.section2.paragraph1')}
                            </Typography>
                            <Typography variant="body1" color="text.primary">
                                {t('history.section2.paragraph2')}
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={5} md={6}>
                        <Card>
                            <CardMedia
                                sx={{ height: 500, backgroundPosition: 'top' }}
                                image="https://i.imgur.com/Az2F9Hj.jpg"
                            />
                        </Card>
                    </Grid>
                </Grid>
            </Grid>

            <Grid width='100%' mb={10} item xs={10} sm={12} md={10} data-aos="fade-up">
                <Grid container spacing={10} alignItems='center' justifyContent='center'>
                    <Grid item xs={12} sm={5} md={6}>
                        <Card>
                            <CardMedia
                                sx={{ height: 500, width: '100%', backgroundPosition: 'top' }}
                                image="https://i.imgur.com/Skl1LXB.jpg"
                            />
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={5} md={6} justifyContent='center' alignItems='center'>
                        <Typography variant="h2" fontSize='22px' fontWeight={700} letterSpacing={0} color="text.primary">
                            {t('history.subTitle3')}
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowRightIcon />
                                </ListItemIcon>
                                <StyledListItemText>{t('history.section3.paragraph1')}</StyledListItemText>
                            </ListItem>

                            <ListItem>
                                <ListItemIcon>
                                    <ArrowRightIcon />
                                </ListItemIcon>
                                <StyledListItemText>{t('history.section3.paragraph2')}</StyledListItemText>
                            </ListItem>

                            <ListItem>
                                <ListItemIcon>
                                    <ArrowRightIcon />
                                </ListItemIcon>
                                <StyledListItemText>{t('history.section3.paragraph3')}</StyledListItemText>
                            </ListItem>

                            <ListItem>
                                <ListItemIcon>
                                    <ArrowRightIcon />
                                </ListItemIcon>
                                <StyledListItemText>{t('history.section3.paragraph4')}</StyledListItemText>
                            </ListItem>

                            <ListItem>
                                <ListItemIcon>
                                    <ArrowRightIcon />
                                </ListItemIcon>
                                <StyledListItemText>{t('history.section3.paragraph5')}</StyledListItemText>
                            </ListItem>

                        </List>
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    );
};

export default HistoryPage;
