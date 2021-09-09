import React from "react";
import { useTable, useSortBy, useExpanded } from 'react-table'
import BTable from 'react-bootstrap/Table';

type DataGridProps = {
    data: { [key: string]: any };
    column: { [key: string]: any };
    sorting?: boolean;
    expandable?: boolean;
    expandComponent?: any;
}

const DataGrid: any = (props: DataGridProps) => {
    console.log("Props: ", props);
    const data: any = React.useMemo(() =>
        props.data,
        []);
    const columns: any = React.useMemo(() =>
        props.column,
        []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    },
        useSortBy,
        useExpanded,
    )
    return (
        <BTable {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup: any) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroups.map((grp) => (
                            grp.headers.map((column: any) => (
                                <th {...column.getHeaderProps(props.sorting ? column.getSortByToggleProps() : "")}>
                                    {column.render('Header')}
                                    <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? ' 🔽'
                                                : ' 🔼'
                                            : ''
                                        }
                                    </span>
                                </th>
                            ))
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row: any) => {
                    prepareRow(row)
                    return (
                        <React.Fragment>
                            <tr {...row.getRowProps(props.expandable ? row.getToggleRowExpandedProps() : "")}>
                                {row.cells.map((cell: any) => {
                                    return (
                                        <td {...cell.getCellProps()}>
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                            </tr>
                            {row.isExpanded ? <div style={{display: 'flex', flex: 1}}>{props.expandComponent}</div> : ""}
                        </React.Fragment>
                    )
                })}
            </tbody>
        </BTable>
    )
}

export default DataGrid;

