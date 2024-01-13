import { useAppDispatch } from 'app/redux/hooks.ts';
import { setSpinner } from 'app/redux/slices/systemSlice.ts';

const useSpinner = () => {
    const dispatch = useAppDispatch();

    const showSpinner = (show: boolean) => {
        dispatch(setSpinner(show));
    };

    return { showSpinner };
};

export default useSpinner;
