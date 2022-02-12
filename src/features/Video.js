import React from "react";
import PropTypes from "prop-types";

const Video = (props) => {
    const autoPlay = props.autoPlay !== undefined ? props.autoPlay : true;
    const loop = props.loop !== undefined ? props.loop : true;
    const muted = props.muted !== undefined ? props.muted : true;
    const width = props.width !== undefined ? props.width : "600px";
    const type = "video/" + props.src.split(".").at(-1);

    return (
        <div className="game-video">
            <video
                width={width}
                autoPlay={autoPlay}
                loop={loop}
                controls={props.controls}
                muted={muted}
            >
                <source src={props.src} type={type}/>
            </video>
        </div>
    );
};

Video.propTypes = {
    src: PropTypes.string.isRequired,
    autoPlay: PropTypes.bool,
    loop: PropTypes.bool,
    controls: PropTypes.bool,
    muted: PropTypes.bool,
    width: PropTypes.string
};

export default Video;