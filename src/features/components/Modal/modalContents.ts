import SaveLoadContent from "./SaveLoadContent/SaveLoadContent";

import modalSizes from "./modalSizes";
import SettingsContent from "./SettingsContent/SettingsContent";

export interface modalContentsInt {
    [k:string]: {
        id: string,
        Content: JSX.Element,
        size: {style: string}
    }
}

const modalContents: modalContentsInt = {
    save: {
        id: "save",
        // @ts-ignore
        Content: SaveLoadContent,
        size: modalSizes.system
    },
    settings: {
        id: "settings",
        // @ts-ignore
        Content: SettingsContent,
        size: modalSizes.dialog
    }

};

export default modalContents;