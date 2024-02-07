import { Images } from './types.ts';

const imagesCached = new Map<string, HTMLImageElement>();

const loadImage = (src: string): Promise<HTMLImageElement> => {
    return new Promise((resolve) => {
        const image = new Image();
        image.onload = () => {
            imagesCached.set(src, image);
            resolve(image);
        };
        image.src = src;
    });
};

const asyncAddImageToMap = async (src: string) => {
    const image = await loadImage(src);
    imagesCached.set(src, image);
};

export const cacheSeveral = async (images: string[]) => {
    for (const image of images) {
        if (imagesCached.has(image)) {
            return (imagesCached.get(image) as HTMLImageElement).src;
        } else {
            await asyncAddImageToMap(image);
        }
    }
};

const images: Images = {};

export default images;
