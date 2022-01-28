import React from 'react';
import {storiesOf} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import { Button, Container, Row, Col } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import '../../wrapper-styles/index.scss'

storiesOf("POC1/Button", module)
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
                <Col> <Button variant="success" size="lg">Success</Button> </Col>
                <Col> <Button variant="success">Success</Button> </Col>
                <Col> <Button variant="success" size="sm">Success</Button> </Col>
            </Row>
            <Row><Col className="d-grid">Fluid</Col></Row>
            <Row><Col className="d-grid"><Button variant="success" size="lg">Success</Button></Col></Row>

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
                <Col> <Button variant="light" size="lg">Tertiary</Button> </Col>
                <Col> <Button variant="light">Tertiary</Button> </Col>
                <Col> <Button variant="light" size="sm">Tertiary</Button> </Col>
            </Row>
            <Row><Col className="d-grid">Fluid</Col></Row>
            <Row><Col className="d-grid"><Button variant="light" size="lg">Tertiary</Button></Col></Row>

        </Container>
    ))
    .add("Link", () => (
        <div>
            <Button variant="link">Link</Button>
        </div>
    ))

    .add("Link", () => (
        <div>
            <Button variant="link">Link</Button>
        </div>
    ))
    .add("Icon Buttons", () => (
        <Container>
          
            <Row>
                <Col> <Button variant="outline-primary"><span style={{paddingBottom: '4px', paddingRight: '3px'}}>Grafana  </span><Icon.BoxArrowUpRight style={{paddingBottom: '4px'}} color="#0076CE" size={20}/></Button> </Col>
                <Col> <Button style={{padding : '0 5px', minWidth: '0px'}} variant="outline-primary"><Icon.ArrowRepeat  color="#0076CE" size={21}/></Button> </Col>
            </Row>
          
        </Container>
    ))
    console.log("Icons ",Icon);   

