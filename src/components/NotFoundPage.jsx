import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const NotFoundComponent = () => {
    const { t } = useTranslation();

    return (
        <Stack bgcolor='primary.main' minHeight='100vh' justifyContent='center' alignItems='center' spacing={5}>
            <Box
                component='img'
                src='https://i.imgur.com/1UpdxEV.png'
                alt='logo'
                height={100}
                sx={{ cursor: 'pointer', flexGrow: 0, display: { xs: 'none', sm: 'block' } }}
            />
            <Box textAlign='center' mb={5}>
                <Typography color='#fff' mb={3} variant="h2" fontSize='40px' fontWeight={700}>{t('404.title')}</Typography>
                <Typography color='#fff' variant="h6">{t('404.paragraph1')}</Typography>
            </Box>
        </Stack>
    );
};

export default NotFoundComponent;
