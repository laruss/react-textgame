import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import modalContents, {modalContentsInt} from "./modalContents";
import {setModalContent} from "../../../engine/redux/slices/systemSlice";
import BaseModal from "./BaseModal";
import {RootState} from "../../../engine/redux/store";

const FakeComponent = styled.div``;

const Modal = () => {
    const system = useSelector((state: RootState) => state.system);
    const dispatch = useDispatch();
    const [content, setContent] = useState<modalContentsInt[0]|{}>({});

    useEffect(() => {
        if (system.modalContent !== null) {
            setContent(modalContents[system.modalContent]);
        }
    }, [system.modalContent]);

    const onClose = () => {
        system.modalCanCloseOnEsc && dispatch(setModalContent(null));
    };
    const isOpened = Boolean(system.modalContent);
    // @ts-ignore
    const baseModalStyle = content?.size?.style;

    return <BaseModal style={baseModalStyle} onClose={onClose} isOpened={isOpened}>
        {/*// @ts-ignore*/}
        {content && content.Content !== undefined ? <content.Content/> : <FakeComponent/>}
    </BaseModal>
};

export default Modal;