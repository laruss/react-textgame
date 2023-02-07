import styled, {css} from "styled-components";
import media from "../../helpers/media";

export const SideMenuWrapper = styled.div<{isOpened: boolean}>`
  transition: width var(--secs);
  width: var(--header-height);
  position: relative;
  border-right: 3px solid black;
  z-index: 5;
  ${media.desktop.landscape} {
    width: ${props => props.isOpened ? 'calc(1% * var(--landscape-width));' : 'none'}
  };
  ${media.largeDesktop.landscape} {
    width: ${props => props.isOpened ? 'calc(1% * var(--landscape-width));' : 'none'}
  };
`;

export const SideMenuHeader = styled.div<{isOpened: boolean}>`
  transition: transform calc(var(--secs) * 2);
  ${media.phone.portrait} {
    width: ${props => props.isOpened ? 'var(--portrait-width)' : 'var(--header-height)'};
    transform: ${props => props.isOpened ? 'none' : 'translateX(calc(-100% + var(--header-height)))'};
    background-color: #2d2d2d;
  };
  ${media.phone.landscape} {
    width: ${props => props.isOpened ? 'calc(var(--portrait-width)/2)' : 'var(--header-height)'};
    transform: ${props => props.isOpened ? 'none' : 'translateX(calc(-100% + var(--header-height)))'};
    background-color: #2d2d2d;
  };
  ${media.tablet.portrait} {
    width: ${props => props.isOpened ? 'calc(var(--portrait-width)/2)' : 'var(--header-height)'};
    transform: ${props => props.isOpened ? 'none' : 'translateX(calc(-100% + var(--header-height)))'};
    background-color: #2d2d2d;
  };
  ${media.tablet.landscape} {
    width: ${props => props.isOpened ? 'calc(var(--portrait-width)/2)' : 'var(--header-height)'};
    justify-content: flex-start;
    transform: ${props => props.isOpened ? '0' : 'translateX(calc(-100% + var(--header-height)))'};
    background-color: #2d2d2d;
  };
  ${props => props.isOpened ? css`
    border-bottom: 1px solid gray;
  ` : css`
    padding-bottom: var(--header-height);
  `};
`

export const SideMenuControls = styled.div<{isOpened: boolean}>`
  //width: calc(100% - var(--header-height));
  //left: var(--header-height);
  top: ${props => props.isOpened ? '0' : 'var(--header-height)'};
  position: relative;
  //min-height: var(--header-height);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SideMenuHeaderTitle = styled.div<{isOpened: boolean}>`
  clear: both;
  visibility: ${props => props.isOpened ? 'visible' : 'hidden'};
  white-space: nowrap;
  max-width: 95%;
  font-size: 22px;
  font-family: inherit;
  flex-grow: 1;
  overflow-y: hidden;
  overflow-x: auto;

  &::-webkit-scrollbar {
    background-color: #353535;
    height: 5px;
  }

  &::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #595858;
    border-radius: 20px;
  }
`;

export const SideMenuBody = styled.div<{isOpened: boolean}>`
  transition: transform calc(var(--secs) * 2);
  transform: ${props => props.isOpened ? 'none' : 'translateX(calc(-100% + var(--header-height)));'};
  display: flex;
  flex-direction: column;
  //justify-content: flex-end;
  height: 100%;
  ${media.phone.portrait} {
    width: var(--portrait-width);
    transform: ${props => props.isOpened ? 'none' : 'translateX(calc(-100% + var(--header-height)));'};
    background-color: #2d2d2d;
  };
  ${media.phone.landscape} {
    width: calc(var(--portrait-width)/2);
    transform: ${props => props.isOpened ? 'none' : 'translateX(calc(-100% + var(--header-height)));'};
    background-color: #2d2d2d;
  };
  ${media.tablet.portrait} {
    width: var(--portrait-width/1.5);
    transform: ${props => props.isOpened ? 'none' : 'translateX(calc(-100% + var(--header-height)));'};
    background-color: #2d2d2d;
  };
  ${media.tablet.landscape} {
    width: calc(var(--portrait-width)/2);
    transform: ${props => props.isOpened ? 'none' : 'translateX(calc(-100% + var(--header-height)));'};
    background-color: #2d2d2d;
  };
  ${media.desktop.landscape} {
    width: calc(1vw * var(--landscape-width));
  };
  ${media.largeDesktop.landscape} {
    width: calc(1vw * var(--landscape-width));
  };
`;

export const HeaderIcon = styled.div<{alwaysHide: boolean}>`
  position: fixed;
  z-index: 10;
  width: var(--header-height);
  height: var(--header-height);
  line-height: var(--header-height);
  font-size: var(--header-height);
  text-align: center;
  user-select: none;
  cursor: ${props => props.alwaysHide ? 'default' : 'pointer'};
`;

export const Content = styled.div<{height: string|number, menuIsShown: boolean}>`
  justify-content: flex-end;
  overflow: auto;
  display: flex;
  flex-direction: column;
  flex-shrink: 3;
  box-sizing: border-box;
  max-height: 100%;
  ${props => (
      props.menuIsShown ? `height: calc(${props.height}px - var(--header-height));` : `height: calc(${props.height}px - 4*var(--header-height));`
  )};
`;

export const CommonItems = styled.div<{isOpened: boolean}>`
  display: ${props => props.isOpened ? "block" : "none"};
  margin: 5px;
  text-align: center;
  flex-shrink: 1;
  flex-grow: 1;
  overflow: auto;
  &::-webkit-scrollbar {
    background-color: #353535;
    height: 10px;
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #595858;
    border-radius: 20px;
  }
`;

export const IconItems = styled.div`
  border-top: 1px solid gray;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
