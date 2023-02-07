import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from "react-redux";

import styled, {ThemeProvider} from "styled-components";
import importAll from './engine/helpers/importAll';

import 'react-toastify/dist/ReactToastify.css';
import './fonts/fonts.css';

import SideMenu from "./features/components/SideMenu/SideMenu";
import Page from "./features/components/other/Page";
import { GlobalStyles } from "./features/styles/GlobalStyles";
import { lightTheme, darkTheme } from "./features/styles/Theme";
import { useDarkMode } from "./features/styles/useDarkMode";
import Modal from "./features/components/Modal/Modal";
import Dialog from "./features/components/Modal/Dialog";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import {RootState} from "./engine/redux/store";
import {setFullScreen} from "./engine/redux/slices/systemSlice";
import {ToastContainer} from "react-toastify";
import Spinner from "./features/components/other/Spinner";

importAll(require.context('./Story/passages', true, /\.js/));

const AppWrapper = styled.div`
  display: flex;
  overflow: hidden;
`;

function App() {
    const system = useSelector((state: RootState) => state.system);
    const dispatch = useDispatch();
    const [theme, mountedComponent] = useDarkMode();
    const [isLoading, setIsLoading] = useState(true);
    const themeMode = theme === 'light' ? lightTheme : darkTheme;
    const handle = useFullScreenHandle();

    const handleLoading = () => setIsLoading(false);

    useEffect(() => {
        system.isFullScreen && !handle.active && handle.enter();
        !system.isFullScreen && handle.active && handle.exit();
    }, [system.isFullScreen, handle]);

    useEffect(() => {
        if (document.readyState !== "complete")
            window.addEventListener("load",handleLoading);
        else handleLoading();
        return () => window.removeEventListener("load",handleLoading);
    }, []);

    const setFullScreenOff = () => {
        !handle.active && dispatch(setFullScreen(false));
    };

    if(!mountedComponent) return <div/>;

    return (
        <ThemeProvider theme={themeMode}>
            <>
                <GlobalStyles/>
                <FullScreen handle={handle} onChange={setFullScreenOff}>
                    <Spinner isShown={isLoading} zIndex={50}/>
                    <AppWrapper className="App">
                        <SideMenu/>
                        <Page/>
                        <Modal/>
                        <Dialog/>
                        <ToastContainer/>
                    </AppWrapper>
                </FullScreen>
            </>
        </ThemeProvider>
    );
}

export default App;
