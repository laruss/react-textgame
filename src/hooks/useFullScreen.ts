import { useFullScreenHandle } from 'react-full-screen';
import { selectIsFullScreen, setFullScreen } from 'app/redux/slices/systemSlice.ts';
import { useAppDispatch, useAppSelector } from 'app/redux/hooks.ts';
import { useCallback, useEffect } from 'react';

const useFullScreen = () => {
    const dispatch = useAppDispatch();
    const isFullScreen = useAppSelector(selectIsFullScreen);
    const fullScreenHandle = useFullScreenHandle();

    useEffect(() => {
        isFullScreen && !fullScreenHandle.active && fullScreenHandle.enter();
        !isFullScreen && fullScreenHandle.active && fullScreenHandle.exit();
    }, [isFullScreen, fullScreenHandle]);

    const setFullScreenOff = useCallback(() => {
        !fullScreenHandle.active && dispatch(setFullScreen(false));
    }, [dispatch, fullScreenHandle.active]);

    return {
        fullScreenHandle,
        setFullScreenOff,
    };
};

export default useFullScreen;
