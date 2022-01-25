import React, { useState } from "react";
import { AreaChart, Area, ReferenceLine, Tooltip, XAxis } from "recharts";
import { Badge, Button, Col, Row } from 'react-bootstrap';
import { Dropdown, DropdownButton, Form, Spinner } from "react-bootstrap";
import './action.scss'

const Action = (props: any) => {

    const [isActionLoading, setActionLoading] = useState(false);

        const renderRemoveAction = () =>{
            return (
                setActionLoading(true)
            )
        }

        const renderMantainenceAction = () =>{
            console.log("12");
            return (
            //    renderSpinner()
                setActionLoading(true)
                // { isActionLoading ? setTimeout(() => setActionLoading(false), 10) : ""}
            )
        }

        
        console.log("12");
        
        const renderSpinner = () =>{
            return (
                <div><span className="updating-text"> { 'Updating ' } </span><Spinner animation="border" className="spinner-size" /> </div>
                
            )
         
        }

        const renderAction = () =>{
            return (
                <div >
                <Dropdown className="action-select">
                {/* <Button variant="light" size="lg">Maintenence</Button> */}
                <Button variant="light" onClick={() => renderMantainenceAction()}>Maintenence</Button>
                <Button variant="light" >Edit</Button>
                <Button variant="light" onClick={() => renderRemoveAction()}>Remove</Button>
                    <Dropdown.Toggle  >
                        <Button variant="light">...</Button>
                        {/* <Button variant="light" size="lg" className="option-button" >...</Button> */}
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="action-select-dots">
                    <Row><Col className="d-grid"><Button variant="light" >Standby</Button></Col></Row>
                    <Row><Col className="d-grid"><Button variant="light" >Shutdown</Button></Col></Row>
                    <Row><Col className="d-grid"><Button variant="light" >Reboot</Button></Col></Row>
                    <Row><Col className="d-grid"><Button variant="light" >Change Hostname</Button></Col></Row>
                    <Row><Col className="d-grid"><Button variant="light" >Identity</Button></Col></Row>
                    <Row><Col className="d-grid"><Button variant="light" >Upgrade 0.1.12</Button></Col></Row>
                    </Dropdown.Menu>
                </Dropdown>
             </div> 
            )
            
        }

        return (
            isActionLoading ? renderSpinner() :  renderAction()     
        )
    }

    export default Action
