import { Typography, Grid, Stack, ListItemText, ListItemIcon, ListItem } from "@mui/material";
import { useAboutUsPageTranslation } from "../../i18n/useTranslations";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const QualityPage = () => {
    const { t } = useAboutUsPageTranslation();

    return (
        <Grid my={10} container spacing={10} alignItems='center' justifyContent='center' flexDirection='row'>
            <Grid itemxs={10} sm={12} md={10}>
                <Stack spacing={2}>
                    <Typography variant="h2" fontWeight={700} letterSpacing={0} color="primary.primary">{t('quality.title')}</Typography>
                    <Typography variant="body1" color="text.primary">
                        {t('quality.paragraph')}
                    </Typography>
                    <ListItem>
                        <ListItemIcon>
                            <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText>
                            {t('quality.item1')}
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText>
                            {t('quality.item2')}
                        </ListItemText>
                    </ListItem><ListItem>
                        <ListItemIcon>
                            <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText>
                            {t('quality.item3')}
                        </ListItemText>
                    </ListItem>
                </Stack>
            </Grid >
        </Grid>
    );
};

export default QualityPage

