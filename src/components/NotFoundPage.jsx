import { Box, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { StyledButton } from "./UI/StyledComponents";

const NotFoundComponent = () => {
    const navigate = useNavigate();
    const redirectHandler = () => navigate('/');
    return (
        <Stack minHeight='100vh' justifyContent='center' alignItems='center'>
            <Box textAlign='center' mb={5}>
                <Typography mb={3} variant="h2" fontSize='40px' fontWeight={700}>Page 404</Typography>
                <Typography variant="h2">Oh là là !</Typography>
                <Typography variant="h6">Quelques problèmes inconnus nous arrivent.</Typography>
                <Typography variant="h6">Nous y sommes dessus !</Typography>
            </Box>
            <StyledButton onClick={redirectHandler} variant="contained" color="secondary">Back to homepage</StyledButton>
        </Stack>
    );
};

export default NotFoundComponent;
