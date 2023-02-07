import { RC4, SHA3 } from "crypto-js";
import * as CryptoJS from 'crypto-js';
import {download, convertWordArrayToUint8Array, getEncryptKey, getFileName, fileFormat} from "./utils";
import settings from "../../../../engine/settings";
import GIcon from "../../GIcon";

import UploadFileIcon from '@mui/icons-material/UploadFile';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';

import GHelpers from "../../../../engine/helpers/GHelpers";
import {ChangeEvent, useRef} from "react";

interface FileHandlerProps {
    setSpinnerIsShown: (state: boolean) => void;
}

const FilesHandler = ({setSpinnerIsShown}: FileHandlerProps) => {
    const encryptKey = getEncryptKey();
    const filetype = 'text/plain';
    const persistKey = 'persist:root';
    const inputRef = useRef<any>(null);
    const pass = SHA3(encryptKey);

    const onDownloadClick = async () => {
        setSpinnerIsShown(true);
        try {
            const pass = SHA3(encryptKey);
            const savesAsString = localStorage.getItem(persistKey);
            const stateAsBlob = new Blob([savesAsString as BlobPart], { type: filetype });
            const fileName = getFileName();
            const file = new File([stateAsBlob], fileName, { type: filetype });
            const reader = new FileReader();

            reader.onload = (e) => {
                // @ts-ignore
                const wordArray = CryptoJS.lib.WordArray.create(e.target.result);
                const encrypted = RC4.encrypt(wordArray, pass).toString();
                download(encrypted, file.name, file.type);
            };
            reader.readAsArrayBuffer(file);
        } catch (e) {
            GHelpers.notify(settings.app.generalErrorText);
            console.warn(e);
        }
        setSpinnerIsShown(false);
    };

    const onInputClick = () => {
        setSpinnerIsShown(true);
        document.body.onfocus = () => {
            document.body.onfocus = null;
            setSpinnerIsShown(false);
        };
    };

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSpinnerIsShown(true);
        const file: File = ((e.target as HTMLInputElement).files as FileList)[0];
        if (!file) return setSpinnerIsShown(false);
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                // @ts-ignore
                const decrypted = RC4.decrypt(e.target.result as string, pass);
                const typedArray = convertWordArrayToUint8Array(decrypted);
                let utf8decoder = new TextDecoder();
                const objectAsString = utf8decoder.decode(typedArray);
                JSON.parse(objectAsString);
                localStorage.setItem(persistKey, objectAsString);
                window.location.reload();
            } catch (error) {
                GHelpers.notify(buttons.errorMessages.download);
                console.warn(e);
            }
        };
        reader.readAsText(file);
        setSpinnerIsShown(false);
    };

    const onUploadClick = async () => {
        inputRef.current.click();
    };

    const buttons = settings.saveLoadContent.buttons;

    return (
        <>
            <input
                type={'file'}
                accept={fileFormat}
                onClick={onInputClick}
                onChange={onInputChange}
                ref={inputRef}
                style={{visibility: "hidden", width: 0, height: 0}}
            />
            <GIcon title={buttons.download} onClick={onDownloadClick} size={buttons.size} IconComponent={SimCardDownloadIcon}/>
            <GIcon title={buttons.upload} onClick={onUploadClick} size={buttons.size} IconComponent={UploadFileIcon}/>
        </>
    );
};

export default FilesHandler;