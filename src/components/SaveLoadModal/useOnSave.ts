import { selectGame, useAppDispatch, useAppSelector } from 'app/redux/hooks.ts';
import { isSuccess, updateSlot } from 'app/redux/slices/savesSlice.ts';
import { useChoiceModal } from 'components/GModal';
import { useNotification } from 'components/GNotification';
import { useSpinner } from 'components/GSpinner';
import { useCallback } from 'react';

type UseOnSaveProps = {
    index: number;
};

const useOnSave = ({ index }: UseOnSaveProps) => {
    const dispatch = useAppDispatch();
    const succeed = useCallback(() => dispatch(isSuccess()), [dispatch]);
    const game = useAppSelector(selectGame);

    const { showSpinner } = useSpinner();
    const saveToSlot = () => dispatch(updateSlot({ index, data: game.present, datetime: Date.now() }));

    const { handleNotification: handleSuccessSaveNotification } = useNotification({
        content: 'successfully saved',
        severity: 'success',
    });

    const { handleModalOpen: handleSaveGame } = useChoiceModal({
        primary: 'Are you sure?',
        secondary: 'Do you really want to save game to this slot?',
        choices: {
            yes: () => {
                showSpinner(true);
                saveToSlot();
                succeed();
                handleSuccessSaveNotification();
                showSpinner(false);
            },
            no: () => null,
        },
    });

    return { handleSaveGame };
};

export default useOnSave;
