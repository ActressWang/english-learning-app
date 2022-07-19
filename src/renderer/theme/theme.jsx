import { createTheme } from '@mui/material/styles';

// eslint-disable-next-line import/prefer-default-export
export const mainTheme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#0a7c6b',
        },
        secondary: {
            main: '#c2185b',
        },
        error: {
            main: '#f44336',
        },
        warning: {
            main: '#ff9800',
        },
        info: {
            main: '#108ef3',
        },
        success: {
            main: '#4caf50',
        },
        color: '#ffffff',
        text: {
            primary: '#ffffff',
            secondary: 'rgba(255,255,255,0.7)',
            disabled: 'rgba(255,255,255,0.6)',
            hint: 'rgba(255,255,255,0.6)',
        },
        background: {
            default: '#303030',
            paper: '#424242',
        },
    },
    typography: {
        h4: {
            fontSize: '2rem',
        },
        h5: {
            fontSize: '1.6rem',
        },
        subtitle1: {
            fontSize: '1.4rem',
        },
        subtitle2: {
            fontSize: '1rem',
        },
        body1: {
            fontSize: '1rem',
        },
        body2: {
            fontSize: '0.9rem',
            letterSpacing: '0.05em',
            lineHeight: 1.03,
            fontWeight: 400,
        },
        button: {
            fontSize: '1rem',
        },
        caption: {
            fontSize: '1rem',
        },
        overline: {
            fontSize: '0.9rem',
            lineHeight: 1.77,
            letterSpacing: '0.1em',
        },
        fontSize: 16,
        fontWeightLight: 200,
        fontWeightRegular: 300,
        fontWeightMedium: 400,
        fontWeightBold: 600,
    },
});
