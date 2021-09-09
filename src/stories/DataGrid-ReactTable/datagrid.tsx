import React from "react";
import { useTable } from 'react-table'
import BTable from 'react-bootstrap/Table';

const DataGrid: any = () => {
    const data:any = React.useMemo(() =>[
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
        }
    ], []);
    const columns: any = React.useMemo(() => [
        { accessor: "ip", Header: "IP" },
        { accessor: "serial", Header: "Serial" },
        { accessor: "model", Header: "Model" },
        { accessor: "template", Header: "Template" },
        { accessor: "networking", Header: "Networking" },
        { accessor: "role", Header: "Role" },
    ], []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    })
    console.log("Header Group: ", headerGroups);
    return (
        <BTable {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup: any) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroups.map((grp) => (
                            grp.headers.map((column: any) => (
                                <th {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </th>
                            ))
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row: any) => {
                        prepareRow(row)
                        console.log("Row: ", row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell: any) => {
                                        return (
                                            <td {...cell.getCellProps()}>
                                                {cell.render('Cell')}
                                            </td>
                                        )
                                    })}
                            </tr>
                        )
                    })}
            </tbody>
        </BTable>
    )
}

export default DataGrid;

