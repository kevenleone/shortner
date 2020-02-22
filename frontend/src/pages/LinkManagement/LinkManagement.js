import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { baseURL } from '../../services/api';
import Add from '../../components/Link/Add';
import Table from '../../components/Table';
import Section from '../../components/Layout/Section';

export default function () {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const { shortners } = useSelector((state) => state.shortner);

  useEffect(() => {
    dispatch({ type: 'GET_MYSHORTNERS_SAGA' });
  }, [dispatch]);

  const actions = [
    {
      name: 'Delete',
      onClick: () => {},
    },
    {
      name: 'Edit',
      onClick: () => {},
    },
    {
      name: 'Share',
      onClick: () => {},
    },
  ];
  const columns = [
    {
      field: 'active',
      name: 'Active',
      render: (active) => {
        const color = active ? 'green' : 'red';
        return <span style={{ color, fontSize: 16 }}> &ensp; ●</span>;
      },
    },
    {
      field: 'hash',
      name: 'Shorten Link',
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
    <Section title="Shortner List">
      <Button
        outline
        onClick={() => setShowModal(true)}
      >
          Register Shortner
      </Button>
      <Add
        items={shortners}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <Table
        columns={columns}
        items={shortners}
      />
    </Section>

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
