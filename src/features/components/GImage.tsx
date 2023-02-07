import 'react-loading-skeleton/dist/skeleton.css';
import styled from "styled-components";
import {CircularProgress} from "@mui/material";
import React, {useEffect, useState} from "react";
import settings from "../../engine/settings";
import images from "../../engine/images";

interface GameImageProps {
    src: string|undefined;
    style?: React.CSSProperties;
    imageRadius?: string;
    className?: string;
    imageStyles?: React.CSSProperties;
}

const Container = styled.div`
  display: inherit;
  flex-direction: inherit;
  align-items: inherit;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;

const Img = styled.img<{loaded: boolean, imageRadius: string | undefined}>`
  display: ${props => props.loaded? 'inherit' : 'none'};
  max-width: 100%;
  width: 100%;
  border-radius: ${props => (props.imageRadius ? props.imageRadius : "auto")};
`;

const LoadingEl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  align-content: center;
  justify-content: center;
  height: 600px;
  background-color: #cecece;
`;

const GImage = ({src, style = {}, imageRadius, className = '', imageStyles}: GameImageProps) => {
    const [imgSrc, setImgSrc] = useState<string>(src as string);
    const [loaded, setLoaded] = useState(false);
    const errorImage = images.default.notFound;

    useEffect(() => {
        setLoaded(false);
        const img = new Image();
        img.src = src as string;
        img.onload = () => {
            src = src === "undefined" ? "" : src;
            setImgSrc(src as string);
            img.complete && img.naturalHeight !== 0 && setLoaded(true);
        };
        img.onerror = () => {
            setImgSrc(errorImage);
            setLoaded(true);
        };
    }, [src]);

    return (
        <Container style={style} className={className}>
            <Img style={imageStyles} loaded={loaded} imageRadius={imageRadius} src={imgSrc} alt={imgSrc}/>
            {!loaded ? (
                <LoadingEl>
                    {settings.image.loadMessage}
                    <CircularProgress style={{alignSelf: "center"}} color="inherit" thickness={4} size={60}/>
                </LoadingEl>
            ) : null}
        </Container>
    );
};

export default GImage;