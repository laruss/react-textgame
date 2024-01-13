import MuiDrawer from '@mui/material/Drawer';
import { CSSObject, styled, Theme } from '@mui/material/styles';

const drawerWidth = 300;

const openedMixin = (theme: Theme): CSSObject => ({
    color: theme.palette.text.secondary,
    [theme.breakpoints.up('sm')]: { width: drawerWidth },
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden'
});

const closedMixin = (theme: Theme): CSSObject => ({
    color: theme.palette.text.secondary,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    }
});

export const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        '& .MuiDrawer-paper': {
            position: 'relative',
        },
        ...(open && {
            ...openedMixin(theme),
            width: `calc(${theme.spacing(7)} + 1px)`,
            '& .MuiDrawer-paper': {
                ...openedMixin(theme),
                [theme.breakpoints.down('sm')]: {
                    boxSizing: "border-box",
                    width: drawerWidth,
                }
            }
        }),
        ...(!open && {
            ...closedMixin(theme),
            [theme.breakpoints.up('sm')]: {'& .MuiDrawer-paper': closedMixin(theme)},
            [theme.breakpoints.down('sm')]: {
                '& .MuiDrawer-paper': {
                    ...closedMixin(theme),
                    width: `calc(${theme.spacing(7)} + 1px)`,
                }
            }
        })
    })
);
