import { Typography, Grid, Stack, Card, CardMedia, ListItemText, List } from "@mui/material";
import { useAboutUsPageTranslation } from "../../i18n/useTranslations";
import personnel from '../../asset/images/intro/intro5.jpg';


export const Introduction = () => {
    const { t } = useAboutUsPageTranslation();
    return (
        <Grid mb={10} container spacing={10} display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
            <Grid mt={10} item xs={10} sm={12} md={10} data-aos="fade-up">
                <Grid container spacing={5} alignItems='center' justifyContent='center'>
                    <Grid item xs={12} sm={5} md={5} justifyContent='center' alignItems='center'>
                        <Card>
                            <CardMedia
                                sx={{ height: 500, width: '100%', backgroundPosition: 'top' }}
                                image={personnel}
                            />
                        </Card>
                    </Grid>
                    <Grid item xs={10} sm={5} md={5}>
                        <Stack spacing={2}>
                            <Typography variant="h2" fontWeight={700} letterSpacing={0} color="primary.primary">{t('subTitle1')}</Typography>
                            <Typography variant="body1" color="text.primary">
                                {t('section1.paragraph1')}
                                <br />
                                <br />
                                {t('section1.paragraph2')}
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Grid >

            <Grid item xs={10} data-aos="fade-up" justifyContent='center' alignItems='center'>
                <Stack justifyContent='center' alignItems='center' spacing={2}>
                    <Typography variant="body1" color="text.dark">
                        {t('section1.paragraph3')}
                    </Typography>
                    <Typography variant="body1" color="text.dark" fontStyle='italic'>
                        {t('section1.paragraph4')}
                    </Typography>
                </Stack>
            </Grid>

            <Grid item xs={10} sm={12} md={10} data-aos="fade-up">
                <Grid container spacing={15} alignItems='center' justifyContent='center'>
                    <Grid item xs={11} sm={5} md={5} justifyContent='center' alignItems='center'>
                        <Stack spacing={2}>
                            <Typography variant="h2" letterSpacing={0} fontWeight={700} color="text.primary">{t('subTitle2')}</Typography>
                            <Typography variant="body1" color="text.primary">
                                {t('section2.paragraph1')}
                                <br />
                                <br />
                                {t('section2.paragraph2')}
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={5} md={5}>
                        <Card>
                            <CardMedia
                                sx={{ height: 500, backgroundPosition: 'top' }}
                                image="https://i.imgur.com/Az2F9Hj.jpg"
                            />
                        </Card>
                    </Grid>
                </Grid>
            </Grid>

            <Grid width='100%' mb={10} item xs={11} sm={12} md={10} data-aos="fade-up">
                <Grid container spacing={15} alignItems='center' justifyContent='center'>

                    <Grid item xs={12} sm={5} md={5}>
                        <Card>
                            <CardMedia
                                sx={{ height: 500, width: '100%', backgroundPosition: 'top' }}
                                image="https://i.imgur.com/Skl1LXB.jpg"
                            />
                        </Card>
                    </Grid>

                    <Grid item xs={11} sm={5} md={6} justifyContent='center' alignItems='center'>
                        <Typography variant="h2" fontSize='22px' fontWeight={700} letterSpacing={0} color="primary.primary">
                            {t('subTitle3')}
                        </Typography>
                        <List>
                            <ListItemText>{t('section3.paragraph1')}</ListItemText>
                            <ListItemText>{t('section3.paragraph2')}</ListItemText>
                            <ListItemText>{t('section3.paragraph3')}</ListItemText>
                            <ListItemText>{t('section3.paragraph4')}</ListItemText>
                            <ListItemText>{t('section3.paragraph5')}</ListItemText>
                        </List>
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    );
};
