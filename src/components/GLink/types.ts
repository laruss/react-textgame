import { SxProps } from '@mui/material';
import { ReactNode } from 'react';
import { LinkVariants } from 'react-textgame-components';

export interface GLinkProps {
    to: string;
    callback?: () => void;
    children: ReactNode[] | ReactNode | string;
    variant?: LinkVariants,
    sx?: SxProps
}
