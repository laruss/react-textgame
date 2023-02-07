import { toast } from "react-toastify";
import {ToastOptions} from "react-toastify/dist/types";
import Dialog from "./Dialog";
import {store} from "../redux/store";
import {ActionCreators} from "redux-undo";
import {setModalContent, setSideMenuIsOpened} from "../redux/slices/systemSlice";
import modalContents from "../../features/components/Modal/modalContents";
import {setCurrentPassage} from "../redux/slices/gameSlice";

const notify = (element: string|JSX.Element, onClick?: ()=>void, options?: ToastOptions) => {
    element = typeof element == 'string' ? (
        <div style={{width: '100%', height: '100%'}} onClick={onClick}>{element}</div>
    ) : element;
    options = options ? options : {
        hideProgressBar: false,
        position: "top-center",
        theme: "dark"
    }
    return toast(element, options);
};

const disableUndo = () => store.dispatch(ActionCreators.clearHistory());

const closeSideBar = () => store.dispatch(setSideMenuIsOpened(false));

const openSideBar = () => store.dispatch(setSideMenuIsOpened(true));

const openSavegames = () => store.dispatch(setModalContent(modalContents.save.id));

const jumpTo = (to: string) => store.dispatch(setCurrentPassage(to));

export default {
    closeSideBar,
    Dialog,
    disableUndo,
    jumpTo,
    notify,
    openSideBar,
    openSavegames,
};