import { Box, Stack, Typography } from "@mui/material";
import { useNavigation } from "../utils/useNavigation";
import { StyledButton } from "./UI/StyledComponents";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";

const NotFoundComponent = () => {
    const { navigationHandler } = useNavigation();
    const { t } = useTranslation();
    const redirectHandler = useCallback(() => navigationHandler('/'), [navigationHandler]);

    return (
        <Stack bgcolor='primary.main' minHeight='100vh' justifyContent='center' alignItems='center' spacing={5}>
            <Box
                component='img'
                src='https://i.imgur.com/1UpdxEV.png'
                alt='logo'
                height={100}
                onClick={() => redirectHandler('/')}
                sx={{ cursor: 'pointer', flexGrow: 0, display: { xs: 'none', sm: 'block' } }}
            />
            <Box textAlign='center' mb={5}>
                <Typography color='#fff' mb={3} variant="h2" fontSize='40px' fontWeight={700}>{t('404.title')}</Typography>
                <Typography color='#fff' variant="h6">{t('404.paragraph1')}</Typography>
            </Box>
            <StyledButton onClick={redirectHandler} variant="contained" color="secondary">{t('404.redirect')}</StyledButton>
        </Stack>
    );
};

export default NotFoundComponent;
