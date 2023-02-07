import React, {useEffect, useRef, useState} from "react";
import ContentEditable, {ContentEditableEvent} from "react-contenteditable";
import {KeyboardEvent} from "react";

import {SaveItem, SaveItemName} from "./components";
import GIcon from "../../GIcon";
import EditIcon from "@mui/icons-material/Edit";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import DeleteIcon from "@mui/icons-material/Delete";

import settings from "../../../../engine/settings";
import Dialog from "../../../../engine/helpers/Dialog";
import {changeSlotName, deleteSlot, isSuccess, updateSlot} from "../../../../engine/redux/slices/savesSlice";
import {updateAll} from "../../../../engine/redux/slices/gameSlice";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../engine/redux/store";
import GTooltip from "../../GTooltip";
import {getDate} from "./utils";
import GHelpers from "../../../../engine/helpers/GHelpers";
import {setModalCanCloseOnEscape, setModalContent} from "../../../../engine/redux/slices/systemSlice";

interface SaveLoadItemProps {
    name: string;
    data: object;
    index: number;
    datetime: number;
    setSpinnerIsShown: (state: boolean) => void
}

const SaveLoadItem = ({name, data, index, datetime, setSpinnerIsShown}: SaveLoadItemProps) => {
    const [itemName, setItemName] = useState(name);
    const [inEditMode, setInEditMode] = useState(false);
    const elRef = useRef<any>();

    const buttons = settings.saveLoadContent.buttons;
    const game = useSelector((state: RootState) => state.game);
    const dispatch = useDispatch();

    const saveToSlot = () => dispatch(updateSlot({index, data: game.present, datetime: Date.now()}));
    const loadFromSlot = () => dispatch(updateAll({data: data}));
    const removeSlot = () => dispatch(deleteSlot({index}));
    const renameSlot = (name: string) => dispatch(changeSlotName({index, name}));
    const succeed = () => dispatch(isSuccess());

    const onSaveClick = async () => {
        const dialog = Dialog({
            name: settings.saveLoadContent.saveDialog.name,
            body: settings.saveLoadContent.saveDialog.body,
            buttons: null
        })
        const result = await dialog.open();
        if (result === dialog.buttons.yes) {
            setSpinnerIsShown(true);
            saveToSlot();
            succeed();
            GHelpers.notify(buttons.successMessages.save);
            setSpinnerIsShown(false);
        }
    };
    const onLoadClick = async () => {
        const dialog = Dialog({
            name: settings.saveLoadContent.loadDialog.name,
            body: settings.saveLoadContent.loadDialog.body,
            buttons: null
        });
        const result = await dialog.open();
        if (result === dialog.buttons.yes) {
            setSpinnerIsShown(true);
            loadFromSlot();
            succeed();
            GHelpers.notify(buttons.successMessages.load);
            setSpinnerIsShown(false);
            dispatch(setModalContent(null));
            GHelpers.disableUndo();
        }
    };
    const onDeleteClick = async () => {
        const dialog = Dialog({
            name: settings.saveLoadContent.deleteSaveDialog.name,
            body: settings.saveLoadContent.deleteSaveDialog.body,
            buttons: null
        });
        const result = await dialog.open();
        if (result === dialog.buttons.yes) {
            removeSlot();
            succeed();
            GHelpers.notify(buttons.successMessages.delete);
        }
    };
    const itemIsSaved = () => Object.keys(data).length > 0;

    const onNameChange = (e: ContentEditableEvent) => {
        const input = e.target.value.replace(/[^a-z0-9]/gi, '');
        setItemName(e.target.value);
    };
    const onNameFocus = () => {
        const selection = window.getSelection() as Selection;
        const range = document.createRange();
        range.selectNodeContents(elRef.current);
        selection.removeAllRanges();
        selection.addRange(range);
    };
    const onNameBlur = ()=> {
        setInEditMode(false);
    };
    const onNameKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            onNameBlur();
        }
        else if (e.key === 'Escape') {
            e.preventDefault();
            setItemName(name);
            onNameBlur();
        }
    };

    useEffect(() => {
        if (inEditMode) {
            dispatch(setModalCanCloseOnEscape({canClose: false}));
            elRef.current && elRef.current.focus();
        }
        else {
            dispatch(setModalCanCloseOnEscape({canClose: true}));
            let finalName = itemName
                .replace(/<[^>]*(>|$)|&nbsp;|&zwnj;|&raquo;|&laquo;|&gt;/g, ' ')
                .replace(/^[ \t]+|[ \t]+$/g, '');
            finalName = finalName === "" ? name : finalName;
            itemName === "" && setItemName(name);
            finalName !== name && renameSlot(finalName) && GHelpers.notify(buttons.successMessages.rename);
        }
    }, [inEditMode]);

    useEffect(() => setItemName(name), [name]);

    return (
        <SaveItem>
            <SaveItemName isEditable={inEditMode}>
                <GTooltip title={itemIsSaved() ? `date: ${getDate(datetime)}` : ""} placement="top">
                    <div style={{width: '100%', display: "inline-flex"}}>
                        <ContentEditable
                            style={{fontWeight: itemIsSaved() ? "bold" : "normal", paddingLeft: "10px", paddingRight: "5px"}}
                            onFocus={onNameFocus}
                            innerRef={elRef}
                            html={itemName}
                            onKeyDown={onNameKeyDown}
                            onChange={onNameChange}
                            disabled={!inEditMode}
                            onBlur={onNameBlur}
                        />
                    </div>
                </GTooltip>
            </SaveItemName>
            <GIcon title={buttons.rename} onClick={()=>setInEditMode(true)} size={buttons.size} IconComponent={EditIcon} isDisabled={!itemIsSaved()}/>
            <GIcon title={buttons.save} onClick={onSaveClick} size={buttons.size} IconComponent={FileDownloadIcon}/>
            <GIcon title={buttons.load} onClick={onLoadClick} size={buttons.size} IconComponent={FileUploadIcon} isDisabled={!itemIsSaved()}/>
            <GIcon title={buttons.delete} onClick={onDeleteClick} size={buttons.size} IconComponent={DeleteIcon} isDisabled={!itemIsSaved()}/>
        </SaveItem>
    );
};

export default SaveLoadItem;