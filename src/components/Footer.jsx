import { Box, Stack, Typography, IconButton, Link } from "@mui/material";
import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const socialMedias = [
    { id: 1, icon: <FacebookIcon sx={{ color: "common.white", fontSize: '32px' }} />, url: 'https://www.facebook.com/AFRIOCEAN' },
    { id: 2, icon: <LinkedInIcon sx={{ color: "common.white", fontSize: '32px' }} />, url: 'https://tw.linkedin.com/company/afriocean-sarl?trk=public_profile_experience-item_profile-section-card_subtitle-click' }
];

export const Footer = () => {

    const redirection = (url) => window.open(url, '_blank');

    return (
        <Stack>
            <Stack spacing={1} direction='row' bgcolor='#172E48' minHeight='10vh' alignItems='center' display='flex' justifyContent='flex-end'>
                <Link justifySelf='flex-end' fontWeight={700} textAlign='center' variant="body1" color='common.white'>Privacy policy</Link>
                <Stack direction='row' justifyContent='flex-end' alignItems='center' mr={6}>
                    {socialMedias.map((socialMedia) => (
                        <IconButton key={socialMedia.id} onClick={() => redirection(socialMedia.url)}>
                            {socialMedia.icon}
                        </IconButton>
                    ))}
                </Stack>
            </Stack>
            <Stack bgcolor='#097272' direction='row' justifyContent='center' spacing={5}>
                <Typography fontWeight={700} textAlign='center' variant="body1" color='common.white'>© Afriocean Sarl 2022 | Tous droits réservés.</Typography>
            </Stack>
        </Stack>

    );
};

