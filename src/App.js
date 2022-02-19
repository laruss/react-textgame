import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";

import Page from "./features/story/Page";
import Menu from "./features/leftSideMenu/Menu";
import Dialog from "./features/Dialog";
import variables from "./Story/variables";
import { passages } from "./Utils";
import { setVariables } from "./projectSlice";
import "./features/storiesRegister";

import './App.css';

function App() {
    const dispatch = useDispatch();
    const project = useSelector(state => state.project);

    useEffect(() => {
        if (variables.areChanged()) {
            dispatch(setVariables(variables));
            variables.compile();
        }
    });

    return (
        <div className="App" id='dialog-target' style={{minHeight: 500}}>
            <Menu />
            <Page passages={passages} current={project.passages.current !== "" ? project.passages.current : project.passages.start}/>
            <Dialog />
        </div>
    );
}

export default App;
