import styled, {css} from "styled-components";
import React, {MouseEventHandler} from "react";
import Buttons, {variantButtonType} from "../styles/Buttons";
import userSettings from "../../Story/settings";

const ButtonContainer = styled.div<{variant: variantButtonType, isDisabled: boolean}>`
  align-items: center;
  background-color: #25292e;
  border-radius: 8px;
  border-width: 0;
  box-sizing: border-box;
  text-transform: uppercase;
  color: #fff;
  cursor: ${props => props.isDisabled ? 'not-allowed' : 'pointer'};
  display: inline-flex;
  flex-direction: column;
  font-family: inherit;
  font-size: inherit;
  height: 52px;
  justify-content: center;
  line-height: 1;
  margin: 0;
  outline: none;
  overflow: hidden;
  padding: 0 32px;
  text-align: center;
  text-decoration: none;
  transform: translate3d(0, 0, 0);
  transition: all 150ms;
  vertical-align: baseline;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  
  &:hover {
    opacity: ${props => props.isDisabled ? '1' : '.85'};
  };

  &:active {
    outline: ${props => props.isDisabled ? '1' : '0'};
  }

  @media (max-width: 420px) {
    height: 48px;
  }
  ${props=>Buttons[props.variant]};
  
  ${props => props.isDisabled && css`
    &:hover {
      box-shadow: none;
    };
    &:active {
      background-color: -moz-default-background-color;
    }
    &:focus {
      box-shadow: none;
    }
  `}
`;

interface GButtonProps {
    children: string|number|boolean;
    id?: string;
    isDisabled?: boolean;
    onClick: MouseEventHandler<HTMLDivElement>;
    variant?: variantButtonType;
    style?: React.CSSProperties;
    [p:string]: any;
}

const GButton = (props: GButtonProps) => {
    const caption = String(props.children);
    const style = props.style ? props.style : {};
    const isDisabled = props.isDisabled ? props.isDisabled : false;

    return (
        <ButtonContainer
            variant={props.variant? props.variant : userSettings.defaults.buttonVariant}
            isDisabled={isDisabled}
            style={style}
            {...props}
            onClick={isDisabled ? ()=>{} : props.onClick}
        >
            {caption}
        </ButtonContainer>
    );
};

export default GButton;