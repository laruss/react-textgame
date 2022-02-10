const importAll = r => {
    let images = {};
    r.keys().forEach((item, i) => { images[item.replace('./', '')] = r(item); });
    return images
};

const imagesFiles = importAll(require.context('../images', true, /\.(png|jpe?g|webp|gif)$/));

const getImagesObject = images => {
    const obj = {};
    for (const [iName, image] of Object.entries(images)) {
        const folders = iName.split("/");
        let root = obj;
        folders.forEach(fName => {
            if (fName === folders.at(-1)) {
                fName = fName.replace(/\.(png|jpe?g|webp|gif)$/, '')
                root[fName] = image
            }
            else {
                if (!root[fName])
                    root[fName] = {}
                root = root[fName];
            }
        });
    }
    return obj;
};

const images = getImagesObject(imagesFiles);

export default images;