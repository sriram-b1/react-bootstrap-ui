import React from 'react';
import {storiesOf} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import { Button } from 'react-bootstrap';

import '../../wrapper-styles/index.scss'

storiesOf("Button", module)
    .add("Primary", () => (
        <div>
            <Button variant="primary">Primary</Button>
        </div>
    ))
    .add("Secondary", () => (
        <div>
            <Button variant="outline-primary">Secondary</Button>
        </div>
    ))
    .add("Success", () => (
        <div>
            <Button variant="success">Success</Button>
        </div>
    ))
    .add("Warning", () => (
        <div>
            <Button variant="warning">Warning</Button>
        </div>
    ))
    .add("Danger", () => (
        <div>
            <Button variant="danger">Danger</Button>
        </div>
    ))
    .add("Light", () => (
        <div>
            <Button variant="light">Tertiary</Button>
        </div>
    ))
    .add("Link", () => (
        <div>
            <Button variant="link">Link</Button>
        </div>
    ))