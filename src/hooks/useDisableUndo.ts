import { useDispatch } from 'react-redux';
import { ActionCreators } from 'redux-undo';

const useDisableUndo = () => {
    const dispatch = useDispatch();

    return { disableUndo: () => dispatch(ActionCreators.clearHistory()) };
};

export default useDisableUndo;
