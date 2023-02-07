import React from "react";
import { useDispatch } from "react-redux";
import {setCurrentPassage} from "../../engine/redux/slices/gameSlice";
import styled from "styled-components";
import Links, {variantLinkType} from "../styles/Links";
import userSettings from "../../Story/settings";

interface LinkProps {
    to: string;
    callback?: () => void;
    children: JSX.Element|string|(JSX.Element|string)[],
    variant?: variantLinkType,
    style?: React.CSSProperties
}

const LinkContainer = styled.span<{variant: variantLinkType}>`
  &:before {
    content: " ";
    display: inline-block;
    left: -0.5em;
  }
  
  &:after {
    content: " ";
    display: inline-block;
    right: -0.5em;
  }
  ${props => Links[props.variant]};
`;

const GLink = ({to, callback, children, variant, style = {}}: LinkProps) => {
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(setCurrentPassage(to));
        callback && callback();
    };

    return (
        <LinkContainer
            onClick={onClick}
            variant={variant? variant : userSettings.defaults.linkVariant}
            style={style}
        >
            { children }
        </LinkContainer>

    );
};

export default GLink;