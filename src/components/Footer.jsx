import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Footer = () => {
    return (
        <Stack>
            <Box bgcolor='#172E48' minHeight='10vh' alignItems='center' display='flex' justifyContent='flex-end'>
                <Stack direction='row' justifyContent='flex-end' alignItems='center' mr={6} spacing={2}>
                    <FacebookIcon sx={{ color: "common.white", fontSize: '32px' }} />
                    <InstagramIcon sx={{ color: "common.white", fontSize: '32px' }} />
                    <LinkedInIcon sx={{ color: "common.white", fontSize: '32px' }} />
                    <YouTubeIcon sx={{ color: "common.white", fontSize: '32px' }} />
                </Stack>
            </Box>
            <Box bgcolor='#097272'>
                <Typography fontWeight={700} textAlign='center' variant="body1" color='common.white'>© Afriocean Sarl 2022 | Tous droits réservés.</Typography>
            </Box>
        </Stack>

    );
};

