import {store} from "./app/store";
import isEqual from "lodash.isequal";
import {setCurrentPassage} from "./projectSlice";

export let passages = {};

class Variables {
    constructor(storeVariables) {
        this.oldVariables = storeVariables;
        this.variables = {};
        this.variableNames = [];
        for (const [key, val] of Object.entries(storeVariables)) {
            this[key] = val;
            this.variableNames.push(key);
        }
    };

    areChanged() {
        this.variables = {};
        for (const varName of this.variableNames) {
            this.variables[varName] = this[varName];
        }
        return !isEqual(this.variables, this.oldVariables);
    };

    compile() {
        this.oldVariables = this.variables;
    };
}

export const variables = new Variables(store.getState().project.variables);

export const registerPassages = (newPassages = {}) => {
    passages = {...passages, ...newPassages};
};

export const jumpTo = (passageName = "") => {
    store.dispatch(setCurrentPassage(passageName));
};