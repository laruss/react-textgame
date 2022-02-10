import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setDialogContent, loadState} from "../../projectSlice";
import {saveItem, deleteItem} from "./savesSlice";

const SaveMenu = (props) => {
    const dispatch = useDispatch();
    const saves = useSelector(state => state.saves);
    const project = useSelector(state => state.project);

    const onBackClick = e => dispatch(setDialogContent("mainMenu"));

    const getTimeStampAndDate = () => {
        const timestamp = Date.now();
        const date = new Date(timestamp);
        const result = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;

        return {timestamp, date: result};
    };

    const onSaveClick = e => {
        const index = e.target.id;
        const { timestamp, date } = getTimeStampAndDate();
        const item = {
            name: date,
            datetime: timestamp,
            data: {
                passages: project.passages,
                variables: project.variables
            }
        };
        dispatch(saveItem({ index, item }));
    };

    const onLoadClick = e => {
        const index = e.target.id;
        const data = saves.items[index].data;
        dispatch(loadState(data));
        setTimeout(() => window.location.reload(), 1000);
    };

    const onDeleteClick = e => dispatch(deleteItem(e.target.id));

    const getItem = (element, key) => {
        const button = props.action === "save" ?
            <span className="button" id={key} onClick={onSaveClick}>Save</span> :
            <span
                className={element.name === "" ? "disabled-button" : "button"}
                onClick={element.name === "" ? ()=>{} : onLoadClick}
                id={key}
            >Load</span>
        let deleteButton = <span className="button" id={key} onClick={onDeleteClick}>Delete</span>
        let name = element.name
        if (element.name === "") {
            name = "SAVESLOT";
            deleteButton = <span/>
        }
        return (
            <span key={key} className="save-item-wrapper">
                <span style={element.name === "" ? {color: "grey"} : {}}>{name}</span>
                {button}
                {deleteButton}
            </span>
        );
    };

    return (
        <div className="main-menu">
            {saves.items.map((element, key) => {
                return getItem(element, key);
            })}
            <div onClick={onBackClick}>Back</div>
        </div>
    );
};

export default SaveMenu;