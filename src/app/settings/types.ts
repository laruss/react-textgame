/**
 * Project settings
 *
 * @interface Project
 * @property {string} name - project name
 * @property {string} version - project version
 * @property {string} author - project author
 *  if false, saves game state to session, else doesn't save state
 *  ! DO NOT FORGET TO SWITCH THIS OFF WHEN GAME IS READY FOR PRODUCTION !
 * @property {boolean} debug - debug mode
 * @property {boolean} showDebugComponent - show debug component
 *
 */
export interface Project {
    name?: string;
    version?: string;
    author?: string;
    debug?: boolean;
    showDebugComponent?: boolean;
}

/**
 * Passages settings
 *
 * @interface Passages
 * @property {string} start - start passage
 * @property {string} backgroundColor - background color
 *
 */
export interface Passages {
    start?: string;
    backgroundColor?: string;
}

/**
 * Sidebar settings
 *
 * @interface Sidebar
 * @property {boolean} alwaysHide - always hide sidebar
 * @property {boolean} hideUndoRedo - hide undo/redo buttons
 * @property {boolean} hideFullscreen - hide fullscreen button
 *
 */
export interface Sidebar {
    alwaysHide?: boolean;
    hideUndoRedo?: boolean;
    hideFullscreen?: boolean;
}

/**
 * Defaults settings
 *
 * @interface Defaults
 * @property {string} font - default font
 * @property {string} fontSize - default font size
 * @property {number} transitionTimeout - default transition timeout
 *
 */
export interface Defaults {
    font?: string;
    fontSize?: string;
    transitionTimeout?: number;
}

/**
 * Settings
 *
 * @interface Settings
 * @property {Project} project - project settings
 * @property {Sidebar} sidebar - sidebar settings
 * @property {Passages} passages - passages settings
 * @property {Defaults} defaults - default settings
 *
 */
interface Settings {
    project?: Project;
    sidebar?: Sidebar;
    passages?: Passages;
    defaults?: Defaults;
}

export default Settings;
