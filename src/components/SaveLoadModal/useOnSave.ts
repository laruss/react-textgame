import { selectGame, useAppDispatch, useAppSelector } from 'app/redux/hooks.ts';
import { isSuccess, updateSlot } from 'app/redux/slices/savesSlice.ts';
import { useChoiceModal } from 'components/GModal';
import { useSpinner } from 'components/GSpinner';
import { useCallback } from 'react';
import { useNotification } from 'react-textgame-components';

type UseOnSaveProps = {
    index: number;
};

const useOnSave = ({ index }: UseOnSaveProps) => {
    const dispatch = useAppDispatch();
    const succeed = useCallback(() => dispatch(isSuccess()), [dispatch]);
    const game = useAppSelector(selectGame);

    const { showSpinner } = useSpinner();
    const saveToSlot = () => dispatch(updateSlot({ index, data: game.present, datetime: Date.now() }));

    const {notify} = useNotification();

    const { handleModalOpen: handleSaveGame } = useChoiceModal({
        primary: 'Are you sure?',
        secondary: 'Do you really want to save game to this slot?',
        choices: {
            yes: () => {
                showSpinner(true);
                saveToSlot();
                succeed();
                notify('successfully saved');
                showSpinner(false);
            },
            no: () => null,
        },
    });

    return { handleSaveGame };
};

export default useOnSave;
