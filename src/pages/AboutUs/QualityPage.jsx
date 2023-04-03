import { Typography, Grid, Stack, ListItemIcon, ListItem } from "@mui/material";
import { useAboutUsPageTranslation } from "../../i18n/useTranslations";
import { StyledListItemText } from '../../components/UI/StyledComponents';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const QualityPage = () => {
    const { t } = useAboutUsPageTranslation();

    return (
        <Grid container my={10} alignItems='center' justifyContent='center' flexDirection='row'>
            <Grid item xs={10}>
                <Stack spacing={2}>
                    <Typography variant="h2" fontWeight={700} letterSpacing={0} color="text.primary">{t('quality.title')}</Typography>
                    <Typography variant="body1" color="text.primary">
                        {t('quality.paragraph')}
                    </Typography>
                    <ListItem>
                        <ListItemIcon>
                            <ArrowRightIcon />
                        </ListItemIcon>
                        <StyledListItemText>
                            {t('quality.item1')}
                        </StyledListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <ArrowRightIcon />
                        </ListItemIcon>
                        <StyledListItemText>
                            {t('quality.item2')}
                        </StyledListItemText>
                    </ListItem><ListItem>
                        <ListItemIcon>
                            <ArrowRightIcon />
                        </ListItemIcon>
                        <StyledListItemText>
                            {t('quality.item3')}
                        </StyledListItemText>
                    </ListItem>
                </Stack>
            </Grid >
        </Grid>
    );
};

export default QualityPage

