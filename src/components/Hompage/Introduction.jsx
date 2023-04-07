import { Stack, Typography } from "@mui/material";
import { useNavigation } from "../../utils/useNavigation";
import { StyledButton } from "../UI/StyledComponents";
import { useHomePageTranslation } from "../../i18n/useTranslations";

export const Introduction = (props) => {
    const { aboutRef } = props;
    const { navigationHandler } = useNavigation();
    const { t } = useHomePageTranslation();
    const redirectHandle = () => navigationHandler(`/about/history`);

    return (
        <Stack py={5} direction='column' bgcolor='#224267' width='100%'ref={aboutRef} justifyContent='center' alignItems='center' data-aos="fade-in">
            <Stack direction='column' maxWidth='80%' spacing={1.5}>
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
