import { Fade, Fab, Box } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import useScrollTrigger from '@mui/material/useScrollTrigger';


export const ScrollTop = (props) => {
    const { pageRef } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = () => {
        window.scrollTo({
            top: pageRef.current.offsetTop,
            behavior: 'smooth',
        });
    };

    return (
        <Fade in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 1 }}
            >
                <Fab size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </Box>
        </Fade>
    );
};

