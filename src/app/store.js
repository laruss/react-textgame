import { configureStore } from '@reduxjs/toolkit';
import projectReducer from "../projectSlice";
import savesReducer from "../features/saves/savesSlice";
import { throttle } from 'lodash';

import { saveState, loadState } from "./localStorage";
import settings from "../Story/settings";
import variables from "../Story/variables";

export const getPreloadedState = () => {
  let state = loadState();
  if (state === undefined) {
    state = {
      project: {
        passages: {
          current: settings.passages.start,
          start: settings.passages.start
        },
        variables,
        dialog: {
          content: null
        }
      }
    };
  } else {
    if (settings.project.debug) {
      state.project.variables = variables;
      state.project.passages.current = settings.passages.start;
    }
  }

  return state;
};

export const store = configureStore({
  reducer: {
    project: projectReducer,
    saves: savesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
  preloadedState: getPreloadedState()
});

// We'll subscribe to state changes, saving the store's state to the browser's
// local storage. We'll throttle this to prevent excessive work.
store.subscribe(
    throttle( () => saveState(store.getState()), 1000)
);
