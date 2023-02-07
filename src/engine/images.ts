import importAll from "./helpers/importAll";

type ImagesObjType = { [key: string]: string };
type returnImageObjectType = {[key: string]: any};
type RootType = { [key: string]: string|object }

const imagesFiles = importAll(require.context('../images', true, /\.(png|jpe?g|webp|webm|mp4|gif)$/));

const getImagesObject = (images: ImagesObjType) : returnImageObjectType => {
    const obj = {};
    for (const [iName, image] of Object.entries(images)) {
        const folders = iName.split("/"); // ["path", "to", "image.jpg"]
        let root: RootType = obj;
        folders.forEach(fName => {
            if (fName === folders.at(-1)) {
                fName = fName.replace(/\.(png|jpe?g|webp|webm|mp4|gif)$/, '') // "image"
                root[fName] = image;
            }
            else {
                if (!root[fName])
                    root[fName] = {};
                root = root[fName] as RootType;
            }
        });
    }
    return obj;
};

const images = getImagesObject(imagesFiles);

export default images;