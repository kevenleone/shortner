import React, { useState, useEffect } from 'react';

import { When } from 'react-if';
import { useSelector, useDispatch } from 'react-redux';

export default function Add() {
  const { shortners } = useSelector((state) => state.shortner);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(true);

  const [form, setForm] = useState({ url: '', active: false, expires_in: null });

  console.log(showModal);

  function handleChange({ target: { name, value, checked } }) {
    form[name] = name === 'active' ? checked : value;
    setForm({ ...form });
  }

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
     Hi
    </div>
  );
}
