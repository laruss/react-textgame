import { ReactNode } from 'react';

export type PassageWidth = 'max' | 'default';

export interface PassageProps {
    children: ReactNode[] | ReactNode;
    width?: PassageWidth,
    backgroundImage?: string
}
