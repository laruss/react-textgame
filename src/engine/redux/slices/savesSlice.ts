import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import settings from "../../settings";

type slotsType = {name: string, data: {}, datetime: number}[];
interface initialStateType {
    slots: slotsType
}
const emptySlot = {name: settings.saveLoadContent.slots.defaultName, data: {}, datetime: 0};

const initialState: initialStateType = {
    slots: Array.apply(null, Array(settings.saveLoadContent.slots.quantity)).map(()=>emptySlot)
};

const savesSlice = createSlice({
    name: 'savesSlice',
    initialState,
    reducers: {
        updateSlot: (state, action: PayloadAction<{index: number, data: object, datetime: number}>) => {
            const {index, data, datetime} = action.payload;
            state.slots[index].data = data;
            state.slots[index].datetime = datetime;
        },
        deleteSlot: (state, action: PayloadAction<{index: number}>) => {
            state.slots[action.payload.index] = emptySlot;
        },
        changeSlotName: (state, action: PayloadAction<{index: number, name: string}>) => {
            state.slots[action.payload.index].name = action.payload.name;
        },
        isSuccess: (state, action: PayloadAction<undefined>) => {
            return state;
        },
    }
});

export const {
    updateSlot,
    deleteSlot,
    changeSlotName,
    isSuccess
} = savesSlice.actions;

export default savesSlice.reducer;