import { Card, CardContent, Typography, Stack, Grid, Link, Box } from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useHomePageTranslation } from "../../i18n/useTranslations";

export const CONTACT_INFO = [
    { title: 'Business Hour', detail: 'Monday – Friday', surplusDetail: '09h-17h', icon: <AccessTimeIcon sx={{ color: 'common.white', fontSize: '40px' }} /> },
    { title: 'Address', detail: 'KM 0.5 Route de Sébi Ponty,', surplusDetail: 'Diamniadio, Sénégal', icon: <LocationOnIcon sx={{ color: 'common.white', fontSize: '40px' }} /> },
    { title: 'Telephone Number', detail: '+221 33 836 8088', icon: <LocalPhoneIcon sx={{ color: 'common.white', fontSize: '40px' }} /> },
    { title: "What's App", detail: '+221 76 423 1517', icon: <WhatsAppIcon sx={{ color: 'common.white', fontSize: '40px' }} /> },
];

export const Contact = () => {
    const { t } = useHomePageTranslation();

    return (
        <Grid mt={5} sx={{ bgcolor: 'primary.dark' }} container spacing={5} justifyContent='center'>
            {CONTACT_INFO.map((contact, index) => (
                <Grid key={index} item xs={10} md={2}>
                    <Card data-aos="zoom-in-down" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: "transparent" }} elevation={0}>
                        {contact.icon}
                        <CardContent>
                            <Stack justifyContent='center' alignItems='center' spacing={5}>
                                <Stack justifyContent='center' alignItems='center' textAlign='center'>
                                    <Typography variant="h3" color="common.white" fontWeight={700} fontSize={18}>
                                        {t(`contacts.contact${index + 1}`)}
                                    </Typography>
                                    <Typography variant="body1" color="common.white">
                                        {contact.detail}
                                    </Typography>
                                    <Typography variant="body1" color="common.white">
                                        {contact.surplusDetail}
                                    </Typography>
                                </Stack>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
            <Grid item xs={10} md={2}>
                <Card data-aos="zoom-in-down" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: "transparent" }} elevation={0}>
                    <EmailIcon sx={{ color: 'common.white', fontSize: '40px' }} />
                    <CardContent>
                        <Stack justifyContent='center' alignItems='center' spacing={5}>
                            <Stack justifyContent='center' alignItems='center' textAlign='center'>
                                <Typography variant="h3" color="common.white" fontWeight={700} fontSize={18}>
                                    {t('contacts.email')}
                                </Typography>

                                <Box sx={{ overflowWrap: 'break-word', width: '8rem' }}>
                                    <Link href="mailto:sales.afriocean@gmail.com?subject=Quote to AFRIOCEAN" rel="noopener" target="_blank">
                                        <Typography variant="body1" color="common.white">
                                            sales.afriocean@gmail.com
                                        </Typography>
                                    </Link>
                                </Box>
                            </Stack>
                        </Stack>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};
