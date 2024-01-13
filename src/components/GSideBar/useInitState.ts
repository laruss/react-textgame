import useWindowSize from 'hooks/useWindowSize.ts';
import { useEffect, useState } from 'react';
import { setSideMenuIsOpened } from 'app/redux/slices/systemSlice.ts';
import { Settings } from 'app/settings';
import { useAppDispatch } from 'app/redux/hooks.ts';

type UseInitStateProps = {
    settings: Settings,
    open: boolean | null,
};

const useInitState = ({ settings, open }: UseInitStateProps) => {
    const dispatch = useAppDispatch();
    const { width } = useWindowSize();

    const [isMobileBySize, setIsMobileBySize] = useState<boolean | null>(null);

    useEffect(() => {
        if (!settings.sidebar?.alwaysHide) {
            if (open === null && isMobileBySize !== null) dispatch(setSideMenuIsOpened(!isMobileBySize));
        } else {
            open && setSideMenuIsOpened(false);
        }
    }, [dispatch, isMobileBySize, open, settings.sidebar?.alwaysHide]);

    useEffect(() => {
        setIsMobileBySize(width <= 860);
    }, [width]);
};

export default useInitState;
