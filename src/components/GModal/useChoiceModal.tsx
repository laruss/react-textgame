import { useAppDispatch } from 'app/redux/hooks.ts';
import { openChoiceModal } from 'app/redux/slices/systemSlice.ts';
import { ChoiceModalType } from 'app/redux/types.ts';
import { useCallback } from 'react';

const useChoiceModal = (props: ChoiceModalType) => {
    const dispatch = useAppDispatch();

    const handleModalOpen = useCallback(() => {
        dispatch(openChoiceModal(props));
    }, [props, dispatch]);

    return { handleModalOpen };
};

export default useChoiceModal;
