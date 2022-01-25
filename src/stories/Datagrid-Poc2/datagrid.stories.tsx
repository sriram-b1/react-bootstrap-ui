import React from 'react';
import { storiesOf } from "@storybook/react";
import '../../wrapper-styles/index.scss'
import DataGrid from '../DataGrid-ReactTable/datagrid';
import tick from '../../assets/images/tick.png'
import Chart from '../Chart/chart';
import { Badge, Button } from 'react-bootstrap';

export const columns = [
    { accessor: "status", Header: "Status" },
    { accessor: "node", Header: "Node" },
    { accessor: "ips", Header: "IPs" },
    { accessor: "version", Header: "Version" },
    { accessor: "role", Header: "Role" },
    { accessor: "disks", Header: "Disks" },
    { accessor: "cpu", Header: "CPU" },
    { accessor: "memory", Header: "Memory" },
    { accessor: "actions", Header: "Actions" },
];

export const status = (<div style={{ width: "25px" }}><img src={tick} alt='tick' /></div>)
export const cpu = (<div><Chart /></div>)
export const node = (<div>
    <Button variant="light">node-foo.dell.lab.com</Button>
</div>)

export const disks = (
    <div>
        <Badge style={{margin: "2.5px"}} pill bg="success" className='badge-pills'>4</Badge>
        <Badge style={{margin: "2.5px"}} pill bg="warning" className='badge-pills'>0</Badge>
        <Badge style={{margin: "2.5px"}}pill bg="danger" className='badge-pills'>0</Badge>
    </div>
)

export const data = [
    {
        status,
        node,
        ips: 4,
        version: 1.2,
        role: "Master",
        disks,
        cpu,
        memory: cpu,
        actions: "TBD",
    },
    {
        status,
        node,
        ips: 3,
        version: 2.4,
        role: "Worker",
        disks,
        cpu,
        memory: cpu,
        actions: "TBD",
    },
    {
        status,
        node,
        ips: 4,
        version: 1.2,
        role: "Master",
        disks,
        cpu,
        memory: cpu,
        actions: "TBD",
    },
    {
        status,
        node,
        ips: 3,
        version: 2.4,
        role: "Worker",
        disks,
        cpu,
        memory: cpu,
        actions: "TBD",
    },
    {
        status,
        node,
        ips: 4,
        version: 1.2,
        role: "Master",
        disks,
        cpu,
        memory: cpu,
        actions: "TBD",
    },
    {
        status,
        node,
        ips: 3,
        version: 2.4,
        role: "Worker",
        disks,
        cpu,
        memory: cpu,
        actions: "TBD",
    },
    {
        status,
        node,
        ips: 4,
        version: 1.2,
        role: "Master",
        disks,
        cpu,
        memory: cpu,
        actions: "TBD",
    },
    {
        status,
        node,
        ips: 3,
        version: 2.4,
        role: "Worker",
        disks,
        cpu,
        memory: cpu,
        actions: "TBD",
    },
    {
        status,
        node,
        ips: 4,
        version: 1.2,
        role: "Master",
        disks,
        cpu,
        memory: cpu,
        actions: "TBD",
    },
    {
        status,
        node,
        ips: 3,
        version: 2.4,
        role: "Worker",
        disks,
        cpu,
        memory: cpu,
        actions: "TBD",
    },
    {
        status,
        node,
        ips: 4,
        version: 1.2,
        role: "Master",
        disks,
        cpu,
        memory: cpu,
        actions: "TBD",
    },
    {
        status,
        node,
        ips: 3,
        version: 2.4,
        role: "Worker",
        disks,
        cpu,
        memory: cpu,
        actions: "TBD",
    },
    {
        status,
        node,
        ips: 4,
        version: 1.2,
        role: "Master",
        disks,
        cpu,
        memory: cpu,
        actions: "TBD",
    },
    {
        status,
        node,
        ips: 3,
        version: 2.4,
        role: "Worker",
        disks,
        cpu,
        memory: cpu,
        actions: "TBD",
    },
    {
        status,
        node,
        ips: 4,
        version: 1.2,
        role: "Master",
        disks,
        cpu,
        memory: cpu,
        actions: "TBD",
    },
    {
        status,
        node,
        ips: 3,
        version: 2.4,
        role: "Worker",
        disks,
        cpu,
        memory: cpu,
        actions: "TBD",
    },
    {
        status,
        node,
        ips: 4,
        version: 1.2,
        role: "Master",
        disks,
        cpu,
        memory: cpu,
        actions: "TBD",
    },
    {
        status,
        node,
        ips: 3,
        version: 2.4,
        role: "Worker",
        disks,
        cpu,
        memory: cpu,
        actions: "TBD",
    }
]

storiesOf("POC2/Datagrid", module)
    .add("POC Datagrid", () => (
        <DataGrid
            data={data}
            column={columns}
        ></DataGrid>
    ))