import React from 'react';
import { storiesOf } from "@storybook/react";
import '../../wrapper-styles/index.scss'
import CircularProgress from './progress';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import ProgressBar from './progress';
import { Button } from 'react-bootstrap';

const state = {
    size: 200,
    progress: 25,
    limits: [
        {value: 0, color: '#6EA204'},
        {value: 50, color: '#F2AF00'},
        {value: 75, color: '#CE1126'}
    ],
    label: 'Voluptate esse commodo enim tempor laborum.'
  }

storiesOf("POC2/Circular-Progress", module)
    .add("Custom Progress bar", () => (
        <div>
            <ProgressBar {...state}/>
        </div>
    ))