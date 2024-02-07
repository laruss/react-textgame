import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ChoiceModalType, ModalProps, SystemState } from '../types';

const initialState: SystemState = {
    modal: {
        content: null,
        canBeClosedOnEscape: true,
        onClose: () => null,
        showCloseButton: true,
        size: {}
    },
    choiceModal: {
        primary: null,
        secondary: null,
        choices: {},
    },
    sideMenuIsOpened: null,
    isFullScreen: false,
    spinner: {
        show: false,
        zIndex: 1000,
    },
};

const systemSlice = createSlice({
    name: 'systemSlice',
    initialState,
    reducers: {
        openModal: (state, action: PayloadAction<ModalProps>) => {
            state.modal = { ...state.modal, ...action.payload };
        },
        setModalCanBeClosedOnEscape: (state, action: PayloadAction<boolean>) => {
            state.modal.canBeClosedOnEscape = action.payload;
        },
        setModalSize: (state, action: PayloadAction<{ width?: number; height?: number }>) => {
            state.modal.size = { ...state.modal.size, ...action.payload };
        },
        closeModal: (state) => {
            state.modal = { ...initialState.modal };
        },
        openChoiceModal: (state, action: PayloadAction<ChoiceModalType>) => {
            state.choiceModal = { ...state.choiceModal, ...action.payload };
        },
        closeChoiceModal: (state) => {
            state.choiceModal = { ...initialState.choiceModal };
        },
        setSideMenuIsOpened: (state, action: PayloadAction<boolean>) => {
            state.sideMenuIsOpened = action.payload;
        },
        setFullScreen: (state, action: PayloadAction<boolean>) => {
            state.isFullScreen = action.payload;
        },
        setSpinner: (state, action: PayloadAction<boolean>) => {
            state.spinner.show = action.payload;
        },
    },
});

export const {
    setSideMenuIsOpened,
    openModal,
    closeModal,
    openChoiceModal,
    closeChoiceModal,
    setModalCanBeClosedOnEscape,
    setModalSize,
    setFullScreen,
    setSpinner,
} = systemSlice.actions;

export const selectModal = (state: { system: SystemState }) => state.system.modal;

export const selectChoiceModal = (state: { system: SystemState }) => state.system.choiceModal;

export const selectSideMenuIsOpened = (state: { system: SystemState }) => state.system.sideMenuIsOpened;

export const selectIsFullScreen = (state: { system: SystemState }) => state.system.isFullScreen;

export const selectSpinner = (state: { system: SystemState }) => state.system.spinner;

export default systemSlice.reducer;
