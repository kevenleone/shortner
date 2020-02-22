import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { baseURL } from '../../services/api';
import Add from '../../components/Link/Add';
import Table from '../../components/Table';
import Section from '../../components/Layout/Section';

export default function () {
  const dispatch = useDispatch();
  const { shortners } = useSelector((state) => state.shortner);

  useEffect(() => {
    dispatch({ type: 'GET_MYSHORTNERS_SAGA' });
  }, []);

  const actions = [
    {
      name: 'Delete',
      description: 'Delete this user',
      icon: 'trash',
      color: 'danger',
      type: 'icon',
      onClick: () => {},
    },
    {
      name: 'Edit',
      description: 'Edit this user',
      icon: 'pencil',
      type: 'icon',
      onClick: () => {},
    },
    {
      name: 'Share',
      description: 'Share this user',
      icon: 'share',
      type: 'icon',
      onClick: () => {},
    },
  ];
  const columns = [
    {
      field: 'active',
      name: 'Active',
      dataType: 'boolean',
      render: (active) => {
        const color = active ? 'green' : 'red';
        return <span style={{ color, fontSize: 16 }}> &ensp; ●</span>;
      },
    },
    {
      field: 'hash',
      name: 'Shorten Link',
      sortable: true,
      render: (name) => {
        const link = `${baseURL}/r/${name}`;
        return <a target="__blank" href={link}>{link}</a>;
      },
    },
    {
      field: 'url',
      name: 'Original Link',
      render: (link) => <a target="__blank" href={link}>{link}</a>,
    },
    {
      field: 'created_at',
      name: 'Created At',
      dataType: 'date',
      render: (date) => moment(date).toISOString(),
    },
    {
      field: 'hits',
      name: 'Hits',
      render: (hits, { hits_limit }) => `${hits} / ${hits_limit || 'Unlimited'}`,
    },
    {
      name: 'Actions',
      actions,
    },
  ];


  return (
    <>
      <Section title="Link Management">
        <Add />
        <Table
          columns={columns}
          items={shortners}
        />
      </Section>
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
