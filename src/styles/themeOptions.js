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
            primary: '#1c282e',
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
        h1: {
            fontFamily: '\'Copperplate\',\'normal\', \'Roboto\'',
            fontSize: '120px',
        },
        h2: {
            fontSize: '1.6rem', //26px
            //lineHeight: '140%',
            //letterSpacing: 0,
        },
        h3: {
            fontSize: '1.42rem', //24px
            //lineHeight: '140%',
            //letterSpacing: 0,
        },
        h4: {
            fontSize: '22px',
            fontWeight: '700',
            //lineHeight: '140%',
            letterSpacing: 0,
        },
        h5: {
            fontSize: '1.26rem', //20px
            fontWeight: '700',
            letterSpacing: 0,
        },
        h6: {
            fontFamily: '\'Lucida Grande\',\'normal\', \'Roboto\'',
            fontSize: '1.12rem', //18px
            fontWeight: '700',
            //lineHeight: '140%',
            letterSpacing: 10,
            textShadow: 'rgb(0, 0, 0) 1px 10px 10px'
        },
        body1: {
            fontSize: '1rem', //16px
            //lineHeight: '140%',
            letterSpacing: 0,
        },
    },
});
