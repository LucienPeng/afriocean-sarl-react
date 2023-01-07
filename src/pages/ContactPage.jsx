import { Card, CardContent, Typography, Stack, Grid, Box, FormControlLabel } from "@mui/material";
import { StyledTextfield, StyledCheckedBox, StyledButton } from '../components/UI/StyledComponents';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const CONTACT_INFO = [
    { title: 'Business Hour', detail: 'Monday – Friday', surplusDetail: '09h-17h', icon: <AccessTimeIcon sx={{ color: 'common.white', fontSize: '40px' }} /> },
    { title: 'Address', detail: 'KM 0.5 Route de Sébi Ponty,', surplusDetail: 'Diamniadio, Sénégal', icon: <LocationOnIcon sx={{ color: 'common.white', fontSize: '40px' }} /> },
    { title: 'Telephone Number', detail: '+221 33 836 80 88', surplusDetail: '+221 76 223 24 05', icon: <LocalPhoneIcon sx={{ color: 'common.white', fontSize: '40px' }} /> },
    { title: 'Email', detail: 'afriocean.sarl@gmail.com', surplusDetail: 'sales.afriocean@gmail.com', icon: <EmailIcon sx={{ color: 'common.white', fontSize: '40px' }} /> },
];

const contactPage = () => {

    return (
        <Stack sx={{ bgcolor: 'primary.dark' }} minHeight='100vh' justifyContent='center' alignItems='center' >
            <Box alignItems='center' justifyContent='center' display='flex' flexDirection='column' my={5}>
                <Typography my={5} variant="h2" fontWeight={700} color='common.white'>Contacts</Typography>
                <Grid container spacing={5} direction='row' alignItems='center' justifyContent='center'>
                    <Grid item xs={11} sm={8} md={9}>
                            <Grid container my={5} justifyContent='center' alignItems='center'>
                                {CONTACT_INFO.map((contact, index) => (
                                    <Grid key={index} item xs={10} md={3}>
                                        <Card data-aos="zoom-in-down" key={index} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', maxWidth: 345, backgroundColor: "transparent" }} elevation={0}>
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

                        </Grid>
                        <Grid data-aos="zoom-in-down" item xs={12} md={10} justifyContent='center' minHeight='40vh'>
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

                    <Grid data-aos="zoom-in-down" item xs={11} sm={8} md={3} justifyContent='center' alignItems='center'>
                        <Typography textAlign='center' my={5} variant="h2" fontWeight={700} color='common.white'>Contact US</Typography>

                        <Stack component='form' >
                            <Stack justifyContent='center' spacing={0.5} height='100%'>
                                <Grid container spacing={1} >
                                    <Grid xs={12} sm={6} item>
                                        <StyledTextfield
                                            placeholder="Enter first name"
                                            label="First Name"
                                            variant="outlined"
                                            fullWidth
                                            required
                                        />
                                    </Grid>
                                    <Grid xs={12} sm={6} item>
                                        <StyledTextfield
                                            placeholder="Enter last name"
                                            label="Last Name"
                                            variant="outlined"
                                            fullWidth
                                            required
                                        />
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <StyledTextfield
                                        type="email"
                                        placeholder="Enter email"
                                        label="Email"
                                        variant="outlined"
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <StyledTextfield
                                        type="number"
                                        placeholder="Enter phone number"
                                        label="Phone"
                                        variant="outlined"
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <StyledTextfield
                                        label="Enter your comment"
                                        multiline
                                        rows={4}
                                        placeholder="Enter your comment"
                                        variant="outlined"
                                        fullWidth
                                    />
                                </Grid>

                            </Stack>
                            <Stack mt={2} spacing={3} direction='column' justifyContent='center' alignItems='center'>
                                <FormControlLabel
                                    control={<StyledCheckedBox />}
                                    label={<Typography sx={{ color: 'white' }}>I agree my submitted data is collected and stored</Typography>}
                                />
                                <StyledButton alignself='center' variant="contained" color="secondary">Back to homepage</StyledButton>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>

        </Stack>
    );
};

export default contactPage;
