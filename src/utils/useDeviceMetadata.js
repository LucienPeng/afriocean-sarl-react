import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export const useDeviceMetadata = () => {
    const theme = useTheme();
    const isMobileView = useMediaQuery(theme.breakpoints.down('md'));

    return { isMobileView };
};
