import React from "react";
import { Box, Typography } from "@mui/material";
import { useHomepageTranslation } from "../../i18n/useTranslations";


export const HeroBanner = () => {
    const { t } = useHomepageTranslation();
    return (
        <Box
            textAlign='center'
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            sx={{
                minHeight: '100vh',
                backgroundImage: 'url(https://i.imgur.com/SEcJryW.jpg)',
                backgroundSize: 'cover',
                backgroundRepeated: false,
                backgroundPosition: 'top',
                backgroundAttachment: 'fixed',
                opacity: 0.85
            }}>
            <Typography color='common.white' variant="h1" className="animate__animated animate__zoomIn">
                {t('title')}
            </Typography>
            <Typography color='common.white' variant="h6" className="animate__animated animate__slideInUp">
                — Produits Halieutiques De La Qualité —
            </Typography>
        </Box>
    );
};
