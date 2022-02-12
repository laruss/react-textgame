import React from "react";
import PropTypes from "prop-types";

const Video = (props) => {
    const autoPlay = props.autoPlay !== undefined ? props.autoPlay : true;
    const loop = props.loop !== undefined ? props.loop : true;
    const type = "video/" + props.src.split(".").at(-1);

    return (
        <div className="game-video">
            <video width="600px" autoPlay={autoPlay} loop={loop} controls={props.controls}>
                <source src={props.src} type={type}/>
            </video>
        </div>
    );
};

Video.propTypes = {
    src: PropTypes.string.isRequired,
    autoPlay: PropTypes.bool,
    loop: PropTypes.bool,
    controls: PropTypes.bool
};

export default Video;