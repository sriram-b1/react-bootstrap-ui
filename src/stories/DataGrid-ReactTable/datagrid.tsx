import React, { useEffect, useRef, useState } from "react";
import { useTable, useSortBy, useExpanded, usePagination, useBlockLayout } from 'react-table'
import Button from 'react-bootstrap/Button'
import { Dropdown, DropdownButton, Form, Spinner } from "react-bootstrap";

import '../../wrapper-styles/index.scss';
import './datagrid-customstyles.scss';

import sortDesc from '../../assets/images/chevron-down.png';
import sortAsc from '../../assets/images/chevron-up.png';
import columnPicker from '../../assets/images/column-picker.png';
import { DebounceUtils } from "../../utils/debounceUtils";

import { FixedSizeList } from 'react-window'

type DataGridProps = {
    data: { [key: string]: any };
    column: { [key: string]: any };
    sorting?: boolean;
    expandable?: boolean;
    expandComponent?: any;
    pagination?: boolean;
    columnSelect?: boolean;
    infiniteScroll?: boolean;
}


const DataGrid: any = (props: DataGridProps) => {
    const pageRef = useRef(null);
    const [isLoading, setLoading] = useState(false);
    const debounceHandleChange = new DebounceUtils();
    const scrollBarWidth = 20;
    enum Navigate {
        PREVIOUS = 'previous',
        NEXT = 'next'
    }
    const data: any = React.useMemo(() =>
        props.data,
        []);
    const columns: any = React.useMemo(() =>
        props.column,
        []);

    const scrollBarSize = React.useMemo(() => scrollBarWidth, [])

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
        totalColumnsWidth,
    } = useTable({
        columns,
        data,
        initialState: { pageIndex: 0 },
    },
        useSortBy,
        useExpanded,
        usePagination,
        props.infiniteScroll ? useBlockLayout : '',
    )
    const renderRow = props.pagination ? page : rows;

    useEffect(() => {
        if (props.pagination) {
            pageRef.current!.value = pageIndex + 1;
        }
    }, [pageIndex])


    //Page Functions
    const onPageChange = (event: any) => {
        setLoading(true);
        const pageInput = Number(event.target.value);
        if (isNaN(pageInput)) {
            pageRef.current!.value = pageIndex + 1;
        } else {
            let nextPage: number = pageIndex;
            if (pageInput < 1) {
                nextPage = 0;
            } else if (pageInput > pageCount) {
                nextPage = pageCount - 1;
            } else {
                nextPage = pageInput - 1;
            }
            gotoPage(nextPage);
        }
        setLoading(false)
    }

    const onPageNavigation = async (type: Navigate) => {
        if (type === Navigate.PREVIOUS) {
            await previousPage();
        } else if (type === Navigate.NEXT) {
            await nextPage();
        }
        pageRef.current!.value = pageIndex + 1;
    }

    // Render functions
    const renderTable = () => {
        return (
            <table {...getTableProps()} style={props.infiniteScroll?{width: totalColumnsWidth}:null}>
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
                                                        ? <div className="sorting-icons"><img src={sortDesc} alt="descending sort" /></div>
                                                        : <div className="sorting-icons"><img src={sortAsc} alt="ascending sort" /></div>
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
                <tbody {...getTableBodyProps()} className="table-body">
                    {props.infiniteScroll
                        ? (
                            <FixedSizeList
                                height={550}
                                itemCount={rows.length}
                                itemSize={35}
                                width={totalColumnsWidth + scrollBarSize}
                            >
                                {renderVirtualRow}
                            </FixedSizeList>
                        )
                        : renderRow.map((row: any) => {
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
                    {isLoading ? <div className="spinner">
                        <Spinner animation="border" variant="primary" />
                    </div> : null}
                </tbody>
                <tfoot>
                    <tr className="footer-row"><td colSpan={allColumns.length}>{renderFooter()}</td></tr>
                </tfoot>
            </table>
        )
    }

    const renderVirtualRow = React.useCallback(
        ({ index, style }) => {
            const row = rows[index]
            prepareRow(row)
            return (
                <div
                    {...row.getRowProps({
                        style,
                    },
                        props.expandable ? row.getToggleRowExpandedProps() : ""
                    )}
                >
                    <tr>
                        {row.cells.map(cell => {
                            return (
                                <td {...cell.getCellProps()}>
                                    {cell.render('Cell')}
                                </td>
                            )
                        })}
                    </tr>

                </div>
            )
        },
        [prepareRow, rows]
    )

    const renderFooter = () => {
        return (
            <div className="footer">
                {props.columnSelect ? renderColumnSelect() : null}
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
                <div>
                    <p>{data.length} items found. Displaying items {pageIndex * pageSize + 1} - {(pageIndex + 1) * pageSize < data.length ? (pageIndex + 1) * pageSize : data.length}.</p>
                </div>
                <div className="page-selection-container">
                    <p>Rows per page:</p>
                    <DropdownButton title={pageSize} variant="outline-primary">
                        <Dropdown.Item onClick={() => setPageSize(5)}>5</Dropdown.Item>
                        <Dropdown.Item onClick={() => setPageSize(10)}>10</Dropdown.Item>
                    </DropdownButton>
                    <Button variant="light" onClick={() => onPageNavigation(Navigate.PREVIOUS)} disabled={!canPreviousPage}>{'<'}</Button>
                    <span>
                        <Form.Control
                            ref={pageRef}
                            defaultValue={pageIndex + 1}
                            onChange={(evt) => debounceHandleChange.debounce(evt, onPageChange, true)}
                            onBlur={onPageChange}
                            min={0}
                            max={pageCount}
                        ></Form.Control>
                    </span>
                    <span>&nbsp; of {pageCount}</span>
                    <Button variant="light" onClick={() => onPageNavigation(Navigate.NEXT)} disabled={!canNextPage}>{'>'}</Button>
                </div>
            </div>
        )
    }


    const renderItemCount = () => {
        return (
            <div className="record-count">
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

