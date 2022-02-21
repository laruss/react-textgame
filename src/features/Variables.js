import isEqual from "lodash.isequal";

class Variables {
    constructor(varsObject) {
        this.update = (varsObject) => {
            this.oldJSON = varsObject;
            const isArray = a => ((!!a) && (a.constructor === Array));

            for (const [key,item] of Object.entries(varsObject)) {
                if (typeof item === "object" && item !== null && !isArray(item)) {
                    this[key] = new Variables(item);
                } else {
                    this[key] = item;
                }
            }
        };
        this.update(varsObject);
    };

    areChanged() {
        const newJSON = this.getJSON();
        return !isEqual(newJSON, this.oldJSON);
    };

    compile() {
        this.oldJSON = this.getJSON();
    };

    getJSON() {
        const json = {};
        const isArray = a => ((!!a) && (a.constructor === Array));

        for (const key of Object.keys(this)) {
            if (["oldJSON", "update", "areChanged", "compile"].includes(key)) continue;
            if (typeof this[key] === "object" && this[key] !== null && !isArray(this[key]))
                json[key] = this[key].getJSON();
            else json[key] = this[key];
        }

        return json;
    };
}

export default Variables;