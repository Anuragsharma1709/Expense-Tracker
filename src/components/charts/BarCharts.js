import React from 'react'
import { useSelector } from 'react-redux';
import './chart.css'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    PieChart,
    Pie,

} from "recharts";
import { useState } from 'react';


const BarCharts = () => {
    const list = useSelector((state) => state.expenseReducer.expenseList)
    const data1 = list.map((e) => {
        const data = {
            name: e.type,
            money: e.amount,

        }
        return data
    })

    return (
        <div>
            <BarChart
                width={400}
                height={300}
                data={data1}
                margin={{
                    top: 15,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid />
                <XAxis dataKey="name" strokeDasharray="2 2" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="money" fill={"red"} />
                {/* <Bar dataKey="money" fill="red" /> */}
            </BarChart>
        </div>
    )
}

export default BarCharts
