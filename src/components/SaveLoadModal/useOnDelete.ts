import { useAppDispatch } from 'app/redux/hooks.ts';
import { deleteSlot, isSuccess } from 'app/redux/slices/savesSlice.ts';
import { useChoiceModal } from 'components/GModal';
import { useNotification } from 'components/GNotification';

type UseOnDeleteProps = {
    index: number;
};

const useOnDelete = ({index}: UseOnDeleteProps) => {
    const dispatch = useAppDispatch();
    const removeSlot = () => dispatch(deleteSlot({ index }));
    const succeed = () => dispatch(isSuccess());

    const { handleNotification: handleSuccessDeleteNotification } = useNotification({
        content: 'saveslot has been deleted',
        severity: 'success',
    });

    const { handleModalOpen: handleDeleteGame } = useChoiceModal({
        primary: 'Are you sure?',
        secondary: 'Do you really want to delete this slot?',
        choices: {
            yes: () => {
                removeSlot();
                succeed();
                handleSuccessDeleteNotification();
            },
            no: () => null,
        },
    });

    return { handleDeleteGame };
};

export default useOnDelete;
