import { Stack, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useHomepageTranslation } from "../../i18n/useTranslations";
import { StyledButton } from "../UI/StyledComponents";

export const Introduction = (props) => {
    const { aboutRef } = props;
    const { t } = useHomepageTranslation();
    const navigate = useNavigate();
    const redirectHandle = (url) => navigate(`/about`);

    return (
        <Stack bgcolor='#4E6785' component='div' ref={aboutRef} minHeight="50vh" justifyContent='center' alignItems='center'>
            <Stack my={5} direction='column' justifyContent='center' alignItems='center' width='75%'>
                <Box data-aos="fade-right">
                    <Typography variant="h1" color="common.white" fontSize={100} textAlign='start' >
                        “
                    </Typography>
                    <Typography lineHeight={2} component='span' variant="body1" color="common.white" textAlign='center' >
                        Mais de 30 anos depois de nos lançarmos ao mar pela primeira vez, continuamos a acreditar que não há maior frescura do que a que oferecemos aos nosso clientes, todos os dias.
                        Hoje, apoiados numa estratégia de crescimento, além dessa frescura e da qualidade dos nossos produtos, oferecemos também inovação, e os nossos clientes sabem que podem confiar no nosso pescado.
                    </Typography>
                    <Typography fontWeight={700} variant="h6" color="common.white" textAlign='end' mt={2}>
                        John Chen - CEO
                    </Typography>
                    <Typography variant="h1" color="common.white" fontSize={100} textAlign='end'>
                        ”
                    </Typography>
                </Box>
                <StyledButton onClick={redirectHandle} sx={{ my: 1, alignSelf: 'flex-end' }} variant="contained" color="primary">Know about us</StyledButton>
            </Stack>
        </Stack >
    );
};

export default Introduction;
