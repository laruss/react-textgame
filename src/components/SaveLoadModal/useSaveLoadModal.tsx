import useModal from 'components/GModal/useModal.ts';

import SaveLoadContent from './SaveLoadContent.tsx';

const useSaveLoadModal = () => {
    const { handleModalOpen: handleSaveLoadOpen } = useModal({
        content: <SaveLoadContent />,
    });

    return {
        handleSaveLoadOpen,
    };
};

export default useSaveLoadModal;
