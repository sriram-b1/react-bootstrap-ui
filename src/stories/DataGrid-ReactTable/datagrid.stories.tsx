import React from "react";
import { storiesOf } from "@storybook/react";
import DataGrid from './datagrid'
import KeyValue from '../../components/KeyValueComponent/keyvalue';

const data = [
    {
        ip: '192.168.0.1',
        serial: '1234ECG88TGS',
        model: 'PI-12345672',
        template: 'ECS EX400',
        networking: 'DHCP',
        role: 'Data, Monitor',
    },
    {
        ip: '192.168.0.1',
        serial: '1234ECG88TGS',
        model: 'PI-12345672',
        template: 'ECS EX400',
        networking: 'DHCP',
        role: 'Data, Monitor',
    },
    {
        ip: '192.168.0.2',
        serial: '678ECG88TGS',
        model: 'PI-56789672',
        template: 'ECS EX400',
        networking: 'DHCP',
        role: 'Data, Monitor',
    }
];

const hugeData = [
    {
        ip: '192.168.0.1',
        serial: '1234ECG88TGS',
        model: 'PI-12345672',
        template: 'ECS EX400',
        networking: 'DHCP',
        role: 'Data, Monitor',
    },
    {
        ip: '192.168.0.1',
        serial: '1234ECG88TGS',
        model: 'PI-12345672',
        template: 'ECS EX400',
        networking: 'DHCP',
        role: 'Data, Monitor',
    },
    {
        ip: '192.168.0.2',
        serial: '678ECG88TGS',
        model: 'PI-56789672',
        template: 'ECS EX400',
        networking: 'DHCP',
        role: 'Data, Monitor',
    },
    {
        ip: '192.168.0.1',
        serial: '1234ECG88TGS',
        model: 'PI-12345672',
        template: 'ECS EX400',
        networking: 'DHCP',
        role: 'Data, Monitor',
    },
    {
        ip: '192.168.0.1',
        serial: '1234ECG88TGS',
        model: 'PI-12345672',
        template: 'ECS EX400',
        networking: 'DHCP',
        role: 'Data, Monitor',
    },
    {
        ip: '192.168.0.2',
        serial: '678ECG88TGS',
        model: 'PI-56789672',
        template: 'ECS EX400',
        networking: 'DHCP',
        role: 'Data, Monitor',
    },
    {
        ip: '192.168.0.1',
        serial: '1234ECG88TGS',
        model: 'PI-12345672',
        template: 'ECS EX400',
        networking: 'DHCP',
        role: 'Data, Monitor',
    },
    {
        ip: '192.168.0.1',
        serial: '1234ECG88TGS',
        model: 'PI-12345672',
        template: 'ECS EX400',
        networking: 'DHCP',
        role: 'Data, Monitor',
    },
    {
        ip: '192.168.0.2',
        serial: '678ECG88TGS',
        model: 'PI-56789672',
        template: 'ECS EX400',
        networking: 'DHCP',
        role: 'Data, Monitor',
    },
    {
        ip: '192.168.0.1',
        serial: '1234ECG88TGS',
        model: 'PI-12345672',
        template: 'ECS EX400',
        networking: 'DHCP',
        role: 'Data, Monitor',
    },
    {
        ip: '192.168.0.1',
        serial: '1234ECG88TGS',
        model: 'PI-12345672',
        template: 'ECS EX400',
        networking: 'DHCP',
        role: 'Data, Monitor',
    },
    {
        ip: '192.168.0.2',
        serial: '678ECG88TGS',
        model: 'PI-56789672',
        template: 'ECS EX400',
        networking: 'DHCP',
        role: 'Data, Monitor',
    },
    {
        ip: '192.168.0.1',
        serial: '1234ECG88TGS',
        model: 'PI-12345672',
        template: 'ECS EX400',
        networking: 'DHCP',
        role: 'Data, Monitor',
    },
    {
        ip: '192.168.0.1',
        serial: '1234ECG88TGS',
        model: 'PI-12345672',
        template: 'ECS EX400',
        networking: 'DHCP',
        role: 'Data, Monitor',
    },
    {
        ip: '192.168.0.2',
        serial: '678ECG88TGS',
        model: 'PI-56789672',
        template: 'ECS EX400',
        networking: 'DHCP',
        role: 'Data, Monitor',
    },
    {
        ip: '192.168.0.1',
        serial: '1234ECG88TGS',
        model: 'PI-12345672',
        template: 'ECS EX400',
        networking: 'DHCP',
        role: 'Data, Monitor',
    },
    {
        ip: '192.168.0.1',
        serial: '1234ECG88TGS',
        model: 'PI-12345672',
        template: 'ECS EX400',
        networking: 'DHCP',
        role: 'Data, Monitor',
    },
    {
        ip: '192.168.0.2',
        serial: '678ECG88TGS',
        model: 'PI-56789672',
        template: 'ECS EX400',
        networking: 'DHCP',
        role: 'Data, Monitor',
    },
    {
        ip: '192.168.0.1',
        serial: '1234ECG88TGS',
        model: 'PI-12345672',
        template: 'ECS EX400',
        networking: 'DHCP',
        role: 'Data, Monitor',
    },
    {
        ip: '192.168.0.1',
        serial: '1234ECG88TGS',
        model: 'PI-12345672',
        template: 'ECS EX400',
        networking: 'DHCP',
        role: 'Data, Monitor',
    },
    {
        ip: '192.168.0.2',
        serial: '678ECG88TGS',
        model: 'PI-56789672',
        template: 'ECS EX400',
        networking: 'DHCP',
        role: 'Data, Monitor',
    }
]

const columns = [
    { accessor: "ip", Header: "IP" },
    { accessor: "serial", Header: "Serial" },
    { accessor: "model", Header: "Model" },
    { accessor: "template", Header: "Template" },
    { accessor: "networking", Header: "Networking" },
    { accessor: "role", Header: "Role" },
];


storiesOf("Data Grid - ReactTable", module)
    .add("Sorting & Expansion", () => (
        <div>
            <DataGrid
                data={data}
                column={columns}
                sorting
                expandable
                expandComponent={<KeyValue></KeyValue>}
            ></DataGrid>
        </div>
    ))
    .add("Sorting", () => (
        <div>
            <DataGrid
                data={data}
                column={columns}
                sorting
            ></DataGrid>
        </div>
    ))
    .add("Expansion", () => (
        <div>
            <DataGrid
                data={data}
                column={columns}
                expandable
                expandComponent={<KeyValue></KeyValue>}
            ></DataGrid>
        </div>
    ))
    .add("Normal Table", () => (
        <div>
            <DataGrid
                data={data}
                column={columns}
            ></DataGrid>
        </div>
    ))
    .add("Pagination", () => (
        <div>
            <DataGrid
                data={hugeData}
                column={columns}
                pagination
            ></DataGrid>
        </div>
    ))
