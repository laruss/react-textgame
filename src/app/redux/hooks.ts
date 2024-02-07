import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

import type { AppDispatch, RootState } from './store';

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const selectPassages = (state: RootState) => state.game?.present.passages;

export const selectVariables = (state: RootState) => state.game?.present.variables;

export const selectGame = (state: RootState) => state.game;
