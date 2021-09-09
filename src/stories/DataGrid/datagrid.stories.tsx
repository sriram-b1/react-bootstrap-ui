import React from 'react';
import {storiesOf} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import DellDataGrid from './datagrid';

storiesOf("Data Grid - Bootstrap-table-2 - Discontinued", module)
    .add("Static Grid", () => (
        <div>
            <DellDataGrid></DellDataGrid>
        </div>
    ))