import React from "react";
import PropTypes from 'prop-types';

const Image = (props) => {
    return (
        <div>
            <img src={props.src}/>
        </div>
    );
};

Image.propTypes = { src: PropTypes.string.isRequired };

export default Image;