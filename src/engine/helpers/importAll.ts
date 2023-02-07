export interface RequireContext {
    keys(): string[];
    (id: string): any;
    <T>(id: string): T;
    resolve(id: string): string;
    /** The module id of the context module. This may be useful for module.hot.accept. */
    id: string;
}

const importAll = (r: RequireContext) => {
    let files: { [key: string]: string } = {};
    // {"path/to/file.ext": "./path/to/file.ext"}
    r.keys().forEach((item, i) => { files[item.replace('./', '')] = r(item); });
    return files
};

export default importAll;