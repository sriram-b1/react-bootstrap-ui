import React, { useRef } from "react";
import { useTable, useSortBy, useExpanded, usePagination } from 'react-table'
import Button from 'react-bootstrap/Button'
import { Dropdown, DropdownButton, Form } from "react-bootstrap";

import '../wrapper-styles/index.scss';
import './datagrid-customstyles.scss';

import sortDesc from '../../assets/images/chevron-down.png';
import sortAsc from '../../assets/images/chevron-up.png';
import columnPicker from '../../assets/images/column-picker.png';

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
        allColumns,
        getToggleHideAllColumnsProps,
        toggleHideAllColumns,
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
    const renderRow = props.pagination ? page : rows;
    const renderTable = () => {
        return (
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup: any) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroups.map((grp: any) => (
                                grp.headers.map((column: any) => (
                                    <th {...column.getHeaderProps(props.sorting ? column.getSortByToggleProps() : "")}>
                                        <div className="header-cell">
                                            {column.render('Header')}
                                            <span className="column-sorting">
                                                {column.isSorted
                                                    ? column.isSortedDesc
                                                        ? <figure className="sorting-icons"><img src={sortDesc} alt="descending sort" /></figure>
                                                        : <figure className="sorting-icons"><img src={sortAsc} alt="ascending sort" /></figure>
                                                    : ''
                                                }
                                            </span>
                                        </div>
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
                                {row.isExpanded ? <tr className="expanded-row"><td colSpan={allColumns.length}>{props.expandComponent}</td></tr> : ""}
                            </React.Fragment>
                        )
                    })}
                </tbody>
                <tfoot>
                    <tr className="footer-row"><td colSpan={allColumns.length}>{renderFooter()}</td></tr>
                </tfoot>
            </table>
        )
    }

    const renderFooter = () => {
        return (
            <div className="footer">
                {renderColumnSelect()}
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
            <div className="column-select">
                <Dropdown>
                    <Dropdown.Toggle>
                        <figure className="column-picker-icon">
                            <img src={columnPicker} alt="Column picker"></img>
                        </figure>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {allColumns.map((column: any) => (
                            <div key={column.id}>
                                <label>
                                    <input type="checkbox" {...column.getToggleHiddenProps()} />{' '}
                                    {column.id}
                                </label>
                            </div>
                        ))}
                        <Button variant="light" onClick={() => toggleHideAllColumns(false)}>Select All</Button>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )
    }

    return (
        <div>
            {renderTable()}
        </div>
    )
}

export default DataGrid;

