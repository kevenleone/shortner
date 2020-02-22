import { LineChart, BarChart } from 'recharts';
import {
  MainChart, LineTooltip, BarTooltip, Text,
} from '../components/Charts';
import { constants } from '../utils';

const {
  AVERAGE_MERGE, AVERAGE_ISSUE, AVERAGE_PULL, MONTH_SUMARY,
} = constants;
/**
 * File with Charts config, for dynamic rendering
 * key: The name of key inside dashboard (on redux state, check the file redux/reducers/github.js)
 * title: The name of Card Item
 * cols: Bootstrap cols options
 * render: {
 * props -> data sent throw the component,
 * Component -> The component that will receive the props and render
 * }
 */

export default [
  {
    key: 'average_merge',
    title: AVERAGE_MERGE,
    cols: {
      xs: 12,
    },
    render: {
      Component: MainChart,
      props: {
        legend: false,
        Chart: BarChart,
        height: 400,
        cartesianProps: {
          vertical: false,
        },
        customTooltip: {
          Component: BarTooltip,
          props: {
            transformValue: (key, value) => (key.includes('Time') ? `${value}h` : value),
          },
        },
        bars: ['Average Time'],
        xAxis: {
          data: 'name',
          props: {},
        },
        yAxis: {
          data: 'Average Time',
          props: {
            unit: 'h',
          },
        },
      },
    },
  },
  {
    key: 'average_pull',
    title: AVERAGE_PULL,
    cols: {
      xs: 12,
      xl: 6,
    },
    render: {
      Component: Text,
      props: {},
    },
  },
  {
    key: 'average_issue',
    title: AVERAGE_ISSUE,
    cols: {
      xs: 12,
      xl: 6,
    },
    render: {
      Component: Text,
      props: {},
    },
  },
  {
    key: 'month_summary',
    title: MONTH_SUMARY,
    render: {
      Component: MainChart,
      props: {
        Chart: LineChart,
        height: 400,
        customTooltip: {
          Component: LineTooltip,
          props: {
            title: 'Pull Requests',
          },
        },
        lines: ['Merged', 'Opened', 'Closed'],
        colors: ['#B20BFF', '#FF3A00', '#13C600'],
        xAxis: {
          data: 'date',
          props: {
            interval: 2.5,
            padding: { right: 20 },
          },
        },
        yAxis: {
          data: '',
        },
      },
    },
  },
];
