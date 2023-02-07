import React from "react";
import {Tooltip} from "@mui/material";
import styled from "styled-components";

interface TooltipInterface {
    children: React.ReactElement<any, any>;
    title: string|number;
    placement?:
        | 'bottom-end'
        | 'bottom-start'
        | 'bottom'
        | 'left-end'
        | 'left-start'
        | 'left'
        | 'right-end'
        | 'right-start'
        | 'right'
        | 'top-end'
        | 'top-start'
        | 'top';
    style?: React.CSSProperties;
}

const Title = styled.div`
  font-size: 20px;
`;

const GTooltip = ({children, title, placement, style={}}: TooltipInterface) => {
    if (!children) return null;
    return (
        title !== '' ? (
            <Tooltip
                title={<Title>{title}</Title>}
                style={{fontFamily: "inherit", ...style}}
                placement={placement}
                arrow
                disableInteractive
            >
                {children}
            </Tooltip>
        ) : <div>{children}</div>
    )
};

export default GTooltip;