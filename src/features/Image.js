import React from "react";
import PropTypes from 'prop-types';

const Image = (props) => {
    return (
        <div>
            <img className="game-image" src={props.src} alt=""/>
        </div>
    );
};

Image.propTypes = { src: PropTypes.string.isRequired };

export default Image;