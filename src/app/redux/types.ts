import { AlertColor } from '@mui/material/Alert/Alert';
import { SnackbarOrigin } from '@mui/material/Snackbar/Snackbar';
import { Variables } from 'app/variables';
import { ReactNode } from 'react';

export type PassageRegister = { current: string };

export type GameState = {
    passages: PassageRegister;
    variables: Variables;
};

export type UpdateVariablePayload = {
    [key: string]: any;
    path?: string;
};

export type UpdateAllPayload = {
    data: object;
};

export type Slot = {
    name: string;
    data: object;
    datetime: number;
};

export type SaveState = {
    slots: Slot[];
};

export type UpdateSlotPayload = {
    index: number;
    data: object;
    datetime: number;
};

export type DeleteSlotPayload = {
    index: number;
};

export type ChangeSlotNamePayload = {
    index: number;
    name: string;
};

export interface ModalProps {
    content: ReactNode | null;
    canBeClosedOnEscape?: boolean;
    onClose?: () => void;
    showCloseButton?: boolean;
    styles?: object;
}

export interface ModalType extends ModalProps {
    size: {width?: number, height?: number};
}

export type ChoiceModalType = {
    primary: ReactNode;
    secondary?: ReactNode;
    choices: { [index: string]: () => void };
};

export type SpinnerType = {
    show: boolean;
    zIndex?: number;
};

export interface NotificationType {
    content: ReactNode;
    severity?: AlertColor;
    anchorOrigin?: SnackbarOrigin;
};

export type SystemState = {
    modal: ModalType,
    choiceModal: ChoiceModalType;
    notification: NotificationType;
    sideMenuIsOpened: null | boolean;
    isFullScreen: boolean;
    spinner: SpinnerType;
};
