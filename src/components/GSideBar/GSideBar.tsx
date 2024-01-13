import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { useTheme } from '@mui/material/styles';
import { useAppSelector } from 'app/redux/hooks';
import { selectSideMenuIsOpened } from 'app/redux/slices/systemSlice';
import settings from 'app/settings/settings.ts';
import { ReactNode } from 'react';

import {
    FullscreenButton,
    RestartButton,
    SaveButton,
    SettingsButton,
    UndoRedoButton,
} from './buttons.tsx';
import { Drawer } from './Drawer.tsx';
import GControllers from './GControllers';
import GSideBarBottom from './GSideBarBottom';
import GSideBarHeader from './GSideBarHeader.tsx';
import GSideBarMain from './GSideBarMain';
import GSideBarMainContainer from './GSideBarMainContainer';
import StoryAuthor from './sections/StoryAuthor';
import StoryBanner from './sections/StoryBanner';
import StoryCaption from './sections/StoryCaption';
import StorySubtitle from './sections/StorySubtitle';
import useInitState from './useInitState.ts';

interface GSideBarProps {
    children?: ReactNode;
    side?: 'left';
}

const GSideBar = ({ children }: GSideBarProps) => {
    let open = useAppSelector(selectSideMenuIsOpened) as boolean;
    const { alwaysHide } = settings.sidebar || {};
    open = alwaysHide ? false : open;
    const theme = useTheme();
    useInitState({ open, settings });

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer
                variant="permanent"
                open={open}
            >
                <GSideBarHeader alwaysHide={alwaysHide as boolean} open={open} theme={theme} />
                <GControllers open={open}>
                    <UndoRedoButton settings={settings} variant="undo" />
                    <UndoRedoButton settings={settings} variant="redo" />
                    <FullscreenButton settings={settings} />
                </GControllers>
                <GSideBarMainContainer open={open}>
                    <GSideBarBottom>
                        <SaveButton open={open} />
                        <RestartButton open={open} />
                        <SettingsButton open={open} />
                    </GSideBarBottom>
                    <GSideBarMain open={open}>
                        {
                            children ? children : (
                                <>
                                    <StoryBanner settings={settings} />
                                    <StorySubtitle settings={settings} />
                                    <StoryAuthor settings={settings} />
                                    <StoryCaption />
                                </>
                            )
                        }
                    </GSideBarMain>
                </GSideBarMainContainer>
            </Drawer>
        </Box>
    );
};

export default GSideBar;
