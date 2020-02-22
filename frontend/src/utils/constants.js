
export default {
  AVERAGE_MERGE: 'Average Merge Time by Pull Request Size',
  AVERAGE_PULL: 'Average Pull Request Merge Time',
  AVERAGE_ISSUE: 'Average Issue Close Time',
  MONTH_SUMARY: 'Month Summary',
  dashboard: {
    average_merge: {
      data: [
        { name: 'Small', 'Average Time': 0, 'Pull Requests': 0 },
        { name: 'Medium', 'Average Time': 0, 'Pull Requests': 0 },
        { name: 'Large', 'Average Time': 0, 'Pull Requests': 0 },
      ],
    },
    average_pull: {
      data: '',
    },
    average_issue: {
      data: '',
    },
    month_summary: {
      data: {
        issues: {
          total: 0,
          data: [],
        },
        pull_requests: {
          total: 0,
          data: [],
        },
      },
    },
  },
  chart: {
    colors: ['#4B9BFF', '#0BB5FF', '#6CA6CD', '#36648B'],
  },
};
