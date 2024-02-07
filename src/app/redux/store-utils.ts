import {parse,stringify} from 'flatted';
import { createTransform } from 'redux-persist';
import { newHistory } from 'redux-undo';

export const undoTransform = createTransform(
    // transform state on its way to being serialized and persisted.
    (inboundState: any) => {
        // Only store the present. We don't want to hydrate past or future.
        return inboundState.present;
    },
    // transform state being rehydrated
    (outboundState) => {
        // Take the "present data" and turn it back into a history.
        return newHistory([], outboundState, []);
    },
    // define which reducers this transform gets called for.
    { whitelist: ['game'] },
);

export const transformCircular = createTransform(
    (inboundState) => stringify(inboundState),
    (outboundState) => parse(outboundState),
);
