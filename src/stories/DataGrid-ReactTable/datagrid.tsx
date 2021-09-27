import React, { useEffect, useRef, useState } from "react";
import { useTable, useSortBy, useExpanded, usePagination, useBlockLayout } from 'react-table'
import Button from 'react-bootstrap/Button'
import { Dropdown, DropdownButton, Form, Spinner } from "react-bootstrap";

import '../../wrapper-styles/index.scss';
import './datagrid-customstyles.scss';

import sortDesc from '../../assets/images/arrow-down.png';
import sortAsc from '../../assets/images/arrow-up.png';
import columnPicker from '../../assets/images/column-picker.png';
import expansion from '../../assets/images/chevron-right.png';
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
    tableType?: "csg" | "isg" | "compact";
    defaultColumnWidth?: number;
    tableHeight?: number;
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
    enum TABLE_TYPES {
        CSG = "csg",
        ISG = "isg",
        COMPACT = "compact",
    }
    enum TABLE_ROW_HEIGHT {
        CSG = 48,
        ISG = 40,
        COMPACT = 32,
    }
    enum TABLE_HEADER_HEIGHT {
        CSG = 56,
        ISG = 48,
        COMPACT = 40,
    }
    const data: any = props.data;
    const columns: any = props.column;

    const defaultColumn = React.useMemo(
        () => ({
            width: props.defaultColumnWidth?props.defaultColumnWidth:200,
        }),
        []
    )

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
        defaultColumn,
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
        // Intentionally setting timeout to indicate the data change
        setTimeout(() => setLoading(false), 10);
    }

    const onPageNavigation = async (type: Navigate) => {
        setLoading(true);
        if (type === Navigate.PREVIOUS) {
            await previousPage();
        } else if (type === Navigate.NEXT) {
            await nextPage();
        }
        pageRef.current!.value = pageIndex + 1;
        // Intentionally setting timeout to indicate the data change
        setTimeout(() => setLoading(false), 10);
    }

    // Render functions
    const renderTable = () => {
        return (
            <table {...getTableProps()} style={props.infiniteScroll ? { width: totalColumnsWidth } : null}>
                <thead>
                    {headerGroups.map((headerGroup: any) => (
                        <tr
                            {...headerGroup.getHeaderGroupProps()}
                            className={props.tableType === TABLE_TYPES.CSG ? 'csg-header' : props.tableType === TABLE_TYPES.ISG ? 'isg-header' : props.tableType === TABLE_TYPES.COMPACT ? 'compact-header' : 'csg-header'}
                        >
                            {props.expandable?<th></th>:null}
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
                                height={props.tableHeight?props.tableHeight: 550}
                                itemCount={rows.length}
                                itemSize={props.tableType === TABLE_TYPES.CSG ? TABLE_ROW_HEIGHT.CSG : props.tableType === TABLE_TYPES.ISG ? TABLE_ROW_HEIGHT.ISG : props.tableType === TABLE_TYPES.COMPACT ? TABLE_ROW_HEIGHT.COMPACT : TABLE_ROW_HEIGHT.CSG}
                                width={totalColumnsWidth + scrollBarSize}
                            >
                                {renderVirtualRow}
                            </FixedSizeList>
                        )
                        : renderRow.map((row: any) => {
                            prepareRow(row)
                            return (
                                <React.Fragment>
                                    <tr {...row.getRowProps()}
                                        className={props.tableType === TABLE_TYPES.ISG ? 'isg-row' : props.tableType === TABLE_TYPES.CSG ? 'csg-row' : props.tableType === TABLE_TYPES.COMPACT ? 'compact-row' : 'csg-row'} >
                                        {props.expandable?<td className="expansion-column" {...row.getRowProps(row.getToggleRowExpandedProps())}>{<div className={row.isExpanded?"expansion-icon expanded":"expansion-icon"}><img src={expansion} alt="expansion icon"/></div>}</td>: null}
                                        {row.cells.map((cell: any) => {
                                            return (
                                                <td {...cell.getCellProps()}>
                                                    {cell.render('Cell')}
                                                </td>
                                            )
                                        })}
                                    </tr>
                                    {row.isExpanded ? <tr className="expanded-row"><td colSpan={allColumns.length + 1}>{props.expandComponent}</td></tr> : ""}
                                </React.Fragment>
                            )
                        })}
                    {isLoading ? <div className="spinner">
                        <Spinner animation="border" variant="primary" />
                    </div> : null}
                </tbody>
                <tfoot>
                    <tr className="footer-row"><td colSpan={props.expandable?allColumns.length+1:allColumns.length}>{renderFooter()}</td></tr>
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
                    )}
                >
                    <tr
                        className={props.tableType === TABLE_TYPES.ISG ? 'isg-row' : props.tableType === TABLE_TYPES.CSG ? 'csg-row' : props.tableType === TABLE_TYPES.COMPACT ? 'compact-row' : 'csg-row'}
                    >
                        {props.expandable?<td className="expansion-column" {...row.getRowProps(row.getToggleRowExpandedProps())}>{<div className={row.isExpanded?"expansion-icon expanded":"expansion-icon"}><img src={expansion} alt="expansion icon"/></div>}</td>: null}
                        {row.cells.map((cell: any) => {
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
                        {data.length>100?<Dropdown.Item onClick={() => setPageSize(100)}>100</Dropdown.Item>:null}
                        {data.length>1000?<Dropdown.Item onClick={() => setPageSize(1000)}>1000</Dropdown.Item>:null}
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
                        <Form.Label className="row-select-title">Select Columns</Form.Label>
                        {allColumns.map((column: any) => (
                            <div key={column.id}>
                                <Form.Check type="checkbox" {...column.getToggleHiddenProps()} label={column.id} />{' '}
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

