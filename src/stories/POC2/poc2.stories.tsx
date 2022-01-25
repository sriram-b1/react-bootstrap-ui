import React from "react";
import { storiesOf } from "@storybook/react";
import { Badge, Button, Card } from "react-bootstrap";
import ProgressBar from "../Circular-Progress/progress";

import tick from '../../assets/images/tick.png'
import warning from '../../assets/images/warning.png'
import danger from '../../assets/images/danger.png'
import redirect from '../../assets/images/redirect.png'

import DataGrid from "../DataGrid-ReactTable/datagrid";
import { columns, data } from "../Datagrid-Poc2/datagrid.stories";

import './poc2.scss';

storiesOf("POC2", module)
    .add("Poc2", () => (
        <div>
            <div className="title-container">
                <div className="title-section">
                    <h2>Cluster Core</h2>
                    <div className="region">
                    <Badge pill bg="secondary">
                        US Central
                    </Badge>
                    </div>
                </div>
                <Button variant="outline-primary"><div className="icon-button">Grafana {'<Redirect icon to be inserted>'}</div></Button>
            </div>
            <div className="circular-bar-container">
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
                                        <td>Bad</td>
                                        <td><Button variant="light" disabled>0</Button></td>
                                    </tr>
                                    <tr>
                                        <td><div className="icon-sm"><img src={warning} alt="tick" /></div></td>
                                        <td>Suspect</td>
                                        <td><Button variant="light" disabled>0</Button></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
            <div className="datagrid-container">
                <div className="button-container">
                    <Button>Add Node</Button>
                    <Button variant="outline-primary">{'<Refresh Icon to be inserted>'}</Button>
                </div>
                <DataGrid
                    data={data}
                    column={columns}
                    pagination
                ></DataGrid>
            </div>
        </div>
    ))