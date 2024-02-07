import { styled } from '@mui/material/styles';
import MuiGrid2 from '@mui/material/Unstable_Grid2';
import { ReactNode } from 'react';

type Grid2Props = {
    open: boolean;
};

export type GSideBarMainProps = {
    children: ReactNode;
    open: boolean;
};

const Grid2 = styled(MuiGrid2, { shouldForwardProp: (prop) => prop !== 'open' })<Grid2Props>(
    ({ open }) => ({
        overflow: 'auto',
        textAlign: 'center',
        flexShrink: 1,
        flexGrow: 1,
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
        whiteSpace: 'normal',
        '> *': {
            opacity: open ? 1 : 0,
            display: open ? 'block' : 'none',
        },
        '& .GSideButton': {
            opacity: 1,
            display: 'block',
        },
    }),
);

const GSideBarMain = ({ children, open }: GSideBarMainProps) => {
    return (
        <Grid2 flexGrow={1} flexShrink={1} open={open} sx={{ padding: '1em' }}>
            {children}
        </Grid2>
    );
};

export default GSideBarMain;
