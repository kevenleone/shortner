import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "reactstrap";
import moment from "moment";

import Section from "../../components/Layout/Section";
import Form from "../../components/Link/Form";
import { baseURL } from "../../services/api";
import Table from "../../components/Table";

const defaultDispatch = 'ADD_SHORTNER_SAGA';

export default function() {
  const { shortners } = useSelector(state => state.shortner);
  const [showModal, setShowModal] = useState(false);
  const [initialData, setInitialData] = useState({ active: true, hits_limit: 0});
  const [dispatchType, setDispatchType] = useState(defaultDispatch);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "GET_MYSHORTNERS_SAGA" });
  }, [dispatch]);

  function handleModal(show, dispatchT = defaultDispatch, data) {
    setShowModal(show);
    setInitialData(data);
    setDispatchType(dispatchT);
  }

  const actions = [
    {
      name: "Edit",
      onClick: (data) => {
        if (data.not_available_in) {
          data.not_available_in = JSON.parse(data.not_available_in);
        }
        data.expires_in = data.expires_in ? new Date(data.expires_in) : ''
        handleModal(true, 'UPD_SHORTNER_SAGA', data)
      }
    },
    {
      name: "Delete",
      onClick: ({ id }) => {
        dispatch({ type: 'DEL_SHORTNER_SAGA', payload: id })
      }
    },
    {
      name: "Share",
      onClick: () => {}
    }
  ];

  const columns = [
    {
      field: "active",
      name: "Active",
      render: active => {
        const color = active ? "green" : "red";
        return <span style={{ color, fontSize: 16 }}> &ensp; ●</span>;
      }
    },
    {
      field: "hash",
      name: "Shorten Link",
      render: name => {
        const link = `${baseURL}/r/${name}`;
        return (
          <a target="__blank" href={link}>
            {link}
          </a>
        );
      }
    },
    {
      field: "url",
      name: "Original Link",
      render: link => (
        <a target="__blank" href={link}>
          {link}
        </a>
      )
    },
    {
      field: "created_at",
      name: "Created At",
      render: date => moment(date).toISOString()
    },
    {
      field: "hits",
      name: "Hits",
      render: (hits, { hits_limit }) => `${hits} / ${hits_limit || "Unlimited"}`
    },
    {
      name: "Actions",
      actions
    }
  ];

 

  return (
    <Section title="Shortner List">
      <Button outline onClick={() => handleModal(true)}>
        Register Shortner
      </Button>
      <Form
        items={shortners}
        initialData={initialData}
        dispatchType={dispatchType}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <Table columns={columns} items={shortners} />
    </Section>
  );
}
