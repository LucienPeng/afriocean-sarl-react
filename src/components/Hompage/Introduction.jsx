import { Stack, Typography, Grid } from "@mui/material";
import { StyledButton } from "../UI/StyledComponents";
import { useNavigation } from "../../utils/useNavigation";
import { useHomePageTranslation } from "../../i18n/useTranslations";
import { useDeviceMetadata } from "../../utils/useDeviceMetadata";
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FactoryIcon from '@mui/icons-material/Factory';

const menuStyle = {
    height: '100%',
    width: '100%',
    bgcolor: '#ffffff20',
    color: '#fff',
    maxHeight: '50%',
    "&:hover": { bgcolor: 'secondary.light', color: 'primary.main', cursor: 'pointer', transition: '0.5s all ease-out' }
};

const menuOption = [
    { name: 'nav.introNavs.history', link: '/history', icon: <EmojiObjectsIcon sx={{ fontSize: 60 }} /> },
    { name: 'nav.introNavs.vision', link: '/vision', icon: <AcUnitIcon sx={{ fontSize: 60 }} /> },
    { name: 'nav.introNavs.factory', link: '/factory', icon: <FactoryIcon sx={{ fontSize: 60 }} /> },
    { name: 'nav.introNavs.quality', link: '/quality', icon: <CheckCircleIcon sx={{ fontSize: 60 }} /> }
];

export const Introduction = () => {
    const { isMobileView } = useDeviceMetadata();
    const { navigationHandler } = useNavigation();
    const { t } = useHomePageTranslation();
    const redirectHandle = (link) => navigationHandler(`/about${link}`);

    return (
        <Grid
            container
            sx={{
                backgroundImage: `linear-gradient(to left bottom, #172e48, #1b3f62, #1b517d, #166399, #0077b6)`,
                height: isMobileView ? '100%' : '50vh',
            }}
            direction='row'
            justifyContent='center'
            alignItems='center'
            gap={isMobileView ? 5 : 1}
            py={5}
        >
            <Grid item md={5} xs={12} height={isMobileView ? '100%' : '40vh'}>
                <Stack height='100%' direction='column' justifyContent='center' spacing={2} bgcolor={!isMobileView && '#ffffff20'} px={5}>
                    <Typography component='span' variant="body1" color="common.white" textAlign='start' >
                        {t('founderState.paragraph1')}
                    </Typography>
                    <Typography component='span' variant="body1" color="common.white" textAlign='start' >
                        {t('founderState.paragraph2')}
                    </Typography>
                    <Typography component='span' variant="body1" color="common.white" textAlign='start' >
                        {t('founderState.paragraph3')}
                    </Typography>
                    <Typography fontWeight={700} variant="body1" color="common.white" textAlign='end' mt={2}>
                        {t('founderState.paragraph4')}
                    </Typography>

                </Stack>
            </Grid>
            {
                isMobileView
                    ? <Grid item md={5} xs={12} height='100%'>
                        <Stack justifyContent='center' alignItems='center'>
                            <StyledButton onClick={redirectHandle} variant="contained" color="secondary">
                                {t('actionButtons.knowMore')}
                            </StyledButton>
                        </Stack>
                    </Grid>
                    :
                    <Grid item container sm={5} xs={12}
                        height='40vh'
                        justifyContent='center'
                        alignItems='center'
                        gap={1}
                        sx={{ overflow: 'hidden' }}
                    >
                        {menuOption.map((option) => (
                            <Grid key={option.name} item container sm={3} md={5} sx={menuStyle} justifyContent='center' alignItems='center' onClick={() => redirectHandle(option.link)}>
                                <Stack direction='column' justifyContent='center' alignItems='center'>
                                    {option.icon}
                                    <Typography variant="h6"
                                        sx={{ "&:hover": { color: 'primary.main', transition: '0.5s all ease-out' } }}>
                                        {t(`${option.name}`)}
                                    </Typography>
                                </Stack>
                            </Grid>
                        ))}
                    </Grid>
            }
        </Grid >
    );
};
