import { Imports } from 'app/imports';

import { Images } from './types.ts';

const imagesRegex = /\.(png|jpe?g|webp|webm|mp4|gif)$/i;

export const getImagesObject = (images: Imports, basePath: string = ''): Images => {
    const normalizedBasePath = basePath.replace(/\/$/, '');
    return Object.keys(images).reduce((imagesMap, iName) => {
        const relativePath = iName.replace(normalizedBasePath, '');

        if (relativePath.search(imagesRegex) !== -1) {
            const folders = relativePath.split('/'); // ["", "to", "image.jpg"]
            let root = imagesMap;
            folders.forEach((fName, index) => {
                if (fName !== '') {
                    if (index === folders.length - 1) {
                        const formattedName = fName.replace(imagesRegex, ''); // "image"
                        root[formattedName] = new URL(iName, import.meta.url);
                    } else {
                        root[fName] = root[fName] || {};
                        root = root[fName];
                    }
                }
            });
        }
        return imagesMap;
    }, {} as Images);
};
