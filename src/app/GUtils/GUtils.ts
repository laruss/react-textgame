import { setCurrentPassage } from 'app/redux/slices/gameSlice.ts';
import store from 'app/redux/store.ts';

const GUtils = {
    jumpTo(to: string) {
        store.dispatch(setCurrentPassage(to));
    },
};

export default GUtils;
