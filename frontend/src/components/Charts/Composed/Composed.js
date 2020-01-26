import React from 'react';
import {
  Area, ComposedChart, Line, XAxis, YAxis, ResponsiveContainer,
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
function SimpleComposedChart() {
  return (
    <ResponsiveContainer width="100%" minWidth={500} height={350}>
      <ComposedChart
        margin={{
          top: 0, right: -15, left: -15, bottom: 0,
        }}
        data={sales}
      >
        <YAxis ticks={[0, 2500, 5000, 9800]} tick={{ fontSize: 12 }} tickLine={false} />
        <XAxis dataKey="month" tick={{ fontSize: 12 }} tickLine={false} />
        <Area
          type="natural"
          dataKey="area"
          fill="#fff"
          strokeWidth={0}
          activeDot={false}
        />
        <Line type="monotone" dataKey="sales" stroke="#333" strokeWidth={2} />
        <Line
          type="monotone"
          dataKey="orders"
          stroke="#fff"
          strokeWidth={2}
          dot={{
            stroke: '#333',
            strokeWidth: 2,
            fill: '#999',
          }}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}

export default SimpleComposedChart;
