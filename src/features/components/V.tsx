import React from "react";
import variables from "../../engine/variables";
import {useSelector} from "react-redux";

/*
    V component is created to display changeable game variables

    For example, you have game variable variables.some.variable
    you can call it by <V>variables.some.variable</V> or just <V>some.variable</V>

    If you have a function that will return game (or any) variable, you can call V by this mean:
    <V c={callbackFunction}/>
*/

interface VInt {
    c?: () => void;
    children?: string
}

const V = ({c, children}: VInt) => {
    useSelector(state => state);

    const getV = () => {
        const vars = variables;
        const filtered = children?.includes("variables.") ? children?.replace("variables.", '') : children
        return eval(`vars.${filtered}`);
    };

    return (
        <span>{c ? c() : getV()}</span>
    )
};

export default V;