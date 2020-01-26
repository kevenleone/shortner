import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, ResponsiveContainer,
} from 'recharts';

const byDevice = [
  { month: 'Jan', mobile: 40, desktop: 40 },
  { month: 'Feb', mobile: 30, desktop: 15 },
  { month: 'Mar', mobile: 20, desktop: 60 },
  { month: 'Apr', mobile: 27, desktop: 20 },
  { month: 'May', mobile: 18, desktop: 21 },
  { month: 'Jun', mobile: 23, desktop: 40 },
  { month: 'Jul', mobile: 34, desktop: 21 },
  { month: 'Aug', mobile: 34, desktop: 21 },
  { month: 'Sep', mobile: 34, desktop: 21 },
  { month: 'Oct', mobile: 34, desktop: 21 },
  { month: 'Nov', mobile: 34, desktop: 21 },
  { month: 'Dec', mobile: 34, desktop: 21 },
];

export default function SimpleBarChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        data={byDevice}
        margin={{
          top: 0, right: -15, left: -30, bottom: 0,
        }}
      >
        <XAxis dataKey="month" tick={{ fontSize: 10 }} />
        <YAxis tick={{ fontSize: 10 }} />
        <Bar dataKey="mobile" barSize={5} fill="#333" />
        <Bar dataKey="desktop" barSize={5} fill="#fff" />
      </BarChart>
    </ResponsiveContainer>
  );
}
