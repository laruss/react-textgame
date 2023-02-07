import React from 'react';
import App from './App';
import {persistor, store} from './engine/redux/store';
import { Provider } from 'react-redux';
import register from "./serviceWorker";
import {PersistGate} from "redux-persist/integration/react";
import userSettings from "./Story/settings";
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
    <Provider store={store}>
        {userSettings.project.debug ? <App /> : (
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        )}
    </Provider>
);

register();
