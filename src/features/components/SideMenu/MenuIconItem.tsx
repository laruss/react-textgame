import styled from "styled-components";
import {ComponentType, useState} from "react";
import {SvgIcon} from "@mui/material";
import GIcon from "../GIcon";

const Item = styled.div<{menuIsShown: boolean, isHovered: boolean}>`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-self: ${props => props.menuIsShown ? "auto" : "flex-end"};
  background-color: ${props => props.isHovered ? "rgba(0, 0, 0, 0.2)" : "none"};
  height: 100%;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:active {
    background-color: rgba(0, 0, 0, 0.2);
    border-color: rgba(0, 0, 0, 0.2);
    color: rgba(255, 255, 255, 0.3);
    box-shadow: none;
  }
  &:focus, &:active:focus {
    background-color: rgba(0, 0, 0, 0.2);
    border-color: rgba(0, 0, 0, 0.2);
    color: rgba(255, 255, 255, 0.3);
    outline: 5px auto rgba(0, 0, 0, 0.2);
  }
  &:visited {
    background-color: rgba(0, 0, 0, 0.2);
    border-color: rgba(0, 0, 0, 0.2);
  }
`;

const Title = styled.div<{menuIsShown: boolean}>`
  display: ${props => props.menuIsShown ? "flex" : "none"};
  align-items: center;
  font-size: calc(var(--header-height) - var(--header-height)/2);
  flex-direction: row;
  align-content: stretch;
  padding-left: 5%;
`;

interface MenuIconItemProps {
    title: string,
    icon: ComponentType<any> | typeof SvgIcon,
    menuIsShown: boolean,
    onClick: () => void
}

const MenuIconItem = ({title, icon, menuIsShown, onClick}: MenuIconItemProps) => {
    const [isHovered, setIsHovered] = useState(false);

    const onMouseEnter = () => {
        setIsHovered(true);
    };

    const onMouseLeave = () => {
        setIsHovered(false);
    };

    const onSelfClick = () => {
        setIsHovered(false);
        onClick();
    };

    return (
        <Item
            id="icon-menu-item"
            menuIsShown={menuIsShown}
            isHovered={isHovered}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onSelfClick}>
            <GIcon onClick={onClick} size={`var(--header-height)`} title={title} IconComponent={icon}/>
            <Title menuIsShown={menuIsShown}>{title}</Title>
        </Item>
    );
};

export default MenuIconItem;