import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ChangeSlotNamePayload, DeleteSlotPayload, SaveState, UpdateSlotPayload } from '../types';

const emptySlot = {
    name: 'saveslot',
    data: {},
    datetime: 0,
};

const initialState: SaveState = {
    slots: Array.from({ length: 7 }, () => emptySlot),
};

const savesSlice = createSlice({
    name: 'savesSlice',
    initialState,
    reducers: {
        updateSlot: (state, action: PayloadAction<UpdateSlotPayload>) => {
            const { index, data, datetime } = action.payload;
            state.slots[index].data = data;
            state.slots[index].datetime = datetime;
        },
        deleteSlot: (state, action: PayloadAction<DeleteSlotPayload>) => {
            state.slots[action.payload.index] = emptySlot;
        },
        changeSlotName: (state, action: PayloadAction<ChangeSlotNamePayload>) => {
            state.slots[action.payload.index].name = action.payload.name;
        },
        isSuccess: (state) => {
            return state;
        },
    },
});

export const { updateSlot, deleteSlot, changeSlotName, isSuccess } = savesSlice.actions;

export const selectSlots = (state: { saves: SaveState }) => state.saves.slots;

export default savesSlice.reducer;
