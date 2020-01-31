import React, { useEffect } from 'react';
import {
  EuiInMemoryTable,
  EuiLink,
  EuiHealth,
} from '@elastic/eui';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { baseURL } from '../../services/api';
import Add from '../../components/Link/Add';

export default function () {
  const dispatch = useDispatch();
  const { shortners } = useSelector((state) => state.shortner);

  function getAllShortners() {
  }

  useEffect(() => {
    dispatch({ type: 'GET_MYSHORTNERS_SAGA' });
    getAllShortners();
  }, []);

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
      field: 'hash_link',
      name: 'Shorten Link',
      sortable: true,
      render: (name) => {
        const link = `${baseURL}/r/${name}`;
        return (
          <EuiLink href={link} target="_blank">
            {link}
          </EuiLink>
        );
      },
    },
    {
      field: 'original_link',
      name: 'Original Link',
      truncateText: true,
      sortable: true,
      render: (name) => (
        <EuiLink href={name} target="_blank">
          {name}
        </EuiLink>
      ),
    },
    {
      field: 'hits',
      name: 'Hits',
      sortable: true,
      dataType: 'number',
    },
    {
      field: 'created_at',
      name: 'Created At',
      dataType: 'date',
      render: (date) => moment(date).toISOString(),
    },

    {
      field: 'active',
      name: 'Active',
      dataType: 'boolean',
      render: (active) => {
        const color = active ? 'success' : 'danger';
        const label = active ? 'Online' : 'Offline';
        return <EuiHealth color={color}>{label}</EuiHealth>;
      },
    },
    {
      name: 'Actions',
      actions,
    },
  ];

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
    <>
      <Add />
      <EuiInMemoryTable
        items={shortners}
        columns={columns}
        rowProps={getRowProps}
        cellProps={getCellProps}
        sorting
        hasActions={actions}
      />
    </>
  );
}

// {
//   field: 'nationality',
//   name: 'Most accessed in',
//   sortable: true,
//   render: (countryCode) => {
//     const country = store.getCountry(countryCode);
//     return `${country.flag} ${country.name}`;
//   },
// },
