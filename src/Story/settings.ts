import {settingsType} from "../engine/helpers/storySettingsTypes";
import fonts from "../fonts/fonts";

const settings: settingsType = {
    passages: {
        // as string
        start: "start.start",
        backgroundColor: `rgba(255, 255, 255, 0.5)`,
    },
    project: {
        name: "React TextGame Engine1",
        version: '0.2.0 beta',
        author: 'laruss',
        // if false, saves game state to session, else doesn't save state
        // !DO NOT FORGET TO SWITCH THIS OFF WHEN GAME IS READY TO BUILDING
        debug: true
    },
    defaults: {
        font: fonts.urbanist,
        fontSize: '20px',
        buttonVariant: 'dark',
        linkVariant: 'textLike',
        sayVariant: 'common',
    },
    sidebar: {
        alwaysHide: false
    }
}

export default settings;