import {useDispatch, useSelector} from "react-redux";
import BaseModal from "./BaseModal";
import modalSizes from "./modalSizes";
import { closeDialog } from "../../../engine/redux/slices/systemSlice";
import styled from "styled-components";
import settings from "../../../engine/settings";
import {RootState} from "../../../engine/redux/store";
import {useEffect, useState} from "react";
import GButton from "../GButton";

const DialogName = styled.div`
  font: inherit;
  cursor: default;
  font-size: 40px;
  font-weight: bold;
  padding: 0 100px 0 100px;
  text-align: center;
`;

const DialogBody = styled.div`
  font: inherit;
  font-size: 20px;
  cursor: default;
  padding: 40px 40px 20px 40px;
  text-align: center;
`;

const Buttons = styled.div`
  display: inline-flex;
  width: 100%;
  justify-content: center;
  gap: 20%;
  padding-bottom: 20px;
`;

interface dialogContentInterface {
    name?: string;
    body?: string|null;
    buttons?: { [index: string]: string|number|boolean; };
}

const Dialog = () => {
    const system = useSelector((state: RootState) => state.system);
    const dispatch = useDispatch();
    let initDialogContent: dialogContentInterface = {};
    const [content, setContent] = useState(initDialogContent);

    const baseModalStyle = modalSizes.dialog.style;
    const onClose = () => dispatch(closeDialog(null));
    const isOpened = system.dialog.name !== '';

    useEffect(() => {
        if (system.dialog.name !== '') setContent(system.dialog);
    }, [system.dialog]);

    return (
        <BaseModal zIndex={100} style={baseModalStyle} onClose={onClose} isOpened={isOpened}>
            <DialogName>{content.name}</DialogName>
            <DialogBody>{content.body ? content.body : ""}</DialogBody>
            <Buttons>
                {Object.entries(system.dialog.buttons).map(([name, data], key) => {
                    const dataField = {[settings.dialog.buttonDataPropertyName]: data};
                    return <GButton id={settings.dialog.buttonId} onClick={onClose} key={key} {...dataField}>{name}</GButton>
                })}
            </Buttons>
        </BaseModal>
    );
};

export default Dialog;