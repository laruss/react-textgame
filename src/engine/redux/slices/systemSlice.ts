import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface initialStateInterface {
    modalContent: null|string;
    modalCanCloseOnEsc: boolean;
    dialog: {
        name: string;
        body: string|null;
        buttons: { [index: string]: string; };
    };
    sideMenuIsOpened: null|boolean;
    isFullScreen: boolean;
}

const initialState: initialStateInterface = {
    modalContent: null,
    modalCanCloseOnEsc: true,
    dialog: {
        name: '',
        body: '',
        buttons: { yes: "1", no: "0" }
    },
    sideMenuIsOpened: null,
    isFullScreen: false
};

const systemSlice = createSlice({
    name: 'systemSlice',
    initialState,
    reducers: {
        setModalContent: (state, action: PayloadAction<string|null>) => {
            state.modalContent = action.payload;
        },
        setSideMenuIsOpened: (state, action: PayloadAction<boolean>) => {
            state.sideMenuIsOpened = action.payload;
        },
        openDialog: (state, action: PayloadAction<{name:string, buttons:{ [index: string]: string; }, body: string|null}>) => {
            state.dialog = {name: action.payload.name, body: action.payload.body, buttons: action.payload.buttons};
        },
        closeDialog: (state, action: PayloadAction<null>) => {
            state.dialog = {...initialState.dialog};
        },
        setFullScreen: (state, action: PayloadAction<boolean>) => {
           state.isFullScreen = action.payload;
        },
        setModalCanCloseOnEscape: (state, action: PayloadAction<{canClose: boolean}>) => {
            state.modalCanCloseOnEsc = action.payload.canClose;
        },
    },
});

export const {
    setModalContent,
    setSideMenuIsOpened,
    openDialog,
    closeDialog,
    setFullScreen,
    setModalCanCloseOnEscape
} = systemSlice.actions;

export default systemSlice.reducer;