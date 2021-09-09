
import {storiesOf} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import { Form } from "react-bootstrap";
import '../wrapper-styles/index.scss'

storiesOf("Input", module)
    .add("Normal Input", () => (
        <Form>
            <div style={{display: "flex", alignItems: "center"}}>
                <Form.Label style={{flex: 0.5}}>Email address</Form.Label>
                <div style={{flex: 3}}>
                    <Form.Control placeholder="sriram_b1@dell.com"></Form.Control>
                    <Form.Text>
                        Enter your email address
                    </Form.Text>
                </div>
            </div>
        </Form>
    ))