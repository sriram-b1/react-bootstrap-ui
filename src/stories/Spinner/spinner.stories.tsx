import {storiesOf} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import './spinner.scss'

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