import { setCurrentPassage } from 'app/redux/slices/gameSlice.ts';
import { openNotification } from 'app/redux/slices/systemSlice.ts';
import store from 'app/redux/store.ts';
import { NotificationType } from 'app/redux/types.ts';

interface NotificationProps extends NotificationType {
    timeout?: number;
}

const GUtils = {
    notify({timeout = 1000, ...props}: NotificationProps) {
        store.dispatch(openNotification(props));
        setTimeout(() => {
            store.dispatch(openNotification({content: null}));
        }, timeout);
    },
    jumpTo(to: string) {
        store.dispatch(setCurrentPassage(to));
    },
};

export default GUtils;
