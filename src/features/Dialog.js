import React from "react";
import MainMenu from "./MainMenu";
import SaveMenu from "./saves/SaveMenu";
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import {useDispatch, useSelector} from "react-redux";

import {setDialogContent} from "../projectSlice";

const Dialog = () => {
    const dispatch = useDispatch();
    const dialog = useSelector(state => state.project.dialog);

    const close = () => {
        dispatch(setDialogContent(null));
    }

    const getContent = () => {
        let content;
        let style = {}
        if (dialog.content === "mainMenu")
            content = <MainMenu/>;
        else if (dialog.content === "saveMenu")
            content = <SaveMenu action="save"/>;
        else if (dialog.content === "loadMenu")
            content = <SaveMenu action="load"/>;
        else content = <div/>

        return (
            <div style={style}>
                <button className="dialog-close-btn" onClick={close}>X</button>
                {content}
            </div>
        )
    };

    return (
        <div className="dialog-wrapper">
            <DialogComponent
                height="500px"
                width="500px"
                target='#dialog-target'
                isModal={true}
                visible={dialog.content !== null}
                closeOnEscape={true}
                zindex={1000}
                close={close}
            >
                {getContent()}
            </DialogComponent>
        </div>
    );
};

export default Dialog;