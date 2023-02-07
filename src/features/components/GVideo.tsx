import React from "react";
import styled from "styled-components";

const VideoContainer = styled.div`
  display: inherit;
  width: 100%;
  flex-direction: inherit;
  align-items: inherit;
`;

type VideoProps = {
    src: string;
    autoPlay?: boolean;
    loop?: boolean;
    controls?: boolean;
    muted?: boolean;
    width?: string;
    style?: React.CSSProperties;
};

const GVideo = ({src, autoPlay = true, loop = true, muted = true, width = '100%', controls = false, style = {}}: VideoProps) => {
    const type = "video/" + src.split(".").at(-1);

    return (
        <VideoContainer style={style}>
            <video
                width={width}
                autoPlay={autoPlay}
                loop={loop}
                controls={controls}
                muted={muted}
            >
                <source src={src} type={type}/>
            </video>
        </VideoContainer>
    );
};

export default GVideo;