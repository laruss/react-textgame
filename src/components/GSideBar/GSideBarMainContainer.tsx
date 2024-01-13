import Grid2 from '@mui/material/Unstable_Grid2';
import { ReactElement } from 'react';
import { GSideBarMainProps } from './GSideBarMain';
import { GSideBarBottomProps } from './GSideBarBottom';

type GSideBarMainContainerProps = {
    open: boolean;
    children: [
        ReactElement<GSideBarMainProps>,
        ReactElement<GSideBarBottomProps>
    ]
};

const GSideBarMainContainer = ({ open, children }: GSideBarMainContainerProps) => {
    return (
        <Grid2
            container
            flexDirection={'column-reverse'}
            flexWrap={'nowrap'}
            minHeight={open ? 'calc(100vh - var(--header-height))' : 'auto'}
        >
            {children}
        </Grid2>
    );
};

export default GSideBarMainContainer;
