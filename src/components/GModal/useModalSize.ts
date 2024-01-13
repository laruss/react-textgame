import { useAppSelector } from 'app/redux/hooks.ts';
import { selectModal } from 'app/redux/slices/systemSlice.ts';

const useModalSize = () => {
    const modal = useAppSelector(selectModal);

    return modal.size;
};

export default useModalSize;
