import images from 'app/images';
import { getImagesObject } from 'app/images/utils.ts';
import settings from 'app/settings/settings.ts';
import merge from 'ts-deepmerge';

export type Imports = Record<string, () => unknown>;

type ImportsType = {
    /**
     * Import images from the game imports
     *
     * @param imagesImports The images imports from the game imports, should be import.meta.glob with eager: true
     * @param basePath The base path to import images from, starts without a slash and ends with a slash
     * @returns void
     *
     * @example
     * importImages(import.meta.glob('\/src\/game/media/**\/*', {eager: true}), 'src/app/images/')
     *
     */
    importImages: (imagesImports: Imports, basePath: string) => void;
    /**
     * Import passages from the game imports
     *
     * @param passagesImports The passages imports from the game imports, should be import.meta.glob
     * @returns void
     *
     * @example
     * importPassages(import.meta.glob('/src/game/passages/**\/*'))
     *
     */
    importPassages: (passagesImports: Imports) => void;
    /**
     * Import settings from the game imports
     *
     * @param settingsImports The settings imports from the game imports, should be json file, imported by
     * import.meta.glob with eager: true and as: 'raw'
     * @returns void
     *
     * @example
     * importSettings(import.meta.glob('/src/game/settings.json', {eager: true, as: 'raw'}));
     */
    importSettings: (settingsImports: Imports) => void;
}

const GImports: ImportsType = {
    importImages: (imagesImports, basePath) => {
        const innerImages = getImagesObject(imagesImports, basePath);
        Object.assign(images, innerImages);
    },
    importPassages: (passagesImports) => {
        for (const passage of Object.values(passagesImports)) {
            passage();
        }
    },
    importSettings: (settingsImports) => {
        for (const content of Object.values(settingsImports)) {
            const userSettings = JSON.parse(content as unknown as string);
            Object.assign(settings, merge(settings, userSettings));
        }
    },
};

export default GImports;
