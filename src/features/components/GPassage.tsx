import React from "react";
import styled, {css} from "styled-components";
import media from "../helpers/media";
import userSettings from "../../Story/settings";

interface PassageProps {
    children: (React.ComponentType<any>|JSX.Element|string)[]|(React.ComponentType<any>|JSX.Element|string);
    width?: 'max' | 'default',
    backgroundImage?: string
}

const PassageContainer = styled.div<{backgroundImage: string|undefined}>`
  align-self: center;
  display: inherit;
  min-height: 100vh;
  flex-direction: inherit;
  width: 100%;
  max-width: 100%;
  overflow-y: hidden;
  background-image: ${props => props.backgroundImage ? `url("${props.backgroundImage}")` : null};
  background-repeat: no-repeat;
  background-size: cover;
  transition: background-image 0.2s ease-in-out;
`;

const PassageContent = styled.div<{width: 'max' | 'default'}>`
  background-color: ${userSettings.passages.backgroundColor};
  border-radius: 10px;
  padding: ${props => props.width === 'default' ? '1%' : '0'};
  align-self: center;
  text-align: justify;
  white-space: pre-wrap;
  word-break: break-word;
  font-size-adjust: 0.5;
  line-height: 1.5;
  ${props => props.width === "default" ? css`
    margin: 10px;
    ${media.phone.landscape} {
      width: 90%;
    };
    ${media.tablet.landscape} {
      width: 80%;
    };
    ${media.desktop.landscape} {
      width: 80%;
    };
    ${media.largeDesktop.landscape} {
      width: 70%;
    };
  ` : css`width: 100%;`
};
`;

const GPassage = ({children, width, backgroundImage}: PassageProps) => {
    width = width ? width : "default";

    const wrappedChildren = Array.isArray(children) ? children.map((child, key) => (
        typeof child === 'string' ? <span key={key}>{child}</span> : child
    )) : (typeof children === 'string' ? [<span>{children}</span>] : [children]);

    return (
        <PassageContainer className='passage-container' backgroundImage={backgroundImage}>
            <PassageContent className='passage-content' width={width}>
                {wrappedChildren}
            </PassageContent>
        </PassageContainer>
    );
};

export default GPassage;