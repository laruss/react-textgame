import { useAppDispatch, useAppSelector } from 'app/redux/hooks.ts';
import { selectIsFullScreen, setFullScreen } from 'app/redux/slices/systemSlice.ts';

const useFullScreenAction = () => {
    const dispatch = useAppDispatch();
    const isFullScreen = useAppSelector(selectIsFullScreen);

    const fullScreenAction = () => {
        dispatch(setFullScreen(!isFullScreen));
    };

    return { fullScreenAction };
};

export default useFullScreenAction;
