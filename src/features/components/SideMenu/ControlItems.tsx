import GIcon from "../GIcon";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import {isMobile} from "react-device-detect";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import {setFullScreen} from "../../../engine/redux/slices/systemSlice";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../engine/redux/store";
import styled, {css} from "styled-components";
import {useEffect, useState} from "react";
import settings from "../../../engine/settings";
import {ActionCreators} from "redux-undo";

export const ControlItemsContainer = styled.div<{menuIsShown: boolean}>`
  width: 100%;
  ${props => props.menuIsShown ? css`
    display: inline-flex;
    height: auto;
  ` : css`
    display: flex;
    flex-direction: column;
  `}
`;

const Icons = styled.span<{menuIsShown: boolean, iconsShown: boolean}>`
  display: flex;
  flex-grow: 1;
  visibility: ${props => (props.menuIsShown || props.iconsShown) ? 'visible' : 'hidden'};
  opacity: ${props => (props.menuIsShown || props.iconsShown) ? '100%' : '0'};
  transition: visibility 300ms, opacity 300ms;
  ${props => props.menuIsShown ? css`
    flex-direction: row;
    justify-content: center;
    gap: 10px;
  ` : css`
    flex-direction: column;
    align-self: flex-end;
  `}
`;

interface ControlItemsProps {
    menuIsShown: boolean;
}

const ControlItems = ({menuIsShown}: ControlItemsProps) => {
    const system = useSelector((state: RootState) => state.system);
    const game = useSelector((state: RootState) => state.game);
    const [wasRefreshed, setWasRefreshed] = useState(false);
    const dispatch = useDispatch();
    const canUndo = game.past.length > 0;
    const canReDo = game.future.length > 0;

    const toggleFullScreen = () => {
        dispatch(setFullScreen(!system.isFullScreen));
    };

    const setWasRefreshedTrue = () => setWasRefreshed(true);

    const handleUndo = () => dispatch(ActionCreators.undo());
    const handleRedo = () => dispatch(ActionCreators.redo());

    useEffect(() => {
        window.addEventListener("beforeunload", setWasRefreshedTrue);
        return () => {
            window.removeEventListener("beforeunload", setWasRefreshedTrue);
        };
    }, []);

    useEffect(() => {
        dispatch(ActionCreators.clearHistory());
        setWasRefreshed(false);
    }, [wasRefreshed]);

    const gameIcons = settings.sideMenu.buttons.gameIcons;

    return (
        <ControlItemsContainer menuIsShown={menuIsShown} className='sidemenu-control-items'>
            <Icons menuIsShown={menuIsShown} iconsShown={true}>
                <GIcon
                    onClick={handleUndo}
                    size='var(--header-height)'
                    title={gameIcons.previousPage}
                    IconComponent={UndoIcon}
                    isDisabled={!canUndo}
                />
                <GIcon
                    onClick={handleRedo}
                    size='var(--header-height)'
                    title={gameIcons.nextPage}
                    IconComponent={RedoIcon}
                    isDisabled={!canReDo}/>
                { !isMobile && <GIcon onClick={toggleFullScreen} size='var(--header-height)' title={gameIcons.fullScreen} IconComponent={FullscreenIcon}/> }
            </Icons>
        </ControlItemsContainer>
    );
};

export default ControlItems;