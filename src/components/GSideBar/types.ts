import { SvgIconProps } from '@mui/material';
import { Settings } from 'app/settings';
import * as React from 'react';
import { ReactElement } from 'react';

export type GSideButtonProps = {
    open?: boolean;
    text: string;
    Icon: React.ComponentType<SvgIconProps>;
    onClick: () => void;
    disabled?: boolean;
};

export interface GSideBarButtonProps {
    settings?: Settings,
    open?: boolean;
}

export type SideButtonChildren = (ReactElement<GSideButtonProps>)[] | ReactElement<GSideButtonProps>;
