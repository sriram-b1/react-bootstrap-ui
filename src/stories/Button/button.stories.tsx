import React from 'react';
import {storiesOf} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import { Button } from 'react-bootstrap';

import '../wrapper-styles/index.scss'

storiesOf("Button", module)
    .add("Normal Button", () => (
        <div>
            <Button variant="primary">Primary</Button>
            <Button variant="outline-primary">Secondary</Button>
            <Button variant="success">Success</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="light">Tertiary</Button>
            <Button variant="link">Link</Button>
        </div>
    ))
    