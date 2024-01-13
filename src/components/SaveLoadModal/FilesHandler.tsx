import DownloadIcon from '@mui/icons-material/Download';
import UploadIcon from '@mui/icons-material/Upload';
import { useNotification } from 'components/GNotification';
import { useSpinner } from 'components/GSpinner';
import { RC4, SHA3 } from 'crypto-js';
import CryptoJS from 'crypto-js';
import { ChangeEvent, RefObject, useMemo, useRef } from 'react';
import { GIcon } from 'react-textgame-components';

import { convertWordArrayToUint8Array, download, fileFormat, getEncryptKey, getFileName } from './utils';

export type NodeRef = RefObject<HTMLInputElement>;

const filetype = 'text/plain';
const persistKey = 'persist:root';

const FilesHandler = () => {
    const encryptKey = useMemo(getEncryptKey, []);
    const inputRef: NodeRef = useRef(null);
    const pass = useMemo(() => SHA3(encryptKey), [encryptKey]);
    const { showSpinner } = useSpinner();

    const { handleNotification: handleErrorNotification } = useNotification({
        content: 'Something went wrong 😢, check console for details.',
        severity: 'error',
    });

    const { handleNotification: handleLoadErrorNotification } = useNotification({
        content: 'It seems like save file is from another game or corrupted 😢',
        severity: 'error',
    });

    const onDownloadClick = async () => {
        showSpinner(true);
        try {
            const pass = SHA3(encryptKey);
            const savesAsString = localStorage.getItem(persistKey);
            const stateAsBlob = new Blob([savesAsString as BlobPart], { type: filetype });
            const fileName = getFileName();
            const file = new File([stateAsBlob], fileName, { type: filetype });
            const reader = new FileReader();

            reader.onload = (e) => {
                const result = e.target?.result;
                if (!result) return;
                const wordArray = CryptoJS.lib.WordArray.create(result as unknown as undefined);
                const encrypted = RC4.encrypt(wordArray, pass).toString();
                download(encrypted, file.name, file.type);
            };
            reader.readAsArrayBuffer(file);
        } catch (e) {
            handleErrorNotification();
            console.warn(e);
        }
        showSpinner(false);
    };

    const onInputClick = () => {
        showSpinner(true);
        document.body.onfocus = () => {
            document.body.onfocus = null;
            showSpinner(false);
        };
    };

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        showSpinner(true);
        const file: File = ((e.target as HTMLInputElement).files as FileList)[0];
        if (!file) return showSpinner(false);
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const decrypted = RC4.decrypt(e.target?.result as string, pass);
                const typedArray = convertWordArrayToUint8Array(decrypted);
                const utf8decoder = new TextDecoder();
                const objectAsString = utf8decoder.decode(typedArray);
                JSON.parse(objectAsString);
                localStorage.setItem(persistKey, objectAsString);
                window.location.reload();
            } catch (error) {
                handleLoadErrorNotification();
                console.warn(e);
            }
        };
        reader.readAsText(file);
        showSpinner(false);
    };

    const onUploadClick = async () => {
        inputRef.current?.click();
    };

    return (
        <>
            <input
                type={'file'}
                accept={fileFormat}
                onClick={onInputClick}
                onChange={onInputChange}
                ref={inputRef}
                style={{ visibility: 'hidden', width: 0, height: 0 }}
            />
            <GIcon
                title={'download to device'}
                onClick={onDownloadClick}
                size={'large'}
                IconComponent={DownloadIcon}
            />
            <GIcon
                title={'upload from device'}
                onClick={onUploadClick}
                size={'large'}
                IconComponent={UploadIcon}
            />
        </>
    );
};

export default FilesHandler;
