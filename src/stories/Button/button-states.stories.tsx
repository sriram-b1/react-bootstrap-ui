import React from 'react';
import {storiesOf} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import { Button, Container, Row, Col } from 'react-bootstrap';

import '../../wrapper-styles/index.scss'

storiesOf("POC2/Button States", module)
    .add("States", () => (
        <Container style={{display:"flex", flexDirection:"column", justifyContent:"space-around", minHeight:"70vh"}}>
            <Row>
                <Col> <Button variant="primary">Primary</Button> </Col>
                <Col> <Button variant="primary" disabled>Primary</Button> </Col>
            </Row>
            <Row>
                <Col> <Button variant="outline-primary">Secondary</Button> </Col>
                <Col> <Button variant="outline-primary" disabled>Secondary</Button> </Col>
            </Row>
            <Row>
                <Col> <Button variant="light">Tertiary</Button> </Col>
                <Col> <Button variant="light" disabled>Tertiary</Button> </Col>
            </Row>
            <Row>
                <Col> <Button variant="warning">Warning</Button> </Col>
                <Col> <Button variant="warning" disabled>Warning</Button> </Col>
            </Row>
            <Row>
                <Col> <Button variant="success">Success</Button> </Col>
                <Col> <Button variant="success" disabled>Success</Button> </Col>
            </Row>
            <Row>
                <Col> <Button variant="danger">Danger</Button> </Col>
                <Col> <Button variant="danger" disabled>Danger</Button> </Col>
            </Row>
        </Container>
    ))
