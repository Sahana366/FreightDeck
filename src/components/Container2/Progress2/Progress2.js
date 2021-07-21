import React from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";

function Progress2() {
  const barColors = ["#999999", "#FFB919", "#A250FF", "#2D37C8", "#19B9FF", "#CF4E4E"];
  const data = [
    {
      name: "Total",
      start: 0,
      end: 182,
    },
    {
      name: "Delayed",
      start: 0,
      end: 2,
    },
    {
      name: "On Time",
      start: 2,
      end: 125,
    },
    {
      name: "Too Early",
      start: 127,
      end: 1,
    },
    {
      name: "Parking Lot",
      start: 128,
      end: 26,
    },
    {
      name: "In Plant",
      start: 154,
      end: 28,
    },
  ];
  return (
    <div className="Truck-Card">
      <BarChart
        width={400}
        height={250}
        data={data}
        layout={"vertical"}
        background={"#eee"}
        barGap={3}
        barCategoryGap={7}
        margin={{
          top: 30,
          right: 30,
          left: 20,
          bottom: 30,
        }}
      >
        <CartesianGrid strokeDasharray="0 2"/>
        <XAxis hide type="number" />
        <YAxis
          yAxisId="left"
          axisLine={false}
          tickLine={false}
          orientation="left"
          stroke="gray"
          dataKey="name"
          fontSize={11}
          fontWeight={"bold"}
          align={"left"}
          type="category"
        />
        <YAxis
          yAxisId="right"
          axisLine={false}
          tickLine={false}
          orientation="right"
          stroke="#0f0f0f"
          dataKey="end"
          fontSize={11}
          fontWeight={"bold"}
          align={"left"}
          type="category"
        />

        <Bar yAxisId="left" stackId="a" dataKey="start" fill="#ffffff00" />
        <Bar yAxisId="left" stackId="a" dataKey="end" fill="#82ca9d">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={barColors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
}

export default Progress2;
