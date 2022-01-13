import React from "react";
import { storiesOf } from "@storybook/react";
import DataGrid from './datagrid'
import KeyValue from '../../components/KeyValueComponent/keyvalue';
import { DATA } from "./datagrid-data";
import DataGridPagination from "./datagrid-pagination";


const columns = [
    { accessor: "ip", Header: "IP" },
    { accessor: "serial", Header: "Serial" },
    { accessor: "model", Header: "Model" },
    { accessor: "template", Header: "Template" },
    { accessor: "networking", Header: "Networking" },
    { accessor: "role", Header: "Role" },
];


storiesOf("Data Grid - ReactTable", module)
    .add("POC", () => (
        <div>
            <DataGrid
                data={DATA.data}
                column={columns}
                expandable
                expandComponent={<KeyValue></KeyValue>}
                columnSelect
            ></DataGrid>
        </div>
    ))
    .add("Normal Table - CSG", () => (
        <div>
            <DataGrid
                data={DATA.data}
                column={columns}
                tableType="csg"
            ></DataGrid>
        </div>
    ))
    .add("Normal Table - ISG", () => (
        <div>
            <DataGrid
                data={DATA.data}
                column={columns}
                tableType="isg"
            ></DataGrid>
        </div>
    ))
    .add("Normal Table - Compact", () => (
        <div>
            <DataGrid
                data={DATA.data}
                column={columns}
                tableType="compact"
            ></DataGrid>
        </div>
    ))
    .add("Sorting", () => (
        <div>
            <DataGrid
                data={DATA.data}
                column={columns}
                sorting
            ></DataGrid>
        </div>
    ))
    .add("Expansion", () => (
        <div>
            <DataGrid
                data={DATA.data}
                column={columns}
                expandable
                expandComponent={<KeyValue></KeyValue>}
            ></DataGrid>
        </div>
    ))
    .add("Column selection", () => (
        <div>
            <DataGrid
                data={DATA.data}
                column={columns}
                columnSelect
            ></DataGrid>
        </div>
    ))
    .add("Pagination", () => (
        <div>
            <DataGridPagination pagination/>
        </div>
    ))
    .add("Virtual Row - React Window", () => (
        <div>
            <DataGridPagination infiniteScroll/>
        </div>
    ))
