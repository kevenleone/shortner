import React from 'react';
import {
  EuiInMemoryTable,
  EuiLink,
  EuiHealth,
} from '@elastic/eui';
import moment from 'moment';
import { createDataStore } from './store';

const store = createDataStore();


export default function () {
  const actions = [
    {
      name: 'Delete',
      description: 'Delete this user',
      icon: 'trash',
      color: 'danger',
      type: 'icon',
      onClick: () => {},
      'data-test-subj': 'action-delete',
    },
    {
      name: 'Edit',
      description: 'Edit this user',
      icon: 'pencil',
      type: 'icon',
      onClick: () => {},
      'data-test-subj': 'action-edit',
    },
    {
      name: 'Share',
      description: 'Share this user',
      icon: 'share',
      type: 'icon',
      onClick: () => {},
      'data-test-subj': 'action-share',
    },
  ];
  const columns = [
    {
      field: 'firstName',
      name: 'Shorten Link',
      sortable: true,
      render: (name) => (
        <EuiLink href="#" target="_blank">
          {name}
        </EuiLink>
      ),
    },
    {
      field: 'lastName',
      name: 'Original Link',
      truncateText: true,
      sortable: true,
      render: (name) => (
        <EuiLink href="#" target="_blank">
          {name}
        </EuiLink>
      ),
    },
    {
      field: 'github',
      name: 'Hits',
    },
    {
      field: 'dateOfBirth',
      name: 'Created At',
      dataType: 'date',
      render: (date) => moment(date).toISOString(),
    },
    {
      field: 'nationality',
      name: 'Most accessed in',
      sortable: true,
      render: (countryCode) => {
        const country = store.getCountry(countryCode);
        return `${country.flag} ${country.name}`;
      },
    },
    {
      field: 'online',
      name: 'Online',
      dataType: 'boolean',
      render: (online) => {
        const color = online ? 'success' : 'danger';
        const label = online ? 'Online' : 'Offline';
        return <EuiHealth color={color}>{label}</EuiHealth>;
      },
    },
    {
      name: 'Actions',
      actions,
    },
  ];

  const items = store.users.filter((user, index) => index < 10);

  const getRowProps = (item) => {
    const { id } = item;
    return {
      'data-test-subj': `row-${id}`,
      className: 'customRowClass',
      onClick: () => console.log(`Clicked row ${id}`),
    };
  };

  const getCellProps = (item, column) => {
    const { id } = item;
    const { field } = column;
    return {
      className: 'customCellClass',
      'data-test-subj': `cell-${id}-${field}`,
      textOnly: true,
    };
  };

  return (
    <EuiInMemoryTable
      items={items}
      columns={columns}
      rowProps={getRowProps}
      cellProps={getCellProps}
      sorting
      hasActions={actions}
    />
  );
}
