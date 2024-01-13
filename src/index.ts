import GUtils from 'app/GUtils';
import images from 'app/images';
import GImports from 'app/imports';
import { registerPassage } from 'app/passages';
import GameSettings, { Settings } from 'app/settings';
import variables from 'app/variables';
import GameVariables, { initGameVariables, Variables } from 'app/variables';
import GameWrapper from 'components/GameWrapper';
import GModal, { useModal, useModalSize } from 'components/GModal';
import { useNotification } from 'components/GNotification';
import GPage from 'components/GPage';
import GPassage, { PassageProps, PassageWidth } from 'components/GPassage';
import GSideBar, { GSideBarBottom, GSideBarHeader, GSideButton } from 'components/GSideBar';
import useGameChangesChecker from 'hooks/useGameChangesChecker';

export {
    GameSettings,
    GameVariables,
    GameWrapper,
    GImports,
    GModal,
    GPage,
    GPassage,
    GSideBar,
    GSideBarBottom,
    GSideBarHeader,
    GSideButton,
    GUtils,
    images,
    initGameVariables,
    registerPassage,
    useGameChangesChecker,
    useModal,
    useModalSize,
    useNotification,
    variables,
};

export type { PassageProps, PassageWidth, Settings, Variables };