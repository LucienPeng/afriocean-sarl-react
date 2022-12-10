import { createTheme } from '@mui/material';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#224267',
            dark: '#172E48',
            light: '#4E6785',
            contrastText: '#F2F2F2',
        },
        secondary: {
            main: '#0ea4a4',
            dark: '#097272',
            light: '#3EB6B6',
            contrastText: '#F2F2F2',
        },
        error: {
            main: '#D32F2F'
        },
        text: {
            primary: '#172E48',
            secondary: '#777777', //Dark-blue
        },
        action: {
            disabledBackground: 'var(--grey-20)',
            disabled: 'var(--grey-60)',
        },
        common: {
            black: '#000',
            white: '#fff',
        },
        background: {
            paper: '#fff',
            default: '#E5E5E5',
        },

    },
    typography: {
        fontFamily: '\'Oxygen\',\'Roboto\', \'normal\'',
        h1: {

            fontFamily: '\'Copperplate\',\'Roboto\', \'normal\'',
            fontSize: '120px',
        },
        h2: {
            fontFamily: '\'Copperplate\',\'Roboto\', \'normal\'',
            fontSize: '26px',
            letterSpacing: 3,
        },
        h3: {
            fontSize: '24px',
        },
        h4: {
            fontSize: '22px',
        },
        h5: {
            fontSize: '20px',
        },
        h6: {
            fontSize: '18px',
        },
        body1: {
            fontSize: '1rem',
        },
    },
});
