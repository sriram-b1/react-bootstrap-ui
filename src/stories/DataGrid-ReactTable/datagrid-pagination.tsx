import React from "react";
import KeyValue from "../../components/KeyValueComponent/keyvalue";
import { fetchData } from "../../utils/fetchdata";
import DataGrid from "./datagrid";


const covidRecordColumns = [
    {accessor: "dailyconfirmed", Header: "Daily Confirmed"},
    {accessor: "dailydeceased", Header: "Daily Deceased"},
    {accessor: "dailyrecovered", Header: "Daily Recovered"},
    {accessor: "date", Header: "Date"},
    {accessor: "totalconfirmed", Header: "Total Confirmed"},
    {accessor: "totaldeceased", Header: "Total Deceased"},
    {accessor: "totalrecovered", Header: "Total Recovered"},
];

type DataGridPaginationProps = {
    pagination?: boolean;
    infiniteScroll?: boolean;
}
type DataGridPaginationState = {
    covidData: any;
}


export default class DataGridPagination extends React.Component<DataGridPaginationProps, DataGridPaginationState>{
    state: DataGridPaginationState = {
        covidData: [],
    }
    componentDidMount() {
        this.getCovidData();
    }
    getCovidData = async () => {
        const data = await fetchData();
        this.setState({
            covidData: data,
        })
    }
    render() {
        return(
                    <div>
                        <DataGrid
                            data={this.state.covidData}
                            column={covidRecordColumns}
                            pagination={this.props.pagination}
                            infiniteScroll={this.props.infiniteScroll}
                            defaultColumnWidth={210}
                            tableHeight={600}
                        ></DataGrid>
                    </div>
                )
    }
}