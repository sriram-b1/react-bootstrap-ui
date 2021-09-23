import React from 'react';
import {storiesOf} from "@storybook/react";

import '../../wrapper-styles/index.scss'
import { Form } from 'react-bootstrap';

storiesOf("Checkbox", module)
    .add("Simple Check box", () => (
        <div>
            <Form.Check type="checkbox" id="1">
                <Form.Check.Input type="checkbox" isValid />
                <Form.Check.Label>This is check-box</Form.Check.Label>
            </Form.Check>
            <Form.Check type="checkbox" label="This is check-box" checked></Form.Check>
            <Form.Check type="checkbox" label="This is check-box" checked={false}></Form.Check>
        </div>
    ))