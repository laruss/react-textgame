import mappers from './mappers';
import { MapperFunction, PassageObject } from './types';

const render = (props: PassageObject) => {
    return props.map((content, index) => {
        const mapped = mappers[content.component] as MapperFunction;
        return mapped(content, index);
    });
};

export default render;
