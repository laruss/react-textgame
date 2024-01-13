import { useAppDispatch } from 'app/redux/hooks.ts';
import { openModal } from 'app/redux/slices/systemSlice.ts';
import { ModalProps } from 'app/redux/types.ts';
import { useCallback } from 'react';

const useModal = (props: ModalProps) => {
    const dispatch = useAppDispatch();

    const handleModalOpen = useCallback(() => {
        dispatch(openModal(props));
    }, [dispatch, props]);

    return { handleModalOpen };
};

export default useModal;
