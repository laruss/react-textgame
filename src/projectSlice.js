import {createSlice} from "@reduxjs/toolkit";
import settings from "./Story/settings";

const initialState = {
    passages: {
        current: "",
        start: settings.passages.start
    },
    variables: {},
    dialog: {
        content: null
    }
};

const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        setCurrentPassage(state, action) {
            state.passages.current = action.payload;
        },
        setVariables(state, action) {
            state.variables = action.payload.getJSON();
        },
        setDialogContent(state, action) {
            state.dialog.content = action.payload;
        },
        loadState(state, action) {
            const { variables, passages } = action.payload;
            const dialog = { content: null }

            return { passages, variables, dialog };
        }
    }
});

export const {
    setCurrentPassage,
    setVariables,
    setDialogContent,
    loadState
} = projectSlice.actions;

export default projectSlice.reducer;