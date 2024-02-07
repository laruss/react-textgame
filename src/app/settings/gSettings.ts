import merge from 'ts-deepmerge';

import Settings from './types.ts';

const initSettings: Settings = {
    project: {
        name: 'ReactTextGame',
        version: '0.2.0 beta',
        author: 'laruss',
        debug: false,
    },
    sidebar: {
        alwaysHide: false,
        hideUndoRedo: false,
        hideFullscreen: false,
    },
    passages: {
        start: '',
        backgroundColor: `rgba(255, 255, 255, 0.5)`,
    },
    defaults: {
        font: 'Urbanist',
        fontSize: '20px',
        transitionTimeout: 300
    }
};

const gSettings = {
    ...initSettings,
    initialized: false,
    initialize(settings: Settings) {
        Object.assign(this, merge(this, settings));
        this.initialized = true;
    }
};

export default gSettings;
