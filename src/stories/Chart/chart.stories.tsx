import React from 'react';
import { storiesOf } from "@storybook/react";
import '../../wrapper-styles/index.scss'
import Chart from './chart';

storiesOf("POC2/Chart", module)
    .add("Area Chart", () => (
        <Chart/>
    ))