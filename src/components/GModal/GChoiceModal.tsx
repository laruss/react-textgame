import { Modal, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid2 from '@mui/material/Unstable_Grid2';
import { useAppDispatch, useAppSelector } from 'app/redux/hooks.ts';
import { closeChoiceModal, selectChoiceModal } from 'app/redux/slices/systemSlice.ts';
import { useCallback, useMemo } from 'react';
import { GButton } from 'react-textgame-components';
import ModalContainer from 'components/GModal/ModalContainer.tsx';

const GChoiceModal = () => {
    const dispatch = useAppDispatch();
    const { primary, secondary, choices } = useAppSelector(selectChoiceModal);
    const open = useMemo(() => Boolean(primary), [primary]);
    const handleModalClose = useCallback(() => {
        dispatch(closeChoiceModal());
    }, [dispatch]);

    const entries = useMemo(() => {
        return Object.entries(choices).map(([name, callback]) => {
            const handleClick = () => {
                callback();
                handleModalClose();
            };

            return { name, handleClick };
        });
    }, [choices, handleModalClose]);

    return (
        <Modal
            open={open}
            onClose={handleModalClose}
            sx={{ zIndex: 10000 }}
        >
            <ModalContainer>
                <Grid2
                    container
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'space-between'}
                    textAlign={'center'}
                    gap={2}
                >
                    <Typography
                        variant={'h4'}
                        sx={{
                            fontWeight: 'bold',
                        }}
                    >
                        {primary}
                    </Typography>
                    <Typography>{secondary}</Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            gap: 2,
                        }}
                    >
                        {
                            entries.map(({ name, handleClick }) => (
                                <GButton key={name} onClick={handleClick}>{name}</GButton>
                            ))
                        }
                    </Box>
                </Grid2>
            </ModalContainer>
        </Modal>
    );
};

export default GChoiceModal;
