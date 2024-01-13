import { useAppDispatch } from 'app/redux/hooks.ts';
import { updateAll } from 'app/redux/slices/gameSlice.ts';
import { isSuccess } from 'app/redux/slices/savesSlice.ts';
import { closeModal } from 'app/redux/slices/systemSlice.ts';
import { useChoiceModal } from 'components/GModal';
import { useNotification } from 'components/GNotification';
import { useSpinner } from 'components/GSpinner';
import useDisableUndo from 'hooks/useDisableUndo.ts';

type UseOnLoadProps = {
    data: object;
};

const useOnLoad = ({ data }: UseOnLoadProps) => {
    const dispatch = useAppDispatch();
    const { showSpinner } = useSpinner();
    const succeed = () => dispatch(isSuccess());
    const loadFromSlot = () => dispatch(updateAll({ data: data }));
    const { handleNotification: handleSuccessLoadNotification } = useNotification({
        content: 'successfully loaded',
        severity: 'success',
    });
    const { disableUndo } = useDisableUndo();

    const { handleModalOpen: handleLoadGame } = useChoiceModal({
        primary: 'Are you sure?',
        secondary: 'Do you really want to load game from this slot?',
        choices: {
            yes: () => {
                showSpinner(true);
                loadFromSlot();
                succeed();
                handleSuccessLoadNotification();
                showSpinner(false);
                dispatch(closeModal());
                disableUndo();
            },
            no: () => null,
        },
    });

    return { handleLoadGame };
};

export default useOnLoad;
