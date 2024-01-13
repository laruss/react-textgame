import { updateVariable } from 'app/redux/slices/gameSlice';
import store, { RootState } from 'app/redux/store';
import settings from 'app/settings/settings.ts';

import { Variables } from './types.ts';

type SelectProps = {
    state: RootState;
    path: string;
};

function select<T>({ state, path }: SelectProps): T {
    const pathArray = path.split('.');
    let current: any = state;
    for (const p of pathArray) {
        if (current[p] === undefined) return undefined as any;
        current = current[p];
    }

    return current as T;
}

const debug = settings.project?.debug as boolean;

const isObject = (a: any) => {
    const isArray = (a_: any) => !!a_ && a_.constructor === Array;

    return typeof a === 'object' && a !== null && !isArray(a);
};

export function mergeObjects(initiator: Variables, receiver: Variables): void {
    Object.keys(initiator).forEach(key => {
        if (receiver[key] === undefined) {
            receiver[key] = initiator[key];
        } else if (typeof initiator[key] === 'object' && initiator[key] !== null && !Array.isArray(initiator[key])) {
            if (typeof receiver[key] !== 'object' || receiver[key] === null || Array.isArray(receiver[key])) {
                receiver[key] = initiator[key];
            } else {
                mergeObjects(initiator[key] as Variables, receiver[key as keyof Variables] as Variables);
            }
        }
    });
}

export const getProxy = (path: string): Variables => (
    new Proxy(
        {},
        {
            set(_, p, value) {
                debug && console.log(`${String(p)} changed to ${isObject(value) ? JSON.stringify(value) : String(value)}`);
                store.dispatch(updateVariable({ [p]: value, path }));
                return true;
            },
            get(_, p) {
                const variables: any = select({ state: store.getState(), path });
                p = String(p);

                if (isObject(variables[p])) {
                    const new_path = `${path}.${String(p)}`;
                    return getProxy(new_path);
                }
                return variables[p as keyof typeof variables];
            },
            has(_, p: string | symbol): boolean {
                const variables: any = select({ state: store.getState(), path });
                return p in variables;
            },
            getPrototypeOf(): object | null {
                return select({ state: store.getState(), path }) as object | null;
            },
        },
    )
);
