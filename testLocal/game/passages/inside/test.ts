import { images, registerPassage } from '../../../../src';

registerPassage([
    { component: 'meta', name: 'test' },
    { component: 'h3', content: 'Test Passage' },
    { component: 'image', src: images.inside.day},
    {
        component: 'link',
        to: 'townMap',
        caption: 'TownMap',
        callback: () => {
        },
    },
]);
