import React from "react";
import {variables} from "../Utils";

const V = (props) => {
    const getV = () => {
        const vals = variables;
        return eval(`vals.${props.children}`);
    };

    return (
        <span>{getV()}</span>
    )
};

export default V;