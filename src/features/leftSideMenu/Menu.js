import React from "react";
import {useDispatch} from "react-redux";
import {setDialogContent} from "../../projectSlice";
import settings from "../../Story/settings";

import "./Menu.css";

const Menu = () => {
    const dispatch = useDispatch();

    const onMenuClick = () => {
        dispatch(setDialogContent("mainMenu"));
    };

    return (
        <div className="left-side-menu">
            This is left-side-menu
            <div className="story-name"><h1>{settings.project.name}</h1></div>
            <div className="story-buttons"/>
            <div className="story-content">Story-Content</div>
            <div className="story-menu">
                <button onClick={onMenuClick}>Menu</button>
            </div>
        </div>
    )
};

export default Menu;