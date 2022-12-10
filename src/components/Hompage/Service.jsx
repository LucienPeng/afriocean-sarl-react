import React from "react";
import { StyledButton } from "../UI/StyledComponents";
import { Stack, Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FactoryIcon from '@mui/icons-material/Factory';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AcUnitIcon from '@mui/icons-material/AcUnit';

const SERVICES = [
    { title: 'SERVICE 1', description: '', url: 's1', icon: <FactoryIcon sx={{ color: 'common.white', fontSize: '70px' }} /> },
    { title: 'SERVICE 2', description: '', url: 's2', icon: <LocalShippingIcon sx={{ color: 'common.white', fontSize: '70px' }} /> },
    { title: 'SERVICE 3', description: '', url: 's3', icon: <AcUnitIcon sx={{ color: 'common.white', fontSize: '70px' }} /> },
];

export const Service = (props) => {
    const { serviceRef } = props;
    const navigate = useNavigate();
    const redirectHandle = (url) => navigate(`/service/${url}`);

    return (
        <Stack component='div' ref={serviceRef} justifyContent='center' alignItems='center' minHeight='50vh' sx={{ bgcolor: 'primary.main' }}>
            <Typography my={5} variant="h2" fontWeight={700} color='common.white'>Service</Typography>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={20} justifyContent='center' alignItems='center'>
                {SERVICES.map((service, index) => (
                    <Card data-aos="zoom-in-right" key={index} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', maxWidth: 345, backgroundColor: "transparent" }} elevation={0}>
                        {service.icon}
                        <CardContent>
                            <Stack justifyContent='center' alignItems='center' spacing={5}>
                                <Stack justifyContent='center' alignItems='center'>
                                    <Typography variant="h1" color="common.white" fontWeight={700} fontSize={18}>
                                        {service.title}
                                    </Typography>
                                    <Typography variant="body1" color="common.white">
                                        Demo text Demo text Demo text Demo text Demo text Demo text Demo text Demo text Demo text Demo text Demo textDemo text
                                    </Typography>
                                </Stack>
                                <StyledButton onClick={redirectHandle.bind(this, service.url)} variant="contained" color="secondary">Go to {service.title}</StyledButton>
                            </Stack>
                        </CardContent>
                    </Card>
                ))}
            </Stack>
        </Stack>
    );
};
