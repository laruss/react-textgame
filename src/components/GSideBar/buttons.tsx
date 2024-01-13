import FullscreenIcon from '@mui/icons-material/Fullscreen';
import RedoIcon from '@mui/icons-material/Redo';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SaveIcon from '@mui/icons-material/Save';
import SettingsIcon from '@mui/icons-material/Settings';
import UndoIcon from '@mui/icons-material/Undo';
import useSaveLoadModal from 'components/SaveLoadModal';
import useSettingsModal from 'components/SettingsContent';
import useFullScreenAction from 'hooks/useFullScreenAction.ts';
import useRedoAction from 'hooks/useRedoAction.ts';
import useRestartGame from 'hooks/useRestartGame.ts';
import useUndoAction from 'hooks/useUndoAction.ts';
import { useMemo } from 'react';
import { isMobile } from 'react-device-detect';

import GSideButton from './GSideButton.tsx';
import { GSideBarButtonProps } from './types.ts';

interface UndoRedoButtonProps extends GSideBarButtonProps {
    variant: 'undo' | 'redo';
}

export function UndoRedoButton({ settings, variant }: UndoRedoButtonProps) {
    const { canUndo, undoAction } = useUndoAction();
    const { canRedo, redoAction } = useRedoAction();

    const button = useMemo(() => (
        variant === 'undo' ? {
            text: 'Undo',
            Icon: UndoIcon,
            disabled: !canUndo,
            onClick: undoAction,
        } : {
            text: 'Redo',
            Icon: RedoIcon,
            disabled: !canRedo,
            onClick: redoAction,
        }
    ), [canRedo, canUndo, redoAction, undoAction, variant]);

    if (settings?.sidebar?.hideUndoRedo) return null;

    return (
        <GSideButton {...button} />
    );
}

export function FullscreenButton({ settings }: GSideBarButtonProps) {
    const { fullScreenAction } = useFullScreenAction();

    if (settings?.sidebar?.hideFullscreen || isMobile) return null;

    return (
        <GSideButton
            text="Fullscreen"
            Icon={FullscreenIcon}
            onClick={fullScreenAction}
        />
    );
}

export function SaveButton({ open }: GSideBarButtonProps) {
    const { handleSaveLoadOpen } = useSaveLoadModal();

    return (
        <GSideButton
            text="Save"
            Icon={SaveIcon}
            onClick={handleSaveLoadOpen}
            open={open}
        />
    );
}

export function RestartButton({ open }: GSideBarButtonProps) {
    const { handleRestartGame } = useRestartGame();

    return (
        <GSideButton
            text="Restart"
            Icon={RestartAltIcon}
            onClick={handleRestartGame}
            open={open}
        />
    );
}

export function SettingsButton({ open }: GSideBarButtonProps) {
    const { handleSettingsOpen } = useSettingsModal();

    return (
        <GSideButton
            text="Settings"
            Icon={SettingsIcon}
            onClick={handleSettingsOpen}
            open={open}
        />
    );
}
