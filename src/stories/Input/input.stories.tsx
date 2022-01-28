
import {storiesOf} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import { Form } from "react-bootstrap";
import '../../wrapper-styles/index.scss'

storiesOf("POC1/Input", module)
    .add("Normal Input", () => (
        <Form>
            <div style={{display: "flex", alignItems: "center"}}>
                <Form.Label style={{marginRight: '20px'}}>Email address</Form.Label>
                <div>
                    <Form.Control placeholder="sriram_b1@dell.com"></Form.Control>
                </div>
            </div>
        </Form>
    ))