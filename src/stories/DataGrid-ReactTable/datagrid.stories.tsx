import React from "react";
import {storiesOf} from "@storybook/react";
import DataGrid from './datagrid'

storiesOf("Data Grid - ReactTable", module)
    .add("Normal Table", () => (
        <div>
            <DataGrid></DataGrid>
        </div>
    ))