import { Stack, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useHomepageTranslation } from "../../i18n/useTranslations";

export const Introduction = (props) => {
    const { aboutRef } = props;
    const { t } = useHomepageTranslation();
    const navigate = useNavigate();
    const redirectHandle = () => navigate("/about");

    return (
        <Stack component='div' ref={aboutRef} minHeight="100vh" justifyContent='center' alignItems='center'>
            <Stack direction='column' alignItems='center'>
                <Typography variant="h3" color="initial">{t('introduction')}</Typography>
                <Button onClick={redirectHandle} variant="text" color="primary">了解更多</Button>
            </Stack>
        </Stack>
    );
};

export default Introduction;
