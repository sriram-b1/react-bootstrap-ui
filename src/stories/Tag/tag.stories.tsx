import React from 'react';
import { storiesOf } from "@storybook/react";
import '../../wrapper-styles/index.scss'
import { Badge } from 'react-bootstrap';

const longText = "Pariatur aliquip officia Lorem sunt. Dolore quis elit Lorem enim. Qui ullamco tempor ullamco tempor in non qui ut reprehenderit velit quis incididunt esse. Quis do pariatur tempor excepteur laboris. Minim laborum ullamco pariatur anim eiusmod.";
storiesOf("POC2/Tag", module)
    .add("All Tags", () => (
        <div style={{display:"flex", justifyContent:"space-evenly"}}>
            <Badge pill bg="primary">
                Primary
            </Badge>
            <Badge pill bg="secondary">
                Secondary
            </Badge>
            <Badge pill bg="light">
                Light
            </Badge>
            <Badge pill bg="success">
                Success
            </Badge>
            <Badge pill bg="danger">
                Danger
            </Badge>
            <Badge pill bg="warning">
                Warning
            </Badge>
            <Badge pill bg="info">
                Info
            </Badge>
            {/* Dark badge does not come under DDS */}
            <Badge pill bg="dark">
                Dark
            </Badge>
        </div>
    ))
    .add("Tag with a long text", () => (
        <Badge pill bg="primary" title={longText}>
            {longText.length>36?longText.slice(0,36)+'...':longText}            
        </Badge>        
    ))
