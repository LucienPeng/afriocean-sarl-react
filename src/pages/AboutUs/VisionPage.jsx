import { Typography, Grid, Stack, Card, CardContent } from "@mui/material";
import { useAboutUsPageTranslation } from "../../i18n/useTranslations";
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import SecurityIcon from '@mui/icons-material/Security';
import VerifiedIcon from '@mui/icons-material/Verified';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import AddReactionIcon from '@mui/icons-material/AddReaction';

const VisionPage = () => {
    const { t } = useAboutUsPageTranslation();
    return (
        <Grid my={10} container gap={10} alignItems='center' justifyContent='center' flexDirection='row'>
            <Grid item xs={10}>
                <Stack spacing={2}>
                    <Typography variant="h2" fontWeight={700} letterSpacing={0} color="text.primary">{t('vision.title')}</Typography>
                    <Typography variant="body1" color="text.primary">
                        {t('vision.section.paragraph1')}
                    </Typography>
                    <Typography variant="body1" color="text.primary">
                        {t('vision.section.paragraph2')}
                    </Typography>
                    <Typography variant="body1" color="text.primary">
                        {t('vision.section.paragraph3')}
                    </Typography>
                </Stack>
            </Grid >
            <Grid container item justifyContent='center' spacing={5}>
                <Grid item xs={10} sm={10} md={3} data-aos="fade-up">
                    <Card sx={{ "&:hover": { transform: 'scale(1.1)' }, transition: '0.3s all ease-out' }}>
                        <CardContent>
                            <Stack direction='row' spacing={1}>
                                <Typography gutterBottom variant="h3" component="div">
                                    {t('vision.subTitle1')}
                                </Typography>
                                <VerifiedIcon />
                            </Stack>
                            {t('vision.subParagraph1')}
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={10} sm={10} md={3} data-aos="fade-up">
                    <Card sx={{ "&:hover": { transform: 'scale(1.1)' }, transition: '0.3s all ease-out' }}>
                        <CardContent>
                            <Stack direction='row' spacing={1}>
                                <Typography gutterBottom variant="h3" component="div">
                                    {t('vision.subTitle2')}
                                </Typography>
                                <AddReactionIcon />
                            </Stack>
                            {t('vision.subParagraph2')}
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={10} sm={10} md={3} data-aos="fade-up">
                    <Card sx={{ "&:hover": { transform: 'scale(1.1)' }, transition: '0.3s all ease-out' }}>
                        <CardContent>
                            <Stack direction='row' spacing={1}>
                                <Typography gutterBottom variant="h3" component="div">
                                    {t('vision.subTitle3')}
                                </Typography>
                                <SecurityIcon />
                            </Stack>
                            {t('vision.subParagraph3')}
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={10} sm={10} md={4} data-aos="fade-up">
                    <Card sx={{ "&:hover": { transform: 'scale(1.1)' }, transition: '0.3s all ease-out' }}>
                        <CardContent>
                            <Stack direction='row' spacing={1}>
                                <Typography gutterBottom variant="h3" component="div">
                                    {t('vision.subTitle4')}
                                </Typography>
                                <VolunteerActivismIcon />
                            </Stack>
                            {t('vision.subParagraph4')}
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={10} sm={10} md={4} data-aos="fade-up">
                    <Card sx={{ "&:hover": { transform: 'scale(1.1)' }, transition: '0.3s all ease-out' }}>
                        <CardContent>
                            <Stack direction='row' spacing={1}>
                                <Typography gutterBottom variant="h3" component="div">
                                    {t('vision.subTitle5')}
                                </Typography>
                                <AllInclusiveIcon />
                            </Stack>
                            {t('vision.subParagraph5')}
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Grid>

    );
};

export default VisionPage

