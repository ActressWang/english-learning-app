import { createTheme } from '@mui/material/styles';

// eslint-disable-next-line import/prefer-default-export
export const mainTheme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#424fb9',
        },
        secondary: {
            main: '#f50057',
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
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: 14,
        htmlFontSize: 14,
        h1: {
            fontFamily: 'Lora',
        },
        h2: {
            fontFamily: 'Lora',
        },
        h3: {
            fontFamily: 'Lora',
        },
        h4: {
            fontFamily: 'Lora',
        },
        h5: {
            fontFamily: 'Lora',
        },
        h6: {
            fontFamily: 'Lora',
        },
    },
});
