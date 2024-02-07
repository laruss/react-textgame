import { combineReducers, configureStore } from '@reduxjs/toolkit';
// @ts-expect-error can't find module
import { GetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import settings from 'app/settings/settings.ts';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { thunk } from 'redux-thunk';
import undoable from 'redux-undo';
import storageSession from 'reduxjs-toolkit-persist/lib/storage/session';

import gameReducer from './slices/gameSlice';
import savesReducer from './slices/savesSlice';
import systemReducer from './slices/systemSlice';
import { transformCircular, undoTransform } from './store-utils';

const debug = settings.project?.debug as boolean;

const reducersNames = {
    system: 'system',
    game: 'game',
    saves: 'saves',
};

// here's some data that we want to be saved whenever
const rootPersistConfig = {
    key: 'root',
    storage,
    // here is data we want to clear
    blacklist: [reducersNames.system, reducersNames.game],
    transforms: [undoTransform, ...(debug ? [] : [transformCircular])],
    debug: false,
};

// here's some data that we want to be cleared after page is closed (current session)
const systemPersistConfig = {
    key: reducersNames.system,
    storage: storageSession,
    transforms: debug ? [] : [transformCircular],
};

const gamePersistConfig = {
    key: reducersNames.game,
    storage: storageSession,
    transforms: debug ? [] : [transformCircular],
};

const undoConfig = {
    ignoreInitialState: true,
    debug: false,
    limit: 10,
};

const gamePersistReducer = persistReducer(
    gamePersistConfig,
    undoable(gameReducer, {
        ...undoConfig,
    }),
);

const rootReducer = combineReducers({
    system: persistReducer(systemPersistConfig, systemReducer),
    game: gamePersistReducer,
    saves: savesReducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const middleware = (getDefaultMiddleware: GetDefaultMiddleware) =>
    getDefaultMiddleware({
        ignoredActions: ['systemSlice/openModal', 'systemSlice/closeModal'],
        ignoredPaths: ['systemSlice.modal'],
        immutableCheck: false,
        serializableCheck: false,
    }).concat(thunk);

const debugStore = configureStore({
    reducer: combineReducers({
        system: systemReducer,
        game: undoable(gameReducer, { ...undoConfig }),
        saves: savesReducer,
    }),
    middleware,
});

const productionStore = configureStore({
    reducer: persistedReducer,
    devTools: false,
    middleware,
});

const store = debug ? debugStore : productionStore;

export default store;

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
