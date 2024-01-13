import { setCurrentPassage } from 'app/redux/slices/gameSlice.ts';
import GameSettings from 'app/settings';
import { Middleware } from 'redux';

const settingsMiddleware: Middleware = (store) => (next) => (action) => {
    const game = store.getState().game;
    const settings = GameSettings.getInstance().get();

    // @ts-expect-error action is unknown
    action.type !== 'gameSlice/setCurrentPassage'
    && game.present.passages.current === ''
    && settings.passages?.start !== ''
    && store.dispatch(
        setCurrentPassage(settings.passages?.start as string),
    );

    return next(action);
};

export default settingsMiddleware;
