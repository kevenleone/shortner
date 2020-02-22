import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from '../../Modal';

export default function Add() {
  const { shortners } = useSelector((state) => state.shortner);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(true);

  const [form, setForm] = useState({ url: '', active: false, expires_in: null });

  useEffect(() => {
    if (showModal) {
      // setShowModal(false);
    }
  }, [shortners]);

  function handleSubmit() {
    if (form.url) {
      // dispatch({
      //   type: 'ADD_SHORTNER_SAGA',
      //   payload: form,
      // });
    }
  }

  return (
    <div>
      <Modal />
    </div>
  );
}
