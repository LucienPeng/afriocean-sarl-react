import { Box, Stack, Typography } from "@mui/material";
import { useNavigation } from "../utils/useNavigation";
import { StyledButton } from "./UI/StyledComponents";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const NotFoundComponent = () => {
    const { navigationHandler } = useNavigation();
    const { t } = useTranslation();
    const redirectHandler = useCallback(() => navigationHandler('/'), [navigationHandler]);
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCountdown(countdown - 1);
        }, 1000);

        if (countdown === -1) {
            redirectHandler();
            clearTimeout(timer);
        }
        return () => clearTimeout(timer);
    }, [countdown, redirectHandler]);

    return (
        <Stack minHeight='100vh' justifyContent='center' alignItems='center'>
            <Box textAlign='center' mb={5}>
                <Typography mb={3} variant="h2" fontSize='40px' fontWeight={700}>{t('404.title')}</Typography>
                <Typography variant="h6">{t('404.paragraph1')}</Typography>
                <Typography variant="h6">{t('404.paragraph2')}</Typography>
                <Stack direction='row' spacing={2} justifyContent='center' alignItems='center'>
                    <Typography variant="h6">{countdown}</Typography>
                    <Typography variant="h6">{t('404.paragraph3')}</Typography>
                </Stack>
            </Box>
            <StyledButton onClick={redirectHandler} variant="contained" color="secondary">{t('404.redirect')}</StyledButton>
        </Stack>
    );
};

export default NotFoundComponent;
