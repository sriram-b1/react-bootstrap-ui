import React from 'react';
import {storiesOf} from "@storybook/react";
import Cards from './cards';

storiesOf("Card - Incomplete", module)
    .add("Normal Card", () => (
        <Cards header="Some header" container={(<h2>Hello World!</h2>)}></Cards>
    ))