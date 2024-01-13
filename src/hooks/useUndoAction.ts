import { selectGame, useAppDispatch } from 'app/redux/hooks.ts';
import { useSelector } from 'react-redux';
import { ActionCreators } from 'redux-undo';
import { useMemo } from 'react';

const useUndoAction = () => {
    const dispatch = useAppDispatch();
    const game = useSelector(selectGame);
    const canUndo = useMemo(() => (
        game.past.length > 0
    ), [game.past]);

    const undoAction = () => dispatch(ActionCreators.undo());

    return { canUndo, undoAction };
};

export default useUndoAction;
