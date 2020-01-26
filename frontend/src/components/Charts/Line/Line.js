import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
} from 'recharts';

export const sales = [
  {
    month: 'Jan', orders: 4000, sales: 2400, area: 4000,
  },
  {
    month: 'Feb', orders: 3000, sales: 1398, area: 1500,
  },
  {
    month: 'Mar', orders: 2000, sales: 9800, area: 6000,
  },
  {
    month: 'Apr', orders: 2780, sales: 3908, area: 2000,
  },
  {
    month: 'May', orders: 1890, sales: 4800, area: 2181,
  },
  {
    month: 'Jun', orders: 2390, sales: 3800, area: 4000,
  },
  {
    month: 'Jul', orders: 3490, sales: 4300, area: 2100,
  },
  {
    month: 'Aug', orders: 3490, sales: 4300, area: 2100,
  },
  {
    month: 'Sep', orders: 3490, sales: 4300, area: 2100,
  },
  {
    month: 'Oct', orders: 3490, sales: 4300, area: 2100,
  },
  {
    month: 'Nov', orders: 3490, sales: 4300, area: 2100,
  },
  {
    month: 'Dec', orders: 3490, sales: 4300, area: 2100,
  },
];

function SimpleLineChart() {
  return (
    <ResponsiveContainer width="100%" minWidth={500} height={350}>
      <LineChart
        width={600}
        height={300}
        data={sales}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <XAxis dataKey="month" />
        <YAxis />

        <Tooltip />

        <Line
          type="monotone"
          dataKey="orders"
          stroke="#333"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="sales" stroke="#fff" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default SimpleLineChart;
