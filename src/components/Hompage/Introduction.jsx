import { Stack, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useHomepageTranslation } from "../../i18n/useTranslations";

const INTRODUCTION_SECTIONS = [
    { title: 'Intro1', url: 'i1' },
    { title: 'Intro2', url: 'i2' },
    { title: 'Intro3', url: 'i3' },
    { title: 'Intro4', url: 'i4' },
    { title: 'Intro5', url: 'i5' },
];

export const Introduction = (props) => {
    const { aboutRef } = props;
    const { t } = useHomepageTranslation();
    const navigate = useNavigate();
    const redirectHandle = (url) => navigate(`/about/${url}`);

    return (
        <Stack component='div' ref={aboutRef} minHeight="100vh" justifyContent='center' alignItems='center'>
            <Typography mb={5} variant="h3" color="initial">Introduction</Typography>

            <Stack direction={{ xs: 'column', md: 'row' }} alignItems='center' spacing={15}>
                {INTRODUCTION_SECTIONS.map((intro, index) => (
                    <Stack key={index} direction='column' alignItems='center'>
                        <Typography variant="h3" color="initial">{intro.title}</Typography>
                        <Button onClick={redirectHandle.bind(this, intro.url)} variant="text" color="primary">Go to {intro.title}</Button>
                    </Stack>
                ))}

            </Stack>

        </Stack>
    );
};

export default Introduction;
