import { createTheme } from '@mui/material';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#fafafa',
        },
        secondary: {
            main: '#1a1a1a',
        },
        background: {
            paper: '#1a1a1a',
            default: '#fafafa',
        },
        action: {
            hover: '#2a2a2a',
        },
        text: {
            primary: '#1a1a1a',
            secondary: '#fafafa',
        },
    },
    typography: {
        fontSize: 15,
    },
    components: {
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    '&:hover': {
                        backgroundColor: 'palette.action.hover',
                    },
                },
            },
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    fontSize: 'typography.fontSize',
                },
            },
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#dc004e',
        },
    },
});
