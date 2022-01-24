import React from 'react';
import {storiesOf} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import { Button, Container, Row, Col } from 'react-bootstrap';

import '../../wrapper-styles/index.scss'

storiesOf("POC2/Button States", module)
    .add("States", () => (
        <Container>
            <Row>
                <Col>Primary</Col>
            </Row>
            <Row>
                <Col> <Button variant="primary">Primary</Button> </Col>
                <Col> <Button variant="primary" disabled>Primary</Button> </Col>
            </Row>
            <Row>
                <Col>Secondary</Col>
            </Row>
            <Row>
                <Col> <Button variant="outline-primary">Secondary</Button> </Col>
                <Col> <Button variant="outline-primary" disabled>Secondary</Button> </Col>
            </Row>
            <Row>
                <Col>Tertiary</Col>
            </Row>
            <Row>
                <Col> <Button variant="light">Tertiary</Button> </Col>
                <Col> <Button variant="light" disabled>Tertiary</Button> </Col>
            </Row>
            <Row>
                <Col>Warning</Col>
            </Row>
            <Row>
                <Col> <Button variant="warning">Warning</Button> </Col>
                <Col> <Button variant="warning" disabled>Warning</Button> </Col>
            </Row>
            <Row>
                <Col>Success</Col>
            </Row>
            <Row>
                <Col> <Button variant="success">Success</Button> </Col>
                <Col> <Button variant="success" disabled>Success</Button> </Col>
            </Row>
            <Row>
                <Col>Danger</Col>
            </Row>
            <Row>
                <Col> <Button variant="danger">Danger</Button> </Col>
                <Col> <Button variant="danger" disabled>Danger</Button> </Col>
            </Row>
        </Container>
    ))
