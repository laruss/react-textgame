import { ActionCreators } from 'redux-undo';
import { selectGame, useAppDispatch } from 'app/redux/hooks.ts';
import { useSelector } from 'react-redux';

const useRedoAction = () => {
    const dispatch = useAppDispatch();
    const game = useSelector(selectGame);
    const canRedo = game.future.length > 0;

    const redoAction = () => {
        dispatch(ActionCreators.redo());
    };

    return { canRedo, redoAction };
};

export default useRedoAction;
