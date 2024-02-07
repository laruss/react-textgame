import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { Tooltip } from '@mui/material';
import { useAppDispatch } from 'app/redux/hooks.ts';
import { changeSlotName } from 'app/redux/slices/savesSlice';
import { setModalCanBeClosedOnEscape } from 'app/redux/slices/systemSlice.ts';
import { RefObject, useEffect, useRef, useState } from 'react';
import { KeyboardEvent } from 'react';
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable';
import { GIcon } from 'react-textgame-components';

import { SaveItem, SaveItemName } from './components';
import useOnDelete from './useOnDelete.ts';
import useOnLoad from './useOnLoad.ts';
import useOnSave from './useOnSave.ts';
import { getDate } from './utils';
// import { useNotification } from 'components/GNotification';

interface SaveLoadItemProps {
    name: string;
    data: object;
    index: number;
    datetime: number;
}

const SaveLoadItem = ({ name, data, index, datetime }: SaveLoadItemProps) => {
    const [itemName, setItemName] = useState(name);
    const [inEditMode, setInEditMode] = useState(false);
    const elRef: RefObject<HTMLElement> = useRef(null);
    const { handleSaveGame } = useOnSave({ index });
    const { handleLoadGame } = useOnLoad({ data });
    const { handleDeleteGame } = useOnDelete({ index });

    // const { handleNotification: handleSuccessRenameotification } = useNotification({
    //     content: 'saveslot has been renamed',
    //     severity: 'success',
    // });

    const dispatch = useAppDispatch();
    const renameSlot = (name: string) => dispatch(changeSlotName({ index, name }));

    const itemIsSaved = () => Object.keys(data).length > 0;

    const onNameChange = (e: ContentEditableEvent) => {
        // const input = e.target.value.replace(/[^a-z0-9]/gi, '');
        setItemName(e.target.value);
    };
    const onNameFocus = () => {
        if (!elRef.current) return;
        const selection = window.getSelection() as Selection;
        const range = document.createRange();
        range.selectNodeContents(elRef.current);
        selection.removeAllRanges();
        selection.addRange(range);
    };
    const onNameBlur = () => {
        setInEditMode(false);
    };
    const onNameKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            onNameBlur();
        } else if (e.key === 'Escape') {
            e.preventDefault();
            setItemName(name);
            onNameBlur();
        }
    };

    useEffect(() => {
        if (inEditMode) {
            dispatch(setModalCanBeClosedOnEscape(false));
            elRef.current && elRef.current.focus();
        } else {
            dispatch(setModalCanBeClosedOnEscape(true));
            let finalName = itemName
                .replace(/<[^>]*(>|$)|&nbsp;|&zwnj;|&raquo;|&laquo;|&gt;/g, ' ')
                .replace(/^[ \t]+|[ \t]+$/g, '');
            finalName = finalName === '' ? name : finalName;
            itemName === '' && setItemName(name);
            finalName !== name && renameSlot(finalName);
            // handleSuccessRenameotification();
        }
    }, [dispatch, inEditMode, itemName, name, renameSlot]);

    useEffect(() => setItemName(name), [name]);

    return (
        <SaveItem>
            <SaveItemName isEditable={inEditMode}>
                <Tooltip title={itemIsSaved() ? `date: ${getDate(datetime)}` : ''} placement="top">
                    <div style={{ width: '100%', display: 'inline-flex' }}>
                        <ContentEditable
                            style={{
                                fontWeight: itemIsSaved() ? 'bold' : 'normal',
                                paddingLeft: '10px',
                                paddingRight: '5px',
                            }}
                            onFocus={onNameFocus}
                            innerRef={elRef}
                            html={itemName}
                            onKeyDown={onNameKeyDown}
                            onChange={onNameChange}
                            disabled={!inEditMode}
                            onBlur={onNameBlur}
                        />
                    </div>
                </Tooltip>
            </SaveItemName>
            <GIcon title={'rename saveslot'} onClick={() => setInEditMode(true)} size={'large'} IconComponent={EditIcon}
                   disabled={!itemIsSaved()} />
            <GIcon title={'save'} onClick={handleSaveGame} size={'large'} IconComponent={SaveIcon} />
            <GIcon title={'load'} onClick={handleLoadGame} size={'large'} IconComponent={UploadFileIcon}
                   disabled={!itemIsSaved()} />
            <GIcon title={'delete'} onClick={handleDeleteGame} size={'large'} IconComponent={DeleteIcon}
                   disabled={!itemIsSaved()} />
        </SaveItem>
    );
};

export default SaveLoadItem;
