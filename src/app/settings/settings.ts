import Settings from './types.ts';

const settings: Settings = {
    project: {
        name: 'ReactTextGame',
        version: '0.2.0 beta',
        author: 'laruss',
        debug: true,
        showDebugComponent: false,
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

export default settings;
