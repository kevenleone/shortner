import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Row } from 'reactstrap';
import { Form } from '@unform/web';
import { Input } from '../../Form';

import './In.scss';

export default function SignIn() {
  const { softLoading } = useSelector((state) => state.base);
  const dispatch = useDispatch();

  function openSignUpPage() {
    dispatch({ type: 'SET_PAGETYPE_SAGA', payload: { pageType: 'SignUp' } });
  }

  function handleSubmit(payload) {
    dispatch({ type: 'SIGNIN_SAGA', payload });
  }

  return (
    <div className="SignIn">
      <h1>Log into your Account</h1>

      <hr />

      <Form onSubmit={handleSubmit}>
        <Input label="Email Address" name="email" />
        <Input label="Password" name="password" type="password" />

        <Button
          outline
          color="info"
          type="button"
          onClick={openSignUpPage}
        >
          Not Registered ? Sign up now
        </Button>

        <hr />

        <Button
          type="submit"
          color="primary"
        >
          Sign In
        </Button>
      </Form>
    </div>
  );
}
