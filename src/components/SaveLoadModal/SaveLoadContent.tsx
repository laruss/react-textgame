import { useAppSelector } from 'app/redux/hooks';
import { selectSlots } from 'app/redux/slices/savesSlice';

import { Body, Header, HeaderText, SaveLoadMain } from './components';
import FilesHandler from './FilesHandler';
import SaveLoadItem from './SaveLoadItem';

const SaveLoadContent = () => {
    const saveSlots = useAppSelector(selectSlots);

    return (
        <SaveLoadMain className="save-main">
            <Header className="save-header">
                <HeaderText>Save Games</HeaderText>
                <FilesHandler />
            </Header>
            <Body className="save-body">
                {
                    saveSlots.map((saveslot, key) => (
                        <SaveLoadItem
                            name={saveslot.name}
                            data={saveslot.data}
                            index={key}
                            key={key}
                            datetime={saveslot.datetime}
                        />
                    ))
                }
            </Body>
        </SaveLoadMain>
    );
};

export default SaveLoadContent;
