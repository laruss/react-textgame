import { useAppDispatch } from 'app/redux/hooks.ts';
import { deleteSlot, isSuccess } from 'app/redux/slices/savesSlice.ts';
import { useChoiceModal } from 'components/GModal';
import { notify } from 'react-textgame-components';

type UseOnDeleteProps = {
    index: number;
};

const useOnDelete = ({index}: UseOnDeleteProps) => {
    const dispatch = useAppDispatch();
    const removeSlot = () => dispatch(deleteSlot({ index }));
    const succeed = () => dispatch(isSuccess());

    const { handleModalOpen: handleDeleteGame } = useChoiceModal({
        primary: 'Are you sure?',
        secondary: 'Do you really want to delete this slot?',
        choices: {
            yes: () => {
                removeSlot();
                succeed();
                notify('saveslot has been deleted');
            },
            no: () => null,
        },
    });

    return { handleDeleteGame };
};

export default useOnDelete;
