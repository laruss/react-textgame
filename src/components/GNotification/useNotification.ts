import { useAppDispatch } from 'app/redux/hooks.ts';
import { openNotification } from 'app/redux/slices/systemSlice.ts';
import { NotificationType } from 'app/redux/types.ts';

const useNotification = (props: NotificationType) => {
    const dispatch = useAppDispatch();

    const handleNotification = () => {
        dispatch(openNotification(props));
    };

    return { handleNotification };
};

export default useNotification;
