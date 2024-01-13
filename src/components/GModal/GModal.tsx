import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Modal } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/redux/hooks.ts';
import { closeModal, selectModal, setModalSize } from 'app/redux/slices/systemSlice.ts';
import { useCallback, useEffect, useMemo, useState } from 'react';

import ModalContainer from './ModalContainer.tsx';

const GModal = () => {
    const dispatch = useAppDispatch();
    const modal = useAppSelector(selectModal);
    const modalClose = useCallback(() => {dispatch(closeModal())}, [dispatch]);
    const [node, setNode] = useState<HTMLDivElement | null>(null);
    const open = useMemo(() => Boolean(modal.content), [modal]);

    const handleModalClose = useCallback(() => {
        modal.onClose && modal.onClose();
        modalClose();
    }, [modal, modalClose]);

    useEffect(() => {
        if (node) {
            const { offsetWidth, offsetHeight } = node;
            dispatch(setModalSize({width: offsetWidth, height: offsetHeight}));
        }
    }, [node]);

    return (
        <Modal
            open={open}
            onClose={handleModalClose}
        >
            <ModalContainer
                sx={modal.styles}
                className={'g-modal'}
                ref={(node) => {
                    setNode(node);
                }}
            >
                {
                    modal.showCloseButton && (
                        <IconButton
                            className={'g-modal-close-button'}
                            aria-label="close"
                            onClick={handleModalClose}
                            sx={{
                                position: 'fixed',
                                right: '1em',
                                top: '1em',
                                color: (theme) => theme.palette.grey[500],
                                background: 'white',
                                borderRadius: '50%',
                                boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                    )
                }
                {modal.content}
            </ModalContainer>
        </Modal>
    );
};

export default GModal;
