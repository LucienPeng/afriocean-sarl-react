import { createTheme } from '@mui/material';

export const defaultTheme = createTheme({
    palette: {
        primary: {
            main: '#224267',
            dark: '#172E48',
            light: '#4E6785',
            contrastText: '#F2F2F2',
        },
        secondary: {
            main: '#3EB6B6',
            dark: '#097272',
            light: '#3EB6B6',
            contrastText: '#F2F2F2',
        },
        error: {
            main: '#D32F2F'
        },
        text: {
            primary: '#172E48',
            secondary: '#777777',
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
        fontFamily: '\'Oxygen\', \'Roboto\', , \'normal\'',
        button: {
            fontFamily: '\'Copperplate\',\'Vollkorn SC\', \'normal\'',
        },
        h1: {
            fontFamily: '\'Copperplate\',\'Vollkorn SC\', \'normal\'',
            fontSize: '120px',
        },
        h2: {
            fontFamily: '\'Copperplate\',\'Vollkorn SC\', \'normal\'',
            fontSize: '26px',
            letterSpacing: 3,
        },
        h3: {
            fontFamily: '\'Copperplate\',\'Vollkorn SC\', \'normal\'',
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

export const taiwanessTheme = createTheme({
    palette: {
        primary: {
            main: '#224267',
            dark: '#172E48',
            light: '#4E6785',
            contrastText: '#F2F2F2',
        },
        secondary: {
            main: '#3EB6B6',
            dark: '#097272',
            light: '#3EB6B6',
            contrastText: '#F2F2F2',
        },
        error: {
            main: '#D32F2F'
        },
        text: {
            primary: '#172E48',
            secondary: '#777777',
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
        fontFamily: '\'YuPearl\',\'Vollkorn SC\', \'normal\'',
        h1: {
            fontSize: '120px',
            lineHeight: '100px',
            letterSpacing: 10,
        },
        h2: {
            fontSize: '26px',
            letterSpacing: 5,
        },
        h3: {
            fontSize: '24px',
            letterSpacing: 3,
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
