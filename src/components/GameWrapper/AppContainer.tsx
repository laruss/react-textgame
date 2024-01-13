import Box from '@mui/material/Box';
import useIsLoading from 'hooks/useIsLoading.ts';
import { ReactNode } from 'react';

type AppContainerProps = {
    children: ReactNode;
    className?: string | undefined;
};

const AppContainer = ({ children, className }: AppContainerProps) => {
    useIsLoading();

    return (
        <Box
            className={className}
            sx={{
                display: 'flex',
                overflow: 'hidden',
            }}
        >
            {children}
        </Box>
    );
};

export default AppContainer;
