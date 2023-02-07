import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../engine/redux/store";

import {Body, Header, HeaderText, SaveLoadMain } from "./components";
import SaveLoadItem from "./SaveLoadItem";
import FilesHandler from "./FilesHandler";
import Spinner from "../../other/Spinner";
import {useState} from "react";
import {setModalCanCloseOnEscape} from "../../../../engine/redux/slices/systemSlice";


const SaveLoadContent = (): JSX.Element => {
    const dispatch = useDispatch();
    const [spinnerIsShown, setIsShown] = useState(false);
    const saves = useSelector((state: RootState) => state.saves);
    const saveSlots = saves.slots;

    const setSpinnerIsShown = (state: boolean) => {
        setIsShown(state);
        dispatch(setModalCanCloseOnEscape({canClose: !state}));
    };

    return (
        <SaveLoadMain className='save-main'>
            <Header className='save-header'>
                <HeaderText>Save Games</HeaderText>
                <FilesHandler setSpinnerIsShown={setSpinnerIsShown}/>
            </Header>
            <Body className="save-body">
                {
                    saveSlots.map((saveslot, key) => (
                        <SaveLoadItem
                            name={saveslot.name}
                            data={saveslot.data}
                            index={key}
                            key={key}
                            setSpinnerIsShown={setSpinnerIsShown}
                            datetime={saveslot.datetime}
                        />
                    ))
                }
            </Body>
            <Spinner isShown={spinnerIsShown}/>
        </SaveLoadMain>
    );
};

export default SaveLoadContent;