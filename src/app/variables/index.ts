import { systemImports } from 'app/imports/utils.ts';
import store, { persistor } from 'app/redux/store.ts';
import { ActionCreators } from 'redux-undo';

import { Variables } from './types.ts';
import { getProxy, mergeObjects } from './utils.ts';

interface GameVariablesType extends Variables {
    init: (initialVariables: Variables) => void;
}

const GameVariables = getProxy('game.present.variables');

function baseInit(initialVariables: Variables) {
    console.log('game variables initialized');
    mergeObjects(initialVariables, GameVariables);
    store.dispatch(ActionCreators.clearHistory());
}

export function initGameVariables(initialVariables: Variables) {
    systemImports.isDebug ?
        baseInit(initialVariables) :
        persistor.subscribe(() => {
            const { bootstrapped } = persistor.getState();
            if (bootstrapped) baseInit(initialVariables);
        });
    systemImports.variablesInitialized = true;
}

export default GameVariables as GameVariablesType;

export type { Variables };
