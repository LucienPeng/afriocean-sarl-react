import { Card, CardContent, Typography, Stack, Grid, Box, Link } from "@mui/material";
import { CONTACT_INFO } from '../components/Hompage/Contact';
import { ContactForm } from '../components/Contact/ContactForm';
import EmailIcon from '@mui/icons-material/Email';

const ContactPage = () => {

    return (
        <Stack sx={{ bgcolor: 'primary.dark' }} minHeight='100vh' justifyContent='center' alignItems='center' >
            <Box width='100%' alignItems='center' justifyContent='center' display='flex' flexDirection='column' my={5}>
                <Typography my={10} variant="h2" fontWeight={700} color='common.white'>Contacts</Typography>
                <Grid width='100%' container direction='column' rowSpacing={5} alignItems='center' justifyContent='center'>
                    <Grid item xs={11} width='100%'>
                        <Grid container alignItems='center' justifyContent='center' direction='row' rowSpacing={5}>
                            <Grid item xs={11} sm={11} md={5} display='flex' alignItems='center' justifyContent='center'>
                                <ContactForm />
                            </Grid>
                            <Grid item width='100%' xs={11} sm={11} md={5} justifyContent='center' minHeight='40vh'>
                                <Box component='iframe'
                                    title="googleMap"
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7717.365070935294!2d-17.169175!3d14.730532!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd079694bf98a2ff6!2sAFRIOCEAN%20SARL!5e0!3m2!1szh-TW!2stw!4v1648269332225!5m2!1szh-TW!2stw"
                                    allowFullScreen={true}
                                    loading={'lazy'}
                                    width='100%'
                                    minHeight='40vh'
                                    referrerPolicy={"no-referrer-when-downgrade"}>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid width='100%' data-aos="zoom-in-down" item xs={11} display='flex' justifyContent='center' alignItems='center'>
                        <Grid container my={5} justifyContent='center' rowSpacing={2}>
                            {CONTACT_INFO.map((contact, index) => (
                                <Grid key={index} item xs={10} sm={4} md={2} width={1}>
                                    <Card data-aos="zoom-in-down" key={index} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: "transparent" }} elevation={0}>
                                        {contact.icon}
                                        <CardContent>
                                            <Stack justifyContent='center' alignItems='center' spacing={5}>
                                                <Stack justifyContent='center' alignItems='center' textAlign='center'>
                                                    <Typography variant="h1" color="common.white" fontWeight={700} fontSize={18}>
                                                        {contact.title}
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
                            <Grid item xs={10} sm={4} md={2}>
                                <Card data-aos="zoom-in-down" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: "transparent" }} elevation={0}>
                                    <EmailIcon sx={{ color: 'common.white', fontSize: '40px' }} />
                                    <CardContent>
                                        <Stack justifyContent='center' alignItems='center' spacing={5}>
                                            <Stack justifyContent='center' alignItems='center' textAlign='center'>
                                                <Typography variant="h1" color="common.white" fontWeight={700} fontSize={18}>
                                                    Email
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
                    </Grid>
                </Grid>
            </Box>
        </Stack >
    );
};

export default ContactPage;
