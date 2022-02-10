import React from "react";
import variables from "../Story/variables";
import PropTypes from 'prop-types';

/*
    V component is created to display changeable game variables

    For example, you have game variable  "variables.some.variable"
    you can call it by <V>some.variable</V> i.e. without codeword "variables"

    If you have a function that will return game (or any) variable, you can call V by this mean:
    <V callback={callbackFunction}/>
*/

const V = (props) => {
    const getV = () => {
        const vals = variables;
        return eval(`vals.${props.children}`);
    };

    return (
        <span>{props.callback ? props.callback() : getV()}</span>
    )
};

V.propTypes = { callback: PropTypes.func };

export default V;