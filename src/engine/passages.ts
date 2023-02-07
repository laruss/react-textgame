type moduleType = {[p:string]: JSX.Element};
type passagesType =  {[p:string] : moduleType};


const passages: passagesType = {};
export const links: {[p: string]: {[p:string]: string}} = {};

export const register = (newPassages: moduleType, moduleName: string) => {
    passages[moduleName] = newPassages;
};

export default passages;