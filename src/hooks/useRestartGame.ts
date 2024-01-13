import { useAppDispatch } from 'app/redux/hooks.ts';
import { reset } from 'app/redux/slices/gameSlice.ts';
import { useChoiceModal } from 'components/GModal';
import useDisableUndo from 'hooks/useDisableUndo.ts';
import { useSpinner } from 'components/GSpinner';

const useRestartGame = () => {
    const dispatch = useAppDispatch();
    const { showSpinner } = useSpinner();
    const { disableUndo } = useDisableUndo();

    const { handleModalOpen } = useChoiceModal({
        primary: 'Are you sure?',
        secondary: 'Do you really want to restart the game? All unsaved changes will be lost.',
        choices: {
            yes: () => {
                showSpinner(true);
                dispatch(reset());
                disableUndo();
                setTimeout(() => {
                    window.location.reload();
                }, 200);
            },
            no: () => null,
        },
    });

    return { handleRestartGame: handleModalOpen };
};

export default useRestartGame;
