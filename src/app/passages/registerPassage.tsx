import passages from './passages';
import { PassageObject } from './types';

const registerPassage = (passage: PassageObject) => {
    const meta = passage[0];
    passages[meta.name] = passage;
};

export default registerPassage;
