import React from "react";
import PropTypes from 'prop-types';

const Image = (props) => {
    return (
        <div>
            <img className="game-image" style={props.style} src={props.src} alt=""/>
        </div>
    );
};

Image.propTypes = { src: PropTypes.string.isRequired, style: PropTypes.object };

export default Image;