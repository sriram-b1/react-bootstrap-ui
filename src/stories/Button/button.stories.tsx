import React from 'react';
import {storiesOf} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import { Button, Container, Row, Col } from 'react-bootstrap';

import '../../wrapper-styles/index.scss'

storiesOf("Button", module)
    .add("Primary", () => (
        <Container>
            <Row>
                <Col>Normal</Col>
                <Col>Medium</Col>
                <Col>Small</Col>
            </Row>
            <Row>
                <Col> <Button variant="primary" size="lg">Primary</Button> </Col>
                <Col> <Button variant="primary">Primary</Button> </Col>
                <Col> <Button variant="primary" size="sm">Primary</Button> </Col>
            </Row>
            <Row><Col className="d-grid">Fluid</Col></Row>
            <Row><Col className="d-grid"><Button variant="primary" size="lg">Primary</Button></Col></Row>

        </Container>
    ))
    .add("Secondary", () => (
        <Container>
            <Row>
                <Col>Normal</Col>
                <Col>Medium</Col>
                <Col>Small</Col>
            </Row>
            <Row>
                <Col> <Button variant="outline-primary" size="lg">Secondary</Button> </Col>
                <Col> <Button variant="outline-primary">Secondary</Button> </Col>
                <Col> <Button variant="outline-primary" size="sm">Secondary</Button> </Col>
            </Row>
            <Row><Col className="d-grid">Fluid</Col></Row>
            <Row><Col className="d-grid"><Button variant="outline-primary" size="lg">Secondary</Button></Col></Row>

        </Container>
    ))
    .add("Success", () => (
        <Container>
            <Row>
                <Col>Normal</Col>
                <Col>Medium</Col>
                <Col>Small</Col>
            </Row>
            <Row>
                <Col> <Button variant="success" size="lg">Tertiary</Button> </Col>
                <Col> <Button variant="success">Tertiary</Button> </Col>
                <Col> <Button variant="success" size="sm">Tertiary</Button> </Col>
            </Row>
            <Row><Col className="d-grid">Fluid</Col></Row>
            <Row><Col className="d-grid"><Button variant="success" size="lg">Tertiary</Button></Col></Row>

        </Container>
    ))
    .add("Warning", () => (
        <Container>
            <Row>
                <Col>Normal</Col>
                <Col>Medium</Col>
                <Col>Small</Col>
            </Row>
            <Row>
                <Col> <Button variant="warning" size="lg">Warning</Button> </Col>
                <Col> <Button variant="warning">Warning</Button> </Col>
                <Col> <Button variant="warning" size="sm">Warning</Button> </Col>
            </Row>
            <Row><Col className="d-grid">Fluid</Col></Row>
            <Row><Col className="d-grid"><Button variant="warning" size="lg">Warning</Button></Col></Row>

        </Container>
    ))
    .add("Danger", () => (
        <Container>
            <Row>
                <Col>Normal</Col>
                <Col>Medium</Col>
                <Col>Small</Col>
            </Row>
            <Row>
                <Col> <Button variant="danger" size="lg">Danger</Button> </Col>
                <Col> <Button variant="danger">Danger</Button> </Col>
                <Col> <Button variant="danger" size="sm">Danger</Button> </Col>
            </Row>
            <Row><Col className="d-grid">Fluid</Col></Row>
            <Row><Col className="d-grid"><Button variant="danger" size="lg">Danger</Button></Col></Row>

        </Container>
    ))
    .add("Light", () => (
        <Container>
            <Row>
                <Col>Normal</Col>
                <Col>Medium</Col>
                <Col>Small</Col>
            </Row>
            <Row>
                <Col> <Button variant="light" size="lg">Light</Button> </Col>
                <Col> <Button variant="light">Light</Button> </Col>
                <Col> <Button variant="light" size="sm">Light</Button> </Col>
            </Row>
            <Row><Col className="d-grid">Fluid</Col></Row>
            <Row><Col className="d-grid"><Button variant="light" size="lg">Light</Button></Col></Row>

        </Container>
    ))
    .add("Link", () => (
        <div>
            <Button variant="link">Link</Button>
        </div>
    ))