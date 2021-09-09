import React from "react";
// import Table from 'react-bootstrap/Table';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import Form from 'react-bootstrap/Form'
import menuIcon from '../../assets/images/menu-icon.png'
import Cards from "../cards/cards";

import '../wrapper-styles/index.scss'


export default class DataGrid extends React.PureComponent {
    rows:any = [
        {
            ip: '192.168.0.1',
            serial: '1234ECG88TGS',
            model: 'PI-12345672',
            template: 'ECS EX400',
            networking: 'DHCP',
            role: 'Data, Monitor',
        },
        {
            ip: '192.168.0.1',
            serial: '1234ECG88TGS',
            model: 'PI-12345672',
            template: 'ECS EX400',
            networking: 'DHCP',
            role: 'Data, Monitor',
        }
    ];
    column:any = [
        {dataField:"ip", text: "IP"},
        {dataField:"serial", text: "Serial"},
        {dataField:"model", text: "Model"},
        {dataField:"template", text: "Template"},
        {dataField:"networking", text: "Networking"},
        {dataField:"role", text: "Role"},
    ];
    render() {
        const paginationOptions = () => {
            
        }
        const popover =  (
            <Popover id="popover-basic">
                <Popover.Body>
                    <Cards
                        header="Select Columns"
                        container={
                            (
                                <Form className="checkbox-form">
                                    {this.column.map((col: any) => (
                                        <Form.Check label={col.text}></Form.Check>
                                    ))}
                                </Form>
                            )
                        }
                        actions={
                            [{text: "Select All columns"}]
                        }
                    ></Cards>
                    
                </Popover.Body>
            </Popover>
        );
        return(
            <div>
                <BootstrapTable
                    bootstrap4
                    keyField="ip"
                    data={this.rows}
                    columns={this.column}
                    expandRow={<img src={menuIcon} alt="Menu icon"></img>} />
                <div className="table-footer">
                    <div>
                        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                            <img src={menuIcon} alt="Menu icon"></img>
                        </OverlayTrigger>
                    </div>
                    <div> {this.rows.length} Total</div>
                </div>
            </div>
        )
    }
}