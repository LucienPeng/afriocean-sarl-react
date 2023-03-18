import { Stack, Typography } from "@mui/material";
import { useNavigation } from "../../utils/useNavigation";
import { StyledButton } from "../UI/StyledComponents";

export const Introduction = (props) => {
    const { aboutRef } = props;
    const { navigationHandler } = useNavigation();
    const redirectHandle = () => navigationHandler(`/about`);

    return (
        <Stack p={5} bgcolor='#224267' component='div' ref={aboutRef} justifyContent='center' alignItems='center' data-aos="fade-in">
            <Stack direction='column' justifyContent='center' alignItems='center' >
                <Stack direction='column' width='80%' spacing={1.5}>
                    <Typography alignSelf='flex-start' variant="h1" color="common.white" fontSize={70} textAlign='start' >
                        “
                    </Typography>
                    <Typography component='span' variant="body1" color="common.white" textAlign='start' >
                        AFRIOCAEN is a team dedicated itself to adding value to local natural
                        resources, especially the ones out of the ocean.
                        With this target, both the suppliers and clients will be satisfied, and the team
                        will have a great sense of achievement.
                        We hope this virtuous cycle turns eventually socially and environmentally.
                    </Typography>
                    <Typography component='span' variant="body1" color="common.white" textAlign='start' >
                        AFRIOCAEN vows to make things better, here a better place and everyone
                        conncerned better off.
                        And most of all, we work hard to provide our customers with the best
                        quality and lowest costs products.
                    </Typography>
                    <Typography component='span' variant="body1" color="common.white" textAlign='start' >
                        We invite you to be part of this, no matter who you are, where you come
                        from.
                    </Typography>
                    <Typography fontWeight={700} variant="h6" color="common.white" textAlign='end' mt={2}>
                        2023/1/13 Diamniadio, Senegal
                    </Typography>
                    <Typography alignSelf='flex-end' variant="h1" color="common.white" fontSize={70} textAlign='end'>
                        ”
                    </Typography>

                </Stack>
                <StyledButton onClick={redirectHandle} variant="contained" color="secondary">
                    Know about us
                </StyledButton>
            </Stack>
        </Stack >
    );
};
