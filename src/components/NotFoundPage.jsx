import { Box, Stack, Typography } from "@mui/material";
import { useNavigation } from "../utils/useNavigation";
import { StyledButton } from "./UI/StyledComponents";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDeviceMetadata } from "../utils/useDeviceMetadata";

const NotFoundComponent = () => {
    const { navigationHandler } = useNavigation();
    const { isMobileView } = useDeviceMetadata();
    const { t } = useTranslation();
    const redirectHandler = useCallback(() => navigationHandler('/'), [navigationHandler]);
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCountdown(countdown - 1);
        }, 1000);

        if (countdown === 0) {
            redirectHandler();
            clearTimeout(timer);
        }
        return () => clearTimeout(timer);
    }, [countdown, redirectHandler]);

    return (
        <Stack bgcolor='primary.main' minHeight='100vh' justifyContent='center' alignItems='center' spacing={5}>
            {isMobileView &&
                <Box
                    component='img'
                    src='https://i.imgur.com/1UpdxEV.png'
                    alt='logo'
                    height={100}
                    onClick={() => redirectHandler('/')}
                    sx={{ cursor: 'pointer', flexGrow: 0, display: { xs: 'none', sm: 'block' } }}
                />}
            <Box textAlign='center' mb={5}>
                <Typography color='#fff' mb={3} variant="h2" fontSize='40px' fontWeight={700}>{t('404.title')}</Typography>
                <Typography color='#fff' variant="h6">{t('404.paragraph1')}</Typography>
                <Typography color='#fff' variant="h6">{t('404.paragraph2')}</Typography>
                <Stack direction='row' spacing={2} justifyContent='center' alignItems='center'>
                    <Typography color='#fff' variant="h6">{countdown}</Typography>
                    <Typography color='#fff' variant="h6">{t('404.paragraph3')}</Typography>
                </Stack>
            </Box>
            <StyledButton onClick={redirectHandler} variant="contained" color="secondary">{t('404.redirect')}</StyledButton>
        </Stack>
    );
};

export default NotFoundComponent;
