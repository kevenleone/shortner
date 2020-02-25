import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'reactstrap';
import moment from 'moment';

import Section from '../../components/Layout/Section';
import Form from '../../components/Link/Form';
import { baseURL } from '../../services/api';
import Table from '../../components/Table';

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

export default function () {
  const { shortners } = useSelector((state) => state.shortner);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'GET_MYSHORTNERS_SAGA' });
  }, [dispatch]);

  return (
    <Section title="Shortner List">
      <Button
        outline
        onClick={() => setShowModal(true)}
      >
          Register Shortner
      </Button>
      <Form
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