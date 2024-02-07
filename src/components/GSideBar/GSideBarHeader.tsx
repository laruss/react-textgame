import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Theme } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { useAppDispatch } from 'app/redux/hooks.ts';
import { setSideMenuIsOpened } from 'app/redux/slices/systemSlice.ts';

type DrawerHeaderProps = {
    open: boolean,
    theme: Theme,
    alwaysHide: boolean
};

const DrawerHeader = styled(
    Box, {
        shouldForwardProp: (prop) => ['open', 'alwaysHide'].indexOf(prop as string) === -1
    }
)<DrawerHeaderProps>(
    ({theme, open}) => ({
        display: 'flex',
        height: 'var(--header-height)',
        marginBottom: 'calc(var(--header-height) * -1)',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: open ? 'space-between' : 'center',
        padding: theme.spacing(0, 1)
    })
);

const GSideBarHeader = ({open, theme, alwaysHide}: DrawerHeaderProps) => {
    const dispatch = useAppDispatch();
    const handleDrawer = () => dispatch(setSideMenuIsOpened(!open));
    const Icon = open ? (theme.direction === 'rtl' ? ChevronRightIcon : ChevronLeftIcon): MenuIcon;

    return (
        <DrawerHeader
            className={'DrawerHeader'}
            theme={theme}
            open={open}
            alwaysHide={alwaysHide}
        >
            {open && <div />}
            {
                !alwaysHide && (
                    <IconButton onClick={handleDrawer} sx={{ zIndex: 2}}>
                        <Icon sx={{height: 30, width: 30, color: theme.palette.text.secondary}} />
                    </IconButton>
                )
            }
        </DrawerHeader>
    );
};

export default GSideBarHeader;
