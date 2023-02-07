import React, {useEffect, useState} from 'react';
import {useWindowSize} from "react-use";

import {useDispatch, useSelector} from "react-redux";
import {setModalContent, setSideMenuIsOpened} from "../../../engine/redux/slices/systemSlice";
import {resetAll} from "../../../engine/redux/slices/gameSlice";

import SaveIcon from '@mui/icons-material/Save';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SettingsIcon from '@mui/icons-material/Settings';

import {
    CommonItems,
    Content,
    IconItems,
    SideMenuWrapper,
    HeaderIcon,
    SideMenuBody,
    SideMenuControls,
    SideMenuHeader
} from "./components";
import MenuIconItem from "./MenuIconItem";
import media from "../../helpers/media";
import Dialog from "../../../engine/helpers/Dialog";
import settings from "../../../engine/settings";
import userSettings from '../../../Story/settings';
import {RootState} from "../../../engine/redux/store";
import ControlItems from "./ControlItems";
import GIcon from "../GIcon";
import GHelpers from "../../../engine/helpers/GHelpers";
import StoryBanner from "../../../Story/sidebar/StoryBanner";
import StorySubtitle from "../../../Story/sidebar/StorySubtitle";
import StoryAuthor from "../../../Story/sidebar/StoryAuthor";
import StoryCaption from "../../../Story/sidebar/StoryCaption";

const SideMenu = () => {
    const {height, width} = useWindowSize();
    const system = useSelector((state: RootState) => state.system);
    const dispatch = useDispatch();

    const isOpened = system.sideMenuIsOpened;
    const [isMobileBySize, setIsMobileBySize] = useState<boolean|null>(null);

    const toggleSidebar = () => dispatch(setSideMenuIsOpened(!isOpened));

    useEffect(() => {
        if (!userSettings.sidebar.alwaysHide) {
            if (isOpened === null && isMobileBySize !== null) dispatch(setSideMenuIsOpened(!isMobileBySize));
        } else {
            isOpened && setSideMenuIsOpened(false);
        }
    }, [isMobileBySize]);

    useEffect(() => {
        setIsMobileBySize(media.isMobile(width));
    }, [width]);

    const buttons = [
        {
            name: settings.sideMenu.buttons.saveGames,
            icon: SaveIcon,
            onClick: () => GHelpers.openSavegames(),
        },
        {
            name: settings.sideMenu.buttons.restart,
            icon: RestartAltIcon,
            onClick: async () => {
                const dialog = Dialog({
                    name: settings.restartGameDialog.name,
                    body: settings.restartGameDialog.body,
                    buttons: null
                });
                const result = await dialog.open();
                if (result === dialog.buttons.yes) {
                    dispatch(resetAll(null));
                    GHelpers.disableUndo();
                }
            },
        },
        {
            name: settings.sideMenu.buttons.settings,
            icon: SettingsIcon,
            onClick: () => dispatch(setModalContent("settings"))
        },
    ];

    const toggleSideBarTitle = isOpened ? settings.sideMenu.buttons.closeSideMenu : settings.sideMenu.buttons.openSideMenu;

    return (
        <SideMenuWrapper id='sidebar' isOpened={isOpened as boolean}>
            <SideMenuHeader isOpened={isOpened as boolean} className='sidemenu-header'>
                <HeaderIcon alwaysHide={userSettings.sidebar.alwaysHide} className='sidemenu-header-icon'>
                    {userSettings.sidebar.alwaysHide ? null : (
                        <GIcon
                            onClick={toggleSidebar}
                            size={'var(--header-height)'}
                            title={toggleSideBarTitle}
                            IconComponent={!isOpened ? KeyboardArrowRightIcon : KeyboardArrowLeftIcon}
                        />
                    )}
                </HeaderIcon>
                <SideMenuControls isOpened={isOpened as boolean} className='sidemenu-controls'>
                    <ControlItems menuIsShown={isOpened as boolean}/>
                </SideMenuControls>
            </SideMenuHeader>
            <SideMenuBody isOpened={isOpened as boolean} className='sidemenu-body'>
                <Content height={height} menuIsShown={isOpened as boolean} className="sidemenu-content">
                    <CommonItems isOpened={isOpened as boolean}>
                        <StoryBanner/>
                        <StorySubtitle/>
                        <StoryAuthor/>
                        <StoryCaption/>
                    </CommonItems>
                    <IconItems className="sidemenu-icon-items">
                        {buttons.map((item, index) => (
                            <MenuIconItem
                                key={index}
                                title={item.name}
                                icon={item.icon}
                                menuIsShown={isOpened as boolean}
                                onClick={item.onClick}
                            />
                        ))}
                    </IconItems>
                </Content>
            </SideMenuBody>
        </SideMenuWrapper>
    );
};

export default SideMenu;