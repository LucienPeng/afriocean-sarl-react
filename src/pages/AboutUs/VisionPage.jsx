import { Typography, Grid, Stack, Card, CardContent } from "@mui/material";
import { useAboutUsPageTranslation } from "../../i18n/useTranslations";

const VisionPage = () => {
    const { t } = useAboutUsPageTranslation();
    return (
        <Grid my={10} container spacing={10} alignItems='center' justifyContent='center' flexDirection='row'>
            <Grid itemxs={10} sm={12} md={10}>
                <Stack spacing={2}>
                    <Typography variant="h2" fontWeight={700} letterSpacing={0} color="primary.primary">{t('vision.title')}</Typography>
                    <Typography variant="body1" color="text.primary">
                        {t('vision.section.paragraph1')}
                    </Typography>
                    <Typography variant="body1" color="text.primary">
                        {t('vision.section.paragraph2')}
                    </Typography>
                    <Typography variant="body1" color="text.primary">
                        {t('vision.section.paragraph3')}
                    </Typography>
                    <Typography variant="body1" color="text.primary">
                        {t('vision.section.paragraph4')}
                    </Typography>

                </Stack>
            </Grid >
            <Grid container item justifyContent='center' spacing={5}>
                <Grid item xs={10} sm={6} md={4} data-aos="fade-up">
                    <Card>
                        <CardContent>
                            <Typography gutterBottom variant="h3" component="div">
                                {t('vision.subTitle1')}
                            </Typography>
                            {t('vision.subParagraph1')}
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={10} sm={6} md={3} data-aos="fade-up">
                    <Card>
                        <CardContent>
                            <Typography gutterBottom variant="h3" component="div">
                                {t('vision.subTitle2')}
                            </Typography>
                            {t('vision.subParagraph2')}
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={10} sm={6} md={3} data-aos="fade-up">
                    <Card>
                        <CardContent>
                            <Typography gutterBottom variant="h3" component="div">
                                {t('vision.subTitle3')}
                            </Typography>
                            {t('vision.subParagraph3')}
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={10} sm={6} md={3} data-aos="fade-up">
                    <Card>
                        <CardContent>
                            <Typography gutterBottom variant="h3" component="div">
                                {t('vision.subTitle4')}
                            </Typography>
                            {t('vision.subParagraph4')}
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={10} sm={6} md={3} data-aos="fade-up">
                    <Card>
                        <CardContent>
                            <Typography gutterBottom variant="h3" component="div">
                                {t('vision.subTitle5')}
                            </Typography>
                            {t('vision.subParagraph5')}
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Grid>

    );
};

export default VisionPage

