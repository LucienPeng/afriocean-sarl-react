import { Stack, Card, CardHeader, CardContent, Typography } from "@mui/material";
import React from "react";

const SERVICES = [
    { title: '冷凍水產品', description: '', url: '' },
    { title: '冷凍及蒸煮食品加工', description: '', url: '' },
    { title: '儲存服務', description: '', url: '' },
];

export const Service = (props) => {
    const { serviceRef } = props;

    return (
        <Stack component='div' ref={serviceRef} justifyContent='center' alignItems='center' minHeight='100vh' sx={{ bgcolor: 'secondary.light' }}>
            <Stack direction='row' spacing={5}>
                {SERVICES.map((service, index) => (
                    <Card key={index} sx={{ maxWidth: 345 }}>
                        <CardContent>
                            <Typography variant="body1" color="text.secondary">
                                {service.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Stack>
        </Stack>
    );
};
