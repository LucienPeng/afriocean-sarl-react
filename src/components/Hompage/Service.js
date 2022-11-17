import { Stack, Card, Button, CardContent, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const SERVICES = [
    { title: 'SERVICE 1', description: '', url: 's1' },
    { title: 'SERVICE 2', description: '', url: 's2' },
    { title: 'SERVICE 3', description: '', url: 's3' },
];

export const Service = (props) => {
    const { serviceRef } = props;
    const navigate = useNavigate();
    const redirectHandle = (url) => navigate(`/service/${url}`);

    return (
        <Stack component='div' ref={serviceRef} justifyContent='center' alignItems='center' minHeight='100vh' sx={{ bgcolor: 'secondary.light' }}>
            <Typography mb={5} variant="h3" color="initial">Service</Typography>

            <Stack direction='row' spacing={20}>
                {SERVICES.map((service, index) => (
                    <Card key={index} sx={{ maxWidth: 345 }}>
                        <CardContent>
                            <Typography variant="body1" color="text.secondary">
                                {service.title}
                            </Typography>
                            <Button onClick={redirectHandle.bind(this, service.url)} variant="text" color="primary">Go to {service.title}</Button>
                        </CardContent>
                    </Card>
                ))}
            </Stack>
        </Stack>
    );
};
