import { systemImports } from 'app/imports/utils.ts';
import merge from 'ts-deepmerge';

import Settings from './types';

interface IGameSettings {
    get(): Settings;

    set(props: Partial<Settings>): void;
}

class GameSettings implements IGameSettings {
    private static instance: GameSettings;
    private settings: Settings;

    private constructor(defaultSettings: Settings) {
        this.settings = defaultSettings;
    }

    public static init(defaultSettings: Settings): GameSettings {
        if (!GameSettings.instance) {
            GameSettings.instance = new GameSettings(defaultSettings);
        }

        return GameSettings.instance;
    }

    public static getInstance(): GameSettings {
        if (!GameSettings.instance) {
            throw new Error('GameSettings not initialized');
        }
        systemImports.isDebug = GameSettings.instance.settings.project?.debug as boolean;

        return GameSettings.instance;
    }

    get() {
        return this.settings;
    }

    set(props: Partial<Settings>): void {
        if (systemImports.variablesInitialized) {
            throw new Error('GameSettings already initialized. ' +
                'Please consider settings GameSettings before initializing GameVariables');
        }

        this.settings = merge(this.settings, props) as Settings;
        systemImports.settingsInitialized = true;
        systemImports.isDebug = this.settings.project?.debug as boolean;
    }
}

export default GameSettings;
