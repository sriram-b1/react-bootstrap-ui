import React from 'react';
import { storiesOf } from "@storybook/react";
import '../../wrapper-styles/index.scss'
import './card.scss'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import ProgressBar from '../Circular-Progress/progress';


import tick from '../../assets/images/tick.png'
import warning from '../../assets/images/warning.png'
import danger from '../../assets/images/danger.png'

storiesOf("POC2/Card", module)
    .add("Normal Card", () => (
        <Card>
            <Card.Header>Card Title</Card.Header>
            <Card.Body>
                <Card.Title>Block Title</Card.Title>
                <Card.Text>Exercitation eu ipsum consequat in consectetur. Reprehenderit deserunt exercitation aliqua elit exercitation consequat cillum minim culpa dolore. Aliqua veniam consectetur dolor proident proident ut dolor occaecat amet eu aute. Ipsum consequat Lorem consequat laboris ut dolore ullamco. Enim sunt excepteur exercitation eu sunt anim sint.</Card.Text>
            </Card.Body>
        </Card>
    ))
    .add("Icon in Header", () => (
        <Card>
            <Card.Header>
                <div className='icon-card'>
                    <img src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/523/posts/32694/final_image/tutorial-preview-large.png" alt="Tick" />
                </div>
                Card with Icon in Title
            </Card.Header>
            <Card.Body>
                <Card.Title>Icon list</Card.Title>
                <Card.Text>
                    <div className='icon-list'>
                        <div className='icon-card'>
                            <img src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/523/posts/32694/final_image/tutorial-preview-large.png" alt="Tick" />
                        </div>
                        Item 1
                    </div>
                </Card.Text>
                <Card.Text>
                    <div className='icon-list'>
                        <div className='icon-card'>
                            <img src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/523/posts/32694/final_image/tutorial-preview-large.png" alt="Tick" />
                        </div>
                        Item 2
                    </div>
                </Card.Text>
                <Card.Text>
                    <div className='icon-list'>
                        <div className='icon-card'>
                            <img src="https://www.freeiconspng.com/thumbs/cross-png/red-cross-png-33.png" alt="Cross" />
                        </div>
                        Item 3
                    </div>
                </Card.Text>


            </Card.Body>
        </Card>
    ))
    .add("CPU", () => (
        <Container fluid>
            <Col>
                <Row>
                    <Card style={{ width: '16rem', margin: '20px' }}>
                        <Card.Header>CPU</Card.Header>
                        <Card.Body>
                            <ProgressBar size={175} progress={43} limits={[
                                { value: 0, color: '#6EA204' },
                                { value: 50, color: '#F2AF00' },
                                { value: 75, color: '#CE1126' }
                            ]} label="55 Ghz" />
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '16rem', margin: '20px' }}>
                        <Card.Header>Memory</Card.Header>
                        <Card.Body>
                            <ProgressBar size={175} progress={55} limits={[
                                { value: 0, color: '#6EA204' },
                                { value: 50, color: '#F2AF00' },
                                { value: 75, color: '#CE1126' }
                            ]} label="500 GiB" />
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '30rem', margin: '20px' }}>
                        <Card.Header>Disks</Card.Header>
                        <Card.Body>
                            <div className="table-container">
                                <ProgressBar size={175} progress={27} limits={[
                                    { value: 0, color: '#6EA204' },
                                    { value: 50, color: '#F2AF00' },
                                    { value: 75, color: '#CE1126' }
                                ]} label="500 TiB" />
                                <div className="table">
                                    <table>
                                        <tr>
                                            <td><div className='icon-sm'><img src={tick} alt="tick" /></div></td>
                                            <td width={100}>Good</td>
                                            <td><Button variant="light">4</Button></td>
                                        </tr>
                                        <tr>
                                            <td><div className="icon-sm"><img src={danger} alt="tick" /></div></td>
                                            <td width={100}>Bad</td>
                                            <td><Button variant="light" disabled>0</Button></td>
                                        </tr>
                                        <tr>
                                            <td><div className="icon-sm"><img src={warning} alt="tick" /></div></td>
                                            <td width={100}>Suspect</td>
                                            <td><Button variant="light" disabled>0</Button></td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Row>
            </Col>
        </Container>
    ))