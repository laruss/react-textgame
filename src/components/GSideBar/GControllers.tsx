import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import MuiList from '@mui/material/List';
import { styled } from '@mui/material/styles';
import { useMemo } from 'react';

import { SideButtonChildren } from './types';

type GControllersProps = {
    open: boolean;
    children: SideButtonChildren;
};

interface DrawerHeaderProps {
    open: boolean;
}

const List = styled(MuiList, { shouldForwardProp: (prop) => prop !== 'open' })<DrawerHeaderProps>(
    ({ theme, open }) => ({
        transition: theme.transitions.create('height', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        visibility: open ? 'hidden' : 'visible',
        height: open ? 0 : 'auto',
    }),
);

const HorizontalList = styled(MuiList, { shouldForwardProp: (prop) => prop !== 'open' })<DrawerHeaderProps>(
    ({ theme, open }) => ({
        height: 'var(--header-height)',
        width: 'initial',
        marginLeft: '-1em',
        display: 'flex',
        padding: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        transition: theme.transitions.create('visibility', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        visibility: open ? 'visible' : 'hidden',
        opacity: open ? 1 : 0,
    }),
);

const GControllers = ({ open, children }: GControllersProps) => {
    children = useMemo(() => {
        let newChildren = children;
        if (!Array.isArray(newChildren)) {
            newChildren = [newChildren];
        }
        return newChildren;
    }, [children]);

    return (
        <Box className="GControllers" sx={{
            height: open ? 'var(--header-height)' : 'initial',
        }}>
            <HorizontalList className={'HorizontalList'} open={open}>
                {
                    children
                }
            </HorizontalList>
            <List open={open}>
                {
                    children
                }
            </List>
            <Divider />
        </Box>
    );
};

export default GControllers;
