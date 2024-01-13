import {GlobalStyles as MuiGlobalStyles} from "@mui/material";
import GameSettings from 'app/settings';

import Fonts from "./Headers";

const settings = GameSettings.getInstance().get();

const GlobalStyles = () => {
    return (
        <>
            <MuiGlobalStyles
                styles={(theme) => ({
                    ":root": {
                        "--landscape-width": 20,
                        "--portrait-width": "80vw",
                        "--header-height": "50px",
                        "--secs": "0.4s",
                        "--modal-close-icon-width": "50px",
                        "--toastify-color-progress-dark": "#ffffff",
                        "--toastify-color-progress-light": "#000000",
                        "--toastify-color-light": "rgba(209, 209, 209, 0.9)",
                        "--toastify-color-dark": "rgba(18, 18, 18, 0.9)",
                        '*::-webkit-scrollbar': {
                            backgroundColor: '#353535',
                            height: '10px',
                            width: '10px',
                        },
                        '*::-webkit-scrollbar-track': {
                            boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
                        },
                        '*::-webkit-scrollbar-thumb': {
                            boxSizing: 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
                            backgroundColor: '#595858',
                            borderRadius: '10px',
                        },
                    },
                    body: {
                        background: theme.palette.background.default,
                        color: theme.palette.text.primary,
                        fontFamily: `${settings.defaults?.font}, Helvetica, Arial, Roboto, sans-serif`,
                        fontSize: settings.defaults?.fontSize,
                        transition: 'all 0.50s linear',
                        minHeight: '100vh',
                        maxWidth: '100vw',
                        margin: 0,
                        overflow: "hidden"
                    },
                    ".fullscreen-enabled": {
                        background: theme.palette.background.default
                    },
                    ...Fonts,
                })}
            />
        </>
    )
};

export default GlobalStyles;
