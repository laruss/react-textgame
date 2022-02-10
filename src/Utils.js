import {store} from "./app/store";
import {setCurrentPassage} from "./projectSlice";

export let passages = {};

export const registerPassages = (newPassages = {}, moduleName = "") => {
    const _newPassages = {};
    for (const [pasName, pas] of Object.entries(newPassages)) {
        _newPassages[moduleName+'.'+pasName] = pas;
    }
    passages = {...passages, ..._newPassages};
};

export const jumpTo = (passageName = "") => {
    store.dispatch(setCurrentPassage(passageName));
};