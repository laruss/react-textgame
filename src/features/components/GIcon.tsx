import styled from "styled-components";
import React from "react";
import GTooltip from "./GTooltip";
import settings from "../../engine/settings";

interface IconInterface {
    onClick: () => void;
    size: string|number;
    title: string;
    IconComponent?: React.ComponentType<any>;
    isDisabled?: boolean;
    style?: React.CSSProperties;
}

const DisabledContainer = styled.div<{size: string}>`
  width: ${props => props.size};
  height: ${props => props.size};
  font-size: ${props => props.size};
  color: ${settings.icons.clickedColor};
  text-align: center;
  cursor: not-allowed;
`;

const Container = styled.div<{size: string, hoverColor: string, clickedColor: string}>`
  width: ${props => props.size};
  height: ${props => props.size};
  font-size: ${props => props.size};
  color: inherit;
  text-align: center;
  cursor: pointer;

  &:hover {
    color: ${props => props.hoverColor};
  }

  &:active {
    color: ${props => props.clickedColor};
    box-shadow: none;
  }

  &:focus, &:active:focus {
    color: ${props => props.clickedColor};
    outline: 5px auto rgba(0, 0, 0, 0.2);
  }

  &:visited {
    color: ${props => props.clickedColor};
  }
`;

const GIcon = ({onClick, size, title, IconComponent, isDisabled, style={}}: IconInterface) => {
    size = typeof size === "number" ? `${size}px` : size;

    if (!IconComponent) return null;

    if (isDisabled) return (
        <DisabledContainer size={size}>
            <IconComponent fontSize='inherit' color="inherit"/>
        </DisabledContainer>
    );

    return (
        <GTooltip title={title} placement={"right"}>
            <Container style={style} size={size} hoverColor={settings.icons.hoverColor} clickedColor={settings.icons.clickedColor}>
                <IconComponent fontSize='inherit' color="inherit" onClick={onClick}/>
            </Container>
        </GTooltip>
    );
};

export default GIcon;