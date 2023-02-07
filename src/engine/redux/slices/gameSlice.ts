import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import settings from "../../../Story/settings";
import userVars from "../../../Story/variables";

const initialState = {
    variables: userVars,
    passages: {
        current: settings.passages.start
    }
};

const gameSlice = createSlice({
    name: 'gameSlice',
    initialState,
    reducers: {
        updateVariable: (state, action: PayloadAction<{[key: string]: any, path?: string}>) => {
            // update variables, payload: {varName: varValue, path: path to variable}
            const path = action.payload.path?.replace(/^game\./gm, "state.");
            const notPresentPath = path?.replace(".present", "")
            delete action.payload.path;
            eval(`${notPresentPath} = {...state.variables, ...action.payload};`);
        },
        updateAll: (state, action: PayloadAction<{data: object}>) => {
            // payload as game data
            return {...state, ...action.payload.data};
        },
        resetAll: (state, action: PayloadAction<null>) => {
            return {...initialState};
        },
        setCurrentPassage: (state, action: PayloadAction<string>) => {
            state.passages.current = action.payload;
        }
    }
});

export const {
    updateVariable,
    updateAll,
    resetAll,
    setCurrentPassage
} = gameSlice.actions;

export default gameSlice.reducer;