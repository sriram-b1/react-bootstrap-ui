import React, { useRef } from "react";
import { useTable, useSortBy, useExpanded, usePagination } from 'react-table'
import BTable from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import { Dropdown, DropdownButton, Form } from "react-bootstrap";

import '../wrapper-styles/index.scss'

import menuIcon from '../../assets/images/menu-icon.png'

type DataGridProps = {
    data: { [key: string]: any };
    column: { [key: string]: any };
    sorting?: boolean;
    expandable?: boolean;
    expandComponent?: any;
    pagination?: boolean;
}

const DataGrid: any = (props: DataGridProps) => {
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
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable({
        columns,
        data,
        initialState: { pageIndex: 0 },
    },
        useSortBy,
        useExpanded,
        usePagination
    )
    const renderRow = props.pagination?page:rows;
    const renderTable = () => {
        return (
            <BTable {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup: any) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroups.map((grp: any) => (
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
                    {renderRow.map((row: any) => {
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
                                {row.isExpanded ? <div style={{ display: 'flex', flex: 1 }}>{props.expandComponent}</div> : ""}
                            </React.Fragment>
                        )
                    })}
                </tbody>
            </BTable>
        )
    }

    const renderFooter = () => {
        return(
            <div className="footer">
                {props.pagination
                    ? renderPagination()
                    : renderItemCount()
                }
            </div>
        )
    }

    const renderPagination = () => {
        return (
            <div className="pagination">
                        <DropdownButton title={pageSize} variant="outline-primary">
                            <Dropdown.Item onClick={() => setPageSize(5)}>5</Dropdown.Item>
                            <Dropdown.Item onClick={() => setPageSize(10)}>10</Dropdown.Item>
                        </DropdownButton>
                        <p>Showing {pageIndex * pageSize + 1} - {(pageIndex + 1) * pageSize < data.length ? (pageIndex + 1) * pageSize : data.length} of {data.length}</p>
                        <Button variant="light" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'|<'}</Button>
                        <Button variant="light" onClick={previousPage} disabled={!canPreviousPage}>{'<'}</Button>
                        <span>{pageIndex + 1} / {pageCount}</span>
                        <Button variant="light" onClick={nextPage} disabled={!canNextPage}>{'>'}</Button>
                        <Button variant="light" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>|'}</Button>
                    </div>
        )
    }
    const renderItemCount = () => {
        return (
            <div className="pagination">
                <span>{data.length} Total</span>
            </div>
        )
    }

    const renderColumnSelect = () => {
        return (
            <div>
                <Dropdown>
                    <Dropdown.Toggle>
                        <img src={menuIcon} alt="menu icon"></img>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <h2>Hello World!</h2>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )
    }

    return (
        <div>
            {renderTable()}
            {renderFooter()}
        </div>
    )
}

export default DataGrid;

