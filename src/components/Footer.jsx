import { Stack, Typography, Button, Divider, Box } from "@mui/material";
import { useDeviceMetadata } from "../utils/useDeviceMetadata";
import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PolicyIcon from '@mui/icons-material/Policy';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useTranslation } from "react-i18next";

const SOCIL_MEDIAS = [
    { id: "Facebook", icon: <FacebookIcon />, url: 'https://www.facebook.com/AFRIOCEAN' },
    { id: "Linkedin", icon: <LinkedInIcon />, url: 'https://tw.linkedin.com/company/afriocean-sarl?trk=public_profile_experience-item_profile-section-card_subtitle-click' },
    { id: "Private Policy", icon: <PolicyIcon />, url: '#' }

];

const MobileFooter = () => {
    const redirection = (url) => window.open(url, '_blank');

    return (
        <Box width='100%'>
            <BottomNavigation
                sx={{ backgroundColor: '#F5f5f5' }}
                showLabels
            >
                {SOCIL_MEDIAS.map((socialMedia) => (
                    <BottomNavigationAction sx={{ color: 'primary.main' }} onClick={() => redirection(socialMedia.url)} key={socialMedia.id} label={socialMedia.id} icon={socialMedia.icon} />
                ))}
            </BottomNavigation>
            <Stack bgcolor='#097272' direction='row' justifyContent='center'>
                <Typography fontWeight={700} textAlign='center' variant="body1" color='common.white'>© Afriocean Sarl 2023</Typography>
            </Stack>
        </Box>
    );
};


export const Footer = () => {
    const redirection = (url) => window.open(url, '_blank');
    const { isMobileView } = useDeviceMetadata();
    const { t } = useTranslation();

    return (
        <Stack bgcolor='primary.dark'>
            {
                !isMobileView ?
                    <Stack bgcolor='secondary.dark' display='flex' direction='row' justifyContent='center' alignItems='center'
                        sx={{
                            '& hr': {
                                mx: !isMobileView && 2.5,
                            },
                        }}>
                        <Typography fontWeight={700} textAlign='center' variant="body1" color='common.white'>© Afriocean Sarl 2023</Typography>
                        <Divider orientation="vertical" variant="middle" flexItem color='white' />
                        <Typography fontWeight={700} textAlign='center' variant="body1" color='common.white'>{t('footer.copyRight')}</Typography>
                        {SOCIL_MEDIAS.map((socialMedia) => (
                            <Stack key={socialMedia.id} onClick={() => redirection(socialMedia.url)} direction='row' alignItems='center' justifyContent='center'>
                                <Divider orientation="vertical" variant="middle" flexItem color='white' />
                                <Button sx={{ color: 'white' }} variant="text" startIcon={socialMedia.icon}>
                                    {!isMobileView && socialMedia.id}
                                </Button>
                            </Stack>
                        ))}
                    </Stack>
                    :
                    <MobileFooter />
            }
        </Stack>
    );
};

