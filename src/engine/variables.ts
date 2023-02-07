import {RootState, store} from './redux/store';
import {updateVariable} from "./redux/slices/gameSlice";
import {CombinedState} from "@reduxjs/toolkit";
import userVars from "../Story/variables";
import userSettings from "../Story/settings";

type selectProps = {
    state: RootState,
    path: string
}

const select = ({state, path}: selectProps): CombinedState<any> => {
    return eval(`state.${path}`);
};

const getProxy = (path: string): CombinedState<any> => (
    new Proxy({}, {
        set(target, p, value, receiver) {
            userSettings.project.debug && console.log(`${String(p)} changed to ${value}`);
            store.dispatch(updateVariable({[p]: value, path}));
            return true;
        },
        get(target, p, receiver) : CombinedState<any> {
            const variables = select({state: store.getState(), path});
            const isArray = (a: any) => ((!!a) && (a.constructor === Array));
            p = String(p);

            if (typeof (variables[p]) === "object" && variables[p] !== null && !isArray(variables[p])) {
                const new_path = `${path}.${String(p)}`
                return getProxy(new_path);
            }
            return variables[p as keyof typeof variables];
        },
    })
);

const variables: typeof userVars = getProxy("game.present.variables");

export default variables;