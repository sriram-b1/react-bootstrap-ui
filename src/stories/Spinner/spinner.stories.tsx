import {storiesOf} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import { Col, Container, ProgressBar, Row, Spinner } from "react-bootstrap";
import './spinner.scss'
// spinner-border-lg, blue-bg are user defined classes and are not the wrapper classes
storiesOf("POC2/Spinner", module)
    .add("Normal Spinner", () => (
        <div>
            <Container fluid>
            <Row>
                <Col>Normal</Col>
                <Col>Blue Background</Col>
            </Row>
            <Row>
                <Col className="white-background"><Spinner animation="border" className="spinner-border-lg" /></Col>
                <Col className="blue-background"><Spinner animation="border" className="blue-bg spinner-border-lg"/></Col>
            </Row>
            <Row>
                <Col className="white-background"><Spinner animation="border" /></Col>
                <Col className="blue-background"><Spinner animation="border" className="blue-bg"/></Col>
            </Row>
            <Row>
                <Col className="white-background"><Spinner animation="border" size="sm" /></Col>
                <Col className="blue-background"><Spinner animation="border" className="blue-bg" size="sm"/></Col>
            </Row>
        </Container>
        </div>
    ))
    .add("Spinner with labels", () => (
        <div>
            <Container fluid>
            <Row>
                <Col>Spinner with label</Col>
            </Row>
            <Row>
                <Col className="white-background"><Spinner animation="border" className="spinner-border-lg" /><span>Loading...</span></Col>
                
            </Row>
            <Row>
                <Col className="white-background"><Spinner animation="border"></Spinner><span>Loading...</span></Col>
            </Row>
            <Row>
                <Col className="white-background"><Spinner animation="border" size="sm" /><span>Loading...</span></Col>
            </Row>
        </Container>
        </div>
    ))