import { Stack, Typography } from "@mui/material";
import { StyledButton } from "../UI/StyledComponents";
import { useNavigation } from "../../utils/useNavigation";
import { useHomePageTranslation } from "../../i18n/useTranslations";
import { useDeviceMetadata } from "../../utils/useDeviceMetadata";

export const Introduction = (props) => {
    const { aboutRef } = props;
    const { isMobileView } = useDeviceMetadata();
    const { navigationHandler } = useNavigation();
    const { t } = useHomePageTranslation();
    const redirectHandle = () => navigationHandler(`/about/history`);
    return (
        <Stack
            ref={aboutRef}
            sx={{
                backgroundImage: `linear-gradient(150deg, rgba(0, 119, 182, 1) 3.6%, #172E48 87.6% )`,
                backgroundBlendMode: 'multiply',
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                minHeight: '50vh'
            }}
            py={5} spacing={2} direction='column' width='100%' justifyContent='center' alignItems='center' data-aos={isMobileView && "fade-in"}>
            <Stack direction='column' maxWidth='80%' spacing={1.5} bgcolor={!isMobileView && '#ffffff20'} px={5} pv={2} data-aos={!isMobileView && "fade-in"}>
                <Typography alignSelf='flex-start' variant="h1" color="common.white" fontSize={70} textAlign='start' >
                    “
                </Typography>
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
                <Typography alignSelf='flex-end' variant="h1" color="common.white" fontSize={70} textAlign='end'>
                    ”
                </Typography>

            </Stack>
            <StyledButton onClick={redirectHandle} variant="contained" color="secondary">
                {t('actionButtons.knowMore')}
            </StyledButton>
        </Stack >
    );
};
