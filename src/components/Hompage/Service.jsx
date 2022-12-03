import { Stack, Card, Button, CardContent, Typography, Icon } from "@mui/material";
import React from "react";
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
            <Typography mb={5} variant="h3" color='common.white'>Service</Typography>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={20} justifyContent='center' alignItems='center'>
                {SERVICES.map((service, index) => (
                    <Card key={index} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', maxWidth: 345, backgroundColor: "transparent" }} elevation={0}>
                        {service.icon}
                        <CardContent>
                            <Stack justifyContent='center' flex='true' alignItems='center' spacing={2}>
                                <Typography variant="h5" color="common.white">
                                    {service.title}
                                </Typography>
                                <Typography variant="body1" color="common.white">
                                    Demo text Demo text Demo text Demo text Demo text Demo text Demo text Demo text Demo text Demo text Demo textDemo text
                                </Typography>
                                <Button onClick={redirectHandle.bind(this, service.url)} variant="contained" color="secondary">Go to {service.title}</Button>
                            </Stack>
                        </CardContent>
                    </Card>
                ))}
            </Stack>
        </Stack>
    );
};
