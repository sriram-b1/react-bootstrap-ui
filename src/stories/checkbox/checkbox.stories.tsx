import React from 'react';
import {storiesOf} from "@storybook/react";

import '../../wrapper-styles/index.scss'
import { Form } from 'react-bootstrap';

storiesOf("POC1/Checkbox", module)
    .add("Simple Check box", () => (
        <div>
            <Form.Check type="checkbox" id="1">
                <Form.Check.Input type="checkbox" isValid />
                <Form.Check.Label>This is check-box with <code>check.label</code> and <code>check.input</code></Form.Check.Label>
            </Form.Check>
            <Form.Check type="checkbox" label="This is normal check-box"></Form.Check>
        </div>
    ))