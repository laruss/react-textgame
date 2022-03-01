import React from "react";
import "./Page.css";
import { Container, Row, Col } from "react-bootstrap";

const Page = (props) => {
    return (
        <div className="page" id="page">
            <Container fluid>
                <Row>
                    <Col lg={2} className="d-none d-xl-block"/>
                    <Col>{props.passages[props.current]}</Col>
                    <Col lg={2} className="d-none d-xl-block"/>
                </Row>
            </Container>
        </div>
    )
};

export default Page;