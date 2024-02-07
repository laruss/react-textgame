import { Theme, ThemeProvider } from '@mui/material';
import { useDarkMode } from 'hooks/useDarkMode.ts';
import { ReactNode } from 'react';
import GlobalStyles from 'styles/GlobalStyles.tsx';
import { darkTheme, lightTheme } from 'styles/Theme.ts';

interface StyleWrapperProps {
    children: ReactNode;
    theme?: Theme;
}

const StyleWrapper = ({ children, theme}: StyleWrapperProps) => {
    const [themeSwitch, mountedComponent] = useDarkMode();
    const themeMode = theme || (themeSwitch === 'light' ? lightTheme : darkTheme);

    if (!mountedComponent) return <div/>;

    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyles />
            {children}
        </ThemeProvider>
    );
};

export default StyleWrapper;
