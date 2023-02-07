import {combineReducers, configureStore} from "@reduxjs/toolkit";
import storageSession from 'reduxjs-toolkit-persist/lib/storage/session';
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import systemReducer from "./slices/systemSlice";
import gameReducer from "./slices/gameSlice";
import savesReducer from "./slices/savesSlice";

import settings from "../../Story/settings";

import { UndoTransform } from "./store-utils";
import undoable from "redux-undo";
import {PersistConfig} from "redux-persist/es/types";
import {CurriedGetDefaultMiddleware} from "@reduxjs/toolkit/dist/getDefaultMiddleware";

const reducersNames = {
    system: 'system',
    game: 'game',
    saves: 'saves'
};

// here's some data that we want to be saved whenever
const rootPersistConfig: PersistConfig<any> = {
    key: 'root',
    storage,
    version: 1,
    // here is data we want to clear
    blacklist: [reducersNames.system, reducersNames.game],
    transforms: [UndoTransform],
    debug: false
};

// here's some data that we want to be cleared after page is closed (current session)
const systemPersistConfig = {
    key: reducersNames.system,
    storage: storageSession
};

const gamePersistConfig = {
    key: reducersNames.game,
    storage: storageSession
};

const undoConfig = {
    ignoreInitialState: true,
    debug: false,
    limit: 10,
};

const gamePersistReducer = persistReducer(gamePersistConfig, undoable(gameReducer, {
    ...undoConfig
}));

const rootReducer = combineReducers({
    system: persistReducer(systemPersistConfig, systemReducer),
    game: gamePersistReducer,
    saves: savesReducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const middleware = (getDefaultMiddleware: CurriedGetDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
}).concat(thunk)

const debugStore = configureStore({
    reducer: combineReducers({
        system: systemReducer,
        game: undoable(gameReducer, {...undoConfig}),
        saves: savesReducer
    }),
    middleware
});

export const store = settings.project.debug ? debugStore : configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware
});

// @ts-ignore
export const persistor = persistStore(store,  { manualPersist: false });
export type RootState = ReturnType<typeof rootReducer>;
