import React from "react";
import PropTypes from 'prop-types';
import settings from "../Story/settings";

const Say = (props) => {
    const color = props.who.color ? props.who.color : settings.say.defaultColor;

    return (
        <div style={{color}}>
            <br/>&#160;-&#160;{props.children}<br/>
        </div>
    );
};

Say.propTypes = { who: PropTypes.any.isRequired };

export default Say;