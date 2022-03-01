import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { Container, Row, Col } from "react-bootstrap";

import Page from "./features/story/Page";
import Menu from "./features/leftSideMenu/Menu";
import Dialog from "./features/Dialog";
import variables from "./Story/variables";
import { passages } from "./Utils";
import { setVariables } from "./projectSlice";
import "./features/storiesRegister";

import './App.css';

const sideMenuIsShown = () => (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) > 992);

function App() {
    const dispatch = useDispatch();
    const project = useSelector(state => state.project);
    const [showSideMenu, setShowSideMenu] = useState(sideMenuIsShown());

    useEffect(() => {
        if (variables.areChanged()) {
            dispatch(setVariables(variables));
            variables.compile();
        }
    });

    const onHideButtonClick = () => setShowSideMenu(false);
    const onShowButtonClick = () => setShowSideMenu(true);

    return (
        <div className="App" id='dialog-target' style={{minHeight: 200}}>
            <Container fluid>
                <Row>
                    <Col className={showSideMenu? "d-block" : "d-none"}>
                        <Container
                            hidden={!showSideMenu}
                            style={{height: "100vh"}}
                        ><Menu onHideButtonClick={onHideButtonClick}/>
                        </Container>
                    </Col>
                    <Col sm={12} md={showSideMenu ? 9 : 12} hidden={showSideMenu && !sideMenuIsShown()}>
                        <button
                            className="side-menu-control-btn"
                            style={showSideMenu ? {display: "none"} : {position: "absolute", display: "block"}}
                            onClick={onShowButtonClick}
                        >&gt;</button>
                        <Page passages={passages} current={project.passages.current? project.passages.current : project.passages.start}/>
                    </Col>
                </Row>
            </Container>
            <Dialog />
        </div>
    );
}

export default App;
