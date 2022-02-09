import React, {useState} from "react";

import {loadState, saveState} from "../app/localStorage";
import {setDialogContent} from "../projectSlice";
import {useDispatch} from "react-redux";

import { getPreloadedState } from "../app/store";

const MainMenu = () => {
    const dispatch = useDispatch();
    const [restart, setRestart] = useState(false);

    const onSaveClick = e => dispatch(setDialogContent("saveMenu"));

    const onLoadClick = e => dispatch(setDialogContent("loadMenu"));

    const onRestartClick = e => setRestart(true);
    const onRestartNoClick = e => setRestart(false);
    const onRestartYesClick = e => {
        const saves = loadState().saves;
        localStorage.state = undefined;
        const state = getPreloadedState();
        state.saves = saves;
        saveState(state);
        window.location.reload();
    };

    const mainMenu = <>
        <div onClick={onSaveClick}>Save</div>
        <div onClick={onLoadClick}>Load</div>
        <div onClick={onRestartClick}>Restart Game</div>
    </>

    const restartMenu = <>
        <span>Do you really want to restart the game?</span>
        <span>All unsaved changes will be lost</span>
        <div onClick={onRestartYesClick}>Yes</div>
        <div onClick={onRestartNoClick}>No</div>
    </>

    return (
        <div className="main-menu">
            {restart ? restartMenu : mainMenu}
        </div>
    );
};

export default MainMenu;