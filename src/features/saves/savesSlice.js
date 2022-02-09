import { createSlice } from "@reduxjs/toolkit";

const item = {name: "", datetime: "", data: {}};
const initialState = {
    items: [item, item, item, item, item]
};

const saveSlice = createSlice({
    name: 'saves',
    initialState,
    reducers: {
        saveItem(state, action) {
            const { index, item } = action.payload;
            state.items[index] = item;
        },
        deleteItem(state, action) {
            const index = action.payload;
            state.items[index] = {name: "", datetime: "", data: {}};
        }
    }
});

export const { saveItem, deleteItem } = saveSlice.actions;

export default saveSlice.reducer;