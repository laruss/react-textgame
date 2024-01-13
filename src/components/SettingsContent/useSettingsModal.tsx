import useModal from 'components/GModal/useModal.ts';

import SettingsContent from './SettingsContent.tsx';

const useSettingsModal = () => {
    const { handleModalOpen: handleSettingsOpen } = useModal({
        content: <SettingsContent />,
    });

    return {
        handleSettingsOpen,
    };
};

export default useSettingsModal;
