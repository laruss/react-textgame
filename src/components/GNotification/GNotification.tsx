import { useAppDispatch, useAppSelector } from 'app/redux/hooks.ts';
import { closeNotification, selectNotification } from 'app/redux/slices/systemSlice.ts';
import { useCallback, useMemo } from 'react';
import { GNotification as G_Notification } from 'react-textgame-components';

const GNotification = () => {
    const dispatch = useAppDispatch();

    const handleClose = useCallback(() => dispatch(closeNotification()), [dispatch]);

    const { anchorOrigin, severity, content } = useAppSelector(selectNotification);
    const open = useMemo(() => Boolean(content), [content]);

    return (
        <G_Notification
            open={open}
            anchorOrigin={anchorOrigin}
            variant={severity}
            onClick={handleClose}
        >
            {content}
        </G_Notification>
    );
};

export default GNotification;
