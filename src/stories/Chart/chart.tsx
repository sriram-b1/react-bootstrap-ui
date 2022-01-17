import React from "react";
import { AreaChart, Area, ReferenceLine, Tooltip, XAxis } from "recharts";
import { data } from "./chart.data";

const CustomTooltip = (data:any) => {return (
    <div style={{backgroundColor: "white"}}>
        <p>{`${JSON.stringify(data.payload[0] && data.payload[0]['payload']['time'])} - ${JSON.stringify(data.payload[0] && data.payload[0]['value'] - 1)}`}</p>
    </div>
)}

export default class Chart extends React.PureComponent {
    render(): React.ReactNode {
        return (
            <AreaChart
                width={300}
                height={60}
                data={data}
                margin={{
                    top: 20, right: 20, bottom: 20, left: 20,
                }}
            >
                <Area dataKey="CPU" baseLine={0} stroke="#5DA3FA" fill="#5DA3FACC" />
                <ReferenceLine y={1} stroke="white" />
                <Tooltip/>
                <XAxis hide dataKey="name" />
            </AreaChart>
        )
    }
}