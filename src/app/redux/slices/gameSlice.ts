import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameState, UpdateAllPayload, UpdateVariablePayload } from 'app/redux/types';

const initialState: GameState = {
    variables: {},
    passages: {
        current: '',
    },
};

const gameSlice = createSlice({
    name: 'gameSlice',
    initialState,
    reducers: {
        // @ts-expect-error state is used in eval
        updateVariable: (state, action: PayloadAction<UpdateVariablePayload>) => {
            const path = action.payload.path?.replace(/^game\./gm, 'state.').replace('.present', '');
            delete action.payload.path;
            eval(`${path} = {...${path}, ...action.payload};`);
        },
        updateAll: (state, action: PayloadAction<UpdateAllPayload>) => {
            // payload as game data
            return { ...state, ...action.payload.data };
        },
        reset: () => {
            return { ...initialState };
        },
        setCurrentPassage: (state, action: PayloadAction<string>) => {
            state.passages.current = action.payload;
        },
    },
});

export const { updateVariable, updateAll, reset, setCurrentPassage } = gameSlice.actions;

export default gameSlice.reducer;
